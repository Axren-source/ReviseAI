"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import { motion } from "framer-motion";

const features = [
  {
    title: "Summary Studio",
    text: "Drop class notes, PDFs, or lecture transcripts. Get crystal-clear summaries with key takeaways—instantly.",
    icon: "🧠",
    accent: "from-cyan-400/30 to-blue-500/20",
    delay: 0,
  },
  {
    title: "Adaptive Quizzes",
    text: "Generate practice tests instantly. Questions get harder as you improve—your own personal tutor.",
    icon: "🎯",
    accent: "from-indigo-400/30 to-purple-500/20",
    delay: 0.1,
  },
  {
    title: "Smart Flashcards",
    text: "Turn tricky concepts into spaced-rep flashcards with one click. Remember what matters.",
    icon: "🃏",
    accent: "from-emerald-400/30 to-teal-500/20",
    delay: 0.2,
  },
  {
    title: "Focus Planner",
    text: "Build a personalized study roadmap. Always know exactly what to tackle next for maximum progress.",
    icon: "📆",
    accent: "from-amber-300/30 to-orange-500/20",
    delay: 0.3,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const productCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function ReviseAILandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="hero-light" />
      <div className="hero-grid" />

      <main className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-8 md:px-10 lg:px-14">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
        >
          <motion.div
            variants={fadeInVariants}
            custom={0}
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInVariants}
              custom={0}
              className="mb-6 inline-flex w-fit"
            >
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">
                  The AI study engine students love
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInVariants}
              custom={1}
              className="text-balance text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-100 bg-clip-text text-transparent">
                Learn smarter in half the time
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInVariants}
              custom={2}
              className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              Stop grinding through notes alone. Turn messy class material into clean summaries,
              quizzes, and flashcards powered by AI. Your personal study co-pilot.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInVariants}
              custom={3}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="/demo"
                className="glow-button inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all"
              >
                <span>Try Demo</span>
                <span className="text-lg">→</span>
              </a>
              <a
                href="#waitlist"
                className="glass-button inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-slate-100"
              >
                Early Access
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={fadeInVariants}
              custom={4}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-xs uppercase tracking-wider text-slate-400">Trusted by students</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-2 ring-background"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">1,200+</span> students improving grades
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Visualization */}
          <motion.div
            variants={productCardVariants}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hero-card rounded-3xl border border-white/10 p-6 backdrop-blur-xl md:p-8"
            >
              {/* Live Status Badge */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-emerald-100">Live workspace</span>
              </div>

              {/* Product Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white">Exam Prep Sprint</h2>
                <p className="mt-2 text-sm text-slate-400">Physics — Chapter 5 Review</p>
              </div>

              {/* Feature Preview Cards */}
              <div className="space-y-3">
                {features.slice(0, 2).map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                    className="group rounded-xl border border-white/10 bg-slate-900/50 p-4 transition-all hover:border-cyan-400/30 hover:bg-slate-800/70"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">{feature.title}</p>
                        <p className="mt-1 text-xs text-slate-400 line-clamp-1">{feature.text}</p>
                      </div>
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Status */}
              <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3">
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-cyan-300">8 questions</span> ready to review
                </p>
                <button className="text-xs font-medium text-cyan-300 hover:text-cyan-100 transition">
                  Start →
                </button>
              </div>
            </motion.div>

            {/* Floating Accent */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl"
            />
          </motion.div>
        </motion.section>

        {/* Waitlist Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="waitlist"
          className="relative mb-20 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 md:p-12 backdrop-blur"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Join the revolution in student learning
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Get early access, exclusive features, and lifetime premium discounts when we launch.
            </p>
          </div>
          <div className="mt-8 max-w-sm">
            <WaitlistForm />
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div
            variants={fadeInVariants}
            custom={0}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-cyan-200">
              ✨ What makes ReviseAI different
            </span>
            <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
              Your study toolkit, reimagined
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Every tool built to make learning faster, smarter, and way more enjoyable.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.article
                key={feature.title}
                variants={fadeInVariants}
                custom={idx}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/80 text-3xl ring-1 ring-white/10 transition-all group-hover:bg-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {feature.text}
                  </p>

                  {/* Learn more link */}
                  <button className="mt-4 text-xs font-medium text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-950/50 p-8 text-center md:p-12"
        >
          <h2 className="text-4xl font-semibold text-white">
            Ready to transform your study routine?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Join 1,200+ students who are already learning smarter.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="/demo"
              className="glow-button inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-white"
            >
              Explore Demo
            </a>
            <a
              href="#waitlist"
              className="glass-button inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-slate-100"
            >
              Get Early Access
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
