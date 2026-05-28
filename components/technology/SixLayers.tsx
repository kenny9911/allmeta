"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

const layerDefs: Array<{
  n: 1 | 2 | 3 | 4 | 5 | 6;
  tone: "violet" | "info" | "lime" | "amber" | "cyan" | "coral";
  emphasized?: boolean;
  items: string[];
}> = [
  { n: 6, tone: "violet", items: ["Fee Control", "Recruiting (RAAS)", "Water-Wind-Solar", "Compliance", "PMO"] },
  { n: 5, tone: "info", items: ["Planner Agent", "Executor Agent", "Validator Agent", "Reflection Agent", "Approval Agent", "Domain Agents"] },
  { n: 4, tone: "amber", items: ["Prompt Engine", "Agent Harness", "allmeta CodeGen"] },
  { n: 3, tone: "lime", emphasized: true, items: ["Objects", "Relations", "Rules", "Events", "Actions", "States", "Permissions", "Metrics"] },
  { n: 2, tone: "cyan", items: ["API", "Data Connector", "Event Connector", "Data Quality", "Time-series", "Master Data", "System Integration"] },
  { n: 1, tone: "coral", items: ["ECore", "ERP", "HR", "Finance", "Procurement", "SCADA", "Data Platform", "Legacy Systems"] },
];

export default function SixLayers() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container size="wide">
        <SectionLabel>{t("tech_layers_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("tech_layers_title")}</h2>
        </div>
        <p className="italic-en mb-10" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("tech_layers_title_en")}
        </p>

        <div className="flex flex-col gap-3 relative">
          {/* upward arrow accent on the side */}
          <div
            className="absolute hidden lg:block"
            aria-hidden
            style={{
              right: -32, top: 0, bottom: 0, width: 2,
              background: "linear-gradient(to top, color-mix(in oklab, var(--c-coral) 40%, transparent), color-mix(in oklab, var(--c-violet) 40%, transparent))",
            }}
          />

          {layerDefs.map((layer) => (
            <LayerRow
              key={layer.n}
              n={layer.n}
              tone={layer.tone}
              title={t(`tech_l${layer.n}_title`)}
              caption={t(`tech_l${layer.n}_caption`)}
              desc={t(`tech_l${layer.n}_desc`)}
              items={layer.items}
              emphasized={!!layer.emphasized}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function LayerRow({
  n,
  tone,
  title,
  caption,
  desc,
  items,
  emphasized,
}: {
  n: number;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info";
  title: string;
  caption: string;
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
      className="panel grid grid-cols-1 md:grid-cols-[80px_280px_1fr] items-stretch gap-0 overflow-hidden"
      style={{
        boxShadow: emphasized
          ? `inset 0 3px 0 0 ${c[tone]}, 0 0 0 1px ${c[tone]}, 0 0 60px -10px color-mix(in oklab, ${c[tone]} 50%, transparent)`
          : `inset 0 3px 0 0 ${c[tone]}`,
        borderColor: emphasized ? c[tone] : "var(--c-line)",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          background: emphasized ? `color-mix(in oklab, ${c[tone]} 16%, var(--c-surface))` : `color-mix(in oklab, ${c[tone]} 8%, var(--c-surface))`,
          borderRight: "1px solid var(--c-line)",
          padding: "24px 18px",
        }}
      >
        <div className="f-display tabular-nums" style={{ fontSize: 48, fontWeight: 700, color: c[tone], lineHeight: 0.9, letterSpacing: "-0.03em", textShadow: `0 0 24px color-mix(in oklab, ${c[tone]} 40%, transparent)` }}>
          {n}
        </div>
      </div>

      <div style={{ padding: "20px 22px", borderRight: "1px solid var(--c-line)" }}>
        <div className="f-display" style={{ fontSize: 19, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", lineHeight: 1.2, marginBottom: 8 }}>
          {title}
        </div>
        <div style={{ fontSize: 12.5, color: "var(--c-ink-3)", lineHeight: 1.55 }}>
          {desc}
        </div>
      </div>

      <div style={{ padding: "20px 22px" }} className="flex items-center">
        <div className="flex flex-wrap gap-1.5">
          {items.map((it) => (
            <span
              key={it}
              className="f-mono"
              style={{
                fontSize: 11,
                padding: "5px 10px",
                background: `color-mix(in oklab, ${c[tone]} 8%, transparent)`,
                border: `1px solid color-mix(in oklab, ${c[tone]} 30%, transparent)`,
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
    </div>
  );
}
