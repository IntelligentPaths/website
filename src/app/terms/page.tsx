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
    title: "Acceptance of Terms",
    content:
      'By accessing or using the Talos platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.',
  },
  {
    title: "Description of Service",
    content:
      "Talos is an AI-powered front desk platform provided by Intelligent Paths. The Service includes automated voice handling, appointment scheduling, lead capture, and Google Calendar integration to help businesses manage client communication and bookings.",
  },
  {
    title: "Account Registration",
    content:
      "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
  },
  {
    title: "Google Calendar Integration",
    content:
      "Talos connects to your Google Calendar via OAuth 2.0. By authorizing the integration, you grant Talos permission to access your calendar events for the purpose of scheduling only. This authorization is revocable at any time through the Talos portal or your Google account settings.",
  },
  {
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to use the Service for any unlawful purpose, including but not limited to:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
          <li>Sending spam or unsolicited communications</li>
          <li>Harassment or abuse of any kind</li>
          <li>Any activity that violates applicable laws or regulations</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          You are solely responsible for ensuring compliance with the Telephone Consumer Protection Act (TCPA) and any other applicable regulations regarding outbound calls made through the Service.
        </p>
      </>
    ),
  },
  {
    title: "Subscription and Payment",
    content:
      "The Service is billed on a monthly subscription basis. Payments are non-refundable. We reserve the right to change pricing with 30 days' prior notice.",
  },
  {
    title: "Data and Privacy",
    content:
      "Your use of the Service is also governed by our Privacy Policy. By using Talos, you acknowledge that you have read and understood our Privacy Policy.",
  },
  {
    title: "Service Availability",
    content:
      "We strive to maintain high availability but do not guarantee uninterrupted access to the Service. We are not liable for any losses resulting from service interruptions, outages, or downtime.",
  },
  {
    title: "Intellectual Property",
    content:
      "The Talos platform, including all software, design, trademarks, and content, is owned by Intelligent Paths. You are granted a limited, non-exclusive, non-transferable license to use the Service for its intended purpose.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Intelligent Paths shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the fees paid by you in the three (3) months preceding the claim.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify and hold harmless Intelligent Paths, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your misuse of the Service or violation of these Terms.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate the Service with 30 days' written notice. We reserve the right to terminate your account immediately in the event of a breach of these Terms. Upon termination, your data will be deleted within 30 days.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms from time to time. Material changes will be communicated by email or through the Talos portal. Continued use of the Service after changes constitutes acceptance of the updated Terms.",
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions about these Terms of Service, please contact us:</p>
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

export default function TermsOfServicePage() {
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
              Terms of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0090c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Service
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
