"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Unable to join waitlist.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You're in 🚀");
      setEmail("");
      window.setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <div className="group relative flex-1">
        <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-violet-500/40 opacity-0 blur transition duration-300 group-focus-within:opacity-100" />
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="relative h-12 w-full rounded-2xl border border-white/15 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-300/70"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="glow-button h-12 min-w-40 rounded-2xl px-6 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "loading" ? "Joining..." : status === "success" ? "✓ Joined" : "Join Waitlist"}
      </button>
      {message ? (
        <p
          className={`w-full text-sm ${status === "error" ? "text-rose-300" : "text-cyan-200"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
