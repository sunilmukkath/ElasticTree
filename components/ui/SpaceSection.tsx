"use client";

import { ReactNode } from "react";

export type FlowTint = "blue" | "purple" | "amber" | "teal" | "none";

interface Props {
  children: ReactNode;
  flow?: FlowTint;
  className?: string;
  id?: string;
  /** tight = logos strip, default = standard section, loose = hero-adjacent */
  spacing?: "tight" | "default" | "loose";
}

const FLOW: Record<FlowTint, string> = {
  blue:   "flow-tint-blue",
  purple: "flow-tint-purple",
  amber:  "flow-tint-amber",
  teal:   "flow-tint-teal",
  none:   "",
};

const SPACING: Record<NonNullable<Props["spacing"]>, string> = {
  tight:   "section-py-tight",
  default: "section-py",
  loose:   "section-py-loose",
};

export default function SpaceSection({
  children,
  flow = "none",
  className = "",
  id,
  spacing = "default",
}: Props) {
  return (
    <section
      id={id}
      className={`relative section-flow ${FLOW[flow]} ${SPACING[spacing]} ${className}`}
    >
      <div className="page-content relative z-10">
        {children}
      </div>
    </section>
  );
}
