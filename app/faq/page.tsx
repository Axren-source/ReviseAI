const faqs = [
  {
    q: "How does ReviseAI work?",
    a: "Paste your notes, and ReviseAI generates a summary, key points, quiz questions, and flashcards for focused revision.",
  },
  {
    q: "Is ReviseAI free?",
    a: "Yes. We offer a free plan with limited monthly study packs, plus paid plans for advanced usage.",
  },
  {
    q: "Does ReviseAI store my notes?",
    a: "We may process and temporarily store notes to provide features and improve reliability. See our Privacy Policy for details.",
  },
  {
    q: "Can I use it on mobile?",
    a: "Yes, ReviseAI is responsive and designed to work across desktop, tablet, and mobile devices.",
  },
  {
    q: "Is the AI always accurate?",
    a: "AI output can be imperfect. Always review generated content against your course materials.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">FAQ</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Frequently asked questions</h1>

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg font-semibold text-white">{item.q}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.a}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
