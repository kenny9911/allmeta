import type { Metadata } from "next";
import OntologyContent from "@/components/ontology/OntologyContent";
import StructuredData, { breadcrumbList, softwareApplication, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "allmeta Ontology — The Actionable Ontology for Enterprise Agents",
  description:
    "An AI-native ontology builder and reasoning runtime — not a static knowledge graph. Its Ontology Generator turns raw business documents, your enterprise database or existing systems into a native enterprise ontology — auto-discovering objects, identifying business rules, mapping processes, building links, surfacing actions and events, and generating test cases. The reasoning of a large model, with the control of enterprise rules.",
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
  const launch = resolveLaunchUrls(process.env);
  const launchUrl = launch.studio;

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
      q: "Is allmeta Ontology a knowledge graph?",
      a: "No. allmeta Ontology is an AI-native ontology builder and reasoning runtime, driven by LLM agents. A traditional knowledge graph is a static, passive structure; allmeta produces an actionable ontology — a living digital twin of the business that drives AI agents and operates the model, while staying governed by business rules.",
    },
    {
      q: "Can allmeta generate an ontology automatically?",
      a: "Yes — that is the Ontology Generator. Point it at your raw business documents, connect your enterprise database, or plug into existing systems (ERP, CRM, internal apps, APIs), and allmeta Ontology AI auto-discovers the business objects, identifies the business rules, maps the business processes, builds the links between objects, surfaces the actions and trigger events, and generates test cases — forming a native enterprise ontology. You start from a working ontology rather than a blank canvas.",
    },
    {
      q: "What are the six ontology builders?",
      a: "Object Builder (business entities and their facts), Rules Builder (atomic versioned constraints as prompt fragments), Actions Builder (executable verbs with preconditions and rollback), Event Builder (events that flow between objects), Links Generator (AI-inferred semantic relationships, replacing foreign keys), and Eval & Test Studio (replay, diff and score before publishing).",
    },
    {
      q: "What makes an ontology 'actionable' vs static?",
      a: "An actionable ontology is the brain of the enterprise operating system. Unlike a static ontology that only describes the world, it drives AI agents, operates the LLM to maximize its capability, and is itself controlled by business process, rules and standards — combining a model's reasoning and generalization with enterprise controllability.",
    },
    {
      q: "What are the three pillars of allmeta Ontology?",
      a: "Data Object (WHAT — the business entity / noun), Action (HOW — the executable verb with preconditions), and Rule (WHY — the atomic business constraint, stored as a prompt fragment with a Rule ID).",
    },
  ]);

  return (
    <>
      <StructuredData data={sa} />
      <StructuredData data={bc} />
      <StructuredData data={faq} />
      <OntologyContent launchUrl={launchUrl} launch={launch} />
    </>
  );
}
