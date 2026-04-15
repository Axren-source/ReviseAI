"use client";

import { useMemo, useState } from "react";
import type { Flashcard, QuizQuestion } from "@/lib/mock-study";

type StudyResponse = {
  summary: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
};

type Tab = "summary" | "quiz" | "flashcards";

const demoSeed = `Photosynthesis is the process plants use to convert light energy into chemical energy. Chlorophyll absorbs sunlight, mainly in the chloroplasts. The light-dependent reactions produce ATP and NADPH, while the Calvin cycle uses carbon dioxide to create glucose. This process supports plant growth and releases oxygen as a byproduct.`;

async function generate(notes: string): Promise<StudyResponse> {
  const response = await fetch("/api/study", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ notes }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate study pack");
  }

  return response.json();
}

export default function DemoPage() {
  const [notes, setNotes] = useState(demoSeed);
  const [data, setData] = useState<StudyResponse | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("summary");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  async function handleGenerate() {
    setIsLoading(true);
    setError("");

    try {
      const payload = await generate(notes);
      setData(payload);
    } catch {
      setError("Could not generate your study pack. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const keyPointList = useMemo(() => data?.keyPoints ?? [], [data]);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:px-14">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.22em] text-blue-200">ReviseAI Demo</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Build your AI study pack instantly
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Paste notes to generate a summary, quiz, and flashcards. This demo uses mock backend logic designed to be replaced with a real AI provider later.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <label htmlFor="notes" className="mb-3 block text-sm font-medium text-slate-200">
            Paste your notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="h-80 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="rounded-2xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate Summary
            </button>
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="rounded-2xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate Quiz
            </button>
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="rounded-2xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate Flashcards
            </button>
          </div>

          {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {(["summary", "quiz", "flashcards"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-3 py-2 text-sm font-medium capitalize transition ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {!data && !isLoading ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-400">
              Generate your first study pack to view results.
            </div>
          ) : null}

          {isLoading ? <p className="text-sm text-slate-400">Generating your study pack...</p> : null}

          {data && activeTab === "summary" ? (
            <div className="space-y-4">
              <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Summary</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{data.summary}</p>
              </article>

              <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Key points</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {keyPointList.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}

          {data && activeTab === "quiz" ? (
            <div className="space-y-4">
              {data.quiz.map((question) => (
                <article key={question.question} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm font-medium text-white">{question.question}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {question.options.map((option) => (
                      <p
                        key={option}
                        className={`rounded-xl border px-3 py-2 text-sm ${
                          option === question.answer
                            ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                            : "border-slate-800 bg-slate-900 text-slate-300"
                        }`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {data && activeTab === "flashcards" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {data.flashcards.map((card, index) => {
                const isFlipped = flipped[index];

                return (
                  <button
                    key={card.front}
                    onClick={() =>
                      setFlipped((current) => ({
                        ...current,
                        [index]: !current[index],
                      }))
                    }
                    className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-left"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {isFlipped ? "Back" : "Front"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      {isFlipped ? card.back : card.front}
                    </p>
                    <p className="mt-4 text-xs text-blue-200/90">Tap to flip</p>
                  </button>
                );
              })}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
