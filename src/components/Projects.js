"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "HealioScan",
    description:
      "Pancreatic Cancer detection AI/ML web platform. Led the project from inception to delivery — coordinating ML engineers, frontend devs, and medical stakeholders to ensure regulatory alignment and on-time launch.",
    tags: ["AI/ML", "Healthcare", "Web Platform", "Python"],
    type: "AI / Healthcare",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    link: "#",
    featured: true,
  },
  {
    id: "02",
    title: "QeraBath Assets",
    description:
      "Bath accessories coupon and marketing cross-platform application. Managed full SDLC including UX research, sprint planning, and coordinating iOS/Android developers to deliver on schedule.",
    tags: ["Cross-Platform", "iOS", "Android", "Marketing"],
    type: "Mobile App",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    link: "#",
    featured: true,
  },
  {
    id: "03",
    title: "Ambaji Temple",
    description:
      "Official website and administrative panel for Ambaji Temple. Defined system requirements, coordinated design and development teams, and oversaw QA to ensure a seamless public-facing and admin experience.",
    tags: ["Web", "Admin Panel", "CMS", "React"],
    type: "Web Platform",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: "04",
    title: "PassportV3",
    description:
      "Android & iOS passport management application. Managed end-to-end delivery including timeline planning, freelancer coordination, and quality assurance across both platforms.",
    tags: ["Android", "iOS", "React Native", "APIs"],
    type: "Mobile App",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: "05",
    title: "Gharsansar",
    description:
      "Full-featured e-commerce website for home essentials. Oversaw product discovery, vendor coordination, sprint reviews, and UAT — ensuring all deliverables met client expectations within budget.",
    tags: ["E-Commerce", "Next.js", "Node.js", "MongoDB"],
    type: "E-Commerce",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: "06",
    title: "Zynext Ventures",
    description:
      "Corporate website for a tech venture firm. Managed scope definition, content strategy, and coordinated design and dev resources to deliver a polished, professional presence.",
    tags: ["Corporate", "Web", "Branding", "CMS"],
    type: "Web Platform",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    link: "#",
    featured: false,
  },
];

const filters = ["All", "AI / Healthcare", "Mobile App", "Web Platform", "E-Commerce"];

export default function Projects() {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".proj-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Big bg number */}
      <div className="section-num select-none">02</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="proj-reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-4"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <span className="w-8 h-px bg-[#111]/30" />
              Selected work
            </span>
            <h2
              className="proj-reveal hero-title text-[clamp(48px,6vw,90px)] leading-[0.92] uppercase text-[#111]"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              Projects
              <br />
              <span className="hero-outline">I&apos;ve Managed</span>
            </h2>
          </div>

          {/* Filters */}
          <div
            className="proj-reveal flex items-center gap-2 flex-wrap"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#111] text-[#f8f8f6]"
                    : "border border-[#111]/20 text-[#111]/50 hover:border-[#111]/60 hover:text-[#111]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-0 border-t border-[#111]/10">
          {filtered.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all */}
        <div
          className="proj-reveal mt-12 flex justify-center"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <a
            href="https://github.com/Marujigar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-[#111] hover:text-[#f8f8f6] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border-b border-[#111]/10 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 100}ms`,
      }}
      ref={(el) => {
        if (el) el.classList.add("proj-reveal");
      }}
    >
      <div className="flex items-center gap-6 py-7 md:py-9 transition-all duration-300">
        {/* Number */}
        <span
          className="text-xs text-[#111]/25 font-light w-10 shrink-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.id}
        </span>

        {/* Title + tags */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <h3 className="hero-title text-[clamp(22px,3vw,42px)] uppercase leading-none text-[#111] group-hover:translate-x-2 transition-transform duration-400">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-[#111]/15 text-[#111]/40 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Type */}
        <span className="hidden md:block text-xs text-[#111]/35 uppercase tracking-wider shrink-0">
          {project.type}
        </span>

        {/* Arrow */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#111] group-hover:text-[#f8f8f6] transition-colors duration-300"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hover image preview */}
      {project.img && (
        <div
          className={`hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-48 md:w-64 aspect-video rounded-xl overflow-hidden pointer-events-none z-20 transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
