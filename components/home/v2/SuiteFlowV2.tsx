"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { PRODUCTS, TONE_VAR, TONE_VAR_INK, pk } from "@/lib/products";
import Reveal from "./Reveal";

/** The value chain, read left to right: six products, each one's output
 *  the next one's input. This is the "what is the suite" answer — the
 *  card grid below it is the "how do I get in" answer.
 *
 *  Nodes anchor to their card in ProductSuiteV2 rather than launching
 *  the app, so the diagram stays a map and never navigates you off-site
 *  by accident. */
export default function SuiteFlowV2() {
  const { t } = useApp();

  /** Gradient across all six tones — the rail reads as one continuous
   *  path rather than six disconnected dots. */
  const rail = `linear-gradient(90deg, ${PRODUCTS.map((p) => TONE_VAR[p.tone]).join(", ")})`;

  return (
    <section className="section-tight" id="suite">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("suite_flow_eyebrow")}</div>
              <h2 className="t-h2">
                {t("suite_flow_t1")} {t("suite_flow_t2")}
              </h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              {t("suite_flow_sub")}
            </p>
          </div>
        </Reveal>

        {/* ── Desktop: horizontal rail ─────────────────────────────── */}
        <Reveal delay={1}>
          <div className="hidden lg:block">
            {/* start / end caps — what goes in, what comes out */}
            <div className="flex items-center justify-between mb-4">
              <Cap label={t("suite_flow_start")} side="start" />
              <Cap label={t("suite_flow_end")} side="end" />
            </div>

            {/* the rail itself */}
            <div className="relative" style={{ height: 20 }}>
              <div
                aria-hidden
                className="absolute"
                style={{
                  left: `${100 / 12}%`,
                  right: `${100 / 12}%`,
                  top: "50%",
                  height: 1,
                  background: rail,
                  opacity: 0.6,
                }}
              />
              <div className="grid grid-cols-6 h-full relative">
                {PRODUCTS.map((p) => (
                  <div key={p.id} className="flex items-center justify-center">
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: 999,
                        background: TONE_VAR[p.tone],
                        boxShadow: `0 0 12px ${TONE_VAR[p.tone]}`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* node labels */}
            <div className="grid grid-cols-6 mt-5">
              {PRODUCTS.map((p) => (
                <a
                  key={p.id}
                  href={`#p-${p.id}`}
                  className="flex flex-col items-center text-center px-3 no-underline group"
                >
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 10.5,
                      color: TONE_VAR_INK[p.tone],
                      letterSpacing: "0.16em",
                    }}
                  >
                    {String(p.stage).padStart(2, "0")}
                  </span>
                  <span
                    className="t-title mt-1.5"
                    style={{ fontSize: 15.5, transition: "color 200ms ease" }}
                  >
                    {p.name}
                  </span>
                  <span
                    style={{
                      fontSize: 12.5,
                      color: "var(--c-ink-3)",
                      marginTop: 3,
                    }}
                  >
                    {t(pk(p.id, "role"))}
                  </span>
                  <span
                    className="f-mono mt-3"
                    style={{
                      fontSize: 10,
                      color: "var(--c-ink-4)",
                      letterSpacing: "0.06em",
                      lineHeight: 1.5,
                      maxWidth: 150,
                    }}
                  >
                    → {t(pk(p.id, "out"))}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Mobile / tablet: vertical rail ───────────────────────── */}
        <div className="lg:hidden">
          <MobileCap label={t("suite_flow_start")} />
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}>
              <a
                href={`#p-${p.id}`}
                className="relative flex gap-4 no-underline"
                style={{ paddingBottom: 22 }}
              >
                {/* connector segment — omitted on the last node */}
                {i < PRODUCTS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute"
                    style={{
                      left: 4,
                      top: 14,
                      bottom: 0,
                      width: 1,
                      background: `linear-gradient(180deg, ${TONE_VAR[p.tone]}, ${
                        TONE_VAR[PRODUCTS[i + 1].tone]
                      })`,
                      opacity: 0.5,
                    }}
                  />
                )}
                <span
                  className="shrink-0"
                  style={{
                    width: 9,
                    height: 9,
                    marginTop: 5,
                    borderRadius: 999,
                    background: TONE_VAR[p.tone],
                    boxShadow: `0 0 10px ${TONE_VAR[p.tone]}`,
                  }}
                />
                <span className="flex flex-col">
                  <span className="flex items-baseline gap-2">
                    <span
                      className="f-mono"
                      style={{ fontSize: 10.5, color: TONE_VAR_INK[p.tone], letterSpacing: "0.14em" }}
                    >
                      {String(p.stage).padStart(2, "0")}
                    </span>
                    <span className="t-title" style={{ fontSize: 16 }}>
                      {p.name}
                    </span>
                  </span>
                  <span style={{ fontSize: 12.5, color: "var(--c-ink-3)", marginTop: 2 }}>
                    {t(pk(p.id, "role"))}
                  </span>
                  <span
                    className="f-mono"
                    style={{
                      fontSize: 10,
                      color: "var(--c-ink-4)",
                      letterSpacing: "0.06em",
                      marginTop: 6,
                    }}
                  >
                    → {t(pk(p.id, "out"))}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
          <MobileCap label={t("suite_flow_end")} />
        </div>
      </div>
    </section>
  );
}

/** Bracketed end-cap on the desktop rail. */
function Cap({ label, side }: { label: string; side: "start" | "end" }) {
  return (
    <span
      className="f-mono inline-flex items-center gap-2"
      style={{
        fontSize: 10.5,
        color: "var(--c-ink-4)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {side === "end" && <span aria-hidden>→</span>}
      {label}
      {side === "start" && <span aria-hidden>→</span>}
    </span>
  );
}

function MobileCap({ label }: { label: string }) {
  return (
    <div
      className="f-mono"
      style={{
        fontSize: 10.5,
        color: "var(--c-ink-4)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        paddingBottom: 18,
      }}
    >
      {label}
    </div>
  );
}
