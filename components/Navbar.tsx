
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Ravi Singh</Link>
        <div className="flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname===l.href? "text-accent font-medium" : "text-gray-700 hover:text-accent"}>{l.label}</Link>
          ))}
          <Link href="/search" className="text-gray-700 hover:text-accent" aria-label="Search">
            <Search size={20}/>
          </Link>
        </div>
      </nav>
    </header>
  );
}
