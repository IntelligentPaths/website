import Atmosphere from "@/components/Atmosphere";
import CursorGlow from "@/components/CursorGlow";
import HeptagonNav from "@/components/HeptagonNav";
import LogoReveal from "@/components/LogoReveal";

export default function Home() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <Atmosphere />
      <CursorGlow />
      <HeptagonNav />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <LogoReveal />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "4px",
            color: "rgba(0, 212, 255, 0.7)",
            marginTop: "2rem",
            animation: "fadeUp 0.8s ease 2.2s both",
          }}
        >
          // AI &amp; ML Engineering Studio
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 700,
            color: "#eaf2fc",
            marginTop: "0.5rem",
            animation: "fadeUp 0.8s ease 2.3s both",
          }}
        >
          Intelligence,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0090c0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Applied.
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-chevron" />
        <span className="scroll-text">Explore</span>
      </div>
    </section>
  );
}
