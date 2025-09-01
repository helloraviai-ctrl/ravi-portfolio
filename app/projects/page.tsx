import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import PrintButton from "@/components/PrintButton";

export const metadata = { title: "Projects | Ravi Singh" };

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <PrintButton />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="glass p-4 block hover:shadow-lg transition">
            <div className="relative w-full h-40 mb-3">
              <Image src={p.meta.cover} alt={p.meta.title} fill className="rounded-xl object-cover" />
            </div>
            <h3 className="font-semibold text-lg">{p.meta.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{p.meta.summary}</p>
            <div className="mt-2 text-xs text-gray-600">{p.meta.tech.join(" • ")}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
