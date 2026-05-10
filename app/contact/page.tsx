"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SendIcon, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus(data.error ?? "Something went wrong. Please try again.");
        setIsSuccess(false);
        return;
      }

      setStatus(data.message ?? "Thanks! We received your message.");
      setForm({ name: "", email: "", message: "" });
      setIsSuccess(true);
      setTimeout(() => {
        setStatus("");
        setIsSuccess(false);
      }, 3000);
    } catch {
      setStatus("Unable to submit right now. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-20"
              />
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30">
                <SendIcon size={28} className="text-cyan-300" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-white">Get in touch</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Have feedback, partnership ideas, or just want to say hi? We&apos;d love to hear from you. 
            Reply within 24 hours guaranteed.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-2xl"
        >
          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 md:p-10 space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="mb-3 block text-sm font-medium text-slate-200">
                Your name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Jane Smith"
                className="premium-input h-12 w-full rounded-xl px-4 text-sm text-white"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="mb-3 block text-sm font-medium text-slate-200">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="jane@example.com"
                className="premium-input h-12 w-full rounded-xl px-4 text-sm text-white"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="mb-3 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Tell us what's on your mind..."
                className="premium-input w-full rounded-xl px-4 py-3 text-sm text-white resize-none"
              />
            </motion.div>

            {/* Status Message */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-start gap-3 rounded-xl p-4 ${
                  isSuccess
                    ? "border border-emerald-500/30 bg-emerald-500/10"
                    : "border border-rose-500/30 bg-rose-500/10"
                }`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-200">{status}</p>
                  </>
                ) : (
                  <>
                    <AlertCircle size={20} className="text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-rose-200">{status}</p>
                  </>
                )}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              variants={itemVariants}
              className="glow-button w-full rounded-xl px-6 py-4 text-base font-semibold text-white transition-all disabled:opacity-60"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 size={18} />
                  </motion.span>
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <SendIcon size={18} />
                  Send message
                </span>
              )}
            </motion.button>

            {/* Footer Text */}
            <motion.p variants={itemVariants} className="text-center text-xs text-slate-500">
              We&apos;ll respond to your message as soon as possible. 
              <br />
              For urgent inquiries, feel free to reach out on social media.
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </main>
  );
}
