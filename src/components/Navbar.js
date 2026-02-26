"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f8f6]/90 backdrop-blur-md border-b border-black/8 py-3"
          : "py-6"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            className="text-2xl tracking-tight text-[#111] uppercase leading-none"
          >
            YN
          </span>
          <span className="w-2 h-2 rounded-full bg-[#f5c842] group-hover:bg-[#4f9cf9] transition-colors duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium text-[#111] tracking-wide hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hello@yourname.dev"
            className="px-5 py-2.5 bg-[#111] text-[#f8f8f6] text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-300"
          >
            hello@yourname.dev
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-end"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-[#111] transition-all duration-300 ${
              menuOpen ? "w-7 rotate-45 translate-y-2" : "w-7"
            }`}
          />
          <span
            className={`block h-0.5 bg-[#111] transition-all duration-300 ${
              menuOpen ? "opacity-0 w-0" : "w-5"
            }`}
          />
          <span
            className={`block h-0.5 bg-[#111] transition-all duration-300 ${
              menuOpen ? "w-7 -rotate-45 -translate-y-2" : "w-7"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f8f8f6]/95 backdrop-blur-md border-b border-black/10 transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-80 py-6" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-[#111] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@yourname.dev"
            className="text-sm text-[#111] opacity-60"
          >
            hello@yourname.dev
          </a>
        </div>
      </div>
    </header>
  );
}
