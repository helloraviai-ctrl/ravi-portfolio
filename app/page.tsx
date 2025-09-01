
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-[1fr,320px] gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Ravi Singh</h1>
          <p className="text-lg text-gray-700">AI Innovator | Building Intelligent Agents & Solutions for Bharat and the World</p>
          <div className="flex gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-accent text-white hover:opacity-90 transition">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-gray-300 hover:bg-subtle">
              Contact
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <Image src="/images/ravi.png" alt="Ravi Singh" width={320} height={320} className="rounded-2xl shadow-glass object-cover"/>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="glass p-4 block hover:shadow-lg transition">
              <div className="relative w-full h-40 mb-3">
                <Image src={p.meta.cover} alt={p.meta.title} fill className="rounded-xl object-cover"/>
              </div>
              <h3 className="font-semibold text-lg">{p.meta.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{p.meta.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <BlogPreview />
    </div>
  );
}
