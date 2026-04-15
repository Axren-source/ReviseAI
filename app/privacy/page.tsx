export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Privacy Policy</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">ReviseAI Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: April 15, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-white">Information we collect</h2>
          <p>
            We collect account details (such as name and email), study note inputs submitted to our tools, contact form submissions, and basic analytics about product usage.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">How we use your data</h2>
          <p>
            We use collected data to provide summaries, quizzes, flashcards, improve product quality, communicate important service updates, and respond to support requests.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Study note inputs</h2>
          <p>
            Notes you submit may be processed by AI systems to generate outputs. We limit access internally and retain data only as needed for product operations and reliability.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Analytics and third-party services</h2>
          <p>
            We may use third-party analytics, hosting, and infrastructure providers. These providers process data under their own privacy terms and applicable data protection obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Data protection</h2>
          <p>
            We apply technical and organizational safeguards to protect user data, though no system can be guaranteed 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Your rights</h2>
          <p>
            Depending on your location, you may request access, correction, deletion, or export of personal data. Contact us to exercise these rights.
          </p>
        </section>
      </div>
    </main>
  );
}
