"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { AI_GAZE_STUDIO_URL } from "@/lib/ai-gaze";

/** Soft gate — same access password as the Streamlit studio. */
export const STUDIO_PASSWORD =
  process.env.NEXT_PUBLIC_AI_GAZE_ACCESS_PASSWORD ?? "elastic2026";

export function openAiGazeDashboard(password: string) {
  const url = new URL(AI_GAZE_STUDIO_URL);
  url.searchParams.set("access", password.trim());
  window.location.assign(url.toString());
}

export function AiGazeSignInForm({
  onSuccess,
  inputId,
}: {
  onSuccess?: () => void;
  inputId?: string;
}) {
  const autoId = useId();
  const fieldId = inputId ?? `ai-gaze-pwd-${autoId}`;
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    if (password.trim() !== STUDIO_PASSWORD) {
      setError("Incorrect password. Please try again.");
      setSubmitting(false);
      return;
    }

    onSuccess?.();
    openAiGazeDashboard(password);
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <p className="font-display font-bold text-lg text-white mb-1">
        Sign in to AI Gaze Studio
      </p>
      <p className="text-body-sm text-slate-400 mb-5">
        Enter your access password to open the analysis dashboard
      </p>

      <label htmlFor={fieldId} className="sr-only">
        Password
      </label>
      <input
        id={fieldId}
        type="password"
        name="password"
        autoComplete="current-password"
        autoFocus
        placeholder="Enter access password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (error) setError("");
        }}
        className="w-full rounded-xl border border-white/[0.12] bg-[#090e2c]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[var(--amber)]/60 focus:ring-1 focus:ring-[var(--amber)]/40 mb-3"
      />

      {error && (
        <p className="text-sm text-red-400 mb-3" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || !password.trim()}
        className="btn-primary btn-glow w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Opening dashboard…" : "Sign in →"}
      </button>

      <p className="text-center text-xs text-slate-500 mt-4">
        Need a seat?{" "}
        <a
          href="mailto:sunil@elastictree.com"
          className="text-[var(--amber)] font-semibold hover:underline"
        >
          Contact sales
        </a>
      </p>
    </form>
  );
}

export function AiGazeSignInModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-[#0a1f4a]/80 backdrop-blur-sm"
        aria-label="Close sign in"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-gaze-signin-title"
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#103466] p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <h2 id="ai-gaze-signin-title" className="sr-only">
          Sign in to AI Gaze Studio
        </h2>
        <AiGazeSignInForm onSuccess={onClose} />
      </div>
    </div>
  );
}
