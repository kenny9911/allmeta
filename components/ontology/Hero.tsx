"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import Orb from "@/components/shared/Orb";
import { I } from "@/components/shared/IconSet";

export default function OntologyHero({ launchUrl }: { launchUrl: string }) {
  const { t, lang } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 80, paddingBottom: 64 }}>
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="chip-lime" style={{ marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 8px var(--c-lime)" }} />
              <span>{t("onto_hero_eyebrow")}</span>
            </div>

            <h1
              className="h-chunky"
              style={{
                fontSize: "clamp(54px, 8vw, 108px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              <span style={{ color: "var(--c-ink-1)" }}>{t("onto_hero_h1")}</span>
              <br />
              <span className="text-gradient italic-en" style={{ fontStyle: "italic", fontWeight: 700 }}>
                {t("onto_hero_h2")}
              </span>
            </h1>

            <p className="f-display" style={{ marginTop: 28, fontSize: lang === "zh" ? 18 : 17, color: "var(--c-ink-2)", lineHeight: 1.55, fontWeight: 500, maxWidth: 620 }}>
              {t("onto_hero_sub")}
            </p>
            {lang === "zh" && (
              <p className="italic-en mt-3" style={{ fontSize: 14, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 620, fontStyle: "italic" }}>
                {t("onto_hero_sub_en")}
              </p>
            )}

            <p className="f-display mt-6" style={{ fontSize: 15, fontWeight: 600, color: "var(--c-lime)", letterSpacing: "-0.005em" }}>
              {t("onto_hero_kicker")}
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href={launchUrl} className="btn-lime">
                {t("onto_hero_cta_launch")}
                <I.arrow />
              </a>
              <a href="/technology" className="btn-ghost">
                {t("onto_hero_cta_arch")}
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative flex items-center justify-center" style={{ minHeight: 360 }}>
            <Orb size="2xl" />
            {/* surrounding labels */}
            <Floater label="Object" tone="lime" pos={{ top: "8%", left: "8%" }} />
            <Floater label="Action" tone="amber" pos={{ top: "12%", right: "6%" }} />
            <Floater label="Rule" tone="violet" pos={{ bottom: "20%", right: "2%" }} />
            <Floater label="Event" tone="cyan" pos={{ bottom: "10%", left: "10%" }} />
            <Floater label="Policy" tone="coral" pos={{ top: "45%", right: "-2%" }} />
            <Floater label="State" tone="lime" pos={{ top: "55%", left: "-2%" }} />

            <span
              className="absolute pointer-events-none"
              aria-hidden
              style={{
                width: 340,
                height: 340,
                borderRadius: 999,
                border: "1px dashed color-mix(in oklab, var(--c-violet) 25%, transparent)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Floater({
  label,
  tone,
  pos,
}: {
  label: string;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral";
  pos: React.CSSProperties;
}) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)",
    violet: "var(--c-violet)",
    amber: "var(--c-amber)",
    cyan: "var(--c-cyan)",
    coral: "var(--c-coral)",
  };
  return (
    <div
      className="absolute f-mono"
      style={{
        ...pos,
        padding: "5px 10px",
        background: "var(--c-surface)",
        border: `1px solid color-mix(in oklab, ${c[tone]} 40%, transparent)`,
        color: c[tone],
        borderRadius: 6,
        fontSize: 11,
        letterSpacing: "0.06em",
        boxShadow: `0 0 18px -6px color-mix(in oklab, ${c[tone]} 50%, transparent)`,
      }}
    >
      {label}
    </div>
  );
}
