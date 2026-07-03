import type { ReactNode } from "react";

type GazeIconVariant = "heatmap" | "hotspot" | "gaze-sequence" | "aoi";

const ACCENT: Record<GazeIconVariant, string> = {
  heatmap:       "#e8a820",
  hotspot:       "#2dd4bf",
  "gaze-sequence": "#38bdf8",
  aoi:           "#a78bfa",
};

interface Props {
  variant: GazeIconVariant;
  size?: number;
  className?: string;
}

export default function GazeDeliverableIcon({ variant, size = 48, className = "" }: Props) {
  const c = ACCENT[variant];

  const icons: Record<GazeIconVariant, ReactNode> = {
    heatmap: (
      <>
        <defs>
          <radialGradient id="hm-glow" cx="65%" cy="35%" r="50%">
            <stop offset="0%" stopColor={c} stopOpacity="0.55" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke={c} strokeOpacity="0.25" strokeWidth="1" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={12 + col * 11}
              y={12 + row * 11}
              width="9"
              height="9"
              rx="1.5"
              fill={c}
              opacity={0.12 + ((row + col) % 3) * 0.08}
            />
          ))
        )}
        <rect x="8" y="8" width="48" height="48" rx="4" fill="url(#hm-glow)" />
        <circle cx="38" cy="22" r="6" fill={c} opacity="0.35" />
        <circle cx="38" cy="22" r="3" fill={c} opacity="0.7" />
      </>
    ),
    hotspot: (
      <>
        {[22, 16, 10].map((r, i) => (
          <circle
            key={r}
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke={c}
            strokeWidth="1"
            strokeOpacity={0.2 + i * 0.15}
            strokeDasharray={i === 0 ? "none" : "3 4"}
          />
        ))}
        <line x1="32" y1="8" x2="32" y2="18" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="32" y1="46" x2="32" y2="56" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="8" y1="32" x2="18" y2="32" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="46" y1="32" x2="56" y2="32" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="32" cy="32" r="4" fill={c} opacity="0.9" />
        <circle cx="32" cy="32" r="7" fill={c} opacity="0.15" />
      </>
    ),
    "gaze-sequence": (
      <>
        <path
          d="M 32 18 C 22 18 14 26 14 34 C 14 42 22 50 32 50 C 42 50 50 42 50 34 C 50 26 42 18 32 18 Z"
          fill="none"
          stroke={c}
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        <circle cx="32" cy="34" r="8" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="32" cy="34" r="3" fill={c} opacity="0.85" />
        <path
          d="M 18 28 Q 24 22 32 26 T 46 30"
          fill="none"
          stroke={c}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
          opacity="0.7"
        />
        <polygon points="46,30 42,27 42,33" fill={c} opacity="0.7" />
        <circle cx="18" cy="28" r="2" fill={c} opacity="0.5" />
      </>
    ),
    aoi: (
      <>
        <rect x="10" y="14" width="22" height="18" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
        <rect x="36" y="14" width="18" height="18" rx="2" fill={c} fillOpacity="0.04" stroke={c} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 2" />
        <rect x="10" y="36" width="44" height="16" rx="2" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={14 + i * 5} y={42} width="3" height={6 + i * 3} rx="0.5" fill={c} opacity={0.35 + i * 0.15} />
        ))}
        <line x1="21" y1="14" x2="21" y2="32" stroke={c} strokeWidth="0.75" strokeOpacity="0.3" />
        <line x1="10" y1="23" x2="32" y2="23" stroke={c} strokeWidth="0.75" strokeOpacity="0.3" />
      </>
    ),
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl ${className}`}
      style={{
        width: size + 16,
        height: size + 16,
        background: `${c}10`,
        border: `1px solid ${c}28`,
        boxShadow: `inset 0 0 20px ${c}08`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
        {icons[variant]}
      </svg>
    </div>
  );
}

export function gazeVariantFromName(name: string): GazeIconVariant {
  if (name.includes("Heat")) return "heatmap";
  if (name.includes("Hot")) return "hotspot";
  if (name.includes("Sequence")) return "gaze-sequence";
  return "aoi";
}

export type { GazeIconVariant };
