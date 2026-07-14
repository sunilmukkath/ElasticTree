"use client";

import { Play } from "lucide-react";
import Link from "next/link";

interface Props {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  label?: string;
  showIcon?: boolean;
  /** Same-page studio section (default). */
  href?: string;
}

/** Launches the on-page studio embed — stays on elastictree.com/ai-gaze. */
export default function AiGazeStudioLink({
  variant = "primary",
  size = "md",
  className = "",
  label = "Launch Studio",
  showIcon = true,
  href = "/ai-gaze#studio",
}: Props) {
  const sizeClass = size === "sm" ? "text-sm px-5 py-2.5" : "";
  const variantClass = variant === "primary" ? "btn-primary btn-glow" : "btn-secondary";

  return (
    <Link href={href} className={`${variantClass} ${sizeClass} ${className}`.trim()}>
      {showIcon && <Play size={size === "sm" ? 14 : 16} fill="currentColor" aria-hidden />}
      {label}
    </Link>
  );
}
