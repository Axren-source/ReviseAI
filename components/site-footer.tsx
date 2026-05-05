import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-400 md:flex-row md:px-10 lg:px-14">
        <p className="text-slate-300">© {new Date().getFullYear()} ReviseAI. Crafted for peak performance.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:-translate-y-0.5 hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
