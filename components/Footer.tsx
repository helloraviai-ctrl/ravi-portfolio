
export default function Footer(){
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </nav>
        <p>© Ravi Singh 2025</p>
      </div>
    </footer>
  );
}
