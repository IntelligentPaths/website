"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const sections = [
  {
    title: "Introduction",
    content:
      'Intelligent Paths ("we," "our," or "us") operates Talos, an AI-powered front desk system designed to help businesses automate scheduling, lead capture, and client communication. This Privacy Policy explains how we collect, use, and protect your data — including data obtained through our Google Calendar integration.',
  },
  {
    title: "Information We Collect",
    content: (
      <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
        <li>Business information (name, address, industry, operating hours)</li>
        <li>Google OAuth credentials and authorization tokens</li>
        <li>Google Calendar data — including event titles, dates, times, and attendees — solely for the purpose of scheduling</li>
        <li>Tenant configuration and preferences</li>
        <li>Lead capture data (caller name, phone number, inquiry details)</li>
        <li>Call logs and transcripts</li>
      </ul>
    ),
  },
  {
    title: "How We Use Google Calendar Data",
    content:
      "We access your Google Calendar data only to check availability, create new events, read existing events, modify events, and cancel events — all at the direction of the business owner. We never use Google Calendar data for advertising, third-party marketing, or any purpose unrelated to providing the Talos scheduling service.",
  },
  {
    title: "Data Storage and Security",
    content:
      "OAuth tokens are stored encrypted in Google Cloud Secret Manager. We employ industry-standard security measures to protect all data in transit and at rest. Google Calendar data is not permanently stored beyond what is necessary to provide the service.",
  },
  {
    title: "Data Sharing",
    content: (
      <>
        <p>We do not sell your data. Data may only be shared with:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
          <li>Service providers necessary to operate Talos (Google Cloud, Retell AI, Stripe)</li>
          <li>As required by law, regulation, or legal process</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Retention",
    content:
      "Your data is retained for as long as your account remains active. Upon account termination, all associated data will be deleted within 30 days. You may request deletion at any time by contacting info@intelligentpaths.com.",
  },
  {
    title: "Your Rights",
    content: (
      <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
        <li>Access, correct, or delete your personal data</li>
        <li>Disconnect your Google Calendar integration at any time via the Talos portal</li>
        <li>Request a copy of the data we hold about you</li>
      </ul>
    ),
  },
  {
    title: "Google API Services",
    content:
      "Talos' use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
  },
  {
    title: "Children's Privacy",
    content:
      "Talos is a B2B platform and is not directed at children under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or through the Talos portal.",
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <p style={{ marginTop: "0.75rem" }}>
          Email:{" "}
          <a
            href="mailto:info@intelligentpaths.com"
            style={{ color: "#00d4ff", textDecoration: "none" }}
          >
            info@intelligentpaths.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://intelligentpaths.com"
            style={{ color: "#00d4ff", textDecoration: "none" }}
          >
            intelligentpaths.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0a0a0f", paddingTop: 60 }}>
      {/* Atmospheric background */}
      <div className="fixed inset-0 z-0">
        <Atmosphere />
      </div>

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-6 text-center" style={{ minHeight: "50vh" }}>
          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "4px",
                color: "rgba(0, 212, 255, 0.7)",
                textTransform: "uppercase",
              }}
            >
              {"// Legal"}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#eaf2fc",
                marginTop: "1rem",
              }}
            >
              Privacy{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Policy
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.5)",
                maxWidth: 600,
                marginTop: "1rem",
              }}
            >
              Talos by Intelligent Paths
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "rgba(0, 212, 255, 0.4)",
                marginTop: "0.75rem",
              }}
            >
              Effective Date: March 16, 2026
            </p>
          </FadeIn>
        </section>

        {/* Sections */}
        <section className="px-6 pb-32 max-w-3xl mx-auto">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <div
                className="rounded-xl p-8 mb-6 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(0, 212, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#00d4ff",
                    marginBottom: "1rem",
                  }}
                >
                  {section.title}
                </h2>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(200, 215, 230, 0.6)",
                  }}
                >
                  {section.content}
                </div>
              </div>
            </FadeIn>
          ))}
        </section>
      </div>
    </div>
  );
}
