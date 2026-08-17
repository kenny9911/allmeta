import HomeContent from "@/components/home/HomeContent";
import StructuredData, { breadcrumbList, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

// Read env vars on every request rather than baking them at build time —
// lets ops change product URLs in .env.local without a rebuild.
export const dynamic = "force-dynamic";

export default function Page() {
  // Non-NEXT_PUBLIC_ env vars, resolved server-side and handed down as a
  // plain string map. The client never sees process.env.
  const launch = resolveLaunchUrls(process.env);

  // Surfacing the suite's core claims as structured FAQ entries gives GEO
  // crawlers (Perplexity, AI Overviews, ChatGPT search) something concrete
  // to cite when users ask "what is allmeta" or "what is actionable ontology".
  const faq = faqPage([
    {
      q: "What is allm²eta?",
      a: "allm²eta is an Actionable Ontology platform and Agentic Operating System for the AI-native enterprise. It turns business objects, rules, processes and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    },
    {
      q: "What products are in the allm²eta suite?",
      a: "Six products forming one pipeline: OntoCopilot (analyzes messy client materials into structured business findings), OntoXForm (transforms those findings into canonical data formats), Ontology Studio (generates and governs the actionable ontology via the Ontology Generator and six model builders), OntoFlow (packages AI harnesses into reusable digital workers and orchestrates them as visual workflows), Agentic Operator (the agent runtime, harness engineering, deployment, monitoring and security), and OntoWork (the agentic ERP console business users operate).",
    },
    {
      q: "What is an Actionable Ontology?",
      a: "An Actionable Ontology is the middle layer between LLMs and AI agents. LLMs understand. Agents execute. The Actionable Ontology translates business semantics — objects, rules, actions and events — into a form that agents can call directly, while constraining LLM hallucination.",
    },
    {
      q: "How do the allm²eta products fit together?",
      a: "Each product's output is the next one's input. OntoCopilot turns raw client material into structured findings; OntoXForm turns those into a canonical data format; Ontology Studio's Ontology Generator turns that into a deployable actionable ontology; OntoFlow turns the ontology into agentic workflows; Agentic Operator runs those workflows as a governed agent fleet; and OntoWork is where the business operates the result as an agentic ERP.",
    },
    {
      q: "What are the six builders in Ontology Studio?",
      a: "Data Object Builder, Rule Builder, Action Builder, Event Builder, Links Generator, and Workflow Builder — a complete suite for managing and operating ontology data models, fed by the Ontology Generator.",
    },
    {
      q: "How is allmeta different from a traditional ERP?",
      a: "ERP is a System of Records — it captures transactions, enforces compliance, and produces audits. allm²eta adds a System of Actions on top: ontology-driven AI agents that understand business semantics natively, invoke actions safely, and operate the enterprise end-to-end.",
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
      <HomeContent launch={launch} />
    </>
  );
}
