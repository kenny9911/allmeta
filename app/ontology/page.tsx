import type { Metadata } from "next";
import OntologyContent from "@/components/ontology/OntologyContent";
import StructuredData, { breadcrumbList, softwareApplication, faqPage } from "@/components/site/StructuredData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "allmeta Ontology — The Actionable Ontology for Enterprise Agents",
  description:
    "Turn business objects, rules, processes and actions into an Enterprise Operation Surface AI agents can understand, invoke, execute, audit, govern, and evolve. Six capabilities, three pillars, one ontology — running N agents.",
  alternates: {
    canonical: "/ontology",
    languages: { "zh-CN": "/ontology", "en-US": "/ontology", "x-default": "/ontology" },
  },
  openGraph: {
    title: "allmeta Ontology — The Actionable Ontology for Enterprise Agents",
    description:
      "Author Objects, Actions, Rules and Events on one semantic surface — built for machine reasoning, agent planning and natural-language interaction.",
    type: "website",
    url: "https://allmeta.ai/ontology",
  },
};

export default function OntologyPage() {
  const launchUrl = process.env.allmetaOntology_URL ?? "http://localhost:3500";

  const sa = softwareApplication(
    "allm²eta Ontology",
    "The Actionable Ontology Platform for Enterprise Agents. Turns business objects, rules, permissions, processes, events and actions into an AI-callable Enterprise Operation Surface.",
    "https://allmeta.ai/ontology"
  );
  const bc = breadcrumbList([
    { name: "Home", url: "https://allmeta.ai/" },
    { name: "Ontology", url: "https://allmeta.ai/ontology" },
  ]);
  const faq = faqPage([
    {
      q: "What are the three pillars of allmeta Ontology?",
      a: "Data Object (WHAT — the business entity / noun), Action (HOW — the executable verb with preconditions), and Rule (WHY — the atomic business constraint, stored as a prompt fragment with a Rule ID).",
    },
    {
      q: "What is the first principle?",
      a: "Semantics = Subject + Verb + Object. Everything else is decoration. Foreign Keys are obsolete in the LLM era — agents need Semantic Context, not relational joins.",
    },
    {
      q: "Why decouple Logic from Rule?",
      a: "Logic is the invisible 'why' — best handled by LLM + Ontology joint reasoning. Rule is the explicit 'how' — atomic, executable, versioned. Lift rules out of code into a knowledge base so business changes don't trigger rewrites.",
    },
  ]);

  return (
    <>
      <StructuredData data={sa} />
      <StructuredData data={bc} />
      <StructuredData data={faq} />
      <OntologyContent launchUrl={launchUrl} />
    </>
  );
}
