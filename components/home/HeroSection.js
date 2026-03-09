"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Upnext Logo SVG (recreated from brand mark) ─────────────────────────────
function UpnextLogo({ className = "", width = 180 }) {
  return (
    <svg
      width={width}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Arrow/bookmark mark */}
      <path
        d="M8 8 L28 8 L28 44 L18 34 L8 44 Z"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* U */}
      <path
        d="M42 12 L42 36 Q42 48 54 48 Q66 48 66 36 L66 12"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* p */}
      <path
        d="M74 22 L74 54 M74 28 Q74 22 82 22 Q90 22 90 30 Q90 38 82 38 Q74 38 74 32"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* n */}
      <path
        d="M98 38 L98 22 Q98 22 106 22 Q114 22 114 30 L114 38"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* e */}
      <path
        d="M122 30 Q122 22 130 22 Q138 22 138 30 Q138 38 130 38 Q122 38 122 30 Z M122 30 L138 30"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* x */}
      <path
        d="M146 22 L162 38 M162 22 L146 38"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* t */}
      <path
        d="M172 14 L172 38 Q172 44 178 44 M166 22 L180 22"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── Dot grid canvas ──────────────────────────────────────────────────────────
function DotGrid() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const scanRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const cols = Math.floor(W / 28);
      const rows = Math.floor(H / 28);
      const gapX = W / cols;
      const gapY = H / rows;

      // Animate scan progress (0→1 sine wave)
      t += 0.008;
      const scanY = (Math.sin(t) * 0.5 + 0.5) * H;
      scanRef.current = scanY;

      const mx = mouseRef.current.x * W;
      const my = mouseRef.current.y * H;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * gapX;
          const y = r * gapY;

          // Distance from mouse
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 220);

          // Distance from scan line
          const scanDist = Math.abs(y - scanY);
          const scanInfluence = Math.max(0, 1 - scanDist / 60);

          // Combine influences for dot size
          const baseR = 1.2;
          const r2 = baseR + mouseInfluence * 3.5 + scanInfluence * 2.5;

          // Color: dark red particles with brighter scan highlight
          const redBoost = scanInfluence;
          const mouseBoost = mouseInfluence;

          const red = Math.round(95 + 60 * redBoost + 35 * mouseBoost);
          const green = Math.round(6 + 20 * mouseBoost);
          const blue = Math.round(6 + 16 * mouseBoost);
          const alpha = 0.12 + mouseInfluence * 0.4 + scanInfluence * 0.5;

          ctx.beginPath();
          ctx.arc(x, y, r2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
          ctx.fill();
        }
      }

      // Draw scan line glow
      const gradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      gradient.addColorStop(0, "rgba(107,0,0,0)");
      gradient.addColorStop(0.5, "rgba(107,0,0,0.3)");
      gradient.addColorStop(1, "rgba(107,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 40, W, 80);

      // Core scan line
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(W, scanY);
      ctx.strokeStyle = "rgba(107,0,0,0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

// ─── Glitch text hook ─────────────────────────────────────────────────────────
function useGlitch(text, delay = 0) {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&";

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 0.6;
      }, 40);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return display;
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const line1 = useGlitch("WE MAKE", 300);
  const line2 = useGlitch("BRANDS FEEL", 900);
  const line3 = useGlitch("ALIVE.", 1600);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [badgesVisible, setBadgesVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSubtitleVisible(true), 2400);
    const t2 = setTimeout(() => setCtaVisible(true), 2800);
    const t3 = setTimeout(() => setBadgesVisible(true), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#FDF5F5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap');

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanPulse {
          0%,100% { opacity: 0.4; }
          50%      { opacity: 1;   }
        }
        @keyframes cornerBlink {
          0%,100% { opacity:0.3; } 50% { opacity:1; }
        }
        @keyframes badgeFade {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .hero-line {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.04em;
          color: #111111;
          font-size: clamp(56px, 10vw, 148px);
          display: block;
          font-variant-numeric: tabular-nums;
          min-height: 1em;
        }
        .hero-line.crimson { color: #111111; font-style: italic; }
        .hero-line.visible {
          animation: heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both;
        }
        .subtitle-text {
          font-family: 'Manrope', sans-serif;
          color: #111111;
          font-size: clamp(15px, 1.5vw, 20px);
          line-height: 1.6;
          max-width: 440px;
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
          transform: translateY(16px);
        }
        .subtitle-text.visible { opacity:1; transform:translateY(0); }
        .cta-block {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .cta-block.visible { opacity:1; transform:translateY(0); }
        .badge-row {
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .badge-row.visible { opacity:1; }
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #A02B20;
          color: #FFFFFF;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 14px 28px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }
        .cta-primary:hover { background: #B63B2F; }
        .cta-secondary {
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
          transition: color 0.3s;
          display: inline-block;
          margin-top: 12px;
        }
        .cta-secondary:hover { color: #111111; }

        /* Corner brackets HUD */
        .corner { position: absolute; width: 18px; height: 18px; animation: cornerBlink 3s ease infinite; }
        .corner-tl { top:0; left:0; border-top:1px solid #111111; border-left:1px solid #111111; }
        .corner-tr { top:0; right:0; border-top:1px solid #111111; border-right:1px solid #111111; }
        .corner-bl { bottom:0; left:0; border-bottom:1px solid #111111; border-left:1px solid #111111; }
        .corner-br { bottom:0; right:0; border-bottom:1px solid #111111; border-right:1px solid #111111; }

        /* Vertical accent lines */
        .v-line-left {
          position:absolute; top:0; left:8%; width:1px; height:35%;
          background: linear-gradient(to bottom, transparent, rgba(17,17,17,0.8) 50%, transparent);
          opacity:0.5; z-index:2;
        }
        .v-line-right {
          position:absolute; top:10%; right:6%; width:1px; height:50%;
          background: linear-gradient(to bottom, transparent, rgba(17,17,17,0.35), transparent);
          opacity:0.4; z-index:2;
        }

        /* Scan status text */
        .scan-status {
          font-family: 'Manrope', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #111111;
          text-transform: uppercase;
          animation: scanPulse 2s ease infinite;
        }
      `}</style>

      {/* Dot grid background */}
      <DotGrid />

      {/* Vertical accent lines */}
      <div className="v-line-left" />
      <div className="v-line-right" />

      {/* Deep vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 42%, rgba(218, 177, 177, 0.42) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          zIndex: 2,
          background: "linear-gradient(to top, rgba(218, 177, 177, 0.55) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "clamp(24px, 5vw, 80px)",
          paddingTop: 0,
          paddingBottom: "clamp(40px, 6vh, 80px)",
          maxWidth: 1600,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* HUD top-left: logo + scan status */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "clamp(24px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            paddingTop: "clamp(80px, 10vh, 120px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 24, height: 1, background: "#111111" }} />
            <span className="scan-status">Fashion & Food · Lucknow</span>
          </div>
        </div>

        {/* HUD top-right */}
        <div
          style={{
            position: "absolute",
            top: "clamp(80px, 10vh, 120px)",
            right: "clamp(24px, 5vw, 80px)",
            textAlign: "right",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "Manrope",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#111111",
                textTransform: "uppercase",
              }}
            >
              Est. Lucknow
            </span>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#6B0000",
                boxShadow: "0 0 8px rgba(107, 0, 0, 0.8)",
              }}
            />
          </div>
        </div>

        {/* Main heading grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 0,
            paddingTop: "clamp(160px, 22vh, 260px)",
          }}
        >
          <span
            className={`hero-line ${line1 ? "visible" : ""}`}
            style={{ animationDelay: "0s" }}
          >
            {line1 || "\u00A0"}
          </span>
          <span
            className={`hero-line ${line2 ? "visible" : ""}`}
            style={{ animationDelay: "0.08s" }}
          >
            {line2 || "\u00A0"}
          </span>
          <span
            className={`hero-line crimson ${line3 ? "visible" : ""}`}
            style={{ animationDelay: "0.16s" }}
          >
            {line3 || "\u00A0"}
          </span>
        </div>

        {/* Bottom content row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginTop: "clamp(28px, 4vh, 52px)",
          }}
        >
          {/* Subtitle + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className={`subtitle-text ${subtitleVisible ? "visible" : ""}`}>
              Editorial branding, visceral photography, and digital experiences
              crafted for premium fashion labels and fine dining.
            </p>
            <div className={`cta-block ${ctaVisible ? "visible" : ""}`}>
              <Link href="/contact" className="cta-primary">
                Start a Project
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <br />
              <Link href="/work" className="cta-secondary">
                View Our Work →
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div
            className={`badge-row ${badgesVisible ? "visible" : ""}`}
            style={{
              display: "flex",
              gap: "clamp(20px, 4vw, 52px)",
              alignItems: "flex-end",
            }}
          >
            {[
              { value: "4+", label: "Brands Elevated" },
              { value: "₹8L+", label: "Revenue Generated" },
              { value: "3×", label: "Avg Engagement Lift" },
            ].map((b, i) => (
              <div key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Corner brackets around each badge */}
                <div style={{ position: "relative", padding: "12px 16px" }}>
                  <div className="corner corner-tl" />
                  <div className="corner corner-tr" />
                  <div className="corner corner-bl" />
                  <div className="corner corner-br" />
                  <p
                    style={{
                      fontFamily: "Space Grotesk",
                      fontWeight: 800,
                      fontSize: "clamp(22px, 2.5vw, 34px)",
                      color: "#111111",
                      lineHeight: 1,
                    }}
                  >
                    {b.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "Manrope",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      color: "#111111",
                      textTransform: "uppercase",
                      marginTop: 6,
                    }}
                  >
                    {b.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: ctaVisible ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      >
        <span
          style={{
            fontFamily: "Manrope",
            fontSize: 10,
            letterSpacing: "0.25em",
            color: "#111111",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ animation: "heroFadeUp 1.5s ease infinite alternate" }}
        >
          <path
            d="M8 4 L8 20 M3 15 L8 20 L13 15"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
