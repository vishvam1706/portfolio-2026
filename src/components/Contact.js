"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".contact-reveal")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 100);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual form handling (e.g. Resend, Formspree, etc.)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Big bg number */}
      <div className="section-num select-none">03</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Giant CTA */}
        <div className="text-center mb-20 md:mb-28">
          <span
            className="contact-reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111]/40 mb-6"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <span className="w-8 h-px bg-[#111]/30" />
            Get in touch
            <span className="w-8 h-px bg-[#111]/30" />
          </span>

          <h2
            className="contact-reveal hero-title text-[clamp(60px,10vw,150px)] leading-[0.88] uppercase text-[#111]"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            Let&apos;s
            <br />
            <span className="hero-outline">Work</span>
            <br />
            Together.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left info */}
          <div className="flex flex-col gap-10">
            <div
              className="contact-reveal"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "all 0.7s ease 0.1s",
              }}
            >
              <p className="text-[#111]/60 text-base font-light leading-relaxed max-w-sm">
                Have a project that needs experienced project management?
                Looking to turn a complex idea into a shipping product? Let&apos;s talk.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {[
                {
                  label: "Email",
                  value: "jigarmaru31@gmail.com",
                  href: "mailto:jigarmaru31@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+91 81411 55884",
                  href: "tel:+918141155884",
                },
                {
                  label: "LinkedIn",
                  value: "/in/jigarmaru",
                  href: "https://linkedin.com/in/jigarmaru",
                },
                {
                  label: "GitHub",
                  value: "@Marujigar",
                  href: "https://github.com/Marujigar",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="contact-reveal"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: `all 0.7s ease ${0.2 + i * 0.08}s`,
                  }}
                >
                  <span className="text-xs uppercase tracking-widest text-[#111]/30 block mb-1">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[#111] font-medium hover:opacity-50 transition-opacity"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="contact-reveal inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full w-fit"
              style={{
                opacity: 0,
                transform: "translateY(15px)",
                transition: "all 0.7s ease 0.5s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-700 font-medium">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div
              className="contact-reveal"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "all 0.7s ease 0.15s",
              }}
            >
              <label className="text-xs uppercase tracking-widest text-[#111]/30 block mb-2">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                required
                className="contact-input"
              />
            </div>

            <div
              className="contact-reveal"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "all 0.7s ease 0.22s",
              }}
            >
              <label className="text-xs uppercase tracking-widest text-[#111]/30 block mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="contact-input"
              />
            </div>

            <div
              className="contact-reveal"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "all 0.7s ease 0.29s",
              }}
            >
              <label className="text-xs uppercase tracking-widest text-[#111]/30 block mb-2">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                className="contact-input resize-none"
              />
            </div>

            <div
              className="contact-reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.7s ease 0.36s",
              }}
            >
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "sent"
                    ? "bg-green-500 text-white"
                    : "bg-[#111] text-[#f8f8f6] hover:bg-[#333]"
                }`}
              >
                {status === "sending" && (
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {status === "sent"
                  ? "✓ Message Sent!"
                  : status === "sending"
                    ? "Sending..."
                    : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
