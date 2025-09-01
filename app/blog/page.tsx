
import Link from "next/link";
import { posts } from "@/content/blog";

export const metadata = { title: "Blog | Ravi Singh" };

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass p-5 block hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{p.meta.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{p.meta.summary}</p>
            <div className="mt-2 text-xs text-gray-600">{p.meta.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
