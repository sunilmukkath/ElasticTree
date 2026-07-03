import type { ReactNode } from "react";

type OccasionVariant =
  | "breakfast"
  | "morning-snack"
  | "lunch"
  | "evening-snack"
  | "dinner"
  | "late-night"
  | "celebration";

const ACCENT: Record<OccasionVariant, string> = {
  breakfast:     "#e8a820",
  "morning-snack": "#38bdf8",
  lunch:         "#2dd4bf",
  "evening-snack": "#a78bfa",
  dinner:        "#f472b6",
  "late-night":  "#94a3b8",
  celebration:   "#f5c842",
};

interface Props {
  variant: OccasionVariant;
  size?: number;
  className?: string;
}

export default function OccasionIcon({ variant, size = 40, className = "" }: Props) {
  const c = ACCENT[variant];

  const icons: Record<OccasionVariant, ReactNode> = {
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
    celebration: (
      <>
        <line x1="32" y1="44" x2="32" y2="28" stroke={c} strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 32 28 L 26 36 L 32 34 L 38 36 Z" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="22" cy="24" r="1.5" fill={c} opacity="0.6" />
        <circle cx="42" cy="22" r="1" fill={c} opacity="0.5" />
        <path d="M 18 30 L 20 34 L 16 34 Z" fill={c} opacity="0.35" />
        <path d="M 46 32 L 48 36 L 44 36 Z" fill={c} opacity="0.35" />
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
    Breakfast: "breakfast",
    "Morning Snack": "morning-snack",
    Lunch: "lunch",
    "Evening Snack": "evening-snack",
    Dinner: "dinner",
    "Late Night": "late-night",
    Celebration: "celebration",
  };
  return map[name] ?? "lunch";
}

export type { OccasionVariant };
