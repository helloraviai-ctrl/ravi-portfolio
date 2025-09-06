
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Brain, Globe } from "lucide-react";
import { projects } from "@/content/projects";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-[1fr,320px] gap-8 items-center min-h-[80vh]">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>AI Innovator & Engineer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Ravi Singh</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Building Intelligent Agents & Solutions for 
              <span className="font-semibold text-blue-600"> Bharat</span> and the 
              <span className="font-semibold text-purple-600"> World</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="group inline-flex items-center gap-2 rounded-2xl px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              <Code className="w-5 h-5" />
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 glass hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Brain className="w-5 h-5" />
              Let's Connect
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">5+</div>
              <div className="text-sm text-gray-600">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">∞</div>
              <div className="text-sm text-gray-600">Innovation</div>
            </div>
          </div>
        </div>
        
        <div className="justify-self-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <Image 
              src="/images/ravi.png" 
              alt="Ravi Singh" 
              width={320} 
              height={320} 
              className="relative rounded-2xl shadow-2xl object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest AI innovations and solutions that are transforming industries
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((p, index) => (
            <Link 
              key={p.slug} 
              href={`/projects/${p.slug}`} 
              className="group glass p-6 block hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image 
                  src={p.meta.cover} 
                  alt={p.meta.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{p.meta.title}</h3>
              <p className="text-gray-700 leading-relaxed">{p.meta.summary}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <div className="animate-fade-in-up">
        <BlogPreview />
      </div>
    </div>
  );
}
