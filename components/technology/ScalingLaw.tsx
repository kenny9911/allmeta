"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function ScalingLaw() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_scale_label")}
          title={
            <>
              Copy the architecture.{" "}
              <Em color="var(--c-ink-2)">Don't copy the product.</Em>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal delay={1}>
            <ScaleCard tone="info" verdict="✕ won't fit" title={t("tech_scale_bad1_title")} sub={t("tech_scale_bad1_sub")} desc={t("tech_scale_bad1_desc")} />
          </Reveal>
          <Reveal delay={2}>
            <ScaleCard tone="coral" verdict="✕ won't scale" title={t("tech_scale_bad2_title")} sub={t("tech_scale_bad2_sub")} desc={t("tech_scale_bad2_desc")} />
          </Reveal>
          <Reveal delay={3}>
            <ScaleCard tone="lime" verdict="✓ this is the way" title={t("tech_scale_good_title")} sub={t("tech_scale_good_sub")} desc={t("tech_scale_good_desc")} emphasized />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ScaleCard({
  tone, verdict, title, sub, desc, emphasized,
}: {
  tone: "info" | "coral" | "lime";
  verdict: string;
  title: string;
  sub: string;
  desc: string;
  emphasized?: boolean;
}) {
  const c: Record<string, string> = { info: "var(--c-info)", coral: "var(--c-coral)", lime: "var(--c-lime)" };
  /** Text-role twin of `c`. Only lime differs — the glow below stays on the
   *  fill lime, the verdict line reads as words and needs the deeper ink. */
  const cText: Record<string, string> = { ...c, lime: "var(--c-lime-ink)" };
  return (
    <div
      className={emphasized ? "hairline glow-ring" : "hairline"}
      style={{
        padding: 28,
        minHeight: 240,
        display: "flex",
        flexDirection: "column",
        boxShadow: emphasized ? `0 0 50px -12px color-mix(in oklab, ${c[tone]} 40%, transparent)` : undefined,
      }}
    >
      <div className="t-h3" style={{ marginBottom: 5 }}>
        {title}
      </div>
      <div className="t-small mb-5">
        {sub}
      </div>
      <p className="t-small" style={{ color: "var(--c-ink-2)", marginBottom: "auto" }}>
        {desc}
      </p>
      <div className="f-mono mt-6 pt-5" style={{ fontSize: 11, color: cText[tone], letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)" }}>
        {verdict}
      </div>
    </div>
  );
}
