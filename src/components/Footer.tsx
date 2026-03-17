import Link from "next/link";

const productLinks = [
  { label: "Talos", href: "/products/talos" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(5, 5, 10, 0.95)",
        borderTop: "1px solid rgba(0, 212, 255, 0.1)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#eaf2fc",
              }}
            >
              Intelligent{" "}
              <span style={{ color: "#00d4ff" }}>Paths</span>
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "rgba(180, 200, 220, 0.5)",
                marginTop: "0.75rem",
              }}
            >
              AI-powered front desk for modern businesses
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(180, 200, 220, 0.35)",
                marginTop: "1rem",
              }}
            >
              &copy; 2026 Intelligent Paths. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "1rem",
              }}
            >
              Product
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(200, 215, 230, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200, 215, 230, 0.6)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "1rem",
              }}
            >
              Company
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(200, 215, 230, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200, 215, 230, 0.6)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "1rem",
              }}
            >
              Legal
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(200, 215, 230, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200, 215, 230, 0.6)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(0, 212, 255, 0.06)",
          padding: "1.25rem 0",
          textAlign: "center",
        }}
      >
        <a
          href="mailto:info@intelligentpaths.com"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            color: "rgba(0, 212, 255, 0.5)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0, 212, 255, 0.5)")}
        >
          info@intelligentpaths.com
        </a>
      </div>
    </footer>
  );
}
