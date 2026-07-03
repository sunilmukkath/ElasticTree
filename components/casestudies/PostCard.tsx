import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { PostSummary, PostTag } from "@/lib/postsIndex";

const tagColors: Record<PostTag, { bg: string; color: string }> = {
  Analytics:         { bg: "rgba(45,212,191,0.1)",  color: "#2dd4bf" },
  "Sensory Science": { bg: "rgba(52,211,153,0.1)",  color: "#34d399" },
  Syndicated:        { bg: "rgba(139,92,246,0.1)",  color: "#a78bfa" },
  Impact:            { bg: "rgba(251,146,60,0.1)",  color: "#fb923c" },
  "Market Research": { bg: "rgba(232,168,32,0.1)",  color: "#e8a820" },
  AI:                { bg: "rgba(244,114,182,0.1)", color: "#f472b6" },
};

export default function PostCard({ post }: { post: PostSummary }) {
  const style = tagColors[post.tags[0]];

  return (
    <Link href={`/casestudies/${post.slug}`} className="group flex flex-col h-full py-6 border-t border-white/[0.06] text-left">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.slice(0, 2).map((t) => {
          const s = tagColors[t];
          return (
            <span key={t} className="text-caption px-2 py-0.5 rounded-full normal-case tracking-normal border border-white/[0.06]"
              style={{ background: s.bg, color: s.color }}>
              {t}
            </span>
          );
        })}
      </div>
      {post.client && (
        <p className="text-caption normal-case mb-3 text-slate-400">{post.client}</p>
      )}
      <h3 className="text-title group-hover:text-[var(--teal-bright)] transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-body-sm line-clamp-3 flex-1">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between text-caption normal-case text-slate-400">
        <span className="flex items-center gap-1.5">
          <Clock size={12} aria-hidden /> {post.readTime}
        </span>
        <ArrowRight size={14} className="text-[var(--teal)] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
      </div>
    </Link>
  );
}
