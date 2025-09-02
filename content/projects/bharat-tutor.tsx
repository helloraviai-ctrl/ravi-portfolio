// content/projects/bharat-tutor.tsx
export const meta = {
  title: "Bharat Tutor",
  date: "2025-09",
  tech: ["Next.js", "Netlify Functions", "OpenAI"],
  demo: "https://bharat-tutor.netlify.app/",
  repo: "", // add a GitHub URL later if you want
  cover: "/projects/bharat-tutor-cover.jpg",
  badges: ["Hindi First", "Bilingual", "Tutor", "Math"],
  summary:
    "A bilingual (Hindi-first + English) AI tutor that explains topics, gives definitions, and answers maths—short and clear."
};

export default function Content() {
  return (
    <>
      <p>
        Bharat Tutor focuses on learners in India. It answers in <strong>Hindi by default</strong>,
        adds a <strong>2-line English summary</strong>, and can format <strong>math</strong> clearly.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Hindi-first responses with optional English recap</li>
        <li>Definitions and short explanations for any topic</li>
        <li>Math answers (concise steps)</li>
        <li>Optional “Context” box to ground answers</li>
        <li>Works great on mobile</li>
      </ul>

      <h3>How it works</h3>
      <ul>
        <li>Next.js frontend + Netlify Function API</li>
        <li>Prompting that prioritizes Hindi and keeps answers crisp</li>
        <li>Simple guardrails and logging</li>
      </ul>
    </>
  );
}
