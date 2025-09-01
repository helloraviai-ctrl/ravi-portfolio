
import Link from "next/link";
import { posts } from "@/content/blog";

export default function BlogPreview(){
  const recent = posts.slice(0,2);
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest from the Blog</h2>
        <Link href="/blog" className="underline">View all</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {recent.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass p-5 block hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{p.meta.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{p.meta.summary}</p>
            <div className="mt-2 text-xs text-gray-600">{p.meta.date}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
