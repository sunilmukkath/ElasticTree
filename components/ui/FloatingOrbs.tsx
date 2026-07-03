"use client";

/**
 * Purely CSS-animated glowing blobs — zero JS at runtime.
 * Import anywhere, render inside a `relative overflow-hidden` parent.
 */

interface Orb {
  w: number; h: number;           /* size in px */
  top?: string; left?: string; right?: string; bottom?: string;
  color: string;                  /* rgba or hex */
  duration: number;               /* animation duration s */
  delay: number;                  /* animation delay s */
  blur?: number;                  /* extra blur px */
}

const ORBS: Orb[] = [
  { w: 600, h: 450, top: "-120px",  left: "-80px",   color: "rgba(240,180,41,0.07)",  duration: 14, delay: 0,   blur: 80 },
  { w: 500, h: 380, bottom: "-80px",right: "-60px",  color: "rgba(14,165,233,0.055)", duration: 16, delay: 3.5, blur: 80 },
  { w: 400, h: 300, top: "40%",     left: "30%",     color: "rgba(124,58,237,0.045)", duration: 18, delay: 7,   blur: 90 },
  { w: 320, h: 240, top: "10%",     right: "15%",    color: "rgba(240,180,41,0.05)",  duration: 12, delay: 2,   blur: 70 },
];

export default function FloatingOrbs({ orbs = ORBS }: { orbs?: Orb[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((o, i) => (
        <div
          key={i}
          style={{
            position:  "absolute",
            width:  `${o.w}px`,
            height: `${o.h}px`,
            top:    o.top,
            left:   o.left,
            right:  o.right,
            bottom: o.bottom,
            borderRadius: "50%",
            background: `radial-gradient(ellipse, ${o.color} 0%, transparent 70%)`,
            filter: `blur(${o.blur ?? 60}px)`,
            animation: `float-up ${o.duration}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
