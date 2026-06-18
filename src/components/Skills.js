"use client";

import { useEffect, useRef } from "react";
import { ClipboardList, SearchCode, Palette, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Project Management",
    Icon: ClipboardList,
    skills: [
      "ClickUp",
      "Monday.com",
      "Asana",
      "Agile / Scrum",
      "Risk Management",
      "Stakeholder Mgmt",
      "Timeline Planning",
      "Budget Control",
    ],
  },
  {
    title: "Software Analysis",
    Icon: SearchCode,
    skills: [
      "Requirements Gathering",
      "System Design",
      "QA & Testing",
      "UX Research",
      "API Review",
      "Documentation",
      "Cross-platform Dev",
      "AI/ML Projects",
    ],
  },
  {
    title: "Design & Productivity",
    Icon: Palette,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Microsoft Office",
      "Google Workspace",
      "Notion",
      "Slack",
      "Zoom",
    ],
  },
  {
    title: "Tech Stack Awareness",
    Icon: Layers,
    skills: [
      "Full Tech Stack",
      "React / Next.js",
      "Node.js",
      "Android / iOS",
      "E-commerce",
      "AI/ML Platforms",
      "REST APIs",
      "Cloud Deployment",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 md:py-40 bg-[#111] text-[#f8f8f6] overflow-hidden"
    >
      {/* Big bg text */}
      <div
        className="absolute top-0 right-0 text-[clamp(80px,14vw,160px)] font-black uppercase leading-none text-white/[0.03] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Skills
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span
              className="skill-reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white/30 mb-4"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <span className="w-8 h-px bg-white/20" />
              Areas of Expertise
            </span>
            <h2
              className="skill-reveal hero-title text-[clamp(48px,6vw,90px)] leading-[0.92] uppercase text-[#f8f8f6]"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              My
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #f8f8f6",
                  color: "transparent",
                }}
              >
                Toolkit
              </span>
            </h2>
          </div>

          <p
            className="skill-reveal max-w-xs text-sm text-white/40 font-light leading-relaxed"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            Tools and methodologies I use daily to plan, execute, and deliver
            successful software projects.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="skill-reveal bg-[#111] p-8 flex flex-col gap-5 hover:bg-[#1a1a1a] transition-colors duration-300"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${catIdx * 100}ms`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <cat.Icon size={22} strokeWidth={1.5} className="text-[#f5c842]" />
                <h3 className="text-sm uppercase tracking-widest text-white/50 font-medium">
                  {cat.title}
                </h3>
              </div>

              <div className="w-8 h-px bg-[#f5c842]" />

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 text-xs border border-white/15 text-white/70 rounded-full cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="skill-reveal mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <p className="text-white/30 text-sm font-light">
            Constantly evolving — always learning the tools that make teams
            faster and products better.
          </p>
          <div className="flex items-center gap-8">
            {[
              { label: "On-Time Delivery", val: "98%" },
              { label: "Client Satisfaction", val: "95%" },
              { label: "Budget Adherence", val: "100%" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="text-2xl font-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.val}
                </span>
                <span className="text-xs text-white/30">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
