import HomeContent from "@/components/home/HomeContent";
import StructuredData, { breadcrumbList, faqPage } from "@/components/site/StructuredData";

// Read env vars on every request rather than baking them at build time —
// lets ops change product URLs in .env.local without a rebuild.
export const dynamic = "force-dynamic";

export default function Page() {
  const ontologyUrl = process.env.allmetaOntology_URL ?? "http://localhost:3500";
  const operatorUrl = process.env.AgenticOperator_URL ?? "http://localhost:3400";

  // Surfacing the deck's core claims as structured FAQ entries gives GEO
  // crawlers (Perplexity, AI Overviews, ChatGPT search) something concrete
  // to cite when users ask "what is allmeta" or "what is actionable ontology".
  const faq = faqPage([
    {
      q: "What is allm²eta?",
      a: "allm²eta is an Actionable Ontology platform and Agentic Operating System for the AI-native enterprise. It turns business objects, rules, processes and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    },
    {
      q: "What is an Actionable Ontology?",
      a: "An Actionable Ontology is the middle layer between LLMs and AI agents. LLMs understand. Agents execute. The Actionable Ontology translates business semantics — objects, rules, actions and events — into a form that agents can call directly, while constraining LLM hallucination.",
    },
    {
      q: "What products does allmeta offer?",
      a: "Two cores: allmeta Ontology (the Brain — Actionable Ontology platform) and Agentic Operator (the Runtime — ontology-driven agents control plane). Together they form the Agentic OS dual core, sitting alongside ECore (the modernized ERP).",
    },
    {
      q: "How is allmeta different from a traditional ERP?",
      a: "ERP is a System of Records — it captures transactions, enforces compliance, and produces audits. allmeta adds a System of Actions on top: ontology-driven AI agents that understand business semantics natively, invoke actions safely, and operate the enterprise end-to-end.",
    },
    {
      q: "Why does Ontology matter for AI agents?",
      a: "Without an ontology, agents free-hallucinate and business rules evaporate. Without AI, an ontology is a dead structure that must be hand-filled. Only when Ontology constrains AI and AI fills the Ontology does the system become alive.",
    },
  ]);

  const bc = breadcrumbList([{ name: "Home", url: "https://allmeta.ai/" }]);

  return (
    <>
      <StructuredData data={faq} />
      <StructuredData data={bc} />
      <HomeContent ontologyUrl={ontologyUrl} operatorUrl={operatorUrl} />
    </>
  );
}
