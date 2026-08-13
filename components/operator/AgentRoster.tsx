"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";
import { I } from "@/components/shared/IconSet";

const roster: Array<{ key: string; tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info"; icon: React.ReactNode }> = [
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
    <section style={{ paddingTop: 70, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("op_agents_label")}
          title={
            <>
              Six agent classes.{" "}
              <Em color="var(--c-ink-2)">Same brain, different roles.</Em>
            </>
          }
          desc={t("op_agents_sub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roster.map((r, i) => {
            const c: Record<string, string> = {
              lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
              cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
            };
            return (
              <Reveal key={r.key} delay={(Math.min(3, (i % 3) + 1)) as 1 | 2 | 3}>
                <HairCard style={{ minHeight: 150 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 34, height: 34, borderRadius: 8,
                        background: `color-mix(in oklab, ${c[r.tone]} 14%, transparent)`,
                        color: c[r.tone],
                        border: `1px solid color-mix(in oklab, ${c[r.tone]} 32%, transparent)`,
                      }}
                    >
                      {r.icon}
                    </span>
                    <h3 className="h-sans" style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--c-ink-1)" }}>
                      {t(`op_agent_${r.key}_title`)}
                    </h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: "var(--c-ink-3)", lineHeight: 1.6 }}>
                    {t(`op_agent_${r.key}_desc`)}
                  </p>
                </HairCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
