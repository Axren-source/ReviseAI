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

const studyFlow = [
  "Upload class notes or slides",
  "AI extracts concepts and creates summaries",
  "Generate quiz + flashcards by topic",
  "Track progress and optimize revision plan",
];

const outcomes = [
  { label: "Faster revision", value: "3x" },
  { label: "Practice questions", value: "∞" },
  { label: "Daily clarity", value: "100%" },
];

export default function ReviseAILandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="grid-overlay" />
      </div>

      <main className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-10 lg:px-14">
        <header className="fade-up flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/40 to-cyan-400/20 text-lg ring-1 ring-blue-300/40 backdrop-blur">
              ✨
            </div>
            <div>
              <p <img src="/icon.svg" alt="ReviseAI logo" className="h-10" />
              <p className="text-xs text-slate-300">AI study partner for overwhelmed students.</p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-700/90 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:text-white"
          >
            Join Early Access
          </a>
        </header>

        <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="fade-up [animation-delay:80ms]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 backdrop-blur">
              <span>Built for deep focus</span>
              <span className="text-blue-300">•</span>
              <span>Made for exam season</span>
            </div>

            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              The most intense AI study app for students who need results.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              ReviseAI turns messy notes into instant summaries, high-quality quizzes, and smart flashcards so you can study with structure, speed, and confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-blue-400/40"
              >
                Start Your Waitlist Spot
              </a>
              <a
                href="/demo"
                className="rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500"
              >
                Explore Demo
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{outcome.value}</p>
                  <p className="mt-1 text-slate-300">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up [animation-delay:160ms]">
            <div className="floating-panel rounded-[30px] border border-slate-700/70 bg-slate-900/70 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="rounded-[24px] border border-slate-800 bg-slate-950/90 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">Live workspace</p>
                    <h2 className="text-xl font-semibold text-white">Exam Sprint Pack</h2>
                  </div>
                  <span className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
                    Physics · Waves
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-400">AI Summary</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Standing waves form when two waves of equal frequency travel in opposite directions, creating nodes and antinodes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                      <span>Quiz confidence</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="quiz-progress h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Next quiz will focus on weak areas: wave speed and resonance.</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-400">Auto-generated flashcard</p>
                    <p className="mt-2 text-sm text-white">Q: What is an antinode?</p>
                    <p className="mt-1 text-sm text-slate-300">A: A point of maximum displacement in a standing wave.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="fade-up [animation-delay:220ms] py-6">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/55 p-8 backdrop-blur md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200/90">Why students love it</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Stop wasting energy organizing notes. Start mastering topics.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Every feature is designed to reduce stress: summarize instantly, revise with quizzes, memorize with flashcards, and follow a clear study plan that updates as you improve.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="fade-up [animation-delay:260ms] mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200/90">Core features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Everything you need for next-level exam preparation.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="fade-up group rounded-[26px] border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-xl hover:shadow-blue-900/20"
                style={{ animationDelay: `${320 + index * 90}ms` }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-2xl ring-1 ring-white/10`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-6">
          <div className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-8 md:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200/90">Study flow</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Your AI-powered revision loop.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {studyFlow.map((step, index) => (
                <div
                  key={step}
                  className="fade-up flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  style={{ animationDelay: `${520 + index * 80}ms` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-sm font-semibold text-blue-100 ring-1 ring-blue-300/30">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="fade-up rounded-[32px] border border-cyan-300/25 bg-gradient-to-br from-blue-500/10 via-slate-900/90 to-slate-900/90 p-8 text-center shadow-2xl shadow-blue-950/20 md:p-12 [animation-delay:740ms]">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-100">Early access</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Build your unfair study advantage.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Join ReviseAI and be first to use advanced summarization, auto-quiz generation, and study coaching built for real student pressure.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 text-sm font-semibold text-white transition hover:brightness-110">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-500">
          Built for students. Powered by AI. Designed for focus.
        </footer>
      </main>
    </div>
  );
}
