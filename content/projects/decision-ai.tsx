export const meta = {
  title: "Decision AI GPT",
  date: "2025-09",
  tech: ["React","Netlify","OpenAI API"],
  demo: "https://decisionaigpt.netlify.app/",
  repo: "",
  cover: "/projects/decision-cover.png",
  badges: ["Decision Science", "Scoring", "Coach"],
  summary: "A structured decision-making coach that weighs options via pros/cons, risks, and weighted criteria to recommend the best path."
};

export default function Content() {
  return (
    <>
      <p>
        Decision AI is an <strong>AI-powered decision coach</strong> that helps users think clearly
        through tough life, career, and business choices. It breaks options into <strong>pros,
        cons, risks, trade-offs, and weighted scoring</strong>, then offers a structured
        recommendation with rationale.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Criteria-based weighted scoring system</li>
        <li>Trade-offs &amp; second-order effects analysis</li>
        <li>Personalized recommendations with confidence</li>
        <li>Clean, responsive interface</li>
      </ul>
    </>
  );
}
