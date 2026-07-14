"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { AiGazeSignInModal } from "./AiGazeStudioSignIn";

interface Props {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  label?: string;
  showIcon?: boolean;
  /** Ignored — Launch Studio always opens the sign-in modal. */
  href?: string;
}

/** Opens sign-in; successful auth loads the AI Gaze Streamlit dashboard. */
export default function AiGazeStudioLink({
  variant = "primary",
  size = "md",
  className = "",
  label = "Launch Studio",
  showIcon = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const sizeClass = size === "sm" ? "text-sm px-5 py-2.5" : "";
  const variantClass = variant === "primary" ? "btn-primary btn-glow" : "btn-secondary";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${variantClass} ${sizeClass} ${className}`.trim()}
      >
        {showIcon && <Play size={size === "sm" ? 14 : 16} fill="currentColor" aria-hidden />}
        {label}
      </button>
      <AiGazeSignInModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
