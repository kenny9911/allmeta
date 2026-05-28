"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

const roster: Array<{
  key: string;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info";
  icon: React.ReactNode;
}> = [
  { key: "planner", tone: "violet", icon: <I.flow /> },
  { key: "executor", tone: "lime", icon: <I.bolt /> },
  { key: "validator", tone: "amber", icon: <I.shield /> },
  { key: "reflection", tone: "cyan", icon: <I.refresh /> },
  { key: "approval", tone: "coral", icon: <I.user /> },
  { key: "domain", tone: "info", icon: <I.cube /> },
];

export default function AgentRoster() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="violet">{t("op_agents_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("op_agents_title")}</h2>
        </div>
        <p className="italic-en mb-12" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("op_agents_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roster.map((r) => {
            const c: Record<string, string> = {
              lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
              cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
            };
            return (
              <div
                key={r.key}
                className="panel card-hover"
                style={{ padding: 24, boxShadow: `inset 0 3px 0 0 ${c[r.tone]}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: `color-mix(in oklab, ${c[r.tone]} 14%, transparent)`,
                      color: c[r.tone],
                      border: `1px solid color-mix(in oklab, ${c[r.tone]} 35%, transparent)`,
                    }}
                  >
                    {r.icon}
                  </div>
                  <div className="f-display" style={{ fontSize: 18, fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.005em" }}>
                    {t(`op_agent_${r.key}_title`)}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
                  {t(`op_agent_${r.key}_desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
