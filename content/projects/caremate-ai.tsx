export const meta = {
  title: "CareMate AI (v1)",
  date: "2025-09",
  tech: ["React","Netlify","OpenAI API"],
  demo: "https://caremateai.netlify.app/",
  repo: "",
  cover: "/projects/caremate-cover.png",
  badges: ["Mental Health", "Support", "Chat"],
  summary: "An empathetic AI companion that offers gentle emotional support with quick prompts, breathing guidance, and motivational nudges."
};

export default function Content() {
  return (
    <>
      <p>
        CareMate is an <strong>AI-powered emotional support companion</strong> designed to help
        users manage stress, anxiety, and daily challenges. It provides <strong>empathetic
        responses</strong>, guided breathing techniques, motivational support, and quick prompts
        for common situations such as “I feel anxious” or “I made a mistake.”
      </p>
      <h3>Highlights</h3>
      <ul>
        <li>Friendly, supportive AI chat for emotional well-being</li>
        <li>Quick-start prompts for common struggles</li>
        <li>Clean, responsive UI with premium feel</li>
        <li>Deployed on Netlify for fast global access</li>
      </ul>
      <h3>Impact</h3>
      <p>
        Designed to make supportive conversations more accessible—especially where professional
        therapy is hard to reach.
      </p>
    </>
  );
}
