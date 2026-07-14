"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { postSummaries } from "@/lib/postsIndex";
import PostCard from "@/components/casestudies/PostCard";
import PageHero from "@/components/ui/PageHero";

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => postSummaries.filter((post) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.client?.toLowerCase().includes(q)
    );
  }), [query]);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Proof in <span className="text-gradient-amber">Practice</span></>}
        subtitle={`${postSummaries.length} published studies across analytics, sensory science, syndicated research, AI, and impact.`}
        toolbar={
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, client, or topic..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field !rounded-full pl-10 w-full"
            />
          </div>
        }
      />

      <div className="page-content section-py">
        <div className="section-stack-md">
          {query && (
            <p className="text-body-sm">
              Showing {filtered.length} of {postSummaries.length} studies
            </p>
          )}

          {filtered.length > 0 ? (
            <div className="content-grid-3">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-body-md">No results found for &ldquo;{query}&rdquo;.</p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-[var(--teal)] text-body-sm hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
