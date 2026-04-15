"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus(data.message ?? "Thanks! We received your message.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Unable to submit right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Get in touch</h1>
      <p className="mt-4 text-slate-300">Have feedback, partnership ideas, or support questions? Send us a message.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-slate-200">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:opacity-60"
        >
          {isLoading ? "Sending..." : "Send message"}
        </button>

        {status ? <p className="text-sm text-slate-300">{status}</p> : null}
      </form>
    </main>
  );
}
