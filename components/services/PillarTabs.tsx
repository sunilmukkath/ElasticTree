"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "analytics", label: "Analytics" },
  { id: "sensory", label: "Sensory Science" },
  { id: "syndicated", label: "Syndicated" },
  { id: "impact", label: "Impact" },
  { id: "market-research", label: "Market Research" },
];

export default function PillarTabs({ activeId }: { activeId?: string }) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-[#080d1a]/95 backdrop-blur-md border-b border-[rgba(201,168,76,0.1)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeId === tab.id
                  ? "bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.3)]"
                  : "text-slate-300 hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.08)] border border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
