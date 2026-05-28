"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Ecosystem() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="cyan">{t("tech_eco_label")}</SectionLabel>
        <div className="mt-8 mb-12">
          <h2 className="h-chunky h-display-md">{t("tech_eco_title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Partner tone="coral" zh={t("tech_eco_huawei")} en={t("tech_eco_huawei_en")} role={t("tech_eco_huawei_role")} />
          <Partner tone="info" zh={t("tech_eco_volcano")} en={t("tech_eco_volcano_en")} role={t("tech_eco_volcano_role")} />
          <Partner tone="lime" zh={t("tech_eco_moon")} en={t("tech_eco_moon_en")} role={t("tech_eco_moon_role")} />
          <Partner tone="amber" zh={t("tech_eco_cs")} en={t("tech_eco_cs_en")} role={t("tech_eco_cs_role")} />
        </div>

        <p className="mt-8 text-center f-mono italic" style={{ fontSize: 12.5, color: "var(--c-ink-3)" }}>
          没有产品 · 卖不了 Token。Token 一定基于国产算力。
        </p>
      </Container>
    </section>
  );
}

function Partner({ tone, zh, en, role }: { tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info"; zh: string; en: string; role: string }) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
    cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
  };
  return (
    <div className="panel" style={{ padding: 24, boxShadow: `inset 0 3px 0 0 ${c[tone]}` }}>
      <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 4 }}>
        {zh}
      </div>
      <div className="f-mono mb-5" style={{ fontSize: 11, color: c[tone], letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {en}
      </div>
      <div className="pt-4" style={{ borderTop: "1px solid var(--c-line)" }}>
        <div className="f-mono mb-2" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Role
        </div>
        <p style={{ fontSize: 12.5, color: "var(--c-ink-2)", lineHeight: 1.6 }}>
          {role}
        </p>
      </div>
    </div>
  );
}
