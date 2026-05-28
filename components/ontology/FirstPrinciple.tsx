"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function FirstPrinciple() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="amber">{t("onto_principle_label")}</SectionLabel>

        <div className="mt-8 mb-4">
          <h2 className="h-chunky h-display-md">{t("onto_principle_title_zh")}</h2>
        </div>
        <p className="italic-en mb-14" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", color: "var(--c-ink-3)", fontStyle: "italic" }}>
          {t("onto_principle_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-stretch">
          <SvoBox
            tone="info"
            label={t("onto_principle_s_label")}
            value={t("onto_principle_s_val")}
            caption={t("onto_principle_s_cap")}
          />
          <Arrow />
          <SvoBox
            tone="lime"
            label={t("onto_principle_v_label")}
            value={t("onto_principle_v_val")}
            caption={t("onto_principle_v_cap")}
            verb
          />
          <Arrow />
          <SvoBox
            tone="coral"
            label={t("onto_principle_o_label")}
            value={t("onto_principle_o_val")}
            caption={t("onto_principle_o_cap")}
          />
        </div>

        <p className="mt-12 text-center f-mono italic" style={{ fontSize: 13, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
          {t("onto_principle_footer")}
        </p>
      </Container>
    </section>
  );
}

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center" style={{ minWidth: 36 }}>
      <span style={{ color: "var(--c-ink-4)", fontSize: 28 }}>→</span>
    </div>
  );
}

function SvoBox({
  tone,
  label,
  value,
  caption,
  verb,
}: {
  tone: "info" | "lime" | "coral";
  label: string;
  value: string;
  caption: string;
  verb?: boolean;
}) {
  const c: Record<string, string> = { info: "var(--c-info)", lime: "var(--c-lime)", coral: "var(--c-coral)" };
  return (
    <div
      className="panel relative flex flex-col items-center text-center"
      style={{
        padding: "26px 22px",
        minHeight: 180,
        borderStyle: verb ? "dashed" : "solid",
        borderColor: verb ? c[tone] : "var(--c-line)",
        boxShadow: `inset 0 3px 0 0 ${c[tone]}`,
      }}
    >
      <div className="f-mono mb-3" style={{ fontSize: 11, color: c[tone], letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </div>
      <div
        className={verb ? "italic-en" : ""}
        style={{
          fontFamily: "var(--f-display)",
          fontWeight: 700,
          fontSize: 32,
          color: verb ? c[tone] : "var(--c-ink-1)",
          letterSpacing: "-0.02em",
          fontStyle: verb ? "italic" : "normal",
          lineHeight: 1.0,
          marginBottom: 14,
        }}
      >
        {value}
      </div>
      <div className="f-mono" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
        {caption}
      </div>
    </div>
  );
}
