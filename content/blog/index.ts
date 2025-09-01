import Post1, { meta as meta1 } from "./why-india-needs-ai";
import Post2, { meta as meta2 } from "./ai-in-education-healthcare";
import Post3, { meta as meta3 } from "./journey-practical-ai";

export const posts = [
  { slug: "why-india-needs-ai", meta: meta1, component: Post1 },
  { slug: "ai-in-education-healthcare", meta: meta2, component: Post2 },
  { slug: "journey-practical-ai", meta: meta3, component: Post3 },
] as const;

export const postMap = Object.fromEntries(posts.map(p => [p.slug, p]));
