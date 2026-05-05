import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist-store";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 4;
const rateLimitMap = new Map<string, number[]>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail({
  subject,
  html,
  to,
}: {
  subject: string;
  html: string;
  to: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.WAITLIST_FROM_EMAIL;

  if (!resendKey || !fromEmail) {
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Resend email failed", text);
  }
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

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for") ?? "unknown";
    const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const createdAt = new Date().toISOString();
    const result = await addToWaitlist({ email, createdAt });

    if (!result.added) {
      return NextResponse.json(
        { error: "You already joined the waitlist with this email." },
        { status: 409 },
      );
    }

    const notifyAddress = process.env.WAITLIST_NOTIFY_EMAIL;

    if (notifyAddress) {
      await sendEmail({
        to: notifyAddress,
        subject: "New ReviseAI waitlist signup",
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Time:</strong> ${createdAt}</p>`,
      });
    }

    await sendEmail({
      to: email,
      subject: "You joined ReviseAI waitlist 🚀",
      html: "<p>You're in 🚀 Thanks for joining the ReviseAI waitlist.</p>",
    });

    return NextResponse.json({ success: true, message: "You're in 🚀" });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
