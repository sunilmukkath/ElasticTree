"use client";

import { ExternalLink, Play } from "lucide-react";
import { AI_GAZE_STUDIO_URL } from "@/lib/ai-gaze";

interface Props {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export default function AiGazeStudioLink({
  variant = "primary",
  size = "md",
  className = "",
  label = "Launch Studio",
  showIcon = true,
}: Props) {
  const sizeClass = size === "sm" ? "text-sm px-5 py-2.5" : "";
  const variantClass = variant === "primary" ? "btn-primary btn-glow" : "btn-secondary";

  return (
    <a
      href={AI_GAZE_STUDIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {showIcon && <Play size={size === "sm" ? 14 : 16} fill="currentColor" aria-hidden />}
      {label}
      <ExternalLink size={size === "sm" ? 13 : 15} aria-hidden />
    </a>
  );
}
