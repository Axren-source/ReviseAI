import Link from "next/link";

const features = [
  {
    title: "Smart Summaries",
    text: "Turn long lecture notes into clean, structured summaries with instant clarity.",
    icon: "🧾",
  },
  {
    title: "Instant Quizzes",
    text: "Generate multiple-choice practice questions automatically from your own material.",
    icon: "❓",
  },
  {
    title: "Flashcards",
    text: "Convert key concepts into revision flashcards and memorize faster before exams.",
    icon: "🃏",
  },
  {
    title: "Study Plans",
    text: "Get a focused revision plan that keeps you productive and calm every day.",
    icon: "📅",
  },
];

const steps = [
  "Paste your notes, slides, or textbook snippets.",
  "ReviseAI generates your summary, key points, quiz, and flashcards.",
  "Review your study pack and revise with a clear, stress-free flow.",
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
      </div>

      <main className="relative mx-auto w-full max-w-7xl px-6 py-14 md:px-10 lg:px-14">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
              Study smarter, feel calmer.
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Turn your notes into summaries, quizzes, and flashcards in seconds.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              ReviseAI transforms messy notes into a focused revision system so students can spend less time organizing and more time learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white"
              >
                Get Early Access
              </Link>
              <Link
                href="/demo"
                className="rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100"
              >
                See Demo
              </Link>
            </div>
          </div>

          <div className="fade-up [animation-delay:120ms] rounded-[28px] border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-blue-950/20">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-sm text-slate-400">Live Study Pack</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Biology Revision Pack</h2>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200">
                  Summary: Cell respiration converts glucose into ATP through glycolysis, the Krebs cycle, and electron transport.
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300">
                  Key point: Mitochondria produce most ATP in aerobic respiration.
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300">
                  Quiz ready: 8 questions generated.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Features</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Everything you need to revise in one calm workspace.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="fade-up rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-300/30">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-6">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/55 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-200">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              From messy notes to exam-ready revision in three steps.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-sm font-semibold text-blue-100 ring-1 ring-blue-300/30">
                    {index + 1}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[30px] border border-blue-400/25 bg-gradient-to-br from-blue-500/10 via-slate-900/80 to-slate-900/80 p-8 text-center md:p-12">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Early access</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Build your best study system with ReviseAI.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Join early access and get the premium AI study workflow students use to stay consistent and confident.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 text-sm font-semibold text-white">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
