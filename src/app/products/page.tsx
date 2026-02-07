"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import {
  Zap,
  Activity,
  Globe,
  Shield,
  Users,
  HeartPulse,
  Clock,
} from "lucide-react";

/* ── data ─────────────────────────────────────────── */

const talosStats = [
  { icon: Users, label: "Multi-Tenant" },
  { icon: HeartPulse, label: "HIPAA-Aware" },
  { icon: Clock, label: "99.9% Uptime" },
];

const rdProjects = [
  {
    name: "Project Helios",
    status: "IN RESEARCH",
    icon: Zap,
    teaser:
      "Intelligent energy grid optimization using multi-agent reinforcement learning. Reducing waste. Maximizing renewable output.",
  },
  {
    name: "Project Pulse",
    status: "EARLY DEVELOPMENT",
    icon: Activity,
    teaser:
      "Wearable-integrated AI for real-time health monitoring and predictive wellness. Your body\u2019s data, made actionable.",
  },
  {
    name: "Project Atlas",
    status: "IN RESEARCH",
    icon: Globe,
    teaser:
      "Autonomous logistics and supply chain optimization. Smarter routing, fewer resources, better outcomes at scale.",
  },
  {
    name: "Project Cipher",
    status: "PROTOTYPE",
    icon: Shield,
    teaser:
      "Next-generation AI safety and alignment tooling. Building the guardrails the industry needs.",
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
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Talos widget mockup ─────────────────────────── */

function TalosWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      style={{
        width: "100%",
        maxWidth: 340,
        borderRadius: 16,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(0, 212, 255, 0.1)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid rgba(0, 212, 255, 0.06)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00ff88",
            boxShadow: "0 0 8px rgba(0, 255, 136, 0.4)",
          }}
        />
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#eaf2fc",
            letterSpacing: "1px",
          }}
        >
          Talos Assistant
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            color: "rgba(0, 255, 136, 0.6)",
            letterSpacing: "1px",
          }}
        >
          ONLINE
        </span>
      </div>

      {/* Chat body */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Bot message */}
        <div
          style={{
            alignSelf: "flex-start",
            maxWidth: "85%",
            padding: "10px 14px",
            borderRadius: "12px 12px 12px 4px",
            background: "rgba(0, 212, 255, 0.06)",
            border: "1px solid rgba(0, 212, 255, 0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.5,
              color: "rgba(200, 215, 230, 0.7)",
              margin: 0,
            }}
          >
            Hi! I&apos;m your AI assistant. How can I help you today?
          </p>
        </div>

        {/* User message */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "85%",
            padding: "10px 14px",
            borderRadius: "12px 12px 4px 12px",
            background: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.5,
              color: "rgba(234, 242, 252, 0.85)",
              margin: 0,
            }}
          >
            I&apos;d like to schedule a consultation.
          </p>
        </div>

        {/* Bot reply */}
        <div
          style={{
            alignSelf: "flex-start",
            maxWidth: "85%",
            padding: "10px 14px",
            borderRadius: "12px 12px 12px 4px",
            background: "rgba(0, 212, 255, 0.06)",
            border: "1px solid rgba(0, 212, 255, 0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.5,
              color: "rgba(200, 215, 230, 0.7)",
              margin: 0,
            }}
          >
            I&apos;d be happy to help with that. Let me pull up available times&hellip;
          </p>
        </div>

        {/* Typing indicator */}
        <div style={{ alignSelf: "flex-start", display: "flex", gap: 4, padding: "6px 0" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(0, 212, 255, 0.4)",
                animation: `statusPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div
        style={{
          padding: "12px 20px",
          borderTop: "1px solid rgba(0, 212, 255, 0.06)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(180, 200, 220, 0.25)",
          }}
        >
          Type a message&hellip;
        </span>
      </div>
    </motion.div>
  );
}

/* ── page ─────────────────────────────────────────── */

export default function ProductsPage() {
  const handleBtnEnter = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, variant: "solid" | "outline") => {
      const el = e.currentTarget;
      if (variant === "solid") {
        el.style.background = "rgba(0, 212, 255, 0.25)";
        el.style.boxShadow = "0 0 24px rgba(0, 212, 255, 0.2)";
      } else {
        el.style.borderColor = "rgba(0, 212, 255, 0.5)";
        el.style.color = "#00d4ff";
      }
    },
    [],
  );

  const handleBtnLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, variant: "solid" | "outline") => {
      const el = e.currentTarget;
      if (variant === "solid") {
        el.style.background = "rgba(0, 212, 255, 0.12)";
        el.style.boxShadow = "0 0 16px rgba(0, 212, 255, 0.08)";
      } else {
        el.style.borderColor = "rgba(0, 212, 255, 0.2)";
        el.style.color = "rgba(200, 215, 230, 0.5)";
      }
    },
    [],
  );

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
              // What We&apos;re Building
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
              Products &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Applied Research
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
                maxWidth: 580,
                marginTop: "1.5rem",
              }}
            >
              Shipping intelligent systems today. Developing the breakthroughs
              of tomorrow.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 2: Talos ═══ */}
        <section className="px-6 py-32 max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 rounded-2xl p-8 md:p-12"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(0, 212, 255, 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Text side */}
              <div className="flex-1 min-w-0">
                {/* Status badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: "1.25rem",
                    padding: "5px 14px",
                    borderRadius: 20,
                    background: "rgba(0, 255, 136, 0.06)",
                    border: "1px solid rgba(0, 255, 136, 0.15)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#00ff88",
                      boxShadow: "0 0 8px rgba(0, 255, 136, 0.5)",
                      animation: "statusPulse 2s ease-in-out infinite",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      fontWeight: 400,
                      letterSpacing: "2px",
                      color: "#00ff88",
                    }}
                  >
                    LIVE
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    color: "#eaf2fc",
                    marginBottom: "0.4rem",
                  }}
                >
                  Talos
                </h2>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#00d4ff",
                    marginBottom: "1.5rem",
                  }}
                >
                  AI Front-Desk Platform
                </p>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(180, 200, 220, 0.6)",
                    marginBottom: "2rem",
                  }}
                >
                  A multi-tenant AI assistant platform that gives businesses an
                  intelligent front desk &mdash; handling visitor inquiries,
                  qualifying leads, and managing scheduling around the clock.
                  Secure by design with enterprise-grade tenant isolation,
                  industry-specific guardrails, and a self-service portal for
                  business owners.
                </p>

                {/* Stats */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {talosStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          style={{ color: "rgba(0, 212, 255, 0.6)" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "rgba(200, 215, 230, 0.55)",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Link
                    href="/products/talos"
                    onMouseEnter={(e) => handleBtnEnter(e, "solid")}
                    onMouseLeave={(e) => handleBtnLeave(e, "solid")}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      color: "#eaf2fc",
                      background: "rgba(0, 212, 255, 0.12)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      borderRadius: 6,
                      padding: "12px 32px",
                      boxShadow: "0 0 16px rgba(0, 212, 255, 0.08)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="https://portal.intelligentpaths.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleBtnEnter(e, "outline")}
                    onMouseLeave={(e) => handleBtnLeave(e, "outline")}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      color: "rgba(200, 215, 230, 0.5)",
                      background: "transparent",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      borderRadius: 6,
                      padding: "12px 32px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Client Portal
                  </Link>
                </div>
              </div>

              {/* Widget mockup */}
              <div className="flex justify-center">
                <TalosWidget />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ═══ Section 3: Applied Research Lab ═══ */}
        <section className="px-6 py-32">
          {/* Section divider */}
          <div
            style={{
              width: 80,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)",
              margin: "0 auto 4rem",
            }}
          />

          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-20">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "3px",
                  color: "rgba(0, 212, 255, 0.7)",
                  marginBottom: "0.75rem",
                }}
              >
                // R&amp;D Lab
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#eaf2fc",
                  marginBottom: "0.75rem",
                }}
              >
                What&apos;s Next
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(180, 200, 220, 0.45)",
                  maxWidth: 480,
                  margin: "0 auto",
                }}
              >
                Active research programs exploring the frontier of applied AI.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rdProjects.map((project, i) => {
                const Icon = project.icon;
                return (
                  <FadeIn key={project.name} delay={i * 0.1}>
                    <div
                      className="h-full rounded-xl p-8 transition-all duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(0, 212, 255, 0.06)",
                        backdropFilter: "blur(8px)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(0, 212, 255, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(0, 212, 255, 0.06)";
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: "rgba(0, 212, 255, 0.05)",
                          border: "1px solid rgba(0, 212, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1.25rem",
                        }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          style={{ color: "rgba(0, 212, 255, 0.6)" }}
                        />
                      </div>

                      {/* Name + status */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "10px",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#eaf2fc",
                            margin: 0,
                          }}
                        >
                          {project.name}
                        </h3>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.55rem",
                            letterSpacing: "1.5px",
                            color: "rgba(0, 212, 255, 0.5)",
                            padding: "3px 10px",
                            borderRadius: 12,
                            background: "rgba(0, 212, 255, 0.04)",
                            border: "1px solid rgba(0, 212, 255, 0.08)",
                          }}
                        >
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "rgba(0, 212, 255, 0.5)",
                              animation: "statusPulse 2.5s ease-in-out infinite",
                              display: "inline-block",
                            }}
                          />
                          {project.status}
                        </span>
                      </div>

                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 300,
                          lineHeight: 1.7,
                          color: "rgba(180, 200, 220, 0.45)",
                          margin: 0,
                        }}
                      >
                        {project.teaser}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
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
              Want{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                early access?
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
                maxWidth: 540,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              We partner with forward-thinking organizations to pilot new
              technology. If you&apos;re interested in what&apos;s coming,
              let&apos;s talk.
            </p>
          </FadeIn>

          <FadeIn>
            <Link
              href="/contact"
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
              Get in Touch
            </Link>
          </FadeIn>
        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
