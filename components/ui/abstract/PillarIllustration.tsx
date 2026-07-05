"use client";

import type { ReactNode } from "react";

type Variant =
  | "analytics" | "sensory" | "syndicated"
  | "qualitative" | "impact" | "ai-gaze";

const COLORS: Record<Variant, string> = {
  analytics:   "#e8a820",
  sensory:     "#2dd4bf",
  syndicated:  "#8b5cf6",
  qualitative: "#5eead4",
  impact:      "#fb923c",
  "ai-gaze":   "#8b5cf6",
};

export default function PillarIllustration({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  const c = COLORS[variant];

  const svgs: Record<Variant, React.ReactNode> = {
    analytics: (
      <>
        {[0,1,2,3].map(i => (
          <rect key={i} x={20+i*18} y={60-i*8} width="12" height={40+i*8} rx="2"
            fill={c} opacity={0.5+i*0.12}>
            <animate attributeName="height" values={`${30+i*8};${45+i*8};${30+i*8}`} dur={`${2+i*0.3}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <polyline points="20,90 56,60 92,75 128,40" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </>
    ),
    sensory: (
      <>
        <circle cx="74" cy="74" r="30" fill="none" stroke={c} strokeWidth="1.5" opacity="0.4" />
        {[0,60,120,180,240,300].map((deg, i) => (
          <line key={i} x1="74" y1="74"
            x2={74 + 28 * Math.cos((deg * Math.PI) / 180)}
            y2={74 + 28 * Math.sin((deg * Math.PI) / 180)}
            stroke={c} strokeWidth="1.5" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${1.5+i*0.2}s`} repeatCount="indefinite" />
          </line>
        ))}
        <circle cx="74" cy="74" r="8" fill={c} opacity="0.8" />
      </>
    ),
    syndicated: (
      <>
        {[[30,50],[74,30],[118,50],[74,90]].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill={c} opacity="0.7">
            <animate attributeName="r" values="5;7;5" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <line x1="30" y1="50" x2="74" y2="30" stroke={c} strokeWidth="1" opacity="0.4" />
        <line x1="74" y1="30" x2="118" y2="50" stroke={c} strokeWidth="1" opacity="0.4" />
        <line x1="118" y1="50" x2="74" y2="90" stroke={c} strokeWidth="1" opacity="0.4" />
        <line x1="74" y1="90" x2="30" y2="50" stroke={c} strokeWidth="1" opacity="0.4" />
      </>
    ),
    qualitative: (
      <>
        <ellipse cx="74" cy="74" rx="40" ry="25" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 74 Q 74 40 108 74 Q 74 108 40 74" fill={c} opacity="0.15" />
        <circle cx="74" cy="74" r="4" fill={c} />
      </>
    ),
    impact: (
      <>
        <path d="M 74 30 L 90 65 L 128 65 L 96 85 L 108 120 L 74 98 L 40 120 L 52 85 L 20 65 L 58 65 Z"
          fill={c} opacity="0.25" stroke={c} strokeWidth="1.5" />
        <circle cx="74" cy="74" r="20" fill="none" stroke={c} strokeWidth="1" opacity="0.5"
          strokeDasharray="4 4">
          <animateTransform attributeName="transform" type="rotate" from="0 74 74" to="360 74 74" dur="20s" repeatCount="indefinite" />
        </circle>
      </>
    ),
    "ai-gaze": (
      <>
        <ellipse cx="74" cy="74" rx="38" ry="22" fill="none" stroke={c} strokeWidth="1.5" opacity="0.6" />
        <circle cx="74" cy="74" r="12" fill={c} opacity="0.3" />
        <circle cx="74" cy="74" r="5" fill={c} />
        <line x1="20" y1="74" x2="128" y2="74" stroke={c} strokeWidth="0.8" opacity="0.3"
          strokeDasharray="3 5">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite" />
        </line>
      </>
    ),
  };

  return (
    <svg viewBox="0 0 148 120" className={className} aria-hidden>
      <rect width="148" height="120" rx="12" fill={`${c}08`} />
      <rect width="148" height="120" rx="12" fill="none" stroke={`${c}25`} strokeWidth="1" />
      {svgs[variant]}
    </svg>
  );
}
