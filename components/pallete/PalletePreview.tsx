import { Activity, FlaskConical, LayoutDashboard, Sparkles } from "lucide-react";
import Link from "next/link";

const attributes = [
  { label: "Sweetness", value: 6.2, accent: "#e8a820" },
  { label: "Crunch", value: 7.8, accent: "#2dd4bf" },
  { label: "Roast aroma", value: 5.4, accent: "#38bdf8" },
  { label: "Aftertaste", value: 4.1, accent: "#5eead4" },
];

const profiles = [
  { name: "Your product", color: "#2dd4bf" },
  { name: "Leader", color: "#e8a820" },
  { name: "Challenger", color: "#38bdf8" },
];

export default function PalletePreview() {
  return (
    <div className="feature-card overflow-hidden p-0">
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <LayoutDashboard size={18} className="text-[var(--teal)]" aria-hidden />
          <div>
            <p className="text-title text-sm">Pallete™ Sensory Lab</p>
            <p className="text-caption normal-case tracking-normal">Profile maps · benchmarks · TDS</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-caption normal-case tracking-normal border border-[var(--teal)]/25 text-[var(--teal-bright)] bg-[var(--teal-dim)]">
          <FlaskConical size={12} aria-hidden />
          Trained panels
        </span>
      </div>

      <div className="p-5 section-stack-sm">
        <div className="grid grid-cols-2 gap-3">
          {attributes.map((attr) => (
            <div
              key={attr.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
            >
              <p className="text-caption normal-case tracking-normal mb-2">{attr.label}</p>
              <p className="font-display font-bold text-xl" style={{ color: attr.accent }}>
                {attr.value}
              </p>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mt-2">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(attr.value / 10) * 100}%`, background: attr.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={16} className="text-[var(--cyan)]" aria-hidden />
            <p className="text-caption normal-case tracking-normal">Benchmark overlay</p>
          </div>
          <div className="space-y-3">
            {profiles.map((profile) => (
              <div key={profile.name} className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: profile.color }}
                  aria-hidden
                />
                <span className="text-body-sm w-24 shrink-0">{profile.name}</span>
                <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full opacity-90"
                    style={{
                      width: profile.name === "Your product" ? "78%" : profile.name === "Leader" ? "92%" : "64%",
                      background: profile.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
          <p className="text-body-sm flex items-center gap-2">
            <Sparkles size={15} className="text-[var(--teal)]" aria-hidden />
            From sensory profile to formulation direction — built for FMCG R&D teams.
          </p>
          <Link href="/contact" className="btn-secondary text-sm shrink-0">
            Book a Study
          </Link>
        </div>
      </div>
    </div>
  );
}
