"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Reveal from "./Reveal";

const partners: Array<{ name: string; en: string }> = [
  { name: "华为云", en: "HUAWEI CLOUD" },
  { name: "中软国际", en: "ChinaSoft Intl" },
  { name: "Volcano Engine", en: "字节火山" },
  { name: "Moonshot", en: "Kimi K-Series" },
  { name: "ECore", en: "Modernized ERP" },
  { name: "Neo4j", en: "Graph DB" },
  { name: "TypeDB", en: "Strongly-typed" },
];

export default function TrustStripV2() {
  const { t } = useApp();
  // duplicate to make the marquee seamless
  const loop = [...partners, ...partners];
  return (
    <section style={{ paddingTop: 18, paddingBottom: 60 }}>
      <div className="edito-container">
        <Reveal>
          <div className="flex items-baseline justify-between mb-6 gap-4">
            <div className="eyebrow">{t("h_trust_eyebrow")}</div>
            <div className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "right" }}>
              {t("h_trust_note")}
            </div>
          </div>
        </Reveal>
        <div className="marquee py-5" style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)", borderBottom: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" }}>
          <div className="marquee-track">
            {loop.map((p, i) => (
              <PartnerWord key={i} name={p.name} en={p.en} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerWord({ name, en }: { name: string; en: string }) {
  return (
    <div className="flex items-baseline gap-3" style={{ minWidth: "max-content" }}>
      <span
        className="f-display"
        style={{
          fontWeight: 500,
          fontSize: 22,
          color: "var(--c-ink-1)",
          letterSpacing: "-0.02em",
          opacity: 0.92,
        }}
      >
        {name}
      </span>
      <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {en}
      </span>
    </div>
  );
}
