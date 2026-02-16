"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Talos", href: "/products/talos" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 4vw, 48px)",
          background: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0, 212, 255, 0.08)",
        }}
      >
        {/* Left: logo + wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Intelligent Paths"
            width={40}
            height={40}
            style={{ height: 40, width: "auto", filter: "brightness(1.5) sepia(1) saturate(5) hue-rotate(160deg) drop-shadow(0 0 6px rgba(0, 212, 255, 0.5))" }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "3px",
              color: "rgba(234, 242, 252, 0.6)",
              textTransform: "uppercase",
            }}
          >
            Intelligent Paths
          </span>
        </Link>

        {/* Right: desktop links */}
        <div
          className="nav-desktop-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  position: "relative",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: active ? "#ffffff" : "rgba(200, 215, 230, 0.85)",
                  textShadow: active ? "0 0 12px rgba(0, 212, 255, 0.5)" : "none",
                  transition: "color 0.2s ease, text-shadow 0.2s ease",
                  padding: "6px 4px",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.textShadow = "0 0 12px rgba(0, 212, 255, 0.4)";
                  }
                  const dot = e.currentTarget.querySelector<HTMLSpanElement>(".nav-hover-dot");
                  if (dot) dot.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "rgba(200, 215, 230, 0.85)";
                    e.currentTarget.style.textShadow = "none";
                  }
                  const dot = e.currentTarget.querySelector<HTMLSpanElement>(".nav-hover-dot");
                  if (dot && !active) dot.style.opacity = "0";
                }}
              >
                {link.label}
                <span
                  className="nav-hover-dot"
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#00d4ff",
                    opacity: active ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          {menuOpen ? (
            <X size={24} color="#00d4ff" />
          ) : (
            <Menu size={24} color="#00d4ff" />
          )}
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 49,
          background: "rgba(10, 10, 15, 0.95)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: active ? "#ffffff" : "rgba(200, 215, 230, 0.8)",
                textShadow: active ? "0 0 12px rgba(0, 212, 255, 0.5)" : "none",
                transition: "color 0.2s ease",
                padding: "8px 16px",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
