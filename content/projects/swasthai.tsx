// content/projects/swasthai.tsx
export const meta = {
  title: "SwasthAI",
  date: "2025-09",
  tech: ["Next.js", "Netlify Functions", "OpenAI"],
  demo: "https://apnaswasthai.netlify.app/",
  repo: "", // add later if you open-source it
  cover: "/projects/swasthai-cover.svg", // or "/projects/swasthai-cover.svg"
  badges: ["Hindi First", "Health Info", "Voice (WIP)"],
  summary:
    "Hindi-first health information helper that explains symptoms, possible causes, and when to seek care. Never prescribes medicine."
};

export default function Content() {
  return (
    <>
      <p>
        <strong>SwasthAI</strong> provides clear, Hindi-first health information. It can explain
        common symptoms, list <em>possible</em> causes, give simple self-care guidance,
        and suggest when to see a doctor. English support is available too.
      </p>

      <h3>Safety & scope (important)</h3>
      <ul>
        <li><strong>Not a doctor</strong> — information only, not diagnosis or treatment.</li>
        <li><strong>No medicines/pills</strong> are recommended by the app.</li>
        <li>Encourages <strong>in-person care</strong> for worrying or persistent symptoms.</li>
        <li>Shows emergency guidance (e.g., call 108/112 in India) when risk is detected.</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>Hindi-first answers with concise English summary.</li>
        <li>Short, simple explanations for symptoms and conditions.</li>
        <li>Optional “upload report/photo” (OCR roadmap) to extract key terms.</li>
        <li>Mobile-friendly chat UI; voice mode planned.</li>
      </ul>

      <h3>How it works</h3>
      <ul>
        <li>Next.js frontend + Netlify Functions for serverless API calls.</li>
        <li>Safety-aware prompt that avoids prescribing or diagnosing.</li>
        <li>Guardrails: max length, disclaimers, and “seek care” triggers.</li>
      </ul>

      <h3>Roadmap</h3>
      <ul>
        <li>OCR for reports (Hindi/English), symptom checklists, voice replies.</li>
        <li>Local language expansion beyond Hindi, richer first-aid flows.</li>
        <li>Privacy notes and data-deletion UI.</li>
      </ul>
    </>
  );
}
