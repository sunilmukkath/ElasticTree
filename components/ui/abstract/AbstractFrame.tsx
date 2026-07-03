"use client";

import { ReactNode } from "react";

/** Glass frame wrapping any abstract SVG / visual */
export default function AbstractFrame({
  children,
  label,
  className = "",
  glow = "#2dd4bf",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  glow?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden space-card-holo ${className}`}
      style={{ boxShadow: `0 0 60px ${glow}18, inset 0 0 40px ${glow}08` }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl pointer-events-none"
        style={{ borderColor: `${glow}60` }} />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl pointer-events-none"
        style={{ borderColor: `${glow}40` }} />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-2xl pointer-events-none"
        style={{ borderColor: `${glow}40` }} />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl pointer-events-none"
        style={{ borderColor: `${glow}60` }} />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-px scan-line opacity-30" />

      <div className="relative p-4 sm:p-6 flex items-center justify-center min-h-[200px]">
        {children}
      </div>

      {label && (
        <div className="absolute bottom-3 left-4 font-mono text-[0.6rem] tracking-widest uppercase"
          style={{ color: `${glow}99` }}>
          {label}
        </div>
      )}
    </div>
  );
}
