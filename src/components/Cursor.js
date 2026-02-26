"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);
  const rafRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");

  const mouse = useRef({ x: 0, y: 0 });
  const trails = useRef(Array(8).fill({ x: 0, y: 0 }));

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      // Update main cursor immediately
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onOver = (e) => {
      const a = e.target.closest("a");
      const btn = e.target.closest("button");
      if (a || btn) {
        setHovering(true);
        setLabel(a?.dataset?.cursor || btn?.dataset?.cursor || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Animate trailing dots
    const animate = () => {
      const newTrails = [...trails.current];
      newTrails[0] = {
        x: newTrails[0].x + (mouse.current.x - newTrails[0].x) * 0.25,
        y: newTrails[0].y + (mouse.current.y - newTrails[0].y) * 0.25,
      };
      for (let i = 1; i < newTrails.length; i++) {
        newTrails[i] = {
          x: newTrails[i].x + (newTrails[i - 1].x - newTrails[i].x) * 0.35,
          y: newTrails[i].y + (newTrails[i - 1].y - newTrails[i].y) * 0.35,
        };
      }
      trails.current = newTrails;

      trailsRef.current.forEach((el, i) => {
        if (!el) return;
        const t = newTrails[i];
        const scale = 1 - i * 0.1;
        const size = Math.max(3, 10 - i * 1.1);
        el.style.transform = `translate(${t.x}px, ${t.y}px)`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.marginLeft = `-${size / 2}px`;
        el.style.marginTop = `-${size / 2}px`;
        el.style.opacity = `${(1 - i / newTrails.length) * 0.5}`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  const baseStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
    mixBlendMode: "difference",
    willChange: "transform",
    zIndex: 999999,
  };

  return createPortal(
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        style={{
          ...baseStyle,
          width: clicking ? "8px" : hovering ? "64px" : "14px",
          height: clicking ? "8px" : hovering ? "64px" : "14px",
          marginLeft: clicking ? "-4px" : hovering ? "-32px" : "-7px",
          marginTop: clicking ? "-4px" : hovering ? "-32px" : "-7px",
          background: hovering ? "#fff" : "#fff",
          opacity: visible ? 1 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), margin 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease",
        }}
      >
        {/* Label inside expanded cursor */}
        {hovering && label && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#111",
              mixBlendMode: "normal",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Trailing dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          style={{
            ...baseStyle,
            width: "10px",
            height: "10px",
            background: "#fff",
            opacity: 0,
            zIndex: 999998,
            transition: "opacity 0.3s ease",
            display: visible && !hovering ? "block" : "none",
          }}
        />
      ))}
    </>,
    document.body,
  );
}
