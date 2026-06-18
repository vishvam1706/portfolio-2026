"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  "Santushti Infotech",
  "✦",
  "BinTech Services",
  "✦",
  "Fiverr Pro",
  "✦",
  "HealioScan",
  "✦",
  "AmbajiTemple",
  "✦",
  "Santushti Infotech",
  "✦",
  "BinTech Services",
  "✦",
  "Fiverr Pro",
  "✦",
  "HealioScan",
  "✦",
  "AmbajiTemple",
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
      className="relative flex flex-col overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* ── Photo — absolute to SECTION, always bottom-anchored ── */}
      <div
        className="opacity-0-init absolute z-20 pointer-events-none overflow-hidden"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 30vw, 480px)",
          height: "clamp(300px, 78dvh, 780px)",
          maxHeight: "100%",
        }}
      >
        <Image
          src="/photo.png"
          alt="Jigar Maru"
          fill
          className="object-contain object-bottom"
          priority
          sizes="(max-width: 768px) 200px, 30vw"
        />
      </div>

      {/* ── Navbar spacer — keeps content below the fixed navbar ── */}
      {/* Navbar is ~72px on desktop, ~60px on mobile */}
      <div className="h-[60px] md:h-[72px] shrink-0" />

      {/* ── DEPTH STACK — flex-1, 70% width, 3 lines ── */}
      <div className="flex-1 relative px-6 md:px-12 flex flex-col justify-center overflow-hidden">
        {/* ── Greeting — sits inside the flow ── */}
        <div className="opacity-0-init relative z-30 w-full mb-3 md:mb-6">
          <div className="text-[#111] flex items-center gap-2 font-light">
            <span>👋</span>
            <p style={{ fontSize: "clamp(12px, 1.6vh, 18px)" }}>
              Hi there, <br />
              My name is{" "}
              <span className="font-semibold">Jigar Maru</span> and I am a
            </p>
          </div>
        </div>

        {/* LINE 1 — "Project Manager" — solid fill, BEHIND photo (z-10) */}
        <div
          className="opacity-0-init relative z-10 font-extrabold leading-[0.88] tracking-tight text-[#111]"
          style={{ fontSize: "clamp(36px, min(18dvh, 14vw), 220px)" }}
        >
          Project Manager
        </div>

        {/* LINE 2 — "& Software" — outline, IN FRONT of photo (z-30) */}
        <div
          className="opacity-0-init relative z-30 font-extrabold leading-[0.88] tracking-tight hero-outline delay-200"
          style={{ fontSize: "clamp(36px, min(18dvh, 14vw), 220px)" }}
        >
          &amp; Software
        </div>

        {/* LINE 3 — "Analyst" — outline, IN FRONT of photo (z-30) */}
        <div
          className="opacity-0-init relative z-30 font-extrabold leading-[0.88] tracking-tight hero-outline delay-300"
          style={{ fontSize: "clamp(36px, min(18dvh, 14vw), 220px)" }}
        >
          Analyst
        </div>
      </div>

      {/* ── Bottom row — pinned above marquee ── */}
      <div
        className="opacity-0-init relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 w-full
          flex flex-col md:flex-row-reverse items-start md:items-center justify-between
          gap-2 md:gap-4 py-3 md:py-5 delay-400"
      >
        <p
          className="font-light text-[#111]"
          style={{ fontSize: "clamp(13px, 1.8vh, 20px)" }}
        >
          based in Ahmedabad, Gujarat.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="bg-[#111] text-[#f8f8f6] font-medium rounded-full
              hover:bg-[#333] transition-all duration-300"
            style={{ fontSize: "clamp(11px, 1.4vh, 14px)", padding: "clamp(8px, 1.2vh, 12px) clamp(16px, 2vw, 24px)" }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-[#111] text-[#111] font-medium rounded-full
              hover:bg-[#111] hover:text-[#f8f8f6] transition-all duration-300"
            style={{ fontSize: "clamp(11px, 1.4vh, 14px)", padding: "clamp(8px, 1.2vh, 12px) clamp(16px, 2vw, 24px)" }}
          >
            Hire me
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── hidden on small screens */}

      {/* ── Marquee strip — always at very bottom, shrink-0 ── */}
      {/* <div className="opacity-0-init border-t border-black/10 overflow-hidden delay-500 bg-[#f0f0ec] relative z-30 shrink-0">
        <div className="marquee-track py-2 md:py-3">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className={`px-3 md:px-4 text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap ${c === "✦" ? "text-[#f5c842]" : "text-[#111]/30 font-medium"
                }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}
