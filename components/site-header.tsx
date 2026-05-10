"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-4 z-50 mx-auto w-[min(95%,1280px)] rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "border border-white/15 bg-slate-950/70 shadow-lg"
          : "border border-white/10 bg-slate-950/40"
      } backdrop-blur-xl`}
    >
      <div className="flex items-center justify-between px-5 py-3.5 md:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
          >
            <div className="relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/icon.svg"
                alt="ReviseAI logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain ring-1 ring-cyan-200/25"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="block text-sm font-semibold tracking-tight text-white leading-tight">
                ReviseAI
              </span>
              <span className="block text-xs text-slate-400 leading-tight">Study AI</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.header>
  );
}
