const codeFragments = [
  { top: "5%", left: "3%", text: "const model = tf.sequential();", w: 280, steps: 35, dur: 6, del: 0 },
  { top: "12%", right: "5%", text: "await pipeline('sentiment-analysis');", w: 320, steps: 40, dur: 7, del: 1.5 },
  { top: "76%", left: "2%", text: "optimizer = torch.optim.Adam(lr=3e-4)", w: 250, steps: 30, dur: 6, del: 0.5 },
  { top: "84%", right: "4%", text: "embeddings = model.encode(documents)", w: 300, steps: 38, dur: 7, del: 2.5 },
  { top: "20%", left: "1%", text: "loss.backward()", w: 200, steps: 25, dur: 5.5, del: 3.5 },
  { top: "70%", right: "2%", text: "predictions = model.predict(X_test)", w: 260, steps: 32, dur: 6.5, del: 1 },
  { top: "91%", left: "8%", text: "tokenizer.encode(text, return_tensors='pt')", w: 340, steps: 42, dur: 7.5, del: 2 },
  { top: "3%", right: "12%", text: "nn.TransformerEncoder(layer, 6)", w: 220, steps: 28, dur: 6, del: 3 },
];

const glowSpots = [
  { top: "20%", left: "15%", size: 300, color: "0,180,220", dur: 8, del: 0 },
  { top: "60%", left: "85%", size: 250, color: "0,150,200", dur: 10, del: 2 },
  { top: "40%", left: "60%", size: 200, color: "0,200,240", dur: 7, del: 4 },
  { top: "80%", left: "30%", size: 180, color: "0,160,210", dur: 9, del: 1 },
];

const dataNodes = [
  { top: "15%", left: "20%", dur: 4, del: 0 },
  { top: "30%", left: "80%", dur: 5, del: 1 },
  { top: "55%", left: "10%", dur: 6, del: 2 },
  { top: "70%", left: "75%", dur: 4.5, del: 0.5 },
  { top: "85%", left: "45%", dur: 5.5, del: 1.5 },
  { top: "10%", left: "55%", dur: 4, del: 3 },
  { top: "45%", left: "90%", dur: 6, del: 2.5 },
  { top: "65%", left: "35%", dur: 5, del: 0.8 },
];

export default function Atmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient - the lighter background the mist floats over */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% 40%, #8a9bb0 0%, #5a6a7a 30%, #2b2630 70%, #1a1520 100%)',
        }}
      />

      {/* Mist Layer 1 */}
      <div
        className="animate-mist-1"
        style={{
          position: 'absolute',
          inset: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(ellipse 400px 300px at 30% 40%, rgba(180, 195, 215, 0.3), transparent 70%), radial-gradient(ellipse 500px 350px at 70% 35%, rgba(160, 180, 200, 0.25), transparent 70%), radial-gradient(ellipse 350px 250px at 50% 60%, rgba(140, 165, 190, 0.2), transparent 70%), radial-gradient(ellipse 450px 300px at 20% 70%, rgba(170, 190, 210, 0.15), transparent 70%), radial-gradient(ellipse 380px 280px at 80% 65%, rgba(150, 175, 200, 0.2), transparent 70%)',
        }}
      />

      {/* Mist Layer 2 */}
      <div
        className="animate-mist-2"
        style={{
          position: 'absolute',
          inset: '-30%',
          width: '160%',
          height: '160%',
          background: 'radial-gradient(ellipse 600px 400px at 60% 30%, rgba(200, 210, 225, 0.15), transparent 60%), radial-gradient(ellipse 500px 350px at 25% 55%, rgba(180, 195, 215, 0.12), transparent 60%)',
        }}
      />

      {/* Hex Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ animation: "hexBreathe 12s ease-in-out infinite" }}
      >
        <defs>
          <pattern
            id="hexGrid"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <path
              d="M30,0 L60,15 L60,37 L30,52 L0,37 L0,15 Z"
              fill="none"
              stroke="rgba(0,212,255,0.06)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>

      {/* Glow Spots */}
      {glowSpots.map((spot, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            top: spot.top,
            left: spot.left,
            width: spot.size,
            height: spot.size,
            background: `radial-gradient(circle, rgba(${spot.color},0.04) 0%, transparent 70%)`,
            animation: `glowPulse ${spot.dur}s ease-in-out ${spot.del}s infinite`,
          }}
        />
      ))}

      {/* Code Fragments */}
      {codeFragments.map((frag, i) => (
        <span
          key={`code-${i}`}
          className="code-line"
          style={{
            top: frag.top,
            left: frag.left,
            right: frag.right,
            ["--tw" as string]: `${frag.w}px`,
            animation: `typewrite ${frag.dur}s steps(${frag.steps}) ${frag.del}s infinite`,
          }}
        >
          {frag.text}
        </span>
      ))}

      {/* Data Nodes */}
      {dataNodes.map((node, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: node.top,
            left: node.left,
            background: "rgba(0,212,255,0.4)",
            boxShadow: "0 0 6px rgba(0,212,255,0.2)",
            animation: `nodeFloat ${node.dur}s ease-in-out ${node.del}s infinite`,
          }}
        />
      ))}

      {/* Scanline */}
      <div
        className="absolute left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.08) 20%, rgba(0,212,255,0.15) 50%, rgba(0,212,255,0.08) 80%, transparent 100%)",
          animation: "scanUp 8s linear infinite",
        }}
      />
    </div>
  );
}