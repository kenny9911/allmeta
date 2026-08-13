"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";

export default function RoadmapV2() {
  const { t } = useApp();
  const milestones = [1, 2, 3, 4, 5].map((i) => ({
    when: t(`h_road_m${i}_when`),
    title: t(`h_road_m${i}_title`),
    note: t(`h_road_m${i}_note`),
    live: i === 1,
  }));

  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("h_road_eyebrow")}</div>
              <h2 className="t-h2">
                {t("h_road_t1")} {t("h_road_t2")}
              </h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              <Rich text={t("h_road_sub")} />
            </p>
          </div>
        </Reveal>

        <div
          className="relative grid gap-0"
          style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 20%, transparent)" }}
        >
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={Math.min(4, i) as 0 | 1 | 2 | 3 | 4}>
              <div
                className="relative"
                style={{
                  padding: "26px 18px",
                  borderRight: i < milestones.length - 1 ? "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" : "none",
                  minHeight: 180,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute", top: -5, left: 0, width: 9, height: 9, borderRadius: 999,
                    background: m.live ? "var(--c-lime)" : "var(--c-bg)",
                    border: `1.5px solid ${m.live ? "var(--c-lime)" : "var(--c-ink-3)"}`,
                    boxShadow: m.live ? "0 0 14px var(--c-lime)" : "none",
                  }}
                />
                <div className="f-mono mb-3" style={{ fontSize: 10.5, color: m.live ? "var(--c-lime)" : "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {m.when}
                  {m.live && <span style={{ marginLeft: 6 }}>· {t("h_road_live")}</span>}
                </div>
                <div className="t-title" style={{ marginBottom: 6 }}>
                  {m.title}
                </div>
                <div className="t-small">
                  {m.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
