import type { Metadata } from "next";
import TechnologyContent from "@/components/technology/TechnologyContent";
import StructuredData, { breadcrumbList, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Technology — 6 Layer Agentic Architecture",
  description:
    "allmeta's six-layer ontology-driven agentic architecture: Enterprise Core → Data & Integration → Ontology → Generation → Agentic Operator → Application. Copy the architecture, not the product.",
  alternates: {
    canonical: "/technology",
    languages: { "zh-CN": "/technology", "en-US": "/technology", "x-default": "/technology" },
  },
  openGraph: {
    title: "Technology — 6 Layer Agentic Architecture · allmeta",
    description:
      "Six layers, one semantic surface. From enterprise systems to ontology-driven AI agents.",
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
      q: "What are the 6 layers of the allmeta architecture?",
      a: "1) Enterprise Core Systems (ECore, ERP, HR, Finance, Procurement, SCADA, Data Platform, Legacy). 2) Data & Integration. 3) allmeta Ontology Layer (Objects · Relations · Rules · Events · Actions · States · Permissions · Metrics). 4) Generation Layer (Prompt Engine + Agent Harness + CodeGen). 5) Agentic Operator. 6) Application Layer.",
    },
    {
      q: "What is the scaling law for allmeta?",
      a: "Copy the architecture, not the product. Standardized products don't fit SOE business diversity; pure custom projects don't scale. The answer: one generic architecture (allmeta platform layer) plus N independent customer Ontologies running on it.",
    },
    {
      q: "What is the platform's generic layer?",
      a: "ECore + Inference Engine + Rule Generator + Code Generator + 6 Builders. This is the shared substrate; each customer's business Ontology lives in its own container and never enters the allmeta platform.",
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
