"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import Orb from "@/components/shared/Orb";
import { I } from "@/components/shared/IconSet";

export default function OperatorHero({ launchUrl }: { launchUrl: string }) {
  const { t, lang } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 80, paddingBottom: 64 }}>
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="chip-violet" style={{ marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-violet)", boxShadow: "0 0 8px var(--c-violet)" }} />
              <span>{t("op_hero_eyebrow")}</span>
            </div>

            <h1
              className="h-chunky"
              style={{
                fontSize: "clamp(54px, 8vw, 108px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              <span style={{ color: "var(--c-ink-1)" }}>{t("op_hero_h1")}</span>
              <br />
              <span className="text-gradient italic-en" style={{ fontStyle: "italic", fontWeight: 700 }}>
                {t("op_hero_h2")}
              </span>
            </h1>

            <p className="f-display" style={{ marginTop: 28, fontSize: lang === "zh" ? 18 : 17, color: "var(--c-ink-2)", lineHeight: 1.55, fontWeight: 500, maxWidth: 620 }}>
              {t("op_hero_sub")}
            </p>

            <p className="f-display mt-6" style={{ fontSize: 15, fontWeight: 600, color: "var(--c-violet)", letterSpacing: "-0.005em" }}>
              {t("op_hero_kicker")}
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href={launchUrl} className="btn-violet">
                {t("op_hero_cta_launch")}
                <I.arrow />
              </a>
              <a href="/ontology" className="btn-ghost">
                {t("op_hero_cta_onto")}
              </a>
            </div>
          </div>

          {/* Constellation visualization */}
          <div className="md:col-span-5 relative flex items-center justify-center order-1 md:order-2" style={{ minHeight: 380 }}>
            <span
              className="absolute"
              aria-hidden
              style={{
                width: 340, height: 340, borderRadius: 999,
                border: "1px dashed color-mix(in oklab, var(--c-lime) 24%, transparent)",
              }}
            />
            <span
              className="absolute"
              aria-hidden
              style={{
                width: 220, height: 220, borderRadius: 999,
                border: "1px solid color-mix(in oklab, var(--c-violet) 22%, transparent)",
              }}
            />
            <Orb size="lg" />

            <AgentPip name="Planner" tone="violet" pos={{ top: "5%", left: "30%" }} />
            <AgentPip name="Executor" tone="lime" pos={{ top: "30%", right: "5%" }} />
            <AgentPip name="Validator" tone="amber" pos={{ bottom: "20%", right: "10%" }} />
            <AgentPip name="Reflection" tone="cyan" pos={{ bottom: "5%", left: "32%" }} />
            <AgentPip name="Approval" tone="coral" pos={{ bottom: "30%", left: "2%" }} />
            <AgentPip name="Domain" tone="violet" pos={{ top: "30%", left: "2%" }} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AgentPip({
  name,
  tone,
  pos,
}: {
  name: string;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral";
  pos: React.CSSProperties;
}) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)", cyan: "var(--c-cyan)", coral: "var(--c-coral)",
  };
  return (
    <div
      className="absolute flex items-center gap-2"
      style={{
        ...pos,
        padding: "6px 12px",
        background: "var(--c-surface)",
        border: `1px solid color-mix(in oklab, ${c[tone]} 35%, transparent)`,
        borderRadius: 999,
        boxShadow: `0 0 16px -4px color-mix(in oklab, ${c[tone]} 50%, transparent)`,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: 999, background: c[tone], boxShadow: `0 0 8px ${c[tone]}` }} />
      <span className="f-mono" style={{ fontSize: 11, color: "var(--c-ink-1)", letterSpacing: "0.04em" }}>{name}</span>
    </div>
  );
}
