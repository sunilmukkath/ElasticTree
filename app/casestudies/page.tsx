"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { postSummaries, type PostTag } from "@/lib/postsIndex";
import PostCard from "@/components/casestudies/PostCard";
import PageHero from "@/components/ui/PageHero";

const allTags: PostTag[] = [
  "Analytics", "Sensory Science", "Syndicated", "Impact", "Market Research", "AI",
];

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<PostTag | "All">("All");

  const filtered = useMemo(() => postSummaries.filter((post) => {
    const matchesSearch = !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.client?.toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  }), [query, activeTag]);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Research & <span className="text-gradient-amber">Case Studies</span></>}
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
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap gap-2"
        >
          {(["All", ...allTags] as const).map((tag) => {
            const count = tag === "All" ? postSummaries.length : postSummaries.filter((p) => p.tags.includes(tag)).length;
            if (tag !== "All" && count === 0) return null;
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-body-sm font-medium border transition-all ${
                  active
                    ? "text-[var(--teal)] border-[rgba(45,212,191,0.35)] bg-[rgba(45,212,191,0.1)]"
                    : "text-slate-300 border-white/8 hover:text-[var(--teal)] hover:border-[rgba(45,212,191,0.2)]"
                }`}
              >
                {tag === "All" ? `All (${count})` : `${tag} (${count})`}
              </button>
            );
          })}
        </motion.div>

        <p className="text-body-sm">
          Showing {filtered.length} of {postSummaries.length} studies
        </p>

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
              onClick={() => { setQuery(""); setActiveTag("All"); }}
              className="mt-4 text-[var(--teal)] text-body-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
