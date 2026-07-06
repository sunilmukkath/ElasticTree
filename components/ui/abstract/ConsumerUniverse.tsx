"use client";

const STARS = [
  [52, 74], [88, 42], [142, 58], [318, 96], [348, 148], [362, 268],
  [328, 338], [248, 362], [118, 348], [58, 292], [36, 198], [168, 32],
  [272, 52], [380, 210], [24, 156], [210, 378], [290, 368], [134, 128],
];

const ORBITS = [
  { rx: 52, ry: 20, rotate: -12, dur: 11, color: "#2dd4bf", count: 3, reverse: false, size: 4.5 },
  { rx: 88, ry: 34, rotate: 28, dur: 16, color: "#38bdf8", count: 4, reverse: true, size: 4 },
  { rx: 122, ry: 46, rotate: -38, dur: 22, color: "#5eead4", count: 5, reverse: false, size: 5 },
  { rx: 158, ry: 58, rotate: 52, dur: 28, color: "#e8a820", count: 3, reverse: true, size: 4 },
];

const STREAMS = [
  "M 200,200 Q 140,120 90,95",
  "M 200,200 Q 280,130 320,88",
  "M 200,200 Q 260,280 310,310",
  "M 200,200 Q 120,260 72,300",
];

function orbitPath(rx: number, ry: number, reverse: boolean) {
  const sweep = reverse ? 0 : 1;
  return `M 200,${200 - ry} A ${rx},${ry} 0 1,${sweep} 200,${200 + ry} A ${rx},${ry} 0 1,${sweep} 200,${200 - ry}`;
}

/** Hero visual — layered orbits and data streams around a central insight core */
export default function ConsumerUniverse({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <radialGradient id="cu-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="1" />
          <stop offset="45%" stopColor="#2dd4bf" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#103870" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cu-amber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a820" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e8a820" stopOpacity="0" />
        </radialGradient>
        <filter id="cu-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cu-stream" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#5eead4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient field */}
      <circle cx="200" cy="200" r="185" fill="url(#cu-core)" opacity="0.12" />

      {STARS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.2 : 0.8} fill="#5eead4" opacity="0.35">
          <animate
            attributeName="opacity"
            values="0.15;0.55;0.15"
            dur={`${2.5 + (i % 5) * 0.6}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Expanding pulse rings */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r="48"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="0.8"
          opacity="0"
        >
          <animate attributeName="r" from="48" to="188" dur="5s" begin={`${i * 1.6}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0.12;0" dur="5s" begin={`${i * 1.6}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Data streams from core */}
      {STREAMS.map((d, i) => (
        <g key={d}>
          <path
            d={d}
            fill="none"
            stroke="url(#cu-stream)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
            strokeDasharray="6 14"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-40" dur={`${2.8 + i * 0.5}s`} repeatCount="indefinite" />
          </path>
          <circle r="2.5" fill="#5eead4" opacity="0.85">
            <animateMotion dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}

      {/* Orbital rings + travelling nodes */}
      {ORBITS.map(({ rx, ry, rotate, dur, color, count, reverse, size }, oi) => (
        <g key={oi} transform={`rotate(${rotate} 200 200)`}>
          <ellipse
            cx="200"
            cy="200"
            rx={rx}
            ry={ry}
            fill="none"
            stroke={color}
            strokeWidth="0.75"
            strokeDasharray="3 9"
            opacity="0.22"
          />
          {Array.from({ length: count }, (_, ni) => (
            <g key={ni}>
              <circle r={size * 2.2} fill={color} opacity="0.1">
                <animateMotion
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  path={orbitPath(rx, ry, reverse)}
                  begin={`${-(dur / count) * ni}s`}
                />
              </circle>
              <circle r={size} fill={color} filter="url(#cu-glow)">
                <animateMotion
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  path={orbitPath(rx, ry, reverse)}
                  begin={`${-(dur / count) * ni}s`}
                />
              </circle>
            </g>
          ))}
        </g>
      ))}

      {/* Rotating outer scan ring */}
      <circle
        cx="200"
        cy="200"
        r="172"
        fill="none"
        stroke="rgba(45,212,191,0.12)"
        strokeWidth="1"
        strokeDasharray="120 520"
        className="animate-spin-slow"
        style={{ transformOrigin: "200px 200px" }}
      />

      {/* Central core */}
      <circle cx="200" cy="200" r="56" fill="url(#cu-core)" opacity="0.35" className="animate-pulse-glow" />
      <circle cx="200" cy="200" r="36" fill="url(#cu-amber)" opacity="0.25" />
      <circle cx="200" cy="200" r="22" fill="#2dd4bf" filter="url(#cu-glow)" opacity="0.9">
        <animate attributeName="r" values="20;24;20" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="8" fill="#e8a820" filter="url(#cu-glow)" />
    </svg>
  );
}
