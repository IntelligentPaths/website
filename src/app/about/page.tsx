"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

/* ── data ─────────────────────────────────────────── */

const pillars = [
  {
    title: "AI Should Work for People",
    text: "The technology exists to eliminate the tedious, the repetitive, the soul-crushing busywork \u2014 so humans can do what they\u2019re actually good at. We build systems that augment people, not replace them.",
  },
  {
    title: "Intelligence Should Be Accessible",
    text: "World-class AI shouldn\u2019t require a seven-figure budget. We believe every organization \u2014 from a five-person clinic to a government agency \u2014 deserves access to intelligent systems that make their work better.",
  },
  {
    title: "Responsible by Default",
    text: "Building AI without guardrails isn\u2019t innovation \u2014 it\u2019s negligence. Every system we ship is designed with safety, compliance, and ethical deployment baked in from day one. Not as an afterthought. As the foundation.",
  },
];

/* ── reusable fade-up ─────────────────────────────── */

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
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── constellation decoration (founder section) ──── */

function ConstellationDecor() {
  const nodes = [
    { cx: 80, cy: 40 },
    { cx: 40, cy: 120 },
    { cx: 120, cy: 160 },
    { cx: 60, cy: 240 },
    { cx: 130, cy: 300 },
    { cx: 50, cy: 370 },
    { cx: 110, cy: 430 },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        width: 180,
        height: 480,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg
        width="180"
        height="480"
        viewBox="0 0 180 480"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* connections */}
        {nodes.map((node, i) => {
          if (i === 0) return null;
          const prev = nodes[i - 1];
          return (
            <line
              key={`line-${i}`}
              x1={prev.cx}
              y1={prev.cy}
              x2={node.cx}
              y2={node.cy}
              stroke="rgba(0, 212, 255, 0.1)"
              strokeWidth="0.8"
            />
          );
        })}
        {/* cross-connections for depth */}
        <line x1={80} y1={40} x2={120} y2={160} stroke="rgba(0, 212, 255, 0.05)" strokeWidth="0.5" />
        <line x1={40} y1={120} x2={130} y2={300} stroke="rgba(0, 212, 255, 0.05)" strokeWidth="0.5" />
        <line x1={60} y1={240} x2={110} y2={430} stroke="rgba(0, 212, 255, 0.05)" strokeWidth="0.5" />

        {/* nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* glow */}
            <circle cx={node.cx} cy={node.cy} r="12" fill="rgba(0, 212, 255, 0.04)" />
            {/* ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="none"
              stroke="rgba(0, 212, 255, 0.15)"
              strokeWidth="0.5"
            >
              <animate
                attributeName="r"
                values="6;9;6"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* core dot */}
            <circle cx={node.cx} cy={node.cy} r="2.5" fill="rgba(0, 212, 255, 0.5)">
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur={`${2.5 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

/* ── CTA button ──────────────────────────────────── */

function CTAButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const handleEnter = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = e.currentTarget;
      if (primary) {
        el.style.background = "rgba(0, 212, 255, 0.1)";
        el.style.borderColor = "rgba(0, 212, 255, 0.7)";
        el.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.15)";
      } else {
        el.style.borderColor = "rgba(200, 215, 230, 0.3)";
        el.style.color = "#eaf2fc";
      }
    },
    [primary],
  );

  const handleLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = e.currentTarget;
      if (primary) {
        el.style.background = "transparent";
        el.style.borderColor = "rgba(0, 212, 255, 0.4)";
        el.style.boxShadow = "none";
      } else {
        el.style.borderColor = "rgba(200, 215, 230, 0.12)";
        el.style.color = "rgba(200, 215, 230, 0.5)";
      }
    },
    [primary],
  );

  return (
    <Link
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: "inline-block",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "14px 40px",
        borderRadius: 6,
        transition: "all 0.3s ease",
        ...(primary
          ? {
              color: "#00d4ff",
              border: "1px solid rgba(0, 212, 255, 0.4)",
            }
          : {
              color: "rgba(200, 215, 230, 0.5)",
              border: "1px solid rgba(200, 215, 230, 0.12)",
            }),
      }}
    >
      {children}
    </Link>
  );
}

/* ── page ─────────────────────────────────────────── */

export default function AboutPage() {
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
              // Who We Are
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
              Built by an Engineer.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Driven by Purpose.
              </span>
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.5)",
                maxWidth: 640,
                marginTop: "1.5rem",
              }}
            >
              Intelligent Paths is an AI and machine learning engineering studio
              founded on a simple belief: this technology should work for
              everyone.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 2: The Founder ═══ */}
        <section className="px-6 py-32 max-w-6xl mx-auto">
          <div
            className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24"
          >
            {/* Text side */}
            <div className="flex-1 min-w-0">
              <FadeIn>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "3px",
                    color: "rgba(0, 212, 255, 0.7)",
                    marginBottom: "1.5rem",
                  }}
                >
                  // The Founder
                </p>
              </FadeIn>

              <FadeIn>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#eaf2fc",
                    marginBottom: "0.5rem",
                  }}
                >
                  Waleed Amer
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(0, 212, 255, 0.8)",
                    marginBottom: "2rem",
                  }}
                >
                  Data Scientist &amp; ML Engineer
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "rgba(180, 200, 220, 0.6)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Intelligent Paths is led by Waleed Amer &mdash; a data
                  scientist and machine learning engineer who builds AI systems
                  that organizations actually use. Not slide decks. Not proofs of
                  concept that sit on a shelf. Production systems that ship,
                  perform, and deliver measurable results.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "rgba(180, 200, 220, 0.6)",
                  }}
                >
                  His background spans machine learning, natural language
                  processing, reinforcement learning, and production data
                  systems &mdash; including work with Multi-Agent Reinforcement
                  Learning, one of the most sophisticated approaches to
                  real-world decision automation. This technical depth is the
                  foundation everything at Intelligent Paths is built on.
                </p>
              </FadeIn>
            </div>

            {/* Decorative constellation */}
            <div className="hidden lg:flex items-center justify-center">
              <ConstellationDecor />
            </div>
          </div>
        </section>

        {/* ═══ Section 3: The Philosophy ═══ */}
        <section
          className="px-6 py-32"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.015) 30%, rgba(0, 212, 255, 0.015) 70%, transparent 100%)",
            borderTop: "1px solid rgba(0, 212, 255, 0.06)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.06)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-24">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "3px",
                  color: "rgba(0, 212, 255, 0.7)",
                  marginBottom: "0.75rem",
                }}
              >
                // Our Philosophy
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#eaf2fc",
                }}
              >
                What We Believe
              </h2>
            </FadeIn>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5rem",
                alignItems: "center",
              }}
            >
              {pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={i * 0.15} className="text-center">
                  {/* Accent dash */}
                  <div
                    style={{
                      width: 32,
                      height: 2,
                      background: "rgba(0, 212, 255, 0.5)",
                      margin: "0 auto 1.5rem",
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
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "rgba(180, 200, 220, 0.55)",
                      maxWidth: 600,
                      margin: "0 auto",
                    }}
                  >
                    {pillar.text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Section 4: The Vision ═══ */}
        <section className="px-6 py-32 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                color: "rgba(0, 212, 255, 0.7)",
                marginBottom: "0.75rem",
              }}
            >
              // The Vision
            </p>
          </FadeIn>

          <FadeIn>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                marginBottom: "2rem",
              }}
            >
              We&apos;re Building Toward Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bigger.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(180, 200, 220, 0.55)",
                maxWidth: 700,
                margin: "0 auto 1.5rem",
              }}
            >
              Intelligent Paths isn&apos;t just a services company. We invest in
              research and develop technology that pushes the field forward.
              Every engagement teaches us something. Every solution we ship makes
              the next one smarter.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(180, 200, 220, 0.55)",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              From custom AI assistants to energy grid optimization to
              autonomous decision systems &mdash; the work we do today funds the
              breakthroughs of tomorrow. The goal isn&apos;t to keep up with AI.
              It&apos;s to advance it.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 5: CTA ═══ */}
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
              Want to work with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                us?
              </span>
            </h2>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.45)",
                marginTop: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              Whether you need a solution built or want to join the mission.
            </p>
          </FadeIn>

          <FadeIn>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <CTAButton href="/contact" primary>
                Start a Project
              </CTAButton>
              <CTAButton href="/careers">View Careers</CTAButton>
            </div>
          </FadeIn>
        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
