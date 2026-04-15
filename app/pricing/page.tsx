const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying ReviseAI.",
    features: ["5 study packs / month", "Basic summaries", "Standard quiz mode"],
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "For consistent weekly revision.",
    features: ["Unlimited study packs", "Advanced summaries", "Smart flashcards + analytics"],
    highlighted: true,
  },
  {
    name: "Exam Boost",
    price: "$24/mo",
    description: "For exam season intensity.",
    features: ["Everything in Pro", "High-difficulty quiz generation", "Priority support"],
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10 lg:px-14">
      <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Pricing</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Simple plans for every study stage</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Start free, then upgrade when you want deeper AI-powered revision tools.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-3xl border p-6 ${
              plan.highlighted
                ? "border-blue-300/50 bg-blue-500/10"
                : "border-slate-800 bg-slate-900/60"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{plan.name}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{plan.price}</h2>
            <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
