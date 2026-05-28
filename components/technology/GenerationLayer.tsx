"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

export default function GenerationLayer() {
  const { t } = useApp();
  const promptItems = [t("tech_gen_a_l1"), t("tech_gen_a_l2"), t("tech_gen_a_l3"), t("tech_gen_a_l4"), t("tech_gen_a_l5"), t("tech_gen_a_l6")];
  const harnessItems = [t("tech_gen_b_l1"), t("tech_gen_b_l2"), t("tech_gen_b_l3"), t("tech_gen_b_l4"), t("tech_gen_b_l5"), t("tech_gen_b_l6"), t("tech_gen_b_l7"), t("tech_gen_b_l8")];

  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="amber">{t("tech_gen_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("tech_gen_title")}</h2>
        </div>
        <p className="italic-en mb-12" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("tech_gen_title_en")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GenCard
            tone="amber"
            badge="A"
            icon={<I.spark />}
            title={t("tech_gen_a_title")}
            sub={t("tech_gen_a_sub")}
            items={promptItems}
          />
          <GenCard
            tone="violet"
            badge="B"
            icon={<I.cpu />}
            title={t("tech_gen_b_title")}
            sub={t("tech_gen_b_sub")}
            items={harnessItems}
          />
        </div>

        <div
          className="panel mt-4 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ padding: "22px 28px", boxShadow: "inset 0 3px 0 0 var(--c-lime), 0 0 0 1px var(--c-lime-line)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center justify-center"
              style={{
                width: 40, height: 40, borderRadius: 9,
                background: "var(--c-lime-bg)",
                color: "var(--c-lime)",
                border: "1px solid var(--c-lime-line)",
              }}
            >
              <I.api />
            </div>
            <div>
              <div className="f-display" style={{ fontSize: 19, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.005em" }}>
                {t("tech_gen_codegen_title")}
              </div>
              <div className="italic-en" style={{ fontSize: 13, color: "var(--c-ink-3)", fontStyle: "italic" }}>
                {t("tech_gen_codegen_sub")}
              </div>
            </div>
          </div>
          <span className="chip-lime">Q4 · 2026 — Builder Suite</span>
        </div>
      </Container>
    </section>
  );
}

function GenCard({
  tone,
  badge,
  icon,
  title,
  sub,
  items,
}: {
  tone: "amber" | "violet";
  badge: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  items: string[];
}) {
  const c: Record<string, string> = { amber: "var(--c-amber)", violet: "var(--c-violet)" };
  return (
    <div
      className="panel"
      style={{ padding: 28, boxShadow: `inset 0 3px 0 0 ${c[tone]}` }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center justify-center"
            style={{
              width: 44, height: 44, borderRadius: 11,
              background: `color-mix(in oklab, ${c[tone]} 14%, transparent)`,
              color: c[tone],
              border: `1px solid color-mix(in oklab, ${c[tone]} 35%, transparent)`,
            }}
          >
            {icon}
          </div>
          <div>
            <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", lineHeight: 1.1 }}>
              {title}
            </div>
            <div className="italic-en mt-1" style={{ fontSize: 13, color: "var(--c-ink-3)", fontStyle: "italic" }}>
              {sub}
            </div>
          </div>
        </div>
        <div className="f-display" style={{ fontSize: 20, fontWeight: 700, color: c[tone], letterSpacing: "-0.02em" }}>{badge}.</div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4" style={{ borderTop: "1px solid var(--c-line)" }}>
        {items.map((it) => (
          <div key={it} className="flex gap-2 items-center" style={{ fontSize: 13, color: "var(--c-ink-2)" }}>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: c[tone], flexShrink: 0 }} />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
