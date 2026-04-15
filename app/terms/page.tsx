export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Terms of Service</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">ReviseAI Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: April 15, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-white">Acceptable use</h2>
          <p>
            ReviseAI is provided for educational assistance. You agree not to misuse the service, interfere with platform integrity, or attempt unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">No illegal or abusive use</h2>
          <p>
            You may not use ReviseAI for illegal activity, abusive behavior, harassment, or to generate harmful or deceptive content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Service availability</h2>
          <p>
            We strive for reliable access but do not guarantee uninterrupted service. Features may change, pause, or be discontinued over time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Intellectual property</h2>
          <p>
            ReviseAI branding, software, and content are protected intellectual property. You retain rights to your submitted notes, subject to our license to process them for service delivery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Limitation of liability</h2>
          <p>
            ReviseAI is provided as-is and output accuracy is not guaranteed. To the maximum extent permitted by law, we are not liable for indirect or consequential damages.
          </p>
        </section>
      </div>
    </main>
  );
}
