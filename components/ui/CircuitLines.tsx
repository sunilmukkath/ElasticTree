"use client";

/**
 * SVG circuit-board trace background.
 * Each path animates a signal "pulse" travelling along the line.
 * Runs entirely in CSS/SVG — no JS after mount.
 */

const TRACES = [
  { d: "M 0 30 H 120 V 60 H 300",          color: "#f0b429", dur: 3.2, delay: 0   },
  { d: "M 300 0 V 80 H 450 V 140",          color: "#0ea5e9", dur: 2.8, delay: 0.8 },
  { d: "M 0 100 H 60 V 45 H 200 V 80",      color: "#7c3aed", dur: 3.8, delay: 1.4 },
  { d: "M 150 0 V 55 H 280 V 30 H 450",     color: "#0f766e", dur: 3.0, delay: 2.0 },
  { d: "M 450 50 H 350 V 110 H 180 V 150",  color: "#f0b429", dur: 4.2, delay: 0.5 },
  { d: "M 80 150 H 220 V 100 H 380",        color: "#0ea5e9", dur: 2.6, delay: 1.8 },
  { d: "M 0 140 H 100 V 80 H 260",          color: "#16a34a", dur: 3.6, delay: 3.0 },
  { d: "M 420 150 V 90 H 310 V 40 H 200",   color: "#2563eb", dur: 3.4, delay: 2.4 },
];

export default function CircuitLines({
  opacity = 0.18,
}: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 450 150"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    >
      {TRACES.map((t, i) => {
        /* estimate a rough path length so the dash covers it */
        const len = 600;
        return (
          <g key={i}>
            {/* static dim path */}
            <path
              d={t.d} fill="none"
              stroke={t.color}
              strokeWidth="0.6"
              opacity="0.25"
            />
            {/* animated signal */}
            <path
              d={t.d} fill="none"
              stroke={t.color}
              strokeWidth="1.2"
              strokeDasharray={`${len * 0.05} ${len}`}
              strokeDashoffset={len}
              strokeLinecap="round"
              style={{
                animation: `circuit-signal ${t.dur}s linear ${t.delay}s infinite`,
                filter: `drop-shadow(0 0 3px ${t.color})`,
              }}
            />
          </g>
        );
      })}
      <style>{`
        @keyframes circuit-signal {
          0%   { stroke-dashoffset: 600; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}
