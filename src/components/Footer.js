"use client";

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourhandle" },
  { label: "Email", href: "mailto:hello@yourname.dev" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-[#f8f8f6] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <span
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              className="text-3xl tracking-tight uppercase leading-none"
            >
              YN
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5c842]" />
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-8 flex-wrap">
            {["Work", "About", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-white/30 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/20 font-light">
            © {year} Your Name. Designed &amp; developed with ❤️
          </p>

          <p className="text-xs text-white/20 font-light">
            Built with Next.js 14 + Tailwind CSS
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-white/30 hover:text-white transition-colors flex items-center gap-2"
          >
            Back to top
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
