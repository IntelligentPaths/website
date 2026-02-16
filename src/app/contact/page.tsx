"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";
import { Mail, MapPin, Check, AlertCircle } from "lucide-react";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });

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

/* ── constants ────────────────────────────────────── */

const SERVICE_OPTIONS = [
  "AI Assistant / Chatbot",
  "Workflow Automation",
  "Data & Analytics",
  "Custom Software",
  "Talos Platform",
  "AI Consulting",
  "Something Else",
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(180, 200, 220, 0.6)",
  marginBottom: 8,
};

const inputBase: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.92rem",
  color: "#eaf2fc",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(0, 212, 255, 0.1)",
  borderRadius: 8,
  padding: "12px 16px",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

/* ── page ─────────────────────────────────────────── */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const focusStyle = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 212, 255, 0.4)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0, 212, 255, 0.08)";
  };

  const blurStyle = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 212, 255, 0.1)";
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@intelligentpaths.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "N/A",
          service: form.service || "Not specified",
          message: form.message,
          _subject: `New inquiry from ${form.name} — Intelligent Paths`,
        }),
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        <section className="flex flex-col items-center justify-center px-6 text-center pt-32 pb-16">
          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "4px",
                color: "rgba(0, 212, 255, 0.7)",
              }}
            >
              // Contact
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
              Let&apos;s Build{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Something.
              </span>
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.5)",
                maxWidth: 520,
                marginTop: "1rem",
              }}
            >
              Tell us what you&apos;re working on. We&apos;ll get back to you
              within 24 hours.
            </p>
          </FadeIn>
        </section>

        {/* ═══ Section 2: Form ═══ */}
        <section className="px-6 pb-24 flex justify-center">
          <FadeIn>
            {status === "success" ? (
              /* ── Success state ── */
              <div
                className="rounded-2xl p-12 text-center"
                style={{
                  width: "100%",
                  maxWidth: 600,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(0, 255, 136, 0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Check
                  size={40}
                  strokeWidth={1.5}
                  style={{
                    color: "#00ff88",
                    margin: "0 auto 1.5rem",
                    display: "block",
                  }}
                />
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#eaf2fc",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message sent.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(180, 200, 220, 0.55)",
                  }}
                >
                  We&apos;ll be in touch.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-10"
                style={{
                  width: "100%",
                  maxWidth: 600,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(0, 212, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>
                      Name <span style={{ color: "rgba(0, 212, 255, 0.5)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      placeholder="Your name"
                      style={{
                        ...inputBase,
                        borderColor: errors.name ? "rgba(255, 68, 102, 0.5)" : undefined,
                      }}
                    />
                    {errors.name && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#ff4466", marginTop: 6 }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>
                      Email <span style={{ color: "rgba(0, 212, 255, 0.5)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      placeholder="you@company.com"
                      style={{
                        ...inputBase,
                        borderColor: errors.email ? "rgba(255, 68, 102, 0.5)" : undefined,
                      }}
                    />
                    {errors.email && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#ff4466", marginTop: 6 }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={set("company")}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      placeholder="Your company (optional)"
                      style={inputBase}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>What are you interested in?</label>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={{
                        ...inputBase,
                        appearance: "none",
                        cursor: "pointer",
                        color: form.service ? "#eaf2fc" : "rgba(180, 200, 220, 0.25)",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(0,212,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: 40,
                      }}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#0a0a0f", color: "#eaf2fc" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>
                      Message <span style={{ color: "rgba(0, 212, 255, 0.5)" }}>*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={set("message")}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any specific needs..."
                      style={{
                        ...inputBase,
                        resize: "vertical",
                        minHeight: 120,
                        borderColor: errors.message ? "rgba(255, 68, 102, 0.5)" : undefined,
                      }}
                    />
                    {errors.message && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#ff4466", marginTop: 6 }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: status === "sending" ? "rgba(234, 242, 252, 0.5)" : "#eaf2fc",
                      background: "rgba(0, 212, 255, 0.12)",
                      border: "1px solid rgba(0, 212, 255, 0.3)",
                      borderRadius: 8,
                      padding: "14px 0",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 16px rgba(0, 212, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "sending") {
                        e.currentTarget.style.background = "rgba(0, 212, 255, 0.2)";
                        e.currentTarget.style.boxShadow = "0 0 24px rgba(0, 212, 255, 0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0, 212, 255, 0.12)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 212, 255, 0.08)";
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {/* Error message */}
                  {status === "error" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "12px 16px",
                        borderRadius: 8,
                        background: "rgba(255, 68, 102, 0.06)",
                        border: "1px solid rgba(255, 68, 102, 0.15)",
                      }}
                    >
                      <AlertCircle
                        size={16}
                        strokeWidth={1.5}
                        style={{ color: "#ff4466", flexShrink: 0, marginTop: 2 }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "rgba(255, 68, 102, 0.8)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        Something went wrong. Try emailing us directly at{" "}
                        <a
                          href="mailto:info@intelligentpaths.com"
                          style={{ color: "#ff4466", textDecoration: "underline" }}
                        >
                          info@intelligentpaths.com
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </form>
            )}
          </FadeIn>
        </section>

        {/* ═══ Section 3: Direct Contact ═══ */}
        <section className="px-6 pb-32">
          {/* Divider */}
          <div
            style={{
              width: "100%",
              maxWidth: 600,
              height: 1,
              background: "rgba(0, 212, 255, 0.06)",
              margin: "0 auto 2.5rem",
            }}
          />

          <FadeIn>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              <a
                href="mailto:info@intelligentpaths.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(180, 200, 220, 0.4)";
                }}
              >
                <Mail size={16} strokeWidth={1.5} style={{ color: "rgba(0, 212, 255, 0.5)" }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "inherit",
                  }}
                >
                  info@intelligentpaths.com
                </span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <MapPin size={16} strokeWidth={1.5} style={{ color: "rgba(0, 212, 255, 0.5)" }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(180, 200, 220, 0.4)",
                  }}
                >
                  Dallas, TX &mdash; Serving Clients Nationwide
                </span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
