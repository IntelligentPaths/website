import Image from "next/image";

export default function LogoReveal() {
  return (
    <div className="relative z-30 flex flex-col items-center">
      {/* Logo with clip-path reveal + breathing glow */}
      <div
        className="relative"
        style={{
          animation:
            "logoReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both, logoPulse 4s ease-in-out 2s infinite",
        }}
      >
        <Image
          src="/logo.png"
          alt="Intelligent Paths"
          width={280}
          height={280}
          priority
          className="select-none"
          style={{ width: "clamp(160px, 40vw, 280px)", height: "auto" }}
        />

        {/* Scan line that sweeps up during reveal */}
        <div
          className="absolute left-0 w-full h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
            animation: "logoScan 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
          }}
        />
      </div>

    </div>
  );
}
