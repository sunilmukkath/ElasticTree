"use client";

import { useEffect } from "react";
import { AiGazeSignInForm } from "./AiGazeStudioSignIn";

/** Compact #studio sign-in — same gate as Launch Studio modal. */
export default function AiGazeStudioEmbed({
  className = "",
  autoFocus = false,
}: {
  className?: string;
  autoFocus?: boolean;
}) {
  useEffect(() => {
    if (!autoFocus) return;
    const el = document.getElementById("studio");
    if (el && window.location.hash === "#studio") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [autoFocus]);

  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <div className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-[rgba(16,52,102,0.55)] p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <AiGazeSignInForm inputId="ai-gaze-studio-password" />
      </div>
    </div>
  );
}
