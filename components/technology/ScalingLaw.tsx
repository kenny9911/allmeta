"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

export default function ScalingLaw() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="coral">{t("tech_scale_label")}</SectionLabel>

        <div className="mt-8 mb-12">
          <h2 className="h-chunky h-display-md">
            <span style={{ color: "var(--c-ink-1)" }}>{t("tech_scale_title_zh")}</span>
          </h2>
          <p className="italic-en mt-2" style={{ fontSize: "clamp(15px, 1.4vw, 18px)", color: "var(--c-ink-3)", fontStyle: "italic" }}>
            {t("tech_scale_title_en")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScaleCard
            tone="info"
            verdict="× 行不通"
            title={t("tech_scale_bad1_title")}
            sub={t("tech_scale_bad1_sub")}
            desc={t("tech_scale_bad1_desc")}
          />
          <ScaleCard
            tone="coral"
            verdict="× 不 scale"
            title={t("tech_scale_bad2_title")}
            sub={t("tech_scale_bad2_sub")}
            desc={t("tech_scale_bad2_desc")}
          />
          <ScaleCard
            tone="lime"
            verdict="✓ 这才对"
            title={t("tech_scale_good_title")}
            sub={t("tech_scale_good_sub")}
            desc={t("tech_scale_good_desc")}
            emphasized
          />
        </div>
      </Container>
    </section>
  );
}

function ScaleCard({
  tone,
  verdict,
  title,
  sub,
  desc,
  emphasized,
}: {
  tone: "info" | "coral" | "lime";
  verdict: string;
  title: string;
  sub: string;
  desc: string;
  emphasized?: boolean;
}) {
  const c: Record<string, string> = { info: "var(--c-info)", coral: "var(--c-coral)", lime: "var(--c-lime)" };
  return (
    <div
      className="panel"
      style={{
        padding: 28,
        boxShadow: emphasized
          ? `inset 0 3px 0 0 ${c[tone]}, 0 0 0 1px ${c[tone]}, 0 0 50px -10px color-mix(in oklab, ${c[tone]} 50%, transparent)`
          : `inset 0 3px 0 0 ${c[tone]}`,
      }}
    >
      <div className="f-display" style={{ fontSize: 21, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", marginBottom: 6 }}>
        {title}
      </div>
      <div className="italic-en mb-4" style={{ fontSize: 13.5, color: "var(--c-ink-3)", fontStyle: "italic" }}>
        {sub}
      </div>
      <p style={{ fontSize: 13.5, color: "var(--c-ink-2)", lineHeight: 1.6, marginBottom: 20 }}>
        {desc}
      </p>
      <div className="f-mono" style={{ fontSize: 11, color: c[tone], letterSpacing: "0.08em", textTransform: "uppercase", paddingTop: 14, borderTop: "1px solid var(--c-line)" }}>
        {verdict}
      </div>
    </div>
  );
}
