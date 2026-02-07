"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import {
  Code,
  Settings,
  Zap,
  MessageSquare,
  UserPlus,
  Shield,
  LayoutDashboard,
  Lock,
  BarChart3,
  Check,
  Database,
  KeyRound,
  HeartPulse,
  ClipboardList,
} from "lucide-react";

/* ── data ─────────────────────────────────────────── */

const steps = [
  {
    icon: Code,
    title: "Embed",
    text: "Drop a single script tag on your website. One line of code, instant AI front desk.",
  },
  {
    icon: Settings,
    title: "Configure",
    text: "Set your hours, services, FAQs, and personality through the self-service portal. No developer needed.",
  },
  {
    icon: Zap,
    title: "Go Live",
    text: "Your AI assistant starts handling visitors immediately. Capture leads, answer questions, schedule appointments.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    text: "Powered by Claude AI. Context-aware responses that understand your business, remember the conversation, and know when to escalate.",
  },
  {
    icon: UserPlus,
    title: "Lead Capture",
    text: "Automatically collects visitor contact information and service interest. Email notifications the moment a lead comes in.",
  },
  {
    icon: Shield,
    title: "Industry Guardrails",
    text: "Healthcare-aware, legally cautious, financially responsible. Built-in safety rails that prevent your AI from saying the wrong thing.",
  },
  {
    icon: LayoutDashboard,
    title: "Self-Service Portal",
    text: "Update hours, FAQs, services, and AI behavior without touching code. Preview changes before they go live.",
  },
  {
    icon: Lock,
    title: "Multi-Tenant Isolation",
    text: "PostgreSQL Row-Level Security ensures every tenant\u2019s data is completely isolated. Not just application-level \u2014 database-enforced.",
  },
  {
    icon: BarChart3,
    title: "Analytics & ROI",
    text: "Track conversations, lead conversions, top questions, and deflection rates. Prove the value with real numbers.",
  },
];

const basicFeatures = [
  "AI front-desk assistant",
  "Haiku model (fast, efficient)",
  "~25,000 conversations/month included",
  "Knowledge base management",
  "Lead capture with email alerts",
  "Basic analytics dashboard",
  "Industry guardrails",
  "Email support",
];

const proFeatures = [
  "Everything in Basic",
  "Sonnet model (smarter, more nuanced)",
  "Higher usage capacity included",
  "Custom AI persona & instructions",
  "Scheduling integration",
  "Multiple allowed domains",
  "Lead export & webhook integration",
  "Dedicated onboarding call",
  "Priority support",
];

const security = [
  {
    icon: Database,
    title: "Row-Level Security",
    text: "Every query tenant-scoped at the database level. PostgreSQL RLS, not middleware.",
  },
  {
    icon: KeyRound,
    title: "Encrypted Everything",
    text: "TLS in transit. Secrets in GCP Secret Manager. API keys peppered and hashed.",
  },
  {
    icon: HeartPulse,
    title: "HIPAA-Aware",
    text: "Emergency detection, medical advice refusal, scheduling-first responses. Built for healthcare.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    text: "Every configuration change logged with before/after snapshots, actor, timestamp, and IP.",
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

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.8rem",
        letterSpacing: "3px",
        color: "rgba(0, 212, 255, 0.7)",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
        fontWeight: 600,
        color: "#eaf2fc",
      }}
    >
      {children}
    </h2>
  );
}

function CTABtn({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const solid = variant === "solid";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        display: "inline-block",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "13px 36px",
        borderRadius: 6,
        transition: "all 0.3s ease",
        ...(solid
          ? {
              color: "#eaf2fc",
              background: "rgba(0, 212, 255, 0.12)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              boxShadow: "0 0 16px rgba(0, 212, 255, 0.08)",
            }
          : {
              color: "rgba(200, 215, 230, 0.45)",
              background: "transparent",
              border: "1px solid rgba(200, 215, 230, 0.12)",
            }),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (solid) {
          el.style.background = "rgba(0, 212, 255, 0.22)";
          el.style.boxShadow = "0 0 24px rgba(0, 212, 255, 0.18)";
        } else {
          el.style.borderColor = "rgba(0, 212, 255, 0.4)";
          el.style.color = "#00d4ff";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (solid) {
          el.style.background = "rgba(0, 212, 255, 0.12)";
          el.style.boxShadow = "0 0 16px rgba(0, 212, 255, 0.08)";
        } else {
          el.style.borderColor = "rgba(200, 215, 230, 0.12)";
          el.style.color = "rgba(200, 215, 230, 0.45)";
        }
      }}
    >
      {children}
    </Link>
  );
}

/* ── widget preview ──────────────────────────────── */

function WidgetPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const bubble = (
    from: "bot" | "user",
    text: string,
  ): React.ReactNode => {
    const isBot = from === "bot";
    return (
      <div
        style={{
          alignSelf: isBot ? "flex-start" : "flex-end",
          maxWidth: "82%",
          padding: "10px 14px",
          borderRadius: isBot ? "12px 12px 12px 4px" : "12px 12px 4px 12px",
          background: isBot ? "rgba(0, 212, 255, 0.06)" : "rgba(0, 212, 255, 0.1)",
          border: `1px solid rgba(0, 212, 255, ${isBot ? "0.08" : "0.15"})`,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            lineHeight: 1.55,
            color: isBot ? "rgba(200, 215, 230, 0.7)" : "rgba(234, 242, 252, 0.85)",
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        width: 320,
        maxWidth: "100%",
        borderRadius: 16,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(0, 212, 255, 0.12)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.06), 0 20px 60px rgba(0, 0, 0, 0.3)",
        animation: "widgetFloat 6s ease-in-out infinite",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 18px",
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
            animation: "statusPulse 2s ease-in-out infinite",
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
          Chat with us
        </span>
      </div>

      {/* Messages */}
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minHeight: 280,
        }}
      >
        {bubble("bot", "Hi! How can I help you today?")}
        {bubble("user", "What are your hours?")}
        {bubble(
          "bot",
          "We\u2019re open Monday through Friday, 9am to 5pm. Would you like to schedule an appointment?",
        )}
      </div>

      {/* Input bar */}
      <div
        style={{
          padding: "12px 18px",
          borderTop: "1px solid rgba(0, 212, 255, 0.06)",
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

/* ── pricing card ────────────────────────────────── */

function PricingCard({
  tier,
  price,
  features: items,
  recommended = false,
  delay = 0,
  btnHref = "/contact",
}: {
  tier: string;
  price: string;
  features: string[];
  recommended?: boolean;
  delay?: number;
  btnHref?: string;
}) {
  return (
    <FadeIn delay={delay} className="flex-1 min-w-[280px]">
      <div
        className="h-full rounded-xl p-8 transition-all duration-300 relative"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: `1px solid ${recommended ? "rgba(0, 212, 255, 0.2)" : "rgba(0, 212, 255, 0.06)"}`,
          backdropFilter: "blur(12px)",
          boxShadow: recommended ? "0 0 40px rgba(0, 212, 255, 0.06)" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = recommended
            ? "rgba(0, 212, 255, 0.2)"
            : "rgba(0, 212, 255, 0.06)";
        }}
      >
        {recommended && (
          <span
            style={{
              display: "inline-block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "1.5px",
              color: "#00d4ff",
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.15)",
              borderRadius: 20,
              padding: "4px 14px",
              marginBottom: "1rem",
            }}
          >
            RECOMMENDED
          </span>
        )}

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "2px",
            color: "rgba(180, 200, 220, 0.4)",
            marginBottom: "0.5rem",
            marginTop: recommended ? 0 : "0.25rem",
          }}
        >
          {tier}
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#eaf2fc",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(180, 200, 220, 0.35)",
              marginLeft: 4,
            }}
          >
            /month
          </span>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 12,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.5,
                color: "rgba(180, 200, 220, 0.6)",
              }}
            >
              <Check
                size={15}
                strokeWidth={2.5}
                style={{
                  color: "#00d4ff",
                  flexShrink: 0,
                  marginTop: 3,
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        <CTABtn href={btnHref} variant="solid" external={btnHref.startsWith("http")}>
          Get Started
        </CTABtn>
      </div>
    </FadeIn>
  );
}

/* ── page ─────────────────────────────────────────── */

export default function TalosPage() {
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

        {/* ═══ Section 1: Product Hero ═══ */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <FadeIn>
            <SectionTag>// Product</SectionTag>
          </FadeIn>

          <FadeIn>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 3.5rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                marginTop: "0.5rem",
              }}
            >
              Talos
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#00d4ff",
                marginTop: "0.5rem",
              }}
            >
              Your AI Front Desk. Always On.
            </p>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "rgba(180, 200, 220, 0.55)",
                maxWidth: 650,
                marginTop: "1.5rem",
              }}
            >
              An intelligent assistant platform that handles visitor inquiries,
              qualifies leads, manages scheduling, and never takes a day off.
              Built with enterprise-grade security from the ground up.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <CTABtn href="/contact" variant="solid">
                Get Started
              </CTABtn>
              <CTABtn href="https://portal.intelligentpaths.com" variant="outline" external>
                Client Portal
              </CTABtn>
            </div>
          </FadeIn>
        </section>

        {/* ═══ Section 2: How It Works ═══ */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionTag>// How It Works</SectionTag>
            <SectionHeading>Three Steps to Launch</SectionHeading>
          </FadeIn>

          <div className="relative">
            {/* Connecting line — desktop horizontal */}
            <div
              className="hidden md:block absolute"
              style={{
                top: 52,
                left: "16.67%",
                right: "16.67%",
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15) 20%, rgba(0, 212, 255, 0.15) 80%, transparent)",
              }}
            />
            {/* Connecting line — mobile vertical */}
            <div
              className="block md:hidden absolute"
              style={{
                left: 28,
                top: 60,
                bottom: 60,
                width: 1,
                background:
                  "linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.15) 15%, rgba(0, 212, 255, 0.15) 85%, transparent)",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <FadeIn key={step.title} delay={i * 0.12}>
                    <div className="text-center md:text-center relative">
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 14,
                          background: "rgba(0, 212, 255, 0.05)",
                          border: "1px solid rgba(0, 212, 255, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1.25rem",
                        }}
                      >
                        <Icon size={22} strokeWidth={1.5} style={{ color: "#00d4ff" }} />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          color: "#eaf2fc",
                          marginBottom: "0.6rem",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 300,
                          lineHeight: 1.7,
                          color: "rgba(180, 200, 220, 0.5)",
                          maxWidth: 280,
                          margin: "0 auto",
                        }}
                      >
                        {step.text}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ Section 3: Features Grid ═══ */}
        <section className="px-6 py-32 max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionTag>// Capabilities</SectionTag>
            <SectionHeading>Built for Real Businesses</SectionHeading>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <FadeIn key={feat.title} delay={i * 0.08}>
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
                    <div className="flex items-center gap-3 mb-5">
                      <div
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
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "#eaf2fc",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "rgba(180, 200, 220, 0.5)",
                      }}
                    >
                      {feat.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ═══ Section 4: Pricing ═══ */}
        <section className="px-6 py-32 max-w-4xl mx-auto">
          <FadeIn className="text-center mb-6">
            <SectionTag>// Pricing</SectionTag>
            <SectionHeading>Simple, Transparent Pricing</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(180, 200, 220, 0.45)",
              }}
            >
              No hidden fees. No per-seat charges. Just your AI, working for you.
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <PricingCard
              tier="BASIC"
              price="$300"
              features={basicFeatures}
              delay={0}
              btnHref="https://buy.stripe.com/00wcN6c1C1DCbIqf3X8so00"
            />
            <PricingCard
              tier="PRO"
              price="$800"
              features={proFeatures}
              recommended
              delay={0.1}
              btnHref="/contact" /* TODO: replace with Pro Stripe payment link */
            />
          </div>
        </section>

        {/* ═══ Section 5: Security & Trust ═══ */}
        <section
          className="px-6 py-32"
          style={{
            borderTop: "1px solid rgba(0, 212, 255, 0.06)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.06)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.01) 30%, rgba(0, 212, 255, 0.01) 70%, transparent 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-16">
              <SectionTag>// Security</SectionTag>
              <SectionHeading>Enterprise Security. Startup Speed.</SectionHeading>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {security.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={i * 0.1}>
                    <div className="text-center">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        style={{
                          color: "rgba(0, 212, 255, 0.7)",
                          margin: "0 auto 1rem",
                          display: "block",
                        }}
                      />
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#eaf2fc",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 300,
                          lineHeight: 1.65,
                          color: "rgba(180, 200, 220, 0.45)",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ Section 6: Widget Preview ═══ */}
        <section className="px-6 py-32 text-center">
          <FadeIn className="mb-12">
            <SectionTag>// See It Live</SectionTag>
            <SectionHeading>Experience the Widget</SectionHeading>
          </FadeIn>

          <div className="flex justify-center mb-8">
            <WidgetPreview />
          </div>

          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "2px",
                color: "rgba(0, 212, 255, 0.4)",
              }}
            >
              Live demo coming soon.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 7: CTA ═══ */}
        <section className="px-6 py-32 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "#eaf2fc",
              }}
            >
              Ready to put your front desk on{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                autopilot?
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
              Get set up in under a day. No long contracts. Cancel anytime.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTABtn href="/contact" variant="outline">
                Start with Basic
              </CTABtn>
              <CTABtn href="/contact" variant="solid">
                Go Pro
              </CTABtn>
            </div>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(180, 200, 220, 0.3)",
                marginTop: "2rem",
              }}
            >
              Questions?{" "}
              <a
                href="mailto:hello@intelligentpaths.com"
                style={{
                  color: "rgba(0, 212, 255, 0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(0, 212, 255, 0.5)";
                }}
              >
                hello@intelligentpaths.com
              </a>
            </p>
          </FadeIn>
        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
