"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  "Startup A",
  "✦",
  "Agency B",
  "✦",
  "Brand C",
  "✦",
  "Studio D",
  "✦",
  "Corp E",
  "✦",
  "Startup A",
  "✦",
  "Agency B",
  "✦",
  "Brand C",
  "✦",
  "Studio D",
  "✦",
  "Corp E",
  "✦",
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".opacity-0-init");
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("animate-fade-up");
        el.style.opacity = 1;
      }, i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col pt-28 md:pt-0 overflow-hidden"
    >
      {/* ── Small greeting ── z-30 (above everything) */}
      <div className="opacity-0-init relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 pt-0 md:pt-40 w-full">
        <p className="text-base md:text-lg text-[#111] flex items-center gap-2 font-light">
          <span className="text-xl">👋</span>
          hi there, my name is <span className="font-semibold">
            Your Name
          </span>{" "}
          and I am a
        </p>
      </div>

      {/* ── DEPTH STACK ── */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 w-full">
        {/* LAYER 1 — "Full Stack" text — BEHIND photo (z-10) */}
        <div className="opacity-0-init relative z-10 hero-title text-[clamp(80px,13vw,200px)] leading-[0.88] text-[#111] mt-2">
          Full Stack
        </div>

        {/* LAYER 2 — "Developer" text — BEHIND photo (z-10) */}
        <div className="opacity-0-init relative z-10 hero-title text-[clamp(80px,13vw,200px)] leading-[0.88] text-[#111] delay-100">
          Developer
        </div>

        {/* LAYER 3 — Photo — MIDDLE (z-20), absolute centered, full 100vh */}
        <div
          className="opacity-0-init absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          style={{
            height: "100vh",
            width: "clamp(220px, 26vw, 400px)",
            bottom: "calc(-100vh + 100%)",
          }}
        >
          <Image
            src="/photo.png"
            alt="Your Name"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* LAYER 4 — "& Backend" outline — IN FRONT of photo (z-30) */}
        <div className="opacity-0-init relative z-30 hero-title hero-outline text-[clamp(80px,13vw,200px)] leading-[0.88] delay-200">
          &amp; Backend
        </div>

        {/* LAYER 5 — "Engineer" outline — IN FRONT of photo (z-30) */}
        <div className="opacity-0-init relative z-30 hero-title hero-outline text-[clamp(80px,13vw,200px)] leading-[0.88] delay-300">
          Engineer
        </div>
      </div>

      {/* ── Bottom row ── z-30 */}
      <div className="opacity-0-init relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 w-full mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 delay-400">
        <p className="text-lg md:text-xl font-light text-[#111]">
          based in [Your City], [Country].
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#111] text-[#f8f8f6] text-sm font-medium rounded-full hover:bg-[#333] transition-all duration-300"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-[#111] hover:text-[#f8f8f6] transition-all duration-300"
          >
            Hire me
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── z-30 */}
      <div className="opacity-0-init absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 delay-600 z-30">
        <span className="text-xs uppercase tracking-widest text-[#111]/40 font-medium">
          scroll
        </span>
        <div className="w-px h-12 bg-[#111]/20 relative overflow-hidden">
          <div className="scroll-dot absolute top-0 left-0 right-0 h-4 bg-[#111]/60" />
        </div>
      </div>

      {/* ── Marquee strip ── z-30 */}
      <div className="opacity-0-init border-t border-black/10 overflow-hidden delay-500 bg-[#f0f0ec] relative z-30">
        <div className="marquee-track py-3">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className={`px-4 text-xs uppercase tracking-widest whitespace-nowrap ${
                c === "✦" ? "text-[#f5c842]" : "text-[#111]/30 font-medium"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
