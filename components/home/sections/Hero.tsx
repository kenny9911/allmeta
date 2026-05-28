"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import Orb from "@/components/shared/Orb";
import Container from "@/components/shared/Container";
import { I } from "@/components/shared/IconSet";

export default function Hero() {
  const { t, lang } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 88, paddingBottom: 56 }}>
      {/* scan line accent */}
      <span className="scan-line" aria-hidden />

      <Container size="wide">
        <div className="flex flex-col items-center text-center">
          {/* eyebrow */}
          <div className="chip-lime" style={{ marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 8px var(--c-lime)" }} />
            <span>{t("home_hero_eyebrow")}</span>
          </div>

          {/* Title — chunky */}
          <h1
            className="h-chunky"
            style={{
              fontSize: "clamp(56px, 9vw, 132px)",
              maxWidth: 1100,
              letterSpacing: "-0.04em",
              lineHeight: 0.96,
            }}
          >
            <span style={{ color: "var(--c-ink-1)" }}>{t("home_hero_h1_1")}</span>
            <br />
            <span style={{ color: "var(--c-ink-1)" }}>{t("home_hero_h1_2")} </span>
            <span className="text-gradient italic-en" style={{ fontStyle: "italic", fontWeight: 700 }}>
              {t("home_hero_h1_3")}
            </span>
          </h1>

          {/* AI orb — the centerpiece, sits between title + sub */}
          <div className="relative" style={{ marginTop: 44, marginBottom: 40, height: 160 }}>
            <Orb size="2xl" />
            {/* connecting rings */}
            <span
              className="absolute inset-0 m-auto pointer-events-none"
              aria-hidden
              style={{
                width: 320,
                height: 320,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 999,
                border: "1px solid color-mix(in oklab, var(--c-lime) 14%, transparent)",
              }}
            />
            <span
              className="absolute inset-0 m-auto pointer-events-none"
              aria-hidden
              style={{
                width: 460,
                height: 460,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 999,
                border: "1px dashed color-mix(in oklab, var(--c-violet) 14%, transparent)",
              }}
            />
          </div>

          {/* Sub */}
          <div className="flex flex-col items-center gap-3" style={{ maxWidth: 760 }}>
            <p
              className="f-display"
              style={{
                fontSize: lang === "zh" ? "clamp(17px, 1.9vw, 22px)" : "clamp(16px, 1.7vw, 21px)",
                color: "var(--c-ink-2)",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {t("home_hero_sub_zh")}
            </p>
            {lang === "zh" && (
              <p
                className="italic-en"
                style={{
                  fontSize: 14,
                  color: "var(--c-ink-3)",
                  lineHeight: 1.55,
                  maxWidth: 720,
                  fontStyle: "italic",
                }}
              >
                {t("home_hero_sub_en")}
              </p>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: 36 }}>
            <Link href="/ontology" className="btn-lime">
              {t("home_hero_cta_primary")}
              <I.arrow />
            </Link>
            <Link href="/operator" className="btn-violet">
              {t("home_hero_cta_secondary")}
              <I.arrow />
            </Link>
            <Link href="/technology" className="btn-ghost">
              {t("home_hero_cta_tech")}
            </Link>
          </div>

          {/* mini stat ribbon (the live demo recap teaser) */}
          <div
            className="grid grid-cols-3 mt-16 gap-px overflow-hidden"
            style={{
              border: "1px solid var(--c-line)",
              background: "var(--c-line)",
              borderRadius: 14,
              maxWidth: 720,
              width: "100%",
            }}
          >
            <HeroStat value="8" label={t("home_hero_stat_agents")} tone="lime" />
            <HeroStat value="3.5s" label={t("home_hero_stat_wallclock")} tone="amber" />
            <HeroStat value="0" label={t("home_hero_stat_breaks")} tone="violet" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroStat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "lime" | "violet" | "amber";
}) {
  const c: Record<string, string> = { lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)" };
  return (
    <div style={{ background: "var(--c-surface)", padding: "20px 14px", textAlign: "center" }}>
      <div
        className="f-display tabular-nums"
        style={{ fontSize: 36, fontWeight: 700, lineHeight: 1, color: c[tone], letterSpacing: "-0.03em", textShadow: `0 0 28px color-mix(in oklab, ${c[tone]} 35%, transparent)` }}
      >
        {value}
      </div>
      <div className="f-mono mt-2" style={{ fontSize: 10.5, letterSpacing: "0.08em", color: "var(--c-ink-3)", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}
