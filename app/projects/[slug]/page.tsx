// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import LinkButton from "@/components/LinkButton";
import { projectMap } from "@/content/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(projectMap).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const p = projectMap[params.slug];
  if (!p) return { title: "Project | Ravi Singh" };
  return { title: `${p.meta.title} | Ravi Singh`, description: p.meta.summary };
}

export default function ProjectPage({ params }: Props) {
  const proj = projectMap[params.slug];
  if (!proj) return notFound();
  const { meta, component: Content } = proj;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{meta.title}</h1>
      <p className="text-gray-700">{meta.summary}</p>

      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow">
        <Image src={meta.cover} alt={meta.title} fill className="object-cover" priority />
      </div>

      <div className="flex flex-wrap gap-3">
        {meta.demo && <LinkButton href={meta.demo}>Open live app</LinkButton>}
        {meta.repo && <LinkButton href={meta.repo} variant="outline">View source</LinkButton>}
      </div>

      <div className="rounded-2xl p-4 bg-white border">
        <Content />
      </div>
    </div>
  );
}
