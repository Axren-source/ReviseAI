export default function ReviseAILandingPage() {
  const features = [
    {
      title: "Smart Summaries",
      text: "Upload notes or PDFs and turn them into clean, structured summaries in seconds.",
      icon: "🧾",
    },
    {
      title: "Instant Quizzes",
      text: "Test yourself with AI-generated questions based on your own study material.",
      icon: "❓",
    },
    {
      title: "Flashcards",
      text: "Convert key ideas into simple flashcards for fast revision before exams.",
      icon: "🃏",
    },
    {
      title: "Study Plans",
      text: "Get a focused revision path so you know exactly what to study next.",
      icon: "📅",
    },
  ];

  const steps = [
    {
      title: "Upload your notes",
      text: "Paste text or upload your class notes to start building your revision pack.",
    },
    {
      title: "Let AI organize everything",
      text: "ReviseAI finds the key points, structures the content, and prepares study tools for you.",
    },
    {
      title: "Revise with confidence",
      text: "Review summaries, practice quizzes, and flashcards all in one calm workspace.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-96 left-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-10 top-64 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-lg ring-1 ring-blue-400/20">
              ✨
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">ReviseAI</p>
              <p className="text-xs text-slate-400">Study smarter, feel calmer.</p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
          >
            Join Early Access
          </a>
        </header>

        <section className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span>Built for students</span>
              <span className="text-blue-300">•</span>
              <span>Focused revision</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Turn your notes into summaries, quizzes, and flashcards in seconds.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              ReviseAI transforms messy study notes into a clear revision system so you can spend less time organizing and more time actually learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
                target="_blank"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white"
              >
                Get Early Access
              </a>
              <a
                href="/demo"
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
              >
                See Demo
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-2xl font-semibold text-white">1</p>
                <p className="mt-1">Upload notes</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-2xl font-semibold text-white">2</p>
                <p className="mt-1">Generate tools</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-2xl font-semibold text-white">3</p>
                <p className="mt-1">Revise faster</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[24px] border border-slate-800 bg-slate-950 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Dashboard</p>
                    <h2 className="text-xl font-semibold text-white">Your Revision Pack</h2>
                  </div>
                  <div className="rounded-xl bg-blue-500/10 px-3 py-1 text-xs text-blue-200 ring-1 ring-blue-400/20">
                    Biology • Chapter 4
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Summary</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Cell respiration converts glucose into ATP through glycolysis, the Krebs cycle, and the electron transport chain.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Key Points</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      <li>• Glycolysis happens in the cytoplasm</li>
                      <li>• Mitochondria produce most ATP</li>
                      <li>• Oxygen is needed at the final stage</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:col-span-2">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm text-slate-400">Quick Quiz</p>
                      <span className="text-xs text-slate-500">3 questions</span>
                    </div>
                    <div className="rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800">
                      <p className="text-sm text-white">
                        Which organelle is mainly responsible for producing ATP?
                      </p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {["Nucleus", "Mitochondria", "Ribosome", "Membrane"].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/50 p-8 backdrop-blur md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300/80">
              Why ReviseAI
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Studying should feel focused, not overwhelming.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Long notes, messy pages, and no clear revision path can make exams feel stressful. ReviseAI turns your study material into a clean, structured workspace designed to help you learn faster and remember more.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300/80">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Everything you need to revise in one place.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-slate-700"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl ring-1 ring-blue-400/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300/80">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              From notes to revision pack in three steps.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white ring-1 ring-slate-800">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900/80 to-slate-900/80 p-8 text-center shadow-2xl shadow-blue-950/20 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200/90">Early access</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Study smarter, not harder.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Join the first users of ReviseAI and get early access to a calm, focused study tool built for real exam prep.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="h-12 rounded-2xl bg-blue-500 px-6 text-sm font-medium text-white transition hover:bg-blue-400">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-500">
          Built for students. Powered by AI.
        </footer>
      </main>
    </div>
  );
}