import type { Metadata } from "next";
import TechnologyContent from "@/components/technology/TechnologyContent";
import StructuredData, { breadcrumbList, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Technology — Five-Layer Agentic Architecture",
  description:
    "allmeta's five-layer architecture: enterprise core systems → data & integration → actionable ontology → Agent OS (harness · runtime · generation) → applications. Data reads up, actions write back; the loop closes at the ontology.",
  alternates: {
    canonical: "/technology",
    languages: { "zh-CN": "/technology", "en-US": "/technology", "x-default": "/technology" },
  },
  openGraph: {
    title: "Technology — Five-Layer Agentic Architecture · allmeta",
    description:
      "Three layers you already own; allmeta supplies the two in the middle. Agent = ontology + model + harness.",
    type: "website",
    url: "https://allmeta.ai/technology",
  },
};

export default function TechnologyPage() {
  const bc = breadcrumbList([
    { name: "Home", url: "https://allmeta.ai/" },
    { name: "Technology", url: "https://allmeta.ai/technology" },
  ]);
  const faq = faqPage([
    {
      q: "What are the five layers of the allmeta architecture?",
      a: "01 Enterprise core systems (ERP, HR, Finance, Procurement, SCADA, legacy). 02 Data & integration. 03 allmeta Actionable Ontology (objects · relations · rules · events · actions · states · permissions · metrics). 04 Agent OS — harness, runtime and generation in one layer. 05 Application layer. Data reads up from the systems of record and actions write back down; both terminate at the ontology.",
    },
    {
      q: "What is an agent in the allmeta architecture?",
      a: "Agent = ontology + model + harness. The model supplies reasoning and language; the ontology supplies the enterprise's objects, rules, actions and permissions; the harness buckles them together — context assembly, tool contracts, preconditions, permission scope, post-verification and trace. The harness is compiled from the ontology rather than hand-written per agent.",
    },
    {
      q: "Which product implements which layer?",
      a: "OntoCopilot and OntoXForm implement data & integration (layer 02). Ontology Studio implements the actionable ontology (layer 03). OntoFlow and Agentic Operator implement the Agent OS (layer 04). OntoWork implements the application layer (layer 05). Layer 01 is the customer's own systems of record.",
    },
  ]);

  return (
    <>
      <StructuredData data={bc} />
      <StructuredData data={faq} />
      <TechnologyContent launch={resolveLaunchUrls(process.env)} />
    </>
  );
}
