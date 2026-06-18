"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Trophy, Award, ScrollText } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Project Manager",
    company: "Santushti Infotech Pvt. Ltd. (Fiverr Pro)",
    location: "Ahmedabad",
    period: "September 2024 – Present",
    current: true,
    description: [
      "Led and delivered multiple high-budget projects across diverse industries, ensuring on-time and within-budget completion.",
      "Acted as the primary communication bridge across all project phases, coordinating effectively with cross-functional teams and stakeholders in the US and India.",
      "Managed client expectations and project execution across multiple time zones, maintaining seamless collaboration and service delivery.",
    ],
    tags: ["Fiverr Pro", "Client Management", "Cross-functional Teams", "Multi-timezone"],
  },
  {
    id: "02",
    role: "Software Analyst & Project Manager",
    company: "BinTech Services",
    location: "Ahmedabad",
    period: "December 2023 – July 2024",
    current: false,
    description: [
      "Led software development projects from initiation to completion, ensuring alignment with business goals and client requirements.",
      "Conducted comprehensive software analysis to define system requirements, design effective solutions, and oversee testing and quality assurance.",
      "Managed diverse projects including HealioScan (AI/ML), QeraBath Assets, AmbajiTemple, Zynext Ventures, PassportV3, and Gharsansar.",
    ],
    tags: ["Software Analysis", "AI/ML", "QA", "SDLC", "Multi-platform"],
  },
  // {
  //   id: "03",
  //   role: "Lab In-charge",
  //   company: "C.Z.M. Gosrani B.C.A. College",
  //   location: "Jamnagar",
  //   period: "June 2022 – August 2022",
  //   current: false,
  //   description: [
  //     "Managed hardware and software configurations as Lab-in-Charge for the college's computer laboratory.",
  //     "Delivered lectures on Soft Lab - introducing students to trending and industry-relevant software tools used in the market.",
  //   ],
  //   tags: ["Lab Management", "Hardware Config", "Software Config", "Teaching"],
  // },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".exp-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
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
      id="experience"
      ref={ref}
      className="relative py-28 md:py-40 bg-[#f0f0ec] overflow-hidden"
    >
      {/* Big bg text */}
      <div
        className="absolute top-0 left-0 text-[clamp(80px,14vw,180px)] font-black uppercase leading-none text-[#111]/[0.03] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Experience
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span
            className="exp-reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-4"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <span className="w-8 h-px bg-[#111]/30" />
            Professional History
          </span>
          <h2
            className="exp-reveal hero-title text-[clamp(48px,6vw,90px)] leading-[0.92] uppercase text-[#111]"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            Work
            <br />
            <span className="hero-outline">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[26px] top-0 bottom-0 w-px bg-[#111]/10 hidden md:block" />

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="exp-reveal relative flex gap-8 md:gap-12 pb-14 md:pb-20 last:pb-0"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 150}ms`,
              }}
            >
              {/* Dot */}
              <div className="hidden md:flex flex-col items-center shrink-0 mt-2">
                <div
                  className={`w-3 h-3 rounded-full border-2 z-10 ${exp.current
                    ? "bg-[#f5c842] border-[#f5c842]"
                    : "bg-[#f0f0ec] border-[#111]/30"
                    }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Line 1: ID + Role */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="hero-title text-[clamp(22px,3vw,40px)] uppercase leading-none text-[#111]/25"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.id}
                  </span>
                  <h3
                    className="hero-title text-[clamp(22px,3vw,40px)] uppercase leading-none text-[#111]"
                  >
                    {exp.role}
                  </h3>
                </div>

                {/* Line 2: Company + Current badge */}
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-[#111]/50 font-light">
                    {exp.company}
                  </p>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#f5c842]/20 rounded-full">
                      <span className="text-[10px] font-medium text-[#111]/60 uppercase tracking-wider">
                        Current
                      </span>
                    </span>
                  )}
                </div>

                {/* Line 3: Period + Location */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs text-[#111]/40 font-light uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <span className="text-xs text-[#111]/30 font-light">
                    {exp.location}
                  </span>
                </div>

                {/* Description bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#111]/60 font-light leading-relaxed">
                      <span className="text-[#f5c842] mt-1.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider border border-[#111]/15 text-[#111]/40 rounded-full bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div
          className="exp-reveal mt-20 border-t border-[#111]/10 pt-12"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-8">
            <span className="w-6 h-px bg-[#111]/30" />
            Certifications &amp; Achievements
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                Icon: GraduationCap,
                text: "Participated in Cyber Shadez IT Event Management & CSR Trip at GLS University",
              },
              {
                Icon: Trophy,
                text: "Awarded \"Excellent Leader\" and \"Student of the Year\" - exceptional leadership during bachelor's degree",
              },
              {
                Icon: Award,
                text: "Multiple certificates in co-curricular activities - rangoli competitions, ramp walks, best-out-of-waste",
              },
              {
                Icon: ScrollText,
                text: "Completed C, C++, and Tally courses from Rashtriya Saksharta Mission Sanstha (Government-recognized)",
              },
            ].map((ach, i) => (
              <div
                key={i}
                className="exp-reveal flex gap-3 p-4 bg-white rounded-xl border border-[#111]/8"
                style={{
                  opacity: 0,
                  transform: "translateY(15px)",
                  transition: `all 0.6s ease ${0.6 + i * 0.1}s`,
                }}
              >
                <ach.Icon size={20} strokeWidth={1.5} className="text-[#f5c842] shrink-0 mt-0.5" />
                <p className="text-sm text-[#111]/70 font-light leading-relaxed">
                  {ach.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
