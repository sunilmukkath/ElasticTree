"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { AI_GAZE_STUDIO_URL } from "@/lib/ai-gaze";

function studioEmbedSrc() {
  const url = new URL(AI_GAZE_STUDIO_URL);
  url.searchParams.set("embed", "true");
  return url.toString();
}

export default function AiGazeStudioEmbed({
  className = "",
  autoFocus = false,
}: {
  className?: string;
  autoFocus?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!autoFocus) return;
    const el = document.getElementById("studio");
    if (el && window.location.hash === "#studio") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [autoFocus]);

  const height = expanded ? "min(92vh, 920px)" : "min(78vh, 760px)";

  return (
    <div className={`section-stack-sm ${className}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow-text mb-1">Studio</p>
          <h2 className="font-display font-black text-display-sm text-white">
            Run AI Gaze™ here
          </h2>
          <p className="text-body-sm text-slate-400 mt-1 max-w-xl">
            Upload a creative and generate heat maps on this page — no separate Streamlit tab required.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="btn-secondary text-sm"
          >
            {expanded ? <Minimize2 size={15} aria-hidden /> : <Maximize2 size={15} aria-hidden />}
            {expanded ? "Compact" : "Expand"}
          </button>
          <a
            href={AI_GAZE_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            Open fullscreen <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090e2c] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        style={{ height }}
      >
        {!loaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0a1f4a] text-slate-300 text-sm">
            Loading studio…
          </div>
        )}
        <iframe
          title="AI Gaze Studio"
          src={studioEmbedSrc()}
          className="absolute inset-0 h-full w-full border-0"
          allow="clipboard-read; clipboard-write; fullscreen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
