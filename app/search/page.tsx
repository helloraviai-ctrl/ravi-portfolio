
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "@/content/blog";
import { projects } from "@/content/projects";

export const metadata = { title: "Search | Ravi Singh" };

export default function SearchPage() {
  const [q, setQ] = useState("");
  const p = useMemo(() => projects.filter(x => (x.meta.title + " " + x.meta.summary).toLowerCase().includes(q.toLowerCase())), [q]);
  const b = useMemo(() => posts.filter(x => (x.meta.title + " " + x.meta.summary).toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Search</h1>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects and blog..." className="w-full border rounded-2xl px-4 py-2" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Projects</h2>
          <ul className="space-y-2">
            {p.map(x => <li key={x.slug}><Link href={`/projects/${x.slug}`} className="underline">{x.meta.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Blog</h2>
          <ul className="space-y-2">
            {b.map(x => <li key={x.slug}><Link href={`/blog/${x.slug}`} className="underline">{x.meta.title}</Link></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
