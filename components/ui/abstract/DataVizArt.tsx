"use client";

/** Abstract animated bar + arc chart for data sections */
export default function DataVizArt({ className = "" }: { className?: string }) {
  const bars = [55, 78, 45, 92, 68, 85, 60, 95, 72, 88];
  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden>
      <defs>
        <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#103870" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="20" y1={40 + i * 40} x2="340" y2={40 + i * 40}
          stroke="rgba(45,212,191,0.08)" strokeWidth="1" />
      ))}

      {/* Animated trend arc */}
      <path
        d="M 30 180 Q 120 60 200 100 T 330 50"
        fill="none"
        stroke="url(#arc-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="400"
        strokeDashoffset="400"
      >
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Bars */}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={28 + i * 32}
          y={200 - h * 1.6}
          width="20"
          height={h * 1.6}
          rx="3"
          fill="url(#bar-grad)"
          opacity="0.85"
        >
          <animate attributeName="height" from="0" to={h * 1.6} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
          <animate attributeName="y" from="200" to={200 - h * 1.6} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
        </rect>
      ))}

      {/* Floating data points on arc */}
      {[[30,180],[120,90],[200,100],[330,50]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#5eead4" opacity="0.9">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Labels */}
      <text x="20" y="225" fill="rgba(45,212,191,0.4)" fontSize="8" fontFamily="monospace">WAVE 2026</text>
      <text x="280" y="225" fill="rgba(45,212,191,0.4)" fontSize="8" fontFamily="monospace">LIVE DATA</text>
    </svg>
  );
}
