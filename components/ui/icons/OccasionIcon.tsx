import type { ReactNode } from "react";

type OccasionVariant =
  | "before-breakfast"
  | "breakfast"
  | "morning-snack"
  | "lunch"
  | "evening-snack"
  | "dinner"
  | "late-night";

const ACCENT: Record<OccasionVariant, string> = {
  "before-breakfast": "#f5c842",
  breakfast:     "#e8a820",
  "morning-snack": "#38bdf8",
  lunch:         "#2dd4bf",
  "evening-snack": "#a78bfa",
  dinner:        "#7c3aed",
  "late-night":  "#94a3b8",
};

interface Props {
  variant: OccasionVariant;
  size?: number;
  className?: string;
}

export default function OccasionIcon({ variant, size = 40, className = "" }: Props) {
  const c = ACCENT[variant];

  const icons: Record<OccasionVariant, ReactNode> = {
    "before-breakfast": (
      <>
        <path d="M 14 40 Q 32 28 50 40" fill="none" stroke={c} strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="32" cy="30" r="6" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.2" strokeOpacity="0.5" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="32" y1="24"
            x2={32 + Math.cos((Math.PI + (i * Math.PI) / 4)) * 11}
            y2={24 + Math.sin((Math.PI + (i * Math.PI) / 4)) * 11}
            stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.4"
          />
        ))}
        <ellipse cx="32" cy="44" rx="10" ry="3" fill={c} fillOpacity="0.2" />
      </>
    ),
    breakfast: (
      <>
        <circle cx="32" cy="28" r="10" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.2" strokeOpacity="0.5" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={i}
            x1="32" y1="18"
            x2={32 + Math.cos((i * Math.PI) / 4) * 14}
            y2={18 + Math.sin((i * Math.PI) / 4) * 14}
            stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45"
          />
        ))}
        <rect x="22" y="42" width="20" height="4" rx="2" fill={c} opacity="0.35" />
      </>
    ),
    "morning-snack": (
      <>
        <path d="M 20 44 Q 32 36 44 44" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.4" />
        <ellipse cx="32" cy="40" rx="14" ry="5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
        <path d="M 26 38 C 28 32 36 32 38 38" fill="none" stroke={c} strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="32" y1="28" x2="32" y2="34" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
      </>
    ),
    lunch: (
      <>
        <rect x="16" y="30" width="32" height="6" rx="2" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <rect x="20" y="24" width="24" height="8" rx="2" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
        <line x1="32" y1="18" x2="32" y2="24" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="32" cy="16" r="2" fill={c} opacity="0.5" />
      </>
    ),
    "evening-snack": (
      <>
        <path d="M 24 42 Q 32 34 40 42" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1" strokeOpacity="0.35" />
        <ellipse cx="32" cy="38" rx="10" ry="4" fill={c} fillOpacity="0.15" />
        <circle cx="28" cy="36" r="2" fill={c} opacity="0.5" />
        <circle cx="36" cy="37" r="1.5" fill={c} opacity="0.4" />
      </>
    ),
    dinner: (
      <>
        <circle cx="32" cy="34" r="12" fill="none" stroke={c} strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="32" cy="34" r="7" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
        <line x1="32" y1="22" x2="32" y2="18" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
        <line x1="32" y1="46" x2="32" y2="50" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
      </>
    ),
    "late-night": (
      <>
        <path
          d="M 38 22 A 12 12 0 1 1 28 38 A 9 9 0 1 0 38 22 Z"
          fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.2" strokeOpacity="0.45"
        />
        <circle cx="44" cy="20" r="1.5" fill={c} opacity="0.6" />
        <circle cx="48" cy="28" r="1" fill={c} opacity="0.4" />
      </>
    ),
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl mx-auto ${className}`}
      style={{
        width: size + 12,
        height: size + 12,
        background: `${c}10`,
        border: `1px solid ${c}25`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
        {icons[variant]}
      </svg>
    </div>
  );
}

export function occasionVariantFromName(name: string): OccasionVariant {
  const map: Record<string, OccasionVariant> = {
    "Before Breakfast": "before-breakfast",
    Breakfast: "breakfast",
    "Morning Snack": "morning-snack",
    Lunch: "lunch",
    "Evening Snack": "evening-snack",
    Dinner: "dinner",
    "Late Night": "late-night",
  };
  return map[name] ?? "lunch";
}

export type { OccasionVariant };
