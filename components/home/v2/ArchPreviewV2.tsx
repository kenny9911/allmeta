"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import Reveal from "./Reveal";

const stack: Array<{ n: number; key: string; sub: string; emphasize?: boolean }> = [
  { n: 6, key: "h_arch_l6", sub: "RAAS · ECAS · GEAS · N apps" },
  { n: 5, key: "h_arch_l5", sub: "Planner · Executor · Validator · Reflection · Approval · Domain" },
  { n: 4, key: "h_arch_l4", sub: "Prompt Engine · Agent Harness · CodeGen" },
  { n: 3, key: "h_arch_l3", sub: "Objects · Actions · Rules · Events · Permissions", emphasize: true },
  { n: 2, key: "h_arch_l2", sub: "API · Connectors · Quality · Time-series · Master Data" },
  { n: 1, key: "h_arch_l1", sub: "ECore · ERP · HR · Finance · Procurement · SCADA" },
];

export default function ArchPreviewV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">{t("h_arch_eyebrow")}</div>
              <h2 className="t-h2">
                {t("h_arch_t1")} {t("h_arch_t2")}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="t-body" style={{ marginBottom: 20 }}>
                {t("h_arch_sub")}
              </p>
              <Link href="/technology" className="link-edito" style={{ fontSize: 14 }}>
                {t("h_arch_link")} →
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-2">
          {stack.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(4, i) as 0 | 1 | 2 | 3 | 4}>
              <LayerStrip n={s.n} title={t(s.key)} sub={s.sub} emphasize={s.emphasize} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerStrip({
  n, title, sub, emphasize, t,
}: {
  n: number;
  title: string;
  sub: string;
  emphasize?: boolean;
  t: (k: string) => string;
}) {
  // Calm, single-accent system: the focus layer (Ontology) is lime;
  // every other layer is neutral ink. No rainbow.
  const accent = "var(--c-lime)";
  // Same accent, text role: the fill lime is too light to read as type on
  // light theme, so the two `color:` sites below use the ink variant.
  const accentInk = "var(--c-lime-ink)";
  return (
    <div
      className="hairline grid grid-cols-[72px_1fr_auto] items-center"
      style={{
        padding: "20px 26px",
        borderLeft: emphasize ? `2px solid ${accent}` : "2px solid transparent",
        background: emphasize ? `linear-gradient(90deg, color-mix(in oklab, ${accent} 9%, var(--c-surface)), var(--c-surface) 60%)` : undefined,
        boxShadow: emphasize ? `0 0 0 1px ${accent}, 0 10px 40px -12px color-mix(in oklab, ${accent} 28%, transparent)` : undefined,
      }}
    >
      <div className="f-mono tabular-nums" style={{ fontSize: 22, fontWeight: 500, color: emphasize ? accentInk : "var(--c-ink-4)", letterSpacing: "0.02em", lineHeight: 1 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div>
        <div className="t-title">{title}</div>
        <div className="f-mono" style={{ fontSize: 11.5, color: "var(--c-ink-3)", letterSpacing: "0.02em", marginTop: 4 }}>
          {sub}
        </div>
      </div>
      <span className="f-mono" style={{ fontSize: 10.5, color: emphasize ? accentInk : "var(--c-ink-4)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        {emphasize ? t("h_arch_focus") : `${t("h_arch_layer_pre")}${n}${t("h_arch_layer_suf")}`}
      </span>
    </div>
  );
}
