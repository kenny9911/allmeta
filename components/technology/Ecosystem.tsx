"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal } from "@/components/editorial/parts";

export default function Ecosystem() {
  const { t } = useApp();
  const partners: Array<{ tone: "coral" | "info" | "lime" | "amber"; zh: string; en: string; role: string }> = [
    { tone: "coral", zh: t("tech_eco_huawei"), en: t("tech_eco_huawei_en"), role: t("tech_eco_huawei_role") },
    { tone: "info", zh: t("tech_eco_volcano"), en: t("tech_eco_volcano_en"), role: t("tech_eco_volcano_role") },
    { tone: "lime", zh: t("tech_eco_moon"), en: t("tech_eco_moon_en"), role: t("tech_eco_moon_role") },
    { tone: "amber", zh: t("tech_eco_cs"), en: t("tech_eco_cs_en"), role: t("tech_eco_cs_role") },
  ];
  return (
    <section style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_eco_label")}
          title={<>Strategic ecosystem.</>}
          desc="Model · cloud · industry. No product without tokens; no tokens without domestic compute."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => {
            const c: Record<string, string> = { coral: "var(--c-coral)", info: "var(--c-info)", lime: "var(--c-lime)", amber: "var(--c-amber)" };
            return (
              <Reveal key={p.zh} delay={(Math.min(4, i + 1)) as 1 | 2 | 3 | 4}>
                <HairCard style={{ minHeight: 200 }}>
                  <div className="h-sans" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--c-ink-1)", lineHeight: 1.15, marginBottom: 4 }}>
                    {p.zh}
                  </div>
                  <div className="f-mono mb-5" style={{ fontSize: 10.5, color: c[p.tone], letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {p.en}
                  </div>
                  <div className="pt-5" style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)" }}>
                    <div className="f-mono mb-2" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      Role
                    </div>
                    <p style={{ fontSize: 12.5, color: "var(--c-ink-2)", lineHeight: 1.6 }}>{p.role}</p>
                  </div>
                </HairCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
