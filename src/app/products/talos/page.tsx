"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import CursorGlow from "@/components/CursorGlow";
import {
  Check,
  Database,
  KeyRound,
  HeartPulse,
  ClipboardList,
  AudioLines,
  CalendarCheck,
  BellRing,
  Phone,
  PhoneOutgoing,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  PhoneForwarded,
  MessageSquare,
  Stethoscope,
  Scale,
  Briefcase,
  Wrench,
} from "lucide-react";

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
        textTransform: "uppercase",
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
        letterSpacing: "2px",
        textTransform: "uppercase",
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
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  large?: boolean;
}) {
  const solid = variant === "solid";
  const isMailto = href.startsWith("mailto:");
  const Tag = isMailto ? "a" : Link;
  const extraProps = external && !isMailto ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

  return (
    <Tag
      href={href}
      {...extraProps}
      style={{
        display: "inline-block",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: large ? "1rem" : "0.9rem",
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase" as const,
        textDecoration: "none",
        padding: large ? "16px 48px" : "13px 36px",
        borderRadius: 6,
        transition: "all 0.3s ease",
        ...(solid
          ? {
              color: "#0a0a0f",
              background: "#00d4ff",
              border: "1px solid #00d4ff",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.25)",
            }
          : {
              color: "#00d4ff",
              background: "transparent",
              border: "1px solid rgba(0, 212, 255, 0.4)",
            }),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (solid) {
          el.style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.4)";
          el.style.transform = "translateY(-1px)";
        } else {
          el.style.borderColor = "#00d4ff";
          el.style.background = "rgba(0, 212, 255, 0.08)";
          el.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (solid) {
          el.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.25)";
          el.style.transform = "translateY(0)";
        } else {
          el.style.borderColor = "rgba(0, 212, 255, 0.4)";
          el.style.background = "transparent";
          el.style.boxShadow = "none";
        }
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Talos Sphere ─────────────────────────────────── */

function TalosSphere({ size = 220 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        animation: "sphereFloat 6s ease-in-out infinite",
      }}
    >
      {/* Outer glow */}
      <div
        style={{
          position: "absolute",
          inset: -size * 0.3,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          animation: "sphereGlowPulse 4s ease-in-out infinite",
        }}
      />
      {/* Main sphere */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
          animation: "sphereBreathe 4s ease-in-out infinite",
          background: `
            radial-gradient(circle at 35% 35%, rgba(0,212,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 65% 65%, rgba(0,140,200,0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0,80,120,0.8) 0%, rgba(0,40,60,0.9) 60%, rgba(5,5,15,0.95) 100%)
          `,
          boxShadow: `
            inset 0 0 40px rgba(0,212,255,0.15),
            inset 0 0 80px rgba(0,140,200,0.1),
            0 0 40px rgba(0,212,255,0.2),
            0 0 80px rgba(0,212,255,0.1)
          `,
        }}
      >
        {/* Inner highlight */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: "35%",
            height: "25%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* Shimmer sweep */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
            animation: "sphereShimmer 4s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}

/* ── Autonomous Loop ──────────────────────────────── */

const loopNodes = [
  {
    icon: AudioLines,
    title: "LISTENS",
    text: "Answers calls and chats with natural, human-like conversation. Callers can\u2019t tell it\u2019s AI.",
  },
  {
    icon: CalendarCheck,
    title: "ACTS",
    text: "Books appointments, captures leads, transfers calls \u2014 without asking you for permission.",
  },
  {
    icon: PhoneOutgoing,
    title: "FOLLOWS UP",
    text: "Sends appointment reminders, retries missed calls, confirms bookings. All automated.",
  },
  {
    icon: BrainCircuit,
    title: "LEARNS",
    text: "Detects questions it can\u2019t answer. Suggests new knowledge. Gets smarter with every interaction.",
  },
  {
    icon: TrendingUp,
    title: "REPORTS",
    text: "Caller sentiment, topic trends, knowledge gaps, business insights \u2014 delivered to your dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "OBEYS",
    text: "Guardrails, safety rules, your custom instructions. Always within the boundaries you set. Always.",
  },
];

function AutonomousLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {loopNodes.map((node, i) => {
        const Icon = node.icon;
        const isActive = i === activeIndex;
        return (
          <FadeIn key={node.title} delay={i * 0.08}>
            <div
              className="rounded-xl p-6 transition-all duration-500 text-center"
              style={{
                background: isActive ? "rgba(0, 212, 255, 0.04)" : "rgba(255, 255, 255, 0.02)",
                border: `1px solid ${isActive ? "rgba(0, 212, 255, 0.35)" : "rgba(0, 212, 255, 0.06)"}`,
                boxShadow: isActive ? "0 0 25px rgba(0, 212, 255, 0.12)" : "none",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: isActive ? "rgba(0, 212, 255, 0.1)" : "rgba(0, 212, 255, 0.04)",
                  border: `1px solid ${isActive ? "rgba(0, 212, 255, 0.3)" : "rgba(0, 212, 255, 0.08)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  transition: "all 0.5s ease",
                }}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  style={{
                    color: isActive ? "#00d4ff" : "rgba(0, 212, 255, 0.5)",
                    transition: "color 0.5s ease",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: isActive ? "#00d4ff" : "rgba(0, 212, 255, 0.5)",
                  marginBottom: "0.6rem",
                  transition: "color 0.5s ease",
                }}
              >
                {node.title}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: isActive ? "rgba(200, 215, 230, 0.7)" : "rgba(180, 200, 220, 0.4)",
                  transition: "color 0.5s ease",
                }}
              >
                {node.text}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

/* ── Capability Row ───────────────────────────────── */

const capabilities = [
  {
    title: "24/7 AI Voice Agent",
    text: "Natural phone conversations that handle scheduling, questions, and messages. Your callers won\u2019t know \u2014 and won\u2019t care \u2014 that it\u2019s AI.",
    stats: "< 800ms response time \u00b7 Natural interruption handling \u00b7 24/7/365",
    icon: AudioLines,
    visual: "waveform",
  },
  {
    title: "Intelligent Scheduling",
    text: "Reads your real Google Calendar. Books real appointments. Sends real confirmations. No double-bookings. No phone tag.",
    stats: "Auto-book or approval queue \u00b7 Buffer time \u00b7 Booking window controls",
    icon: CalendarCheck,
    visual: "calendar",
  },
  {
    title: "Lead Capture & Instant Notification",
    text: "Every caller\u2019s name, number, email, and intent \u2014 captured and delivered to your inbox before they hang up.",
    stats: "Email alerts in < 60 seconds \u00b7 CSV export \u00b7 Pipeline tracking",
    icon: BellRing,
    visual: "notification",
  },
  {
    title: "Owner Voice Command",
    text: "Call your own number. Check your schedule. Review leads. Call someone back. Manage your business \u2014 by voice, from anywhere.",
    stats: "PIN-secured \u00b7 Schedule queries \u00b7 Lead reviews \u00b7 Outbound callbacks",
    icon: Phone,
    visual: "phone",
  },
  {
    title: "Autonomous Outbound",
    tag: "PRO",
    text: "Appointment reminders. Follow-up calls. Batch campaigns. Voicemail detection. Retry logic. All without you lifting a finger.",
    stats: "3x retry with smart backoff \u00b7 Call + email reminders \u00b7 Batch campaigns",
    icon: PhoneOutgoing,
    visual: "outbound",
  },
  {
    title: "Self-Learning Knowledge Base",
    text: "When your AI can\u2019t answer a question, it logs it. You see it on your dashboard. One click adds it to the knowledge base. Next caller gets the answer.",
    stats: "Knowledge gap detection \u00b7 One-click FAQ creation \u00b7 Retell KB sync",
    icon: BrainCircuit,
    visual: "knowledge",
  },
  {
    title: "Sentiment Intelligence",
    tag: "PRO",
    text: "Know how your callers feel. See which topics drive frustration. Spot problems before they become reviews.",
    stats: "Per-call sentiment \u00b7 Topic analysis \u00b7 Flagged call alerts \u00b7 Trend tracking",
    icon: TrendingUp,
    visual: "sentiment",
  },
  {
    title: "Live Call Handoff",
    tag: "PRO",
    text: "When a caller needs a human, Talos doesn\u2019t just transfer \u2014 it briefs your team first. Context included. No repeated explanations.",
    stats: "Warm transfer with whisper \u00b7 30s timeout \u00b7 Auto-fallback to message",
    icon: PhoneForwarded,
    visual: "handoff",
  },
  {
    title: "AI Chat Widget",
    text: "Your website visitors get the same intelligence. Same knowledge. Same booking. Same lead capture. Embedded in one line of code.",
    stats: "Shadow DOM isolation \u00b7 Mobile responsive \u00b7 No dependencies",
    icon: MessageSquare,
    visual: "widget",
  },
];

function CapabilityVisual({ type }: { type: string }) {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 340,
    height: 200,
    borderRadius: 12,
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(0,212,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  };

  if (type === "waveform") {
    return (
      <div style={containerStyle}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {/* Agent waveform */}
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            {[16, 28, 12, 32, 20, 24, 14].map((h, i) => (
              <div
                key={`a${i}`}
                style={{
                  width: 3,
                  height: 8,
                  borderRadius: 2,
                  background: "#00d4ff",
                  animation: `waveBar 1.${i + 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  ["--bar-h" as string]: `${h}px`,
                }}
              />
            ))}
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(0,212,255,0.4)", margin: "0 12px" }}>\u2194</span>
          {/* Caller waveform */}
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            {[20, 14, 26, 18, 30, 16, 22].map((h, i) => (
              <div
                key={`c${i}`}
                style={{
                  width: 3,
                  height: 8,
                  borderRadius: 2,
                  background: "rgba(0,212,255,0.4)",
                  animation: `waveBar 1.${i + 4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.12}s`,
                  ["--bar-h" as string]: `${h}px`,
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 40 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(0,212,255,0.3)" }}>TALOS</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(200,215,230,0.3)" }}>CALLER</span>
        </div>
      </div>
    );
  }

  if (type === "calendar") {
    const slots = [
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, false, true],
    ];
    return (
      <div style={containerStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Day headers */}
          <div style={{ display: "flex", gap: 4 }}>
            {["M", "T", "W", "T", "F"].map((d) => (
              <div
                key={d}
                style={{
                  width: 40,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.5rem",
                  color: "rgba(0,212,255,0.5)",
                }}
              >
                {d}
              </div>
            ))}
          </div>
          {slots.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 4 }}>
              {row.map((booked, ci) => (
                <div
                  key={ci}
                  style={{
                    width: 40,
                    height: 32,
                    borderRadius: 4,
                    background: booked ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${booked ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.05)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                  }}
                >
                  {booked && <Check size={12} style={{ color: "#00d4ff" }} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "notification") {
    return (
      <div style={containerStyle}>
        <div
          style={{
            background: "rgba(0,212,255,0.05)",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 8,
            padding: "14px 18px",
            width: "85%",
            animation: "fadeUp 0.8s ease both",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <BellRing size={14} style={{ color: "#00d4ff" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "1px" }}>NEW LEAD</span>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(200,215,230,0.7)", lineHeight: 1.5 }}>
            Sarah Johnson &bull; (214) 555-0142<br />
            Interested in: Dental Cleaning<br />
            Appt requested: Tomorrow 2pm
          </p>
        </div>
      </div>
    );
  }

  if (type === "sentiment") {
    return (
      <div style={containerStyle}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          {/* Gauge arc */}
          <div style={{ position: "relative", width: 100, height: 50 }}>
            <svg width="100" height="50" viewBox="0 0 100 50">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#gaugeGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="126" strokeDashoffset="40" />
              <defs>
                <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff4466" />
                  <stop offset="50%" stopColor="#ffaa33" />
                  <stop offset="100%" stopColor="#00ff88" />
                </linearGradient>
              </defs>
            </svg>
            {/* Needle */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: 2,
              height: 30,
              background: "#eaf2fc",
              borderRadius: 1,
              transformOrigin: "bottom center",
              animation: "gaugeNeedle 6s ease-in-out infinite",
            }} />
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(0,212,255,0.4)", letterSpacing: "1px" }}>CALLER SENTIMENT</span>
        </div>
      </div>
    );
  }

  // Default: icon-based visual
  const iconMap: Record<string, typeof Phone> = {
    phone: Phone,
    outbound: PhoneOutgoing,
    knowledge: BrainCircuit,
    handoff: PhoneForwarded,
    widget: MessageSquare,
  };
  const Icon = iconMap[type] || MessageSquare;

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(0,212,255,0.06)",
            border: "1px solid rgba(0,212,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={28} strokeWidth={1.5} style={{ color: "#00d4ff" }} />
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(0,212,255,0.3)", letterSpacing: "1px", textTransform: "uppercase" }}>{type}</span>
      </div>
    </div>
  );
}

function CapabilityRow({
  cap,
  index,
}: {
  cap: (typeof capabilities)[0];
  index: number;
}) {
  const reverse = index % 2 === 1;
  const Icon = cap.icon;

  return (
    <FadeIn>
      <div
        className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 py-16`}
        style={{
          borderBottom: index < capabilities.length - 1 ? "1px solid rgba(0,212,255,0.04)" : "none",
        }}
      >
        {/* Text side */}
        <div className="flex-1" style={{ maxWidth: 480 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
            <Icon size={18} strokeWidth={1.5} style={{ color: "#00d4ff" }} />
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#eaf2fc",
              }}
            >
              {cap.title}
            </h3>
            {(cap as { tag?: string }).tag && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "1px",
                  color: "#00d4ff",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  borderRadius: 10,
                  padding: "2px 8px",
                }}
              >
                {(cap as { tag?: string }).tag}
              </span>
            )}
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(180, 200, 220, 0.55)",
              marginBottom: "1rem",
            }}
          >
            {cap.text}
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "rgba(0, 212, 255, 0.4)",
              lineHeight: 1.6,
            }}
          >
            {cap.stats}
          </p>
        </div>
        {/* Visual side */}
        <div className="flex-1 flex justify-center">
          <CapabilityVisual type={cap.visual} />
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Live Demo ────────────────────────────────────── */

function SuggestionPills() {
  const suggestions = [
    "What are your hours?",
    "Can I book an appointment?",
    "What services do you offer?",
    "I need to speak to someone",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % suggestions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [suggestions.length]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {suggestions.map((s, i) => (
        <div
          key={s}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: `1px solid ${i === active ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.06)"}`,
            background: i === active ? "rgba(0,212,255,0.06)" : "transparent",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            color: i === active ? "rgba(0,212,255,0.8)" : "rgba(180,200,220,0.35)",
            transition: "all 0.4s ease",
          }}
        >
          &ldquo;{s}&rdquo;
        </div>
      ))}
    </div>
  );
}

/* ── Portal Tabs ──────────────────────────────────── */

const portalTabs = ["Dashboard", "Call History", "Knowledge Base", "Analytics"];

const portalContent: Record<string, { features: string[] }> = {
  Dashboard: {
    features: [
      "Real-time call volume & status",
      "Today\u2019s leads at a glance",
      "Active conversations monitor",
      "Quick actions panel",
    ],
  },
  "Call History": {
    features: [
      "Full call recordings & playback",
      "AI-generated transcripts",
      "Per-call sentiment scores",
      "Search & filter by date/topic",
    ],
  },
  "Knowledge Base": {
    features: [
      "Knowledge gap detection",
      "One-click FAQ creation",
      "Auto-sync with Retell KB",
      "Category organization",
    ],
  },
  Analytics: {
    features: [
      "Sentiment insights & trends",
      "Topic frequency analysis",
      "Lead conversion tracking",
      "Team performance metrics",
    ],
  },
};

function PortalMockup() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div>
      {/* Tab bar */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, flexWrap: "wrap" }}>
        {portalTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "1px",
              padding: "10px 20px",
              borderRadius: 6,
              border: `1px solid ${activeTab === tab ? "rgba(0,212,255,0.4)" : "rgba(0,212,255,0.08)"}`,
              background: activeTab === tab ? "rgba(0,212,255,0.08)" : "transparent",
              color: activeTab === tab ? "#00d4ff" : "rgba(180,200,220,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mockup window */}
      <div
        style={{
          borderRadius: 12,
          border: "1px solid rgba(0,212,255,0.1)",
          background: "rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            padding: "10px 16px",
            borderBottom: "1px solid rgba(0,212,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,70,100,0.5)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,180,50,0.5)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(0,255,136,0.5)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(180,200,220,0.3)", marginLeft: 12 }}>
            portal.intelligentpaths.com / {activeTab.toLowerCase().replace(" ", "-")}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "32px 24px", minHeight: 240 }}>
          <h4
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#eaf2fc",
              marginBottom: "1.25rem",
            }}
          >
            {activeTab}
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {portalContent[activeTab].features.map((f) => (
              <div
                key={f}
                style={{
                  padding: "12px 14px",
                  borderRadius: 8,
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.06)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(200,215,230,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Check size={12} style={{ color: "#00d4ff", flexShrink: 0 }} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Orientation Timeline ─────────────────────────── */

const orientationSteps = [
  "Name your AI",
  "Tell it about your business",
  "Import knowledge from your website",
  "Connect your calendar",
  "Choose a voice",
  "Get your phone number",
  "Test drive \u2014 call your AI",
  "Go live",
];

function OrientationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div style={{ position: "relative", paddingLeft: 40 }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 11,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(180deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))",
          }}
        />
        {orientationSteps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: i < orientationSteps.length - 1 ? 28 : 0,
              position: "relative",
            }}
          >
            {/* Dot */}
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: i === orientationSteps.length - 1 ? "#00d4ff" : "rgba(0,212,255,0.15)",
                border: `1px solid ${i === orientationSteps.length - 1 ? "#00d4ff" : "rgba(0,212,255,0.3)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                animation: i === orientationSteps.length - 1 ? "timelineDot 2s ease-in-out infinite" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  color: i === orientationSteps.length - 1 ? "#0a0a0f" : "#00d4ff",
                }}
              >
                {i + 1}
              </span>
            </div>
            {/* Label */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                fontWeight: i === orientationSteps.length - 1 ? 500 : 300,
                color: i === orientationSteps.length - 1 ? "#eaf2fc" : "rgba(200, 215, 230, 0.55)",
              }}
            >
              {step}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Pricing ──────────────────────────────────────── */

const starterFeatures = [
  "24/7 AI Voice Receptionist",
  "AI Chat Widget",
  "Lead Capture + Email Notifications",
  "Google Calendar Integration",
  "Appointment Booking & Cancellation",
  "Custom AI Persona",
  "Owner Voice Mode (lite)",
  "Booking Confirmation Emails",
  "AI Knowledge Base",
  "Basic Analytics",
  "275 voice min / 1,100 chat convos",
  "1 phone \u00b7 1 domain \u00b7 1 user",
];

const proFeatures = [
  "Everything in Starter, plus:",
  "Outbound Reminders (call + email)",
  "Batch Campaigns",
  "Warm Transfer",
  "Sentiment Insights",
  "Knowledge Gap Detection",
  "Call History + Transcripts",
  "Department Routing",
  "2,150 voice min / 3,250 chat convos",
  "3 phones \u00b7 5 domains \u00b7 5 users",
];

const enterpriseFeatures = [
  "Everything in Pro, plus:",
  "Multiple Locations",
  "Role-Based Access Control",
  "Dedicated Onboarding",
  "Priority Support",
  "5,600 voice min / 6,500 chat convos",
  "10 phones \u00b7 Unlimited domains \u00b7 Unlimited users",
];

function PricingCard({
  tier,
  price,
  tagline,
  features: items,
  recommended = false,
  delay = 0,
  btnHref = "/contact",
  btnLabel = "Get Started",
}: {
  tier: string;
  price: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
  delay?: number;
  btnHref?: string;
  btnLabel?: string;
}) {
  return (
    <FadeIn delay={delay} className="flex-1 min-w-[280px]">
      <div
        className="h-full rounded-xl p-8 transition-all duration-300 relative"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: `1px solid ${recommended ? "rgba(0, 212, 255, 0.25)" : "rgba(0, 212, 255, 0.06)"}`,
          backdropFilter: "blur(12px)",
          boxShadow: recommended ? "0 0 40px rgba(0, 212, 255, 0.08)" : "none",
          transform: recommended ? "scale(1.02)" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.4)";
          (e.currentTarget as HTMLDivElement).style.transform = recommended ? "scale(1.03) translateY(-2px)" : "translateY(-2px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = recommended ? "rgba(0, 212, 255, 0.25)" : "rgba(0, 212, 255, 0.06)";
          (e.currentTarget as HTMLDivElement).style.transform = recommended ? "scale(1.02)" : "none";
          (e.currentTarget as HTMLDivElement).style.boxShadow = recommended ? "0 0 40px rgba(0, 212, 255, 0.08)" : "none";
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
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: 20,
              padding: "4px 14px",
              marginBottom: "1rem",
              boxShadow: "0 0 12px rgba(0, 212, 255, 0.1)",
            }}
          >
            MOST POPULAR
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

        <div style={{ marginBottom: "0.5rem" }}>
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

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
            color: "rgba(180, 200, 220, 0.45)",
            marginBottom: "1.75rem",
            fontStyle: "italic",
          }}
        >
          {tagline}
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 10,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.5,
                color: "rgba(180, 200, 220, 0.6)",
              }}
            >
              <Check
                size={14}
                strokeWidth={2.5}
                style={{ color: "#00d4ff", flexShrink: 0, marginTop: 3 }}
              />
              {item}
            </li>
          ))}
        </ul>

        <CTABtn
          href={btnHref}
          variant={recommended ? "solid" : "outline"}
          external={btnHref.startsWith("http")}
        >
          {btnLabel}
        </CTABtn>
      </div>
    </FadeIn>
  );
}

/* ── Industry Cards ───────────────────────────────── */

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    subtitle: "Dental, Medical Spa, Chiropractic, Clinics",
    text: "HIPAA-aware guardrails. Emergency detection. No medical advice. Ever.",
  },
  {
    icon: Scale,
    title: "Legal",
    subtitle: "Law Firms, Solo Attorneys, Legal Aid",
    text: "No legal advice. Consultation booking. Intake capture.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    subtitle: "Salons, Consulting, Accounting, Real Estate",
    text: "Scheduling. Lead capture. Follow-up automation.",
  },
  {
    icon: Wrench,
    title: "Home Services",
    subtitle: "HVAC, Plumbing, Electrical, Landscaping",
    text: "24/7 booking. Emergency dispatch routing. Quote requests.",
  },
];

/* ── Security Pillars ─────────────────────────────── */

const security = [
  {
    icon: Database,
    title: "Row-Level Data Isolation",
    text: "Every tenant\u2019s data is cryptographically isolated at the database level. Not just application logic \u2014 row-level security policies enforced by PostgreSQL.",
  },
  {
    icon: KeyRound,
    title: "Encrypted Everything",
    text: "TLS in transit. Encryption at rest. Secrets in GCP Secret Manager. API keys hashed with server-side pepper.",
  },
  {
    icon: HeartPulse,
    title: "HIPAA-Aware Architecture",
    text: "Industry-specific guardrails. Emergency detection. PII handling. Audit logging. Built for regulated industries.",
  },
  {
    icon: ClipboardList,
    title: "Complete Audit Trail",
    text: "Every change, every access, every action \u2014 logged with actor, timestamp, and before/after snapshots.",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════ */

export default function TalosPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0a0a0f", paddingTop: 60 }}>
      {/* Fixed atmospheric background */}
      <div className="fixed inset-0 z-0">
        <Atmosphere />
      </div>
      <CursorGlow />

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

        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative">
          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "4px",
                color: "rgba(0, 212, 255, 0.6)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              {"// Intelligent Paths Presents"}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <TalosSphere size={220} />
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                marginTop: "2rem",
                lineHeight: 1.1,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              THE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AGENTIC
              </span>{" "}
              AI
              <br />
              FRONT DESK OS
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(180, 200, 220, 0.5)",
                maxWidth: 700,
                marginTop: "1.5rem",
              }}
            >
              Talos doesn&rsquo;t just answer your phones. It runs your entire front desk &mdash; booking
              appointments, capturing leads, following up with clients, and learning from every
              interaction. Autonomously.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "rgba(0, 212, 255, 0.45)",
                marginTop: "1rem",
              }}
            >
              {"// front_desk.run(autonomous=True)"}
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <CTABtn href="#pricing" variant="solid">
                Deploy Talos
              </CTABtn>
              <CTABtn href="#demo" variant="outline">
                See It In Action
              </CTABtn>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-chevron" />
            <span className="scroll-text">Explore</span>
          </div>
        </section>

        {/* ═══ SECTION 2: THE AUTONOMOUS LOOP ═══ */}
        <section className="px-6 py-32">
          <FadeIn className="text-center mb-6">
            <SectionTag>// The Loop</SectionTag>
            <SectionHeading>What Makes It Agentic</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Talos operates in a continuous autonomous loop. Every call, every chat, every
              interaction makes it smarter.
            </p>
          </FadeIn>

          <AutonomousLoop />

          <FadeIn className="text-center mt-12">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "rgba(0, 212, 255, 0.35)",
              }}
            >
              {"// while (business.is_open || business.is_closed) { talos.run(); }"}
            </p>
          </FadeIn>
        </section>

        {/* ═══ SECTION 3: CAPABILITIES ═══ */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6">
            <SectionTag>// Capabilities</SectionTag>
            <SectionHeading>Full Spectrum Capabilities</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
              }}
            >
              Every feature built for autonomous operation.
            </p>
          </FadeIn>

          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.title} cap={cap} index={i} />
          ))}
        </section>

        {/* ═══ SECTION 4: LIVE DEMO ═══ */}
        <section
          id="demo"
          className="px-6 py-32"
          style={{
            borderTop: "1px solid rgba(0, 212, 255, 0.06)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.06)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.01) 30%, rgba(0, 212, 255, 0.01) 70%, transparent 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <SectionTag>// Try It</SectionTag>
              <SectionHeading>Experience Talos</SectionHeading>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(180, 200, 220, 0.45)",
                  marginTop: "0.75rem",
                }}
              >
                Don&rsquo;t take our word for it. Talk to Talos yourself.
              </p>
            </FadeIn>

            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left: suggestions */}
              <FadeIn className="flex-1">
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#eaf2fc",
                    letterSpacing: "1px",
                    marginBottom: "1rem",
                  }}
                >
                  Try asking:
                </p>
                <SuggestionPills />

                <div style={{ marginTop: "2rem" }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "rgba(200,215,230,0.5)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Or call:
                  </p>
                  <a
                    href="tel:+12147538573"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1.1rem",
                      color: "#00d4ff",
                      textDecoration: "none",
                    }}
                  >
                    +1 (214) 753-8573
                  </a>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 300,
                      color: "rgba(180,200,220,0.35)",
                      marginTop: "0.5rem",
                    }}
                  >
                    Voice demo available &mdash; call now and hear Talos in action.
                  </p>
                </div>
              </FadeIn>

              {/* Right: widget prompt */}
              <FadeIn delay={0.15} className="flex-1 flex justify-center">
                <div
                  style={{
                    width: "100%",
                    maxWidth: 380,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(0,212,255,0.12)",
                    backdropFilter: "blur(12px)",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <TalosSphere size={80} />
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#eaf2fc",
                      marginTop: "1.25rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Live Chat Widget
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      color: "rgba(180,200,220,0.45)",
                      lineHeight: 1.6,
                    }}
                  >
                    Click the chat bubble in the bottom-right corner to talk to Talos live. Same AI. Same speed. Same quality.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="text-center mt-12">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "rgba(0, 212, 255, 0.3)",
                }}
              >
                This is a live demo running on the same infrastructure your business will use.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTION 5: THE PORTAL ═══ */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6">
            <SectionTag>// Portal</SectionTag>
            <SectionHeading>Your Command Center</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
              }}
            >
              Everything you need to manage your AI &mdash; in one place.
            </p>
          </FadeIn>

          <FadeIn>
            <PortalMockup />
          </FadeIn>

          <FadeIn className="text-center mt-8">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                color: "rgba(180,200,220,0.35)",
              }}
            >
              Team management with role-based access &bull; Stripe-integrated billing with overage controls
            </p>
          </FadeIn>
        </section>

        {/* ═══ SECTION 6: ORIENTATION ═══ */}
        <section
          className="px-6 py-32"
          style={{
            borderTop: "1px solid rgba(0, 212, 255, 0.06)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.008) 50%, transparent 100%)",
          }}
        >
          <FadeIn className="text-center mb-6">
            <SectionTag>// Setup</SectionTag>
            <SectionHeading>Live in Minutes, Not Months</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              Our guided Orientation gets your AI receptionist configured and taking calls in under 10 minutes.
            </p>
          </FadeIn>

          <OrientationTimeline />

          <FadeIn className="text-center mt-12">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "rgba(0, 212, 255, 0.4)",
              }}
            >
              From signup to live calls. 10 minutes. No developer needed.
            </p>
          </FadeIn>
        </section>

        {/* ═══ SECTION 7: PRICING ═══ */}
        <section id="pricing" className="px-6 py-32 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6">
            <SectionTag>// Pricing</SectionTag>
            <SectionHeading>Pricing</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
              }}
            >
              Transparent. Scalable. No contracts.
            </p>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <PricingCard
              tier="STARTER"
              price="$100"
              tagline="Capture leads while you sleep"
              features={starterFeatures}
              delay={0}
              btnHref="https://buy.stripe.com/00wcN6c1C1DCbIqf3X8so00"
              btnLabel="Deploy Starter"
            />
            <PricingCard
              tier="PRO"
              price="$500"
              tagline="Never miss a call or customer again"
              features={proFeatures}
              recommended
              delay={0.1}
              btnHref="/contact"
              btnLabel="Deploy Pro"
            />
            <PricingCard
              tier="ENTERPRISE"
              price="$1,200"
              tagline="Run operations across locations"
              features={enterpriseFeatures}
              delay={0.2}
              btnHref="mailto:info@intelligentpaths.com"
              btnLabel="Contact Us"
            />
          </div>

          <FadeIn className="text-center mt-10">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "rgba(180, 200, 220, 0.35)",
                lineHeight: 1.8,
              }}
            >
              Need more? Overage: $0.10/voice minute &middot; $0.05/chat conversation
              <br />
              All plans include free orientation setup. No contracts. Cancel anytime.
            </p>
          </FadeIn>
        </section>

        {/* ═══ SECTION 8: BUILT FOR ═══ */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6">
            <SectionTag>// Industries</SectionTag>
            <SectionHeading>Built for Professionals</SectionHeading>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(180, 200, 220, 0.45)",
              }}
            >
              Designed with healthcare in mind. Works for any service business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <FadeIn key={ind.title} delay={i * 0.08}>
                  <div
                    className="h-full rounded-xl p-7 text-center transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(0, 212, 255, 0.06)",
                      backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.25)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.06)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      style={{
                        color: "#00d4ff",
                        margin: "0 auto 1rem",
                        display: "block",
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#eaf2fc",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        color: "rgba(0, 212, 255, 0.4)",
                        marginBottom: "0.75rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {ind.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: "rgba(180, 200, 220, 0.5)",
                      }}
                    >
                      {ind.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ═══ SECTION 9: SECURITY ═══ */}
        <section
          className="px-6 py-32"
          style={{
            borderTop: "1px solid rgba(0, 212, 255, 0.06)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.06)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.01) 30%, rgba(0, 212, 255, 0.01) 70%, transparent 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <SectionTag>// Security</SectionTag>
              <SectionHeading>Enterprise-Grade Security</SectionHeading>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(180, 200, 220, 0.45)",
                  marginTop: "0.75rem",
                }}
              >
                Your data. Your rules. Our obsession.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {security.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={i * 0.1}>
                    <div
                      className="rounded-xl p-7 transition-all duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(0, 212, 255, 0.06)",
                        backdropFilter: "blur(8px)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 212, 255, 0.06)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.75rem" }}>
                        <Icon size={20} strokeWidth={1.5} style={{ color: "#00d4ff" }} />
                        <h3
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#eaf2fc",
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: 300,
                          lineHeight: 1.7,
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

        {/* ═══ SECTION 10: FINAL CTA ═══ */}
        <section className="px-6 py-32 text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <TalosSphere size={160} />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              READY TO DEPLOY YOUR{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI FRONT DESK
              </span>
              ?
            </h2>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.45)",
                marginTop: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              Join the businesses that never miss a call. Start in 10 minutes.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTABtn href="#pricing" variant="solid" large>
                Deploy Talos
              </CTABtn>
              <CTABtn href="mailto:info@intelligentpaths.com" variant="outline" large>
                Talk to Us
              </CTABtn>
            </div>
          </FadeIn>
        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
