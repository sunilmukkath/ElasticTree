"use client";

/** Animated concentric orbit rings with travelling nodes */
export default function OrbitRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
        <filter id="orb-blur">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Core glow */}
      <circle cx="200" cy="200" r="28" fill="url(#orb-glow)" opacity="0.6" className="animate-pulse-glow" />
      <circle cx="200" cy="200" r="10" fill="#5eead4" filter="url(#orb-blur)" />

      {[60, 95, 130, 165].map((r, i) => (
        <g key={r} opacity={0.35 - i * 0.05}>
          <ellipse
            cx="200" cy="200" rx={r} ry={r * 0.38}
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            transform={`rotate(${i * 18} 200 200)`}
            className="animate-spin-slow"
            style={{ animationDuration: `${18 + i * 6}s`, transformOrigin: "200px 200px" }}
          />
        </g>
      ))}

      {/* Orbiting nodes */}
      {[
        { r: 60,  dur: 8,  color: "#2dd4bf", size: 5 },
        { r: 95,  dur: 14, color: "#38bdf8", size: 4, reverse: true },
        { r: 130, dur: 20, color: "#5eead4", size: 6 },
        { r: 165, dur: 26, color: "#e8a820", size: 4, reverse: true },
      ].map(({ r, dur, color, size, reverse }, i) => (
        <g key={i}>
          <circle r={size} fill={color} filter="url(#orb-blur)">
            <animateMotion
              dur={`${dur}s`}
              repeatCount="indefinite"
              path={`M ${200 + r},200 A ${r},${r * 0.38} 0 1,${reverse ? 0 : 1} ${200 - r},200 A ${r},${r * 0.38} 0 1,${reverse ? 0 : 1} ${200 + r},200`}
            />
          </circle>
        </g>
      ))}

      {/* Cross hairs */}
      <line x1="200" y1="60" x2="200" y2="340" stroke="rgba(45,212,191,0.08)" strokeWidth="1" />
      <line x1="60"  y1="200" x2="340" y2="200" stroke="rgba(45,212,191,0.08)" strokeWidth="1" />
    </svg>
  );
}
