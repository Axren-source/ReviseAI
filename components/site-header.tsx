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
    <header className="sticky top-3 z-50 mx-auto mt-3 w-[min(95%,1200px)] rounded-2xl border border-white/10 bg-slate-900/55 backdrop-blur-2xl shadow-[0_20px_70px_-35px_rgba(59,130,246,0.7)]">
      <div className="flex items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-white transition hover:opacity-90">
          <Image
            src="/icon.svg"
            alt="ReviseAI logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain ring-1 ring-cyan-200/25"
            priority
          />
          <span>
            <span className="block text-sm font-semibold tracking-tight text-white">ReviseAI</span>
            <span className="block text-xs text-slate-300">Premium AI study engine</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-slate-300 transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfIAY8falqW792-n_7X5dM6WDvMsL08y1Q1mIytIlNLUbq88w/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button rounded-xl px-4 py-2 text-sm font-semibold text-white"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
