export const meta = {
  title: "BharatGPT (In Progress)",
  date: "2025-09",
  tech: ["Next.js","Python FastAPI","Hugging Face","RAG"],
  demo: "",
  repo: "",
  cover: "/projects/bharatgpt-cover.png",
  badges: ["Hindi-first","Multilingual","Civic"],
  summary: "A Hindi-first, multilingual assistant focused on India’s needs — policies, schemes, news, and everyday help across regional languages."
};

export default function Content() {
  return (
    <>
      <h3>Vision</h3>
      <p>
        BharatGPT is a <strong>Hindi-first and multilingual AI assistant</strong> tailored for
        India. It aims to support regional languages (Hindi, Bhojpuri, Tamil, Marathi, Bengali,
        and more), bringing AI access to people beyond English.
      </p>
      <h3>Planned Capabilities</h3>
      <ul>
        <li>Conversational support in Indian languages</li>
        <li>Real-time answers on policies, schemes, and civic info</li>
        <li>Voice input/output for accessibility</li>
        <li>Efficient hosting using cost-effective/free tiers</li>
      </ul>
    </>
  );
}
