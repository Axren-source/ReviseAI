"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How does ReviseAI work?",
    a: "Simply paste your class notes, lecture transcripts, or study materials. ReviseAI instantly generates a clean summary, key points, quiz questions, and spaced-repetition flashcards—all powered by advanced AI.",
  },
  {
    q: "Is ReviseAI actually free?",
    a: "Yes! We offer a free plan with monthly study pack limits. Our premium plans unlock unlimited generation, advanced features, and priority support. No credit card required to get started.",
  },
  {
    q: "Does ReviseAI store my study notes?",
    a: "We may temporarily process and store your notes to provide features and improve reliability. All data is encrypted and never shared with third parties. Check our Privacy Policy for complete details.",
  },
  {
    q: "Can I use ReviseAI on mobile?",
    a: "Absolutely. ReviseAI is fully responsive and optimized for desktop, tablet, and mobile devices. You can study anywhere with the same premium experience.",
  },
  {
    q: "How accurate is the AI-generated content?",
    a: "Our AI is highly accurate for summaries and key point extraction. However, always review generated quiz questions and flashcards against your course materials to ensure accuracy.",
  },
  {
    q: "Can I export my study materials?",
    a: "Yes. You can export summaries, quizzes, and flashcards as PDF, Markdown, or CSV files. Download and study offline, or share with classmates.",
  },
  {
    q: "Is there a student discount?",
    a: "Early supporters get lifetime discounts on premium plans. Join our waitlist to secure the best rates when we launch.",
  },
  {
    q: "What subjects does ReviseAI support?",
    a: "ReviseAI works with any subject—sciences, humanities, languages, math, history, or anything else. The AI adapts to your specific material.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="hero-light" />
      <div className="hero-grid" />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-12 md:px-10 lg:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 blur-lg opacity-20"
              />
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-500/20 border border-cyan-400/30">
                <HelpCircle size={28} className="text-cyan-300" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about ReviseAI. Can&apos;t find the answer? Reach out on our 
            <a href="/contact" className="text-cyan-300 hover:text-cyan-200 transition"> contact page</a>.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              variants={itemVariants}
              className="glass-card rounded-2xl p-0 overflow-hidden"
            >
              <motion.button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex-1 flex items-start gap-4">
                  <motion.div
                    animate={{ scale: expandedIndex === index ? 1.1 : 1 }}
                    className="mt-1 flex-shrink-0"
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-400/20">
                      <span className="text-sm font-bold text-cyan-300">?</span>
                    </div>
                  </motion.div>
                  <h3 className="text-base font-semibold text-white leading-relaxed">
                    {faq.q}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    size={20}
                    className="text-slate-400"
                  />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      exit={{ y: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-6 py-5 text-slate-300 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-950/50 p-8 text-center md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Our team is here to help. Contact us anytime.
          </p>
          <motion.a
            href="/contact"
            className="glow-button mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
