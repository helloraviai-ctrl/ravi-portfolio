
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "@/content/blog";

export default function BlogPreview(){
  const recent = posts.slice(0,2);
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">Latest from the Blog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights, thoughts, and learnings from my journey in AI and technology
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {recent.map((p, index) => (
          <Link 
            key={p.slug} 
            href={`/blog/${p.slug}`} 
            className="group glass p-6 block hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{p.meta.date}</span>
              </div>
              <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors leading-tight">
                {p.meta.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {p.meta.summary}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 glass hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View All Posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
