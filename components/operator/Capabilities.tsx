"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

const caps: Array<{ n: string; tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info" }> = [
  { n: "1", tone: "lime" },
  { n: "2", tone: "violet" },
  { n: "3", tone: "amber" },
  { n: "4", tone: "cyan" },
  { n: "5", tone: "coral" },
  { n: "6", tone: "info" },
  { n: "7", tone: "lime" },
];

export default function Capabilities() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="amber">{t("op_caps_label")}</SectionLabel>
        <div className="mt-8 mb-12">
          <h2 className="h-chunky h-display-md">{t("op_caps_title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-px" style={{ background: "var(--c-line)", border: "1px solid var(--c-line)", borderRadius: 14, overflow: "hidden" }}>
          {caps.map((c) => {
            const cl: Record<string, string> = {
              lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
              cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
            };
            return (
              <div key={c.n} style={{ background: "var(--c-surface)", padding: "20px 18px", minHeight: 180 }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="f-mono" style={{ fontSize: 10.5, color: cl[c.tone], letterSpacing: "0.12em" }}>0{c.n}</span>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: cl[c.tone], boxShadow: `0 0 8px ${cl[c.tone]}` }} />
                </div>
                <div className="f-display" style={{ fontSize: 15, fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.005em", lineHeight: 1.25, marginBottom: 10 }}>
                  {t(`op_cap${c.n}_t`)}
                </div>
                <div style={{ fontSize: 12, color: "var(--c-ink-3)", lineHeight: 1.55 }}>
                  {t(`op_cap${c.n}_d`)}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
