import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist-store";
import { Resend } from "@/lib/resend-client";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 4;
const MIN_FORM_FILL_TIME_MS = 1_200;
const WAITLIST_SOURCE = "ReviseAI Website";
const rateLimitMap = new Map<string, number[]>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const previous = rateLimitMap.get(ip) ?? [];
  const recent = previous.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

async function sendAdminNotification({ email, createdAt }: { email: string; createdAt: string }) {
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.WAITLIST_FROM_EMAIL;
  const notifyAddress = process.env.WAITLIST_NOTIFY_EMAIL;

  if (!resendKey || !fromEmail || !notifyAddress) {
    console.warn("[waitlist] missing Resend env vars; skipping email notification");
    return;
  }

  const resend = new Resend(resendKey);

  await resend.emails.send({
    from: fromEmail,
    to: [notifyAddress],
    subject: "New ReviseAI Waitlist Signup",
    html: `
      <h2>New waitlist signup</h2>
      <p><strong>User email:</strong> ${email}</p>
      <p><strong>Submission timestamp:</strong> ${createdAt}</p>
      <p><strong>Source:</strong> ${WAITLIST_SOURCE}</p>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for") ?? "unknown";
    const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      console.info(`[waitlist] rate limited ip=${ip}`);
      return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
    }

    const body = (await request.json()) as { email?: string; website?: string; startedAt?: number };
    const email = body.email?.trim().toLowerCase();

    if (body.website) {
      console.warn(`[waitlist] honeypot triggered ip=${ip}`);
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    if (!body.startedAt || Date.now() - body.startedAt < MIN_FORM_FILL_TIME_MS) {
      console.warn(`[waitlist] submit too fast ip=${ip}`);
      return NextResponse.json({ error: "Please submit the form again." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      console.warn(`[waitlist] invalid email payload ip=${ip}`);
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const createdAt = new Date().toISOString();
    const result = await addToWaitlist({ email, createdAt });

    if (!result.added) {
      console.info(`[waitlist] duplicate signup email=${email}`);
      return NextResponse.json({ error: "You already joined the waitlist with this email." }, { status: 409 });
    }

    await sendAdminNotification({ email, createdAt });
    console.info(`[waitlist] signup stored + emailed email=${email} at=${createdAt}`);

    return NextResponse.json({ success: true, message: "You’re officially on the ReviseAI early access list." });
  } catch (error) {
    console.error("[waitlist] submission failed", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
