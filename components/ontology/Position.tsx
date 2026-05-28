"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

export default function Position() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="coral">{t("onto_position_label")}</SectionLabel>

        <div className="mt-8 mb-12">
          <h2 className="h-chunky h-display-sm">
            <span style={{ color: "var(--c-ink-1)" }}>{t("onto_position_title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BadCard title={t("onto_position_bad1_title")} caption={t("onto_position_bad1_caption")} />
          <BadCard title={t("onto_position_bad2_title")} caption={t("onto_position_bad2_caption")} />
        </div>

        <div
          className="panel mt-6"
          style={{
            padding: "24px 28px",
            boxShadow: "inset 0 3px 0 0 var(--c-lime), 0 0 0 1px var(--c-lime-line), 0 0 50px -8px color-mix(in oklab, var(--c-lime) 30%, transparent)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="f-display" style={{ fontSize: "clamp(17px, 1.8vw, 21px)", fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.01em", lineHeight: 1.45 }}>
              {t("onto_position_good")}
            </div>
            <span className="chip-lime" style={{ flexShrink: 0 }}>
              <I.check /> THIS IS THE WAY
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BadCard({ title, caption }: { title: string; caption: string }) {
  return (
    <div
      className="panel"
      style={{
        padding: 24,
        boxShadow: "inset 0 3px 0 0 var(--c-coral)",
      }}
    >
      <div className="flex items-center gap-2 mb-3 f-mono" style={{ fontSize: 11, color: "var(--c-coral)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        <span style={{ width: 14, height: 14, borderRadius: 4, background: "var(--c-coral-bg)", color: "var(--c-coral)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>×</span>
        {title}
      </div>
      <div style={{ fontSize: 14, color: "var(--c-ink-2)", lineHeight: 1.6 }}>
        {caption}
      </div>
    </div>
  );
}
