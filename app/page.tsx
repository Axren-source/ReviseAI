import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    title: "Auto-Summary Studio",
    text: "Drop in class notes, PDFs, or lecture text and get clean topic-based summaries with key takeaways.",
    icon: "🧠",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    title: "Adaptive AI Quizzes",
    text: "Generate practice quizzes instantly, then increase difficulty automatically as your confidence improves.",
    icon: "🎯",
    accent: "from-indigo-400/25 to-purple-500/10",
  },
  {
    title: "Smart Flashcards",
    text: "Turn difficult concepts into spaced-repetition flashcards with one click and revise faster before exams.",
    icon: "🃏",
    accent: "from-emerald-400/25 to-teal-500/10",
  },
  {
    title: "Focus Study Planner",
    text: "Build a day-by-day plan that prioritizes weak topics first so you always know what to do next.",
    icon: "📆",
    accent: "from-amber-300/25 to-orange-500/10",
  },
];

export default function ReviseAILandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="hero-light" />
      <div className="hero-grid" />
      <main className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-10 md:px-10 lg:px-14">
        <section className="hero-card reveal grid items-center gap-12 rounded-[28px] border border-white/10 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-violet-300/30 bg-violet-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-100">
              Future-ready study workflow
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Premium AI learning for students who move fast.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
              ReviseAI transforms class notes into executive-level summaries, dynamic quizzes,
              and intelligent flashcards with a product experience built like top-tier SaaS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/demo"
                className="glass-button rounded-2xl px-6 py-3 text-sm font-semibold text-slate-100"
              >
                Watch Demo
              </a>
            </div>
            <WaitlistForm />
          </div>
          <div className="floating-shell rounded-[24px] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
            <div className="rounded-[18px] border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Live workspace</p>
              <h2 className="mt-2 text-xl font-semibold">Exam Sprint Pack</h2>
              <div className="mt-6 space-y-3">
                {features.slice(0, 3).map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{feature.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="reveal glass-card group rounded-[22px] p-6 transition duration-300"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-2xl ring-1 ring-white/10`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
