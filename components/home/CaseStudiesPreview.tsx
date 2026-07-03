"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getFeaturedPosts, posts } from "@/lib/posts";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const featured = getFeaturedPosts(6);

const tagColors: Record<string, { bg: string; color: string }> = {
  Analytics:         { bg: "rgba(45,212,191,0.1)",  color: "#2dd4bf" },
  "Sensory Science": { bg: "rgba(52,211,153,0.1)",  color: "#34d399" },
  Syndicated:        { bg: "rgba(139,92,246,0.1)",  color: "#a78bfa" },
  Impact:            { bg: "rgba(251,146,60,0.1)",  color: "#fb923c" },
  "Market Research": { bg: "rgba(232,168,32,0.1)",  color: "#e8a820" },
  AI:                { bg: "rgba(244,114,182,0.1)", color: "#f472b6" },
};

export default function CaseStudiesPreview() {
  return (
    <SpaceSection flow="amber">
      <SectionBlock
        label="Case Studies"
        title={<>Research That <span className="text-gradient-amber">Delivers Results</span></>}
        subtitle="Real projects across FMCG, food service, media, and social impact."
        action={
          <Link href="/casestudies" className="btn-secondary text-sm">
            View All {posts.length} Studies <ArrowRight size={15} />
          </Link>
        }
      >
        <div className="stat-row mb-2">
          {[
            { val: "15+", label: "Studies", color: "#2dd4bf" },
            { val: "6", label: "Pillars", color: "#e8a820" },
            { val: "200+", label: "Clients", color: "#38bdf8" },
            { val: "74%", label: "Repeat Rate", color: "#5eead4" },
          ].map((s) => (
            <div key={s.label}>
              <p className="stat-value" style={{ color: s.color }}>{s.val}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="content-grid-3">
          {featured.map((post, i) => {
            const style = tagColors[post.tags[0]] || tagColors["Market Research"];
            const meta = post.client
              ? `${post.client}${post.industry ? ` · ${post.industry}` : ""}`
              : null;

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="h-full"
              >
                <Link href={`/casestudies/${post.slug}`} className="study-link group flex flex-col h-full py-6 border-t-2 border-white/[0.06] hover:border-[var(--amber)] transition-colors">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-caption px-2 py-0.5 rounded-full normal-case tracking-normal border border-white/[0.06]"
                        style={{ background: tagColors[t]?.bg ?? style.bg, color: tagColors[t]?.color ?? style.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {meta && (
                    <p className="text-caption normal-case mb-3 text-slate-400">{meta}</p>
                  )}

                  <h3 className="text-title mb-2 group-hover:text-[var(--teal-bright)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-body-sm line-clamp-2 flex-1 mb-4">{post.excerpt}</p>

                  <span className="flex items-center gap-1.5 text-caption normal-case text-slate-400 mt-auto">
                    <Clock size={11} aria-hidden /> {post.readTime}
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-[var(--teal)] transition-opacity" aria-hidden />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
