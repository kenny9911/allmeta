import type { Metadata } from "next";
import SuiteContent from "@/components/suite/SuiteContent";
import StructuredData, { breadcrumbList, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Product Suite — Six Products, One Pipeline · allm²eta",
  description:
    "OntoCopilot · OntoXForm · Ontology Studio · OntoFlow · Agentic Operator · OntoWork. From raw client material to a self-operating enterprise — every product's output is the next one's input.",
  alternates: {
    canonical: "/suite",
    languages: { "zh-CN": "/suite", "en-US": "/suite", "x-default": "/suite" },
  },
  openGraph: {
    title: "Product Suite — Six Products, One Pipeline · allm²eta",
    description:
      "Analyze, canonicalize, model, orchestrate, run, operate. The allm²eta suite composes into one ontology-driven pipeline.",
    type: "website",
    url: "https://allmeta.ai/suite",
  },
};

export default function SuitePage() {
  const launch = resolveLaunchUrls(process.env);

  const bc = breadcrumbList([
    { name: "Home", url: "https://allmeta.ai/" },
    { name: "Product Suite", url: "https://allmeta.ai/suite" },
  ]);

  const faq = faqPage([
    {
      q: "What is OntoCopilot?",
      a: "OntoCopilot is the ontology copilot for FDE engineers. Hand it messy client materials — Excel, Word, scanned documents — and it reads them, extracts the business essentials, and organizes them into a standard ontology package. It works conversationally alongside the engineer to map and understand ERP business processes, so AI does the organizing and the engineer does the judging.",
    },
    {
      q: "What is OntoXForm?",
      a: "OntoXForm is the Ontology Transformation Automator. It provides hyper-automation for turning business data into the canonical data formats that allm²eta Ontology consumes, so users generate ontology data models without learning ontology terminology or building models by hand. Its output feeds the Ontology Generator.",
    },
    {
      q: "What is OntoFlow?",
      a: "OntoFlow is the Ontology Workflow Studio. It calls a mature AI harness and packages its tool use, reasoning execution and context management into reusable digital workers, then uses a visual workflow to assign tasks between them, pass results and organize collaboration. It generates agent code that runs in the Agentic Operator runtime and drives underlying system APIs — ERP, MES, CRM and custom systems.",
    },
    {
      q: "What is OntoWork?",
      a: "OntoWork is where business users operate an agentic ERP, powered by OntoWork's autonomous agents and LLM capability. It ships with state-of-the-art harness engineering to drive a scalable, powerful agentic system.",
    },
    {
      q: "In what order are the allm²eta products used?",
      a: "OntoCopilot analyzes data, business processes and technical context, producing organized data sets. OntoXForm converts those into canonical data formats. Ontology Studio's Ontology Generator turns those into deployable ontology models, managed through six builders — Data Object, Rule, Action, Event, Links Generator and Workflow. OntoFlow orchestrates agentic workflows on top. Agentic Operator runs them as a governed fleet. OntoWork is the console where the business operates the result.",
    },
  ]);

  return (
    <>
      <StructuredData data={bc} />
      <StructuredData data={faq} />
      <SuiteContent launch={launch} />
    </>
  );
}
