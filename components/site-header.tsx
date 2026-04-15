import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <Image
            src="/icon.svg"
            alt="ReviseAI logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
            priority
          />
          <span>
            <span className="block text-sm font-semibold tracking-tight text-white">ReviseAI</span>
            <span className="block text-xs text-slate-400">Study smarter, feel calmer.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
