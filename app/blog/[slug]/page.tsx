
import { notFound } from "next/navigation";
import { posts, postMap } from "@/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = postMap[params.slug];
  if (!item) return {};
  return {
    title: `${item.meta.title} | Blog | Ravi Singh`,
    description: item.meta.summary
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const item = postMap[params.slug];
  if (!item) return notFound();
  const Comp = item.component as any;
  return (
    <article className="prose max-w-none">
      <h1>{item.meta.title}</h1>
      <p className="text-gray-700">{item.meta.summary}</p>
      <Comp />
    </article>
  );
}
