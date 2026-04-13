"use client";

import { useState } from "react";

export default function DemoPage() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  function generateSummary() {
    if (!notes.trim()) {
      setSummary("Please paste your notes first.");
      return;
    }

    const shortPreview = notes
      .split(". ")
      .slice(0, 3)
      .join(". ")
      .trim();

    setSummary(
      shortPreview
        ? shortPreview + "."
        : "Your summary will appear here after processing your notes."
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
            ReviseAI Demo
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Turn notes into a quick summary
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Paste your class notes below and generate a simple summary. This is
            the first step toward the full ReviseAI study workflow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <label className="mb-3 block text-sm text-slate-300">
              Paste your notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Example: Photosynthesis is the process by which plants convert light energy into chemical energy..."
              className="h-80 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={generateSummary}
              className="mt-4 rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Generate Summary
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <label className="mb-3 block text-sm text-slate-300">
              Summary result
            </label>
            <div className="flex h-80 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm leading-7 text-slate-200">
              {summary || "Your summary will appear here."}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}