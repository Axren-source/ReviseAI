export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">About</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Why we built ReviseAI</h1>
      <div className="mt-6 space-y-5 text-slate-300">
        <p>
          ReviseAI exists to help students revise faster with less stress. We believe studying should feel focused, not overwhelming.
        </p>
        <p>
          Our mission is simple: transform messy notes into a clean revision system using AI-powered summaries, quizzes, flashcards, and study planning.
        </p>
        <p>
          We design for calm productivity with a modern, minimal workspace that helps students stay consistent and confident.
        </p>
      </div>
    </main>
  );
}
