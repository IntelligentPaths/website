"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("sending");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: replace with real key
          email,
          subject: "Blog notification signup — Intelligent Paths",
          message: `${email} wants to be notified when the blog launches.`,
        }),
      });
    } catch {
      // silent — still show confirmation
    }
    setStatus("done");
  };

  return (
    <div className="relative min-h-screen" style={{ background: "#0a0a0f", paddingTop: 60 }}>
      <div className="fixed inset-0 z-0">
        <Atmosphere />
      </div>

      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        <FadeIn>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "4px",
              color: "rgba(0, 212, 255, 0.7)",
            }}
          >
            // Blog
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
            Dispatches from the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Lab.
            </span>
          </h1>
        </FadeIn>

        <FadeIn>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(180, 200, 220, 0.5)",
              maxWidth: 500,
              marginTop: "1.25rem",
            }}
          >
            Insights on AI engineering, machine learning in production, and
            building intelligent systems that actually work.{" "}
            <span style={{ color: "rgba(180, 200, 220, 0.65)" }}>
              Coming soon
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1em",
                  background: "#00d4ff",
                  marginLeft: 2,
                  verticalAlign: "text-bottom",
                  animation: "statusPulse 1.2s ease-in-out infinite",
                }}
              />
            </span>
          </p>
        </FadeIn>

        {/* Decorative lines */}
        <FadeIn delay={0.2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[60, 40, 20].map((w, i) => (
              <div
                key={i}
                style={{
                  width: w,
                  height: 1,
                  background: `rgba(0, 212, 255, ${0.12 - i * 0.03})`,
                }}
              />
            ))}
          </div>
        </FadeIn>

        {/* Email signup */}
        <FadeIn delay={0.3}>
          {status === "done" ? (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(0, 212, 255, 0.7)",
              }}
            >
              You&apos;re on the list.
            </p>
          ) : (
            <>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(180, 200, 220, 0.4)",
                  marginBottom: "1rem",
                }}
              >
                Want to know when we publish?
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: 8,
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={{
                    flex: 1,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "#eaf2fc",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(0, 212, 255, 0.1)",
                    borderRadius: 8,
                    padding: "11px 16px",
                    outline: "none",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 212, 255, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#eaf2fc",
                    background: "rgba(0, 212, 255, 0.12)",
                    border: "1px solid rgba(0, 212, 255, 0.25)",
                    borderRadius: 8,
                    padding: "11px 24px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.background = "rgba(0, 212, 255, 0.2)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 212, 255, 0.12)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "sending" ? "..." : "Notify Me"}
                </button>
              </form>
            </>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
