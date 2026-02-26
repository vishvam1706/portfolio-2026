"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "30+", label: "Projects Shipped" },
  { num: "15+", label: "Happy Clients" },
  { num: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <div
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-8">
            <span className="w-8 h-px bg-[#111]/30" />
            About me
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — Big statement */}
          <div>
            <h2
              className="reveal-item hero-title text-[clamp(48px,6vw,90px)] leading-[0.92] text-[#111] uppercase"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              I Build
              <br />
              <span className="hero-outline">Things</span>
              <br />
              That Work.
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-14">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="reveal-item"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 80}ms`,
                  }}
                >
                  <div
                    className="text-[clamp(36px,4vw,56px)] font-black leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm text-[#111]/50 mt-1 font-light">
                    {s.label}
                  </div>
                  <div className="hr-accent mt-3 w-12" />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Paragraphs */}
          <div className="flex flex-col gap-6">
            <p
              className="reveal-item text-lg md:text-xl font-light leading-relaxed text-[#111]"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.1s",
              }}
            >
              I'm a full-stack developer passionate about crafting digital
              experiences that are fast, accessible, and beautifully designed.
              With expertise spanning from sleek React UIs to robust Node.js
              backends, I turn ideas into production-ready products.
            </p>

            <p
              className="reveal-item text-base text-[#111]/60 leading-relaxed font-light"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
              }}
            >
              When I'm not writing code, I'm exploring new frameworks,
              contributing to open source, or experimenting with creative 3D
              experiences using Three.js. I believe the best products are built
              at the intersection of thoughtful engineering and compelling
              design.
            </p>

            <p
              className="reveal-item text-base text-[#111]/60 leading-relaxed font-light"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.3s",
              }}
            >
              Currently open to freelance projects and full-time opportunities.
              Let's build something great together.
            </p>

            <div
              className="reveal-item mt-4"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.4s",
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 text-sm font-medium text-[#111] border-b border-[#111] pb-1 hover:gap-5 transition-all duration-300"
              >
                Download Resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background number */}
      <div className="section-num select-none">01</div>
    </section>
  );
}
