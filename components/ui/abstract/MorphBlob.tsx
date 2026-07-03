"use client";

/** Morphing gradient blob — ambient background accent */
export default function MorphBlob({
  color = "#2dd4bf",
  className = "",
  size = 400,
}: {
  color?: string;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id={`blob-grad-${color.replace("#", "")}`} cx="40%" cy="40%">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <path fill={`url(#blob-grad-${color.replace("#", "")})`} className="animate-morph">
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
            M 100,20 C 160,20 180,70 170,110 C 160,150 120,180 80,170 C 40,160 20,120 30,80 C 40,40 60,20 100,20 Z;
            M 100,30 C 150,10 190,60 175,105 C 160,150 110,190 70,165 C 30,140 10,90 35,55 C 60,20 80,40 100,30 Z;
            M 100,25 C 165,30 185,80 165,120 C 145,160 105,175 65,160 C 25,145 15,100 40,65 C 65,30 75,20 100,25 Z;
            M 100,20 C 160,20 180,70 170,110 C 160,150 120,180 80,170 C 40,160 20,120 30,80 C 40,40 60,20 100,20 Z
          "
        />
      </path>
    </svg>
  );
}
