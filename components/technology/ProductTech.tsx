"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal } from "@/components/editorial/parts";
import { PRODUCTS, TONE_VAR, TONE_VAR_INK, pk } from "@/lib/products";

/** The six products, read as engineering rather than as a catalogue.
 *
 *  The suite page already sells them; this page has to answer a different
 *  question — what technical problem does each one actually solve, how is it
 *  put together, and what does that buy over the generic approach. Three
 *  fixed rows per card, same order every time, so the six are comparable by
 *  scanning down a column rather than reading six paragraphs. */
export default function ProductTech() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_prod_label")}
          title={
            <>
              <span style={{ color: "var(--c-ink-3)" }}>{t("tech_prod_lead")}</span>
              <span style={{ color: "var(--c-ink-1)" }}>{t("tech_prod_main")}</span>
            </>
          }
          desc={t("tech_prod_desc")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "var(--c-line)" }}>
          {PRODUCTS.map((p, i) => {
            const tone = TONE_VAR[p.tone];        // fills: rail, stage index
            const toneInk = TONE_VAR_INK[p.tone]; // text: lime needs the deeper ink
            return (
              <Reveal key={p.id} delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}>
                <div style={{ background: "var(--c-bg)", padding: "26px 28px", height: "100%", borderLeft: `2px solid ${tone}` }}>
                  <div className="flex items-baseline gap-3">
                    <span className="f-mono tabular-nums" style={{ fontSize: 11, color: toneInk, letterSpacing: "0.1em" }}>
                      {String(p.stage).padStart(2, "0")}
                    </span>
                    <span className="t-h3">{p.name}</span>
                    <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {t(pk(p.id, "role"))}
                    </span>
                  </div>

                  {/* the pipeline contract this product honours */}
                  <div className="f-mono mt-3" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.02em" }}>
                    {t(pk(p.id, "in"))} <span style={{ color: toneInk }}>→</span> {t(pk(p.id, "out"))}
                  </div>

                  <dl className="mt-5" style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 16, rowGap: 10 }}>
                    {(["t", "a", "v"] as const).map((slot) => (
                      <React.Fragment key={slot}>
                        <dt className="f-mono" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase", paddingTop: 3, whiteSpace: "nowrap" }}>
                          {t(`tech_prod_${slot}`)}
                        </dt>
                        <dd className="t-small" style={{ margin: 0, color: "var(--c-ink-2)" }}>
                          {t(`tech_p_${p.id}_${slot === "t" ? "tech" : slot === "a" ? "arch" : "adv"}`)}
                        </dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
