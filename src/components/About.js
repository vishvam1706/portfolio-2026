"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "10+", label: "Projects Managed" },
  { num: "2", label: "Degrees Earned" },
  { num: "7.98", label: "MCA CGPA" },
];

const education = [
  {
    degree: "M.C.A.",
    institution: "GLS University",
    period: "2022 – 2024",
    cgpa: "7.98 CGPA",
  },
  {
    degree: "B.C.A.",
    institution: "Smt C.Z.M. Gosrani BCA College",
    period: "2019 – 2022",
    cgpa: "8.75 CGPA",
  },
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
          {/* Left — Big statement + Stats */}
          <div>
            <h2
              className="reveal-item hero-title text-[clamp(48px,6vw,90px)] leading-[0.92] text-[#111] uppercase"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              I Manage
              <br />
              <span className="hero-outline">Things</span>
              <br />
              That Ship.
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

            {/* Education */}
            <div
              className="reveal-item mt-14"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.4s",
              }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-5">
                <span className="w-6 h-px bg-[#111]/30" />
                Education
              </span>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="border-l-2 border-[#f5c842] pl-4"
                  >
                    <p className="text-sm font-semibold text-[#111]">
                      {edu.degree} — {edu.institution}
                    </p>
                    <p className="text-xs text-[#111]/50 mt-0.5">
                      {edu.period} &nbsp;·&nbsp; {edu.cgpa}
                    </p>
                  </div>
                ))}
              </div>
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
              I&apos;m a Project Manager and Software Analyst passionate about
              delivering high-impact digital projects on time and within budget.
              With experience spanning diverse industries — from AI/ML healthcare
              platforms to e-commerce apps — I turn complex requirements into
              shipping products.
            </p>

            <p
              className="reveal-item text-base text-[#111]/60 leading-relaxed font-light"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
              }}
            >
              At Santushti Infotech (Fiverr Pro), I lead high-budget projects
              across diverse industries, acting as the primary communication
              bridge between cross-functional teams and stakeholders in the US
              and India — managing client expectations seamlessly across multiple
              time zones.
            </p>

            <p
              className="reveal-item text-base text-[#111]/60 leading-relaxed font-light"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.3s",
              }}
            >
              I was awarded &quot;Excellent Leader&quot; and &quot;Student of
              the Year&quot; during my bachelor&apos;s degree, and I hold
              certifications in C, C++, and Tally from government-recognized
              organizations.
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
