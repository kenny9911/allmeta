"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import Panel from "@/components/shared/Panel";

export default function Gap() {
  const { t, lang } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel kicker={lang === "zh" ? "中软国际 × HUAWEI CLOUD INSPIRE 2026" : null}>
          {t("home_gap_label")}
        </SectionLabel>

        <div className="mt-10 mb-12">
          <h2 className="h-chunky h-display-md" style={{ fontWeight: 700 }}>
            {t("home_gap_title_zh")}
          </h2>
          <p className="h-italic" style={{ marginTop: 10, fontSize: "clamp(18px, 2vw, 24px)" }}>
            {t("home_gap_title_en")}
          </p>
        </div>

        {/* 10% → 60% */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
          style={{ paddingTop: 24, paddingBottom: 36, borderTop: "1px solid var(--c-line)", borderBottom: "1px solid var(--c-line)" }}
        >
          <div className="flex items-end gap-6">
            <span
              className="f-display tabular-nums"
              style={{
                fontSize: "clamp(96px, 12vw, 180px)",
                fontWeight: 700,
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: "var(--c-ink-3)",
              }}
            >
              {t("home_gap_stat_before")}
            </span>
            <span
              className="f-mono"
              style={{ fontSize: 32, color: "var(--c-ink-4)", lineHeight: 1, paddingBottom: 14 }}
            >
              →
            </span>
            <span
              className="f-display tabular-nums"
              style={{
                fontSize: "clamp(96px, 14vw, 220px)",
                fontWeight: 700,
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: "var(--c-lime)",
                textShadow: "0 0 50px color-mix(in oklab, var(--c-lime) 40%, transparent)",
              }}
            >
              {t("home_gap_stat_after")}
            </span>
          </div>

          <div className="md:max-w-md">
            <p style={{ fontSize: "clamp(16px, 1.4vw, 18px)", color: "var(--c-ink-1)", lineHeight: 1.5 }}>
              {t("home_gap_stat_caption")}
            </p>
            <p className="italic-en mt-2" style={{ fontSize: 13, color: "var(--c-ink-3)", lineHeight: 1.5 }}>
              {t("home_gap_stat_caption_en")}
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-10 mb-14">
          <p
            className="h-italic"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", lineHeight: 1.4, color: "var(--c-ink-3)" }}
          >
            {t("home_gap_quote")}
          </p>
          <p style={{ marginTop: 12, fontSize: 14, color: "var(--c-ink-2)", lineHeight: 1.5 }}>
            {t("home_gap_quote_attr")}
            {" "}
            <span className="hl-lime f-display" style={{ fontWeight: 700 }}>Actions.</span>
          </p>
        </div>

        {/* LLM → ??? → Agent */}
        <div className="mb-6">
          <p className="f-display" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 600, lineHeight: 1.3, color: "var(--c-ink-2)" }}>
            {t("home_gap_h2_zh")}{" "}
            <span className="hl-lime hl-mark" style={{ color: "var(--c-lime)", fontWeight: 700 }}>
              {t("home_gap_h2_em")}
            </span>
            {t("home_gap_h2_zh_after")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 mt-8">
          <GapCard
            tone="info"
            label={t("home_gap_box1_label")}
            zh={t("home_gap_box1_zh")}
            verb={t("home_gap_box1_verb")}
            caption={t("home_gap_box1_caption")}
          />
          <ArrowCell />
          <GapCard
            tone="lime"
            label={t("home_gap_box2_label")}
            zh={t("home_gap_box2_zh")}
            verb={t("home_gap_box2_verb")}
            caption={t("home_gap_box2_caption")}
            dashed
          />
          <ArrowCell />
          <GapCard
            tone="coral"
            label={t("home_gap_box3_label")}
            zh={t("home_gap_box3_zh")}
            verb={t("home_gap_box3_verb")}
            caption={t("home_gap_box3_caption")}
          />
        </div>
      </Container>
    </section>
  );
}

function ArrowCell() {
  return (
    <div className="hidden md:flex items-center justify-center" style={{ minWidth: 28 }}>
      <span style={{ color: "var(--c-ink-4)", fontSize: 22 }}>→</span>
    </div>
  );
}

function GapCard({
  tone,
  label,
  zh,
  verb,
  caption,
  dashed,
}: {
  tone: "info" | "lime" | "coral";
  label: string;
  zh: string;
  verb: string;
  caption: string;
  dashed?: boolean;
}) {
  const c: Record<string, string> = {
    info: "var(--c-info)",
    lime: "var(--c-lime)",
    coral: "var(--c-coral)",
  };
  return (
    <div
      className="panel relative flex flex-col justify-between"
      style={{
        padding: "20px 22px",
        minHeight: 200,
        borderStyle: dashed ? "dashed" : "solid",
        borderColor: dashed ? c[tone] : "var(--c-line)",
        boxShadow: `inset 0 3px 0 0 ${c[tone]}`,
      }}
    >
      <div className="f-display" style={{ fontSize: 36, fontWeight: 700, color: tone === "lime" ? c[tone] : "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1.0 }}>
        {label}
      </div>
      <div className="f-mono mt-1" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.06em" }}>
        {zh}
      </div>
      <div className="mt-4">
        <div className="italic-en" style={{ fontStyle: "italic", fontWeight: 600, fontSize: 15, color: c[tone] }}>{verb}</div>
        <div className="f-mono mt-1" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>{caption}</div>
      </div>
    </div>
  );
}
