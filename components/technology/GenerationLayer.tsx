"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function GenerationLayer() {
  const { t } = useApp();
  const promptItems = ["l1", "l2", "l3", "l4", "l5", "l6"].map((l) => t(`tech_gen_a_${l}`));
  const harnessItems = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"].map((l) => t(`tech_gen_b_${l}`));

  return (
    <section style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_gen_label")}
          title={
            <>
              Ontology isn't just a brain —{" "}
              <Em color="var(--c-ink-2)">it's a generator.</Em>
            </>
          }
          desc="The ontology compiles itself into prompt packages and agent logic. Define once; the system writes the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={1}>
            <GenCard tone="amber" badge="A" title={t("tech_gen_a_title")} sub={t("tech_gen_a_sub")} items={promptItems} />
          </Reveal>
          <Reveal delay={2}>
            <GenCard tone="violet" badge="B" title={t("tech_gen_b_title")} sub={t("tech_gen_b_sub")} items={harnessItems} />
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="hairline glow-ring mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ padding: "24px 30px" }}>
            <div>
              <div className="t-h3">
                {t("tech_gen_codegen_title")}
              </div>
              <div className="t-small mt-1">
                {t("tech_gen_codegen_sub")}
              </div>
            </div>
            <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-lime-ink)", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Q4 · 2026 — Builder Suite
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GenCard({
  tone, badge, title, sub, items,
}: {
  tone: "amber" | "violet";
  badge: string;
  title: string;
  sub: string;
  items: string[];
}) {
  const c = tone === "amber" ? "var(--c-amber)" : "var(--c-violet)";
  return (
    <HairCard accent={tone} style={{ minHeight: 280 }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="t-h3">
            {title}
          </div>
          <div className="t-small mt-1">
            {sub}
          </div>
        </div>
        <span className="f-display" style={{ fontSize: 20, fontWeight: 600, color: c }}>{badge}.</span>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 pt-5" style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)" }}>
        {items.map((it) => (
          <div key={it} className="flex gap-2.5 items-center" style={{ fontSize: 13, color: "var(--c-ink-2)" }}>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: c, flexShrink: 0 }} />
            {it}
          </div>
        ))}
      </div>
    </HairCard>
  );
}
