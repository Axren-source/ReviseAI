"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Loader2, CheckCircle2 } from "lucide-react";
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

const tabVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
  hidden: { opacity: 0, y: 20 },
};

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
    <main className="relative min-h-screen overflow-hidden">
      <div className="hero-light" />
      <div className="hero-grid" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur mb-6">
            <Wand2 size={16} className="text-cyan-300" />
            <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
              Interactive demo
            </span>
          </div>
          <h1 className="text-5xl font-semibold text-white md:text-6xl">
            Watch ReviseAI transform your notes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Paste any class notes below. In seconds, ReviseAI generates a clean summary, 
            quiz questions, key points, and flashcards—all powered by AI.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Input Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Paste your notes</h2>
            <p className="mb-6 text-sm text-slate-400">
              Try the sample text, or paste your own class notes, lecture transcripts, or study materials.
            </p>

            <motion.textarea
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Paste your notes here..."
              className="premium-input mb-6 h-64 w-full rounded-2xl px-4 py-3 text-sm text-white resize-none"
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-3"
            >
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="glow-button w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all disabled:opacity-60"
              >
                {isLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 size={18} />
                    </motion.span>
                    Generating...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Wand2 size={18} />
                    Generate Study Pack
                  </span>
                )}
              </button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
                >
                  {error}
                </motion.div>
              )}

              {data && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                >
                  <CheckCircle2 size={18} />
                  Study pack ready!
                </motion.div>
              )}
            </motion.div>
          </motion.section>

          {/* Results Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            {/* Tab Navigation */}
            {data && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex gap-2"
              >
                {(["summary", "quiz", "flashcards"] as Tab[]).map((tab, idx) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "glow-button text-white"
                        : "glass-button text-slate-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    custom={idx}
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Content Area */}
            <div className="min-h-96">
              <AnimatePresence mode="wait">
                {!data && !isLoading ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="text-4xl">✨</div>
                    </div>
                    <p className="text-sm text-slate-400">
                      Generate your first study pack to see magic happen here.
                    </p>
                  </motion.div>
                ) : isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-4"
                    >
                      <Loader2 size={32} className="text-cyan-400 animate-spin" />
                    </motion.div>
                    <p className="text-sm text-slate-400">Processing your notes...</p>
                  </motion.div>
                ) : data && activeTab === "summary" ? (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="glass-card rounded-2xl p-5"
                    >
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        📝 Summary
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-100">{data.summary}</p>
                    </motion.article>

                    <motion.article
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="glass-card rounded-2xl p-5"
                    >
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        ⭐ Key Points
                      </h3>
                      <ul className="space-y-2">
                        {keyPointList.map((point, idx) => (
                          <motion.li
                            key={point}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                            className="text-sm text-slate-200 flex items-start gap-2"
                          >
                            <span className="text-emerald-400 flex-shrink-0 mt-1">•</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.article>
                  </motion.div>
                ) : data && activeTab === "quiz" ? (
                  <motion.div
                    key="quiz"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {data.quiz.map((question, qIdx) => (
                      <motion.article
                        key={question.question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qIdx * 0.1 }}
                        className="glass-card rounded-2xl p-5"
                      >
                        <p className="mb-4 text-sm font-semibold text-white">{question.question}</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {question.options.map((option) => (
                            <motion.div
                              key={option}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                                option === question.answer
                                  ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-100"
                                  : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-600"
                              }`}
                            >
                              {option}
                            </motion.div>
                          ))}
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                ) : data && activeTab === "flashcards" ? (
                  <motion.div
                    key="flashcards"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    {data.flashcards.map((card, index) => {
                      const isFlipped = flipped[index];
                      return (
                        <motion.button
                          key={card.front}
                          onClick={() =>
                            setFlipped((current) => ({
                              ...current,
                              [index]: !current[index],
                            }))
                          }
                          className="glass-card relative h-48 rounded-2xl p-5 text-left transition-all"
                          whileHover={{ scale: 1.05, rotateZ: 2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <motion.div
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex h-full flex-col justify-between"
                          >
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                                {isFlipped ? "Answer" : "Question"}
                              </p>
                              <p className="mt-3 text-base font-semibold leading-relaxed text-white">
                                {isFlipped ? card.back : card.front}
                              </p>
                            </div>
                            <p className="text-xs text-slate-500">
                              {isFlipped ? "Tap to flip back" : "Tap to reveal"}
                            </p>
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
