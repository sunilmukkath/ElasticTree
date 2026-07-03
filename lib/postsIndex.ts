import type { Post, PostTag } from "./posts";
import { posts } from "./posts";

export type PostSummary = Omit<Post, "content">;

export const postSummaries: PostSummary[] = posts.map(({ content: _content, ...summary }) => summary);

export function getFeaturedSummaries(limit = 6): PostSummary[] {
  return [...postSummaries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export { type PostTag };
