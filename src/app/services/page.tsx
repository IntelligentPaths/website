"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import {
  Compass,
  MessageSquare,
  Workflow,
  BarChart3,
  Code,
  ShieldCheck,
} from "lucide-react";

/* ── data ─────────────────────────────────────────── */

const segments = [
  {
    title: "Small & Mid-Size Business",
    text: "Affordable AI that fits your workflow and budget. Fast timelines, measurable ROI, no enterprise overhead.",
  },
  {
    title: "Enterprise",
    text: "Custom integrations into complex systems. Data infrastructure, predictive modeling, and long-term partnerships that scale with you.",
  },
  {
    title: "Government",
    text: "Secure, compliant solutions built for mission-critical operations. From optimization systems to autonomous decision support.",
  },
];

const services = [
  {
    icon: Compass,
    title: "AI Strategy & Consulting",
    text: "We assess your operations, identify where AI delivers the highest ROI, and build a roadmap to get there. No buzzwords — just a clear plan tied to business outcomes.",
  },
  {
    icon: MessageSquare,
    title: "AI Assistants",
    text: "Custom-trained conversational AI for customer service, lead qualification, and internal support. Designed around your workflows, trained on your data, deployed in weeks.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "From scheduling pipelines to document processing and reporting — we automate the repetitive work so your team can focus on what matters.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    text: "Infrastructure design, ETL development, data warehouses, and dashboards that tell you what's actually happening in your business. Not just charts — answers.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    text: "Full-stack applications built to spec. When off-the-shelf doesn't cut it, we design and build bespoke systems that integrate with your existing tools.",
  },
  {
    icon: ShieldCheck,
    title: "AI Safety & Compliance",
    text: "Guardrails, responsible deployment, and regulatory alignment. We build AI systems that are safe by design — from healthcare to government.",
  },
];

/* ── reusable fade-up wrapper ─────────────────────── */

function FadeIn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── page ─────────────────────────────────────────── */

export default function ServicesPage() {
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
              // What We Build
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
              Solutions That Actually{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ship.
              </span>
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.45)",
                maxWidth: 600,
                marginTop: "1.5rem",
              }}
            >
              From strategy to deployment — we build AI systems that solve real
              problems for organizations at every scale.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 2: Who We Serve ═══ */}
        <section className="px-6 py-32 max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                color: "rgba(0, 212, 255, 0.7)",
                marginBottom: "0.75rem",
              }}
            >
              // Who We Serve
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 600,
                color: "#eaf2fc",
              }}
            >
              Built for Every Scale
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg) => (
              <FadeIn key={seg.title}>
                <div
                  className="h-full rounded-xl p-8 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(0, 212, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(0, 212, 255, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(0, 212, 255, 0.08)";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#eaf2fc",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {seg.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "rgba(180, 200, 220, 0.45)",
                    }}
                  >
                    {seg.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══ Section 3: Our Services ═══ */}
        <section className="px-6 py-32 max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                color: "rgba(0, 212, 255, 0.7)",
                marginBottom: "0.75rem",
              }}
            >
              // Our Services
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 600,
                color: "#eaf2fc",
              }}
            >
              What We Do
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <FadeIn key={svc.title}>
                  <div
                    className="group h-full rounded-xl p-8 transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(0, 212, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(0, 212, 255, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(0, 212, 255, 0.08)";
                    }}
                  >
                    {/* Accent line + icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="transition-all duration-300"
                        style={{
                          width: 24,
                          height: 2,
                          background: "rgba(0, 212, 255, 0.5)",
                        }}
                      />
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        style={{ color: "rgba(0, 212, 255, 0.7)" }}
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#eaf2fc",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "rgba(180, 200, 220, 0.45)",
                      }}
                    >
                      {svc.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
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
              Ready to build something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                real?
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
              Every project starts with a conversation. Tell us what you&apos;re
              working on.
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
                textTransform: "uppercase" as const,
                color: "#00d4ff",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                borderRadius: "6px",
                padding: "14px 40px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(0, 212, 255, 0.1)";
                el.style.borderColor = "rgba(0, 212, 255, 0.7)";
                el.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
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
