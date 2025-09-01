
import Image from "next/image";

export const metadata = { title: "About | Ravi Singh" };

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
      <div className="prose max-w-none">
        <h1>About Me</h1>
        <p><strong>I am Ravi Singh</strong>, an Electronics and Communication Engineer with a deep passion for <strong>artificial intelligence and emerging technologies</strong>. I love building AI-driven projects, experimenting with new ideas, and transforming concepts into practical solutions. My vision is to use technology not just for innovation, but to <strong>solve India’s biggest challenges</strong>—from education and healthcare to governance and sustainability.</p>
        <p>Having already graduated, I am currently working on multiple AI projects and prototypes while continuously upskilling myself in the latest tools, models, and frameworks. For me, AI is more than a career—it is the path to creating <strong>impactful solutions</strong> that empower people and help make India a leader in technology.</p>
      </div>
      <div className="justify-self-center">
        <Image src="/images/ravi.png" alt="Ravi Singh" width={320} height={320} className="rounded-2xl shadow object-cover" />
      </div>
    </div>
  );
}
