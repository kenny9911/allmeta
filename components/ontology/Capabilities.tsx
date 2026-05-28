"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

const items: Array<{ key: string; icon: React.ReactNode; tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info" }> = [
  { key: "1", icon: <I.eye />, tone: "lime" },
  { key: "2", icon: <I.api />, tone: "violet" },
  { key: "3", icon: <I.bolt />, tone: "amber" },
  { key: "4", icon: <I.audit />, tone: "cyan" },
  { key: "5", icon: <I.shield />, tone: "coral" },
  { key: "6", icon: <I.refresh />, tone: "info" },
];

export default function Capabilities() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel>{t("onto_cap_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("onto_cap_title")}</h2>
        </div>
        <p className="italic-en mb-12" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("onto_cap_subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const c: Record<string, string> = {
              lime: "var(--c-lime)",
              violet: "var(--c-violet)",
              amber: "var(--c-amber)",
              cyan: "var(--c-cyan)",
              coral: "var(--c-coral)",
              info: "var(--c-info)",
            };
            return (
              <div
                key={item.key}
                className="panel card-hover"
                style={{
                  padding: 24,
                  boxShadow: `inset 0 3px 0 0 ${c[item.tone]}`,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `color-mix(in oklab, ${c[item.tone]} 14%, transparent)`,
                      color: c[item.tone],
                      border: `1px solid color-mix(in oklab, ${c[item.tone]} 35%, transparent)`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.1em" }}>
                    0{item.key}
                  </span>
                </div>
                <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", lineHeight: 1.1, marginBottom: 6 }}>
                  {t(`onto_cap_${item.key}_title`)}
                </div>
                <div className="f-mono" style={{ fontSize: 11, color: c[item.tone], letterSpacing: "0.06em", marginBottom: 12, textTransform: "uppercase" }}>
                  {t(`onto_cap_${item.key}_zh`)}
                </div>
                <p style={{ fontSize: 13, color: "var(--c-ink-2)", lineHeight: 1.6 }}>
                  {t(`onto_cap_${item.key}_desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
