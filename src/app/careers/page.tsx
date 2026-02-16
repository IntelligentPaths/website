"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";

/* ── data ─────────────────────────────────────────── */

const values = [
  {
    title: "Builders, Not Talkers",
    text: "You ship things. You\u2019ve built systems that run in production, not just notebooks that demo well. You care about what happens after the proof of concept.",
  },
  {
    title: "Depth Over Breadth",
    text: "You know something deeply \u2014 ML, data engineering, full-stack development, NLP, reinforcement learning. Generalists are great. Generalists with spikes are better.",
  },
  {
    title: "Mission-Aligned",
    text: "You believe AI should be accessible, ethical, and built to help real people. You want to do work that matters, not just work that pays.",
  },
];

/* ── helpers ──────────────────────────────────────── */

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── page ─────────────────────────────────────────── */

export default function CareersPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0a0a0f", paddingTop: 60 }}>
      {/* Fixed atmospheric background */}
      <div className="fixed inset-0 z-0">
        <Atmosphere />
      </div>

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-20">

        {/* ═══ Section 1: Hero ═══ */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "4px",
                color: "rgba(0, 212, 255, 0.7)",
              }}
            >
              // Careers
            </p>
          </FadeIn>

          <FadeIn>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                marginTop: "1rem",
              }}
            >
              We&apos;re Not Hiring{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Everyone.
              </span>
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(180, 200, 220, 0.55)",
                maxWidth: 600,
                marginTop: "1.5rem",
              }}
            >
              Intelligent Paths is a small studio doing serious work. We
              don&apos;t have open reqs and a hiring pipeline. We have a mission
              and room for the right people.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 2: What We Value ═══ */}
        <section className="px-6 py-40 max-w-3xl mx-auto">
          <FadeIn className="text-center mb-28">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                color: "rgba(0, 212, 255, 0.7)",
                marginBottom: "0.75rem",
              }}
            >
              // What We Look For
            </p>
          </FadeIn>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6rem",
              alignItems: "center",
            }}
          >
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.15} className="text-center">
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: "rgba(0, 212, 255, 0.5)",
                    margin: "0 auto 1.75rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#eaf2fc",
                    marginBottom: "1rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "rgba(180, 200, 220, 0.55)",
                    maxWidth: 550,
                    margin: "0 auto",
                  }}
                >
                  {value.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══ Section 3: The Pitch ═══ */}
        <section className="px-6 py-32 text-center">
          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "rgba(180, 200, 220, 0.6)",
                maxWidth: 650,
                margin: "0 auto",
              }}
            >
              We&apos;re building AI systems for healthcare clinics,
              enterprises, and government agencies. We&apos;re developing
              products that scale. And we&apos;re investing in research that
              pushes the field forward. If that sounds like where you want to
              be &mdash; reach out.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 4: CTA ═══ */}
        <section className="px-6 py-32 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#eaf2fc",
              }}
            >
              Think you&apos;re the right{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                fit?
              </span>
            </h2>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.45)",
                marginTop: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              No formal applications. No cover letters. Just tell us what
              you&apos;ve built and why this interests you.
            </p>
          </FadeIn>

          <FadeIn>
            <a
              href="mailto:info@intelligentpaths.com"
              style={{
                display: "inline-block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#00d4ff",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                borderRadius: 6,
                padding: "14px 40px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(0, 212, 255, 0.1)";
                el.style.borderColor = "rgba(0, 212, 255, 0.7)";
                el.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(0, 212, 255, 0.4)";
                el.style.boxShadow = "none";
              }}
            >
              Say Hello
            </a>
          </FadeIn>

        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
