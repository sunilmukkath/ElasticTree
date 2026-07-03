"use client";

/** Scattered floating geometric shapes */
export default function FloatingGeometry({ className = "" }: { className?: string }) {
  const shapes = [
    { type: "circle",  x: "10%", y: "15%", size: 60,  color: "#2dd4bf", delay: 0,   dur: 14 },
    { type: "square",  x: "85%", y: "20%", size: 40,  color: "#38bdf8", delay: 2,   dur: 18 },
    { type: "circle",  x: "75%", y: "70%", size: 80,  color: "#14b8a6", delay: 4,   dur: 16 },
    { type: "diamond", x: "15%", y: "75%", size: 50,  color: "#e8a820", delay: 1,   dur: 20 },
    { type: "circle",  x: "50%", y: "10%", size: 30,  color: "#5eead4", delay: 3,   dur: 12 },
    { type: "square",  x: "40%", y: "85%", size: 35,  color: "#38bdf8", delay: 5,   dur: 22 },
  ] as const;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {shapes.map(({ type, x, y, size, color, delay, dur }, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: x, top: y,
            width: size, height: size,
            animationDuration: `${dur}s`,
            animationDelay: `${delay}s`,
            opacity: 0.12,
          }}
        >
          {type === "circle" && (
            <div className="w-full h-full rounded-full border" style={{ borderColor: color, background: `${color}15` }} />
          )}
          {type === "square" && (
            <div className="w-full h-full rotate-45 border rounded-sm" style={{ borderColor: color, background: `${color}10` }} />
          )}
          {type === "diamond" && (
            <div className="w-full h-full rotate-45 border rounded-lg" style={{ borderColor: color, background: `${color}12` }} />
          )}
        </div>
      ))}
    </div>
  );
}
