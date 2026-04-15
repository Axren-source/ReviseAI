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
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:px-10 lg:px-14">
        <p>Built by ReviseAI</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-200">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
