
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, projectMap } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = projectMap[params.slug];
  if (!item) return {};
  return {
    title: `${item.meta.title} | Projects | Ravi Singh`,
    description: item.meta.summary,
    openGraph: { images: [item.meta.cover] }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = projectMap[params.slug];
  if (!item) return notFound();
  const Comp = item.component as any;
  return (
    <article className="prose max-w-none">
      <h1>{item.meta.title}</h1>
      <p className="text-gray-700">{item.meta.summary}</p>

      <div className="relative w-full h-80 my-4">
        <Image src={item.meta.cover} alt={item.meta.title} fill className="rounded-xl object-cover" />
      </div>

      <div className="not-prose grid md:grid-cols-3 gap-3 my-4 text-sm">
        <div className="glass p-4"><strong>Date:</strong> {item.meta.date}</div>
        <div className="glass p-4"><strong>Tech:</strong> {item.meta.tech.join(", ")}</div>
        <div className="glass p-4"><strong>Badges:</strong> {item.meta.badges?.join(", ") || "—"}</div>
      </div>

      <Comp />

      <div className="not-prose flex gap-3 mt-6">
        {item.meta.demo && <Link href={item.meta.demo} className="rounded-2xl bg-accent text-white px-5 py-2" target="_blank">Live Demo</Link>}
        {item.meta.repo && <Link href={item.meta.repo} className="rounded-2xl border px-5 py-2" target="_blank">Source Code</Link>}
      </div>
    </article>
  );
}
