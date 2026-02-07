"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const hexRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      }

      if (hexRef.current) {
        hexRef.current.style.clipPath = `circle(120px at ${x}px ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Cyan glow following cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(0,212,255,0.02) 40%, transparent 70%)",
          transform: "translate(-200px, -200px)",
          willChange: "transform",
        }}
      />

      {/* Hex reveal near cursor */}
      <svg
        ref={hexRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-40"
        style={{ clipPath: "circle(0px at -200px -200px)" }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hexReveal"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <path
              d="M30,0 L60,15 L60,37 L30,52 L0,37 L0,15 Z"
              fill="none"
              stroke="rgba(0,212,255,0.12)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexReveal)" />
      </svg>
    </>
  );
}
