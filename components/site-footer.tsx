"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-white/10 bg-gradient-to-t from-slate-950 to-slate-950/50 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:px-10 lg:px-14 lg:py-16">
        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="mb-8 text-center lg:text-left">
            <p className="text-sm font-semibold text-white">ReviseAI</p>
            <p className="mt-1 text-xs text-slate-500">The AI study engine for modern students</p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-6 md:flex-row"
          >
            {/* Left: Copyright + Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-3 text-center md:items-start md:text-left"
            >
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} ReviseAI. Built for students, by people who care.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-1 ring-slate-950"
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">
                  Trusted by <span className="font-semibold text-slate-400">1,200+ students</span>
                </span>
              </div>
            </motion.div>

            {/* Right: Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end"
            >
              {footerLinks.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 transition-colors duration-300 hover:text-slate-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-full origin-left bg-gradient-to-r from-cyan-500/50 via-transparent to-transparent"
        />
      </div>
    </motion.footer>
  );
}
