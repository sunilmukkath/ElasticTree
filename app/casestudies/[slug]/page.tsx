import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Download, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts, type PostTag } from "@/lib/posts";
import { renderPostContent } from "@/lib/renderPostContent";
import PostCard from "@/components/casestudies/PostCard";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

const tagColors: Record<PostTag, { bg: string; color: string }> = {
  Analytics:         { bg: "rgba(45,212,191,0.1)",  color: "#2dd4bf" },
  "Sensory Science": { bg: "rgba(52,211,153,0.1)",  color: "#34d399" },
  Syndicated:        { bg: "rgba(139,92,246,0.1)",  color: "#a78bfa" },
  Impact:            { bg: "rgba(251,146,60,0.1)",  color: "#fb923c" },
  "Market Research": { bg: "rgba(232,168,32,0.1)",  color: "#e8a820" },
  AI:                { bg: "rgba(244,114,182,0.1)", color: "#f472b6" },
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <PageHero
        back={{ href: "/casestudies", label: "Back to Case Studies" }}
        title={post.title}
        subtitle={
          post.client || post.industry
            ? `${post.client ?? ""}${post.client && post.industry ? " · " : ""}${post.industry ?? ""}`
            : undefined
        }
        variant="article"
        prefix={
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => {
              const s = tagColors[tag];
              return (
                <span
                  key={tag}
                  className="text-caption px-3 py-1 rounded-full normal-case tracking-normal font-medium"
                  style={{ background: s.bg, color: s.color }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        }
        meta={
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-body-sm">
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden /> {post.readTime}
            </span>
            <span className="hidden sm:inline text-slate-500" aria-hidden>
              ·
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </span>
          </div>
        }
      />

      {/* Body */}
      <div className="page-content max-w-3xl section-py">
        {post.hasPdf && post.pdfUrl && (
          <div className="space-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 text-left">
            <div>
              <p className="font-display font-semibold text-body-md text-white">Download the Full Report</p>
              <p className="text-body-sm mt-0.5">PDF available for download</p>
            </div>
            <a href={post.pdfUrl} download className="btn-primary text-sm shrink-0">
              <Download size={14} /> Download PDF
            </a>
          </div>
        )}

        <article className="prose-custom">
          {renderPostContent(post.content)}
        </article>

        <div className="mt-16 max-w-md section-stack-sm">
          <p className="font-display font-black text-display-md text-white leading-tight">
            Want similar insights for your brand?
          </p>
          <p className="text-body-md">
            Tell us your business challenge and we&apos;ll design the right research approach.
          </p>
          <Link href="/contact" className="btn-primary text-sm">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div className="page-content section-py-compact border-t border-white/5">
          <h2 className="font-display font-black text-display-md text-white mb-8 text-left">Related Research</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rel) => (
              <PostCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
