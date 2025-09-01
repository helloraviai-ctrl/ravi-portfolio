// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import { projects } from "@/content/projects";

export const metadata = { title: "Projects | Ravi Singh" };

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.slug} className="glass p-4 rounded-2xl">
            <Link href={`/projects/${p.slug}`}>
              <div className="relative w-full h-40 mb-3">
                <Image src={p.meta.cover} alt={p.meta.title} fill className="rounded-xl object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{p.meta.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{p.meta.summary}</p>
            </Link>

            <div className="mt-3 flex gap-3">
              {p.meta.demo && <LinkButton href={p.meta.demo}>Open live app</LinkButton>}
              {p.meta.repo && (
                <LinkButton href={p.meta.repo} variant="outline">
                  View source
                </LinkButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
