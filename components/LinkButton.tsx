// components/LinkButton.tsx
import { ExternalLink } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "solid" | "outline" };

export default function LinkButton({ href, children, variant = "solid" }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium focus:outline-none focus:ring-2";
  const solid = "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400";
  const outline = "border border-indigo-300 text-indigo-700 bg-white hover:bg-indigo-50 focus:ring-indigo-300";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variant === "solid" ? solid : outline}`}>
      <span>{children}</span>
      <ExternalLink className="w-4 h-4" aria-hidden />
    </a>
  );
}
