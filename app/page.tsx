import HomeContent from "@/components/home/HomeContent";

// Read env vars on every request rather than baking them at build time —
// lets ops change product URLs in .env.local without a rebuild.
export const dynamic = "force-dynamic";

export default function Page() {
  const ontologyUrl = process.env.allmetaOntology_URL ?? "http://localhost:3500";
  const operatorUrl = process.env.AgenticOperator_URL ?? "http://localhost:3400";

  return <HomeContent ontologyUrl={ontologyUrl} operatorUrl={operatorUrl} />;
}
