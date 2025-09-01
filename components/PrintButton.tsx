'use client'
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="hidden md:inline-block border rounded-2xl px-4 py-2 hover:bg-subtle"
    >
      Download Full Portfolio (PDF)
    </button>
  );
}
