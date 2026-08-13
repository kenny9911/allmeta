"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal, Em } from "@/components/editorial/parts";

const layerDefs: Array<{
  n: 1 | 2 | 3 | 4 | 5 | 6;
  tone: "violet" | "info" | "lime" | "amber" | "cyan" | "coral";
  emphasized?: boolean;
  items: string[];
}> = [
  { n: 6, tone: "violet", items: ["Fee Control", "Recruiting", "Water-Wind-Solar", "Compliance", "PMO"] },
  { n: 5, tone: "info", items: ["Planner", "Executor", "Validator", "Reflection", "Approval", "Domain"] },
  { n: 4, tone: "amber", items: ["Prompt Engine", "Agent Harness", "CodeGen"] },
  { n: 3, tone: "lime", emphasized: true, items: ["Objects", "Relations", "Rules", "Events", "Actions", "States", "Permissions", "Metrics"] },
  { n: 2, tone: "cyan", items: ["API", "Connectors", "Data Quality", "Time-series", "Master Data"] },
  { n: 1, tone: "coral", items: ["ECore", "ERP", "HR", "Finance", "Procurement", "SCADA", "Legacy"] },
];

export default function SixLayers() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_layers_label")}
          title={
            <>
              Six layers,{" "}
              <Em color="var(--c-ink-2)">one semantic surface.</Em>
            </>
          }
          desc="From the system of records you already own, up through a live ontology, generation, runtime — to the applications your business uses. Each layer composable, each replaceable."
        />

        <div className="flex flex-col gap-2.5">
          {layerDefs.map((layer, i) => (
            <Reveal key={layer.n} delay={(Math.min(4, i) ) as 0 | 1 | 2 | 3 | 4}>
              <LayerStrip
                n={layer.n}
                tone={layer.tone}
                title={t(`tech_l${layer.n}_title`)}
                desc={t(`tech_l${layer.n}_desc`)}
                items={layer.items}
                emphasized={!!layer.emphasized}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerStrip({
  n, tone, title, desc, items, emphasized,
}: {
  n: number;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info";
  title: string;
  desc: string;
  items: string[];
  emphasized: boolean;
}) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
    cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
  };
  return (
    <div
      className="hairline grid grid-cols-1 md:grid-cols-[72px_minmax(220px,1fr)_1.4fr] items-center gap-y-3"
      style={{
        padding: "22px 26px",
        borderLeft: `2px solid ${c[tone]}`,
        background: emphasized
          ? `linear-gradient(90deg, color-mix(in oklab, ${c[tone]} 10%, var(--c-surface)), var(--c-surface) 55%)`
          : undefined,
        boxShadow: emphasized ? `0 0 0 1px ${c[tone]}, 0 12px 44px -12px color-mix(in oklab, ${c[tone]} 35%, transparent)` : undefined,
      }}
    >
      <div className="f-display tabular-nums" style={{ fontSize: 30, fontWeight: 500, color: emphasized ? c[tone] : "var(--c-ink-3)", letterSpacing: "-0.03em", lineHeight: 1 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div>
        <div className="h-sans" style={{ fontSize: 20, fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.02em" }}>
          {title}
        </div>
        <div style={{ fontSize: 12.5, color: "var(--c-ink-3)", lineHeight: 1.5, marginTop: 4, maxWidth: 280 }}>
          {desc}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it}
            className="f-mono"
            style={{
              fontSize: 11,
              padding: "5px 10px",
              background: `color-mix(in oklab, ${c[tone]} 7%, transparent)`,
              border: `1px solid color-mix(in oklab, ${c[tone]} 26%, transparent)`,
              color: emphasized ? c[tone] : "var(--c-ink-2)",
              borderRadius: 6,
              letterSpacing: "0.02em",
            }}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
