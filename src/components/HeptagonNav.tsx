"use client";

import { useEffect, useRef, useCallback, useState, useMemo } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Talos", href: "/products/talos" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const DESKTOP = { size: 700, radius: 300 };
const BP = 768;

function getMobileDims(w: number) {
  const size = Math.min(440, Math.floor(w * 0.88));
  const radius = Math.floor(size * 0.4);
  return { size, radius };
}

export default function HeptagonNav() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef(-1);
  const rafRef = useRef(0);
  const [dims, setDims] = useState(DESKTOP);

  const { size, radius } = dims;
  const center = size / 2;

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setDims(w >= BP ? DESKTOP : getMobileDims(w));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const positions = useMemo(
    () =>
      NAV_ITEMS.map((_, i) => {
        const angle = (2 * Math.PI * i) / 7 - Math.PI / 2;
        return {
          x: center + radius * Math.cos(angle),
          y: center + radius * Math.sin(angle),
        };
      }),
    [center, radius],
  );

  const draw = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      const hovered = hoveredRef.current;

      /* ── base inter-node connections ── */
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const connected =
            hovered >= 0 && (i === hovered || j === hovered);
          ctx.strokeStyle = connected
            ? "rgba(0, 212, 255, 0.4)"
            : "rgba(0, 212, 255, 0.06)";
          ctx.lineWidth = connected ? 1.5 : 0.5;
          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.stroke();
        }
      }

      /* ── outer heptagon edges (brighter, unless already highlighted) ── */
      for (let i = 0; i < positions.length; i++) {
        const j = (i + 1) % positions.length;
        const connected =
          hovered >= 0 && (i === hovered || j === hovered);
        if (!connected) {
          ctx.strokeStyle = "rgba(0, 212, 255, 0.12)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.stroke();
        }
      }

      /* ── traveling dots on hovered connections ── */
      if (hovered >= 0) {
        const t = (time % 1200) / 1200; // 0 → 1 over 1.2 s

        for (let j = 0; j < positions.length; j++) {
          if (j === hovered) continue;

          const from = positions[hovered];
          const to = positions[j];
          const x = from.x + (to.x - from.x) * t;
          const y = from.y + (to.y - from.y) * t;

          // 10 px radial glow trail
          const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
          grad.addColorStop(0, "rgba(0, 212, 255, 0.6)");
          grad.addColorStop(1, "rgba(0, 212, 255, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.fill();

          // 2.2 px cyan dot
          ctx.fillStyle = "rgba(0, 212, 255, 0.9)";
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    },
    [positions, size],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw, size]);

  return (
    <div
      className="absolute z-20"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {NAV_ITEMS.map((item, i) => {
        const pos = positions[i];
        return (
          <Link
            key={item.label}
            href={item.href}
            className="nav-node"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => {
              hoveredRef.current = i;
            }}
            onMouseLeave={() => {
              hoveredRef.current = -1;
            }}
          >
            <span className="nav-dot" />
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
