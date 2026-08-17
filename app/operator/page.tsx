import type { Metadata } from "next";
import OperatorContent from "@/components/operator/OperatorContent";
import StructuredData, { breadcrumbList, softwareApplication, faqPage } from "@/components/site/StructuredData";
import { resolveLaunchUrls } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Agentic Operator — Ontology-Driven Agents Runtime",
  description:
    "An operating console for AI agent fleets at scale. Event-driven, visually orchestrated, fully traced, end-to-end auto-pilot — powered by the allmeta Ontology.",
  alternates: {
    canonical: "/operator",
    languages: { "zh-CN": "/operator", "en-US": "/operator", "x-default": "/operator" },
  },
  openGraph: {
    title: "Agentic Operator — Ontology-Driven Agents Runtime",
    description:
      "Compose workflows visually, trace every run in real-time, govern the agent fleet through an event bus.",
    type: "website",
    url: "https://allmeta.ai/operator",
  },
};

export default function OperatorPage() {
  const launch = resolveLaunchUrls(process.env);
  const launchUrl = launch.operator;

  const sa = softwareApplication(
    "Agentic Operator",
    "Ontology-Driven Agents Runtime. An operating console for AI agent fleets at scale — Planner, Executor, Validator, Reflection, Approval, Domain agents on one event bus.",
    "https://allmeta.ai/operator"
  );
  const bc = breadcrumbList([
    { name: "Home", url: "https://allmeta.ai/" },
    { name: "Operator", url: "https://allmeta.ai/operator" },
  ]);
  const faq = faqPage([
    {
      q: "What is Agentic Operator?",
      a: "Agentic Operator is the runtime that makes the allmeta Ontology executable. It's an agent control plane that natively reads the Ontology — event-driven, visually orchestrated, with full traceability and end-to-end auto-pilot.",
    },
    {
      q: "What agents does Operator ship with?",
      a: "Six built-in agent classes: Planner (decomposes requests), Executor (calls Action APIs), Validator (rule checks), Reflection (second-pass LLM eval), Approval (human-in-the-loop), and Domain (customer-specific agents assembled by FDEs).",
    },
    {
      q: "How does state work across agents?",
      a: "The Ontology IS the state. All agents read and write to the same shared Ontology, so context never gets lost across hand-offs.",
    },
  ]);

  return (
    <>
      <StructuredData data={sa} />
      <StructuredData data={bc} />
      <StructuredData data={faq} />
      <OperatorContent launchUrl={launchUrl} launch={launch} />
    </>
  );
}
