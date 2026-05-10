# ReviseAI

Premium landing page + waitlist flow built with Next.js App Router.

## Waitlist System (Resend + Next.js API Route)

When users submit the **Join Waitlist** form, the app:

1. Validates the email format.
2. Applies anti-spam checks (rate limit, honeypot, minimum fill time).
3. Prevents duplicate emails.
4. Stores signups in `data/waitlist.json` for future expansion.
5. Sends an instant notification email to your inbox using Resend.

### Files involved

- `components/waitlist-form.tsx` – premium animated frontend form.
- `app/api/waitlist/route.ts` – secure backend API route.
- `lib/waitlist-store.ts` – local JSON storage + duplicate prevention.

## Environment setup

1. Copy example vars:

   ```bash
   cp .env.example .env.local
   ```

2. In `.env.local`, set:

   - `RESEND_API_KEY`: your real Resend API key.
   - `WAITLIST_FROM_EMAIL`: verified sender in Resend.
   - `WAITLIST_NOTIFY_EMAIL`: inbox to receive signup notifications.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and submit the waitlist form.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. In **Project Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `WAITLIST_FROM_EMAIL`
   - `WAITLIST_NOTIFY_EMAIL`
4. Deploy.

After deployment, the same API route (`/api/waitlist`) runs server-side in production.

## Production notes

- Keep `RESEND_API_KEY` server-only (never expose in client code).
- Ensure `WAITLIST_FROM_EMAIL` is verified in Resend; otherwise send attempts fail.
- Data persists in `data/waitlist.json` for the running instance. For durable multi-instance storage, migrate to a database later (e.g., Postgres).
