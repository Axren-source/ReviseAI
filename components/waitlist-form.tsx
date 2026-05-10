"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Unable to join waitlist. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You're in! 🚀 Watch your inbox for updates.");
      setEmail("");
      
      // Reset after 4 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch {
      setStatus("error");
      setMessage("Connection issue. Please check and try again.");
    }
  }

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-end">
        {/* Input container with animated glow */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated glow background */}
          <motion.div
            className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-violet-500/40 opacity-0 blur transition-all duration-300"
            animate={{
              opacity: status === "idle" ? 0 : status === "success" ? 0.5 : 0.3,
            }}
          />

          {/* Input field */}
          <motion.input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isLoading || isSuccess}
            placeholder="Enter your email"
            className="premium-input relative h-12 w-full rounded-2xl px-4 text-sm text-white disabled:opacity-60"
            aria-label="Email for waitlist"
            initial={{ scale: 1 }}
            animate={{
              scale: status === "success" ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Submit button with state variations */}
        <motion.button
          type="submit"
          disabled={isLoading || isSuccess}
          className={`glow-button relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all ${
            isSuccess ? "bg-gradient-to-r from-emerald-500 to-teal-500" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{
            scale: isSuccess ? 1 : 1.03,
            y: isSuccess ? 0 : -2,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 size={16} />
                </motion.span>
                <span>Joining...</span>
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Check size={18} />
                <span>You&apos;re in!</span>
              </motion.div>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                Join Waitlist
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>

      {/* Status message with animation */}
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={`message-${status}`}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`mt-3 flex items-start gap-2 rounded-xl p-3 text-sm font-medium ${
              isError
                ? "border border-rose-500/30 bg-rose-500/10 text-rose-200"
                : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
            }`}
          >
            {isError ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-0.5"
              >
                <AlertCircle size={16} className="flex-shrink-0" />
              </motion.span>
            ) : (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="mt-0.5"
              >
                <Check size={16} className="flex-shrink-0" />
              </motion.span>
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
