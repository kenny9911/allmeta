"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Eyebrow, Reveal, Em } from "@/components/editorial/parts";

export default function WhatItIs() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>{t("onto_whatis_label")}</Eyebrow></Reveal>
            <Reveal delay={1}>
              <h2 className="t-h2 mt-6">
                <span style={{ color: "var(--c-ink-3)" }}>{t("onto_whatis_title_1")}</span>
                <br />
                {t("onto_whatis_title_2")}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={2}>
              <p className="t-lead">
                {t("onto_whatis_lead")}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Static vs Actionable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <Reveal delay={1}>
            <div
              className="hairline relative"
              style={{ padding: 30, minHeight: 200, opacity: 0.92 }}
            >
              <div className="f-mono mb-4" style={{ fontSize: 11, color: "var(--c-ink-4)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {t("onto_whatis_static_label")}
              </div>
              <p className="t-body" style={{ color: "var(--c-ink-3)" }}>
                {t("onto_whatis_static_desc")}
              </p>
              {/* faint, inert dot grid to imply "passive map" */}
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  inset: 0,
                  backgroundImage: "radial-gradient(color-mix(in oklab, var(--c-ink-4) 22%, transparent) 0.6px, transparent 0.6px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.3,
                  borderRadius: 16,
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div
              className="hairline glow-ring relative overflow-hidden"
              style={{
                padding: 30,
                minHeight: 200,
                boxShadow: "0 0 60px -16px color-mix(in oklab, var(--c-lime) 45%, transparent)",
              }}
            >
              <div className="f-mono mb-4" style={{ fontSize: 11, color: "var(--c-lime-ink)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {t("onto_whatis_actionable_label")}
              </div>
              <p className="t-body" style={{ color: "var(--c-ink-1)" }}>
                {t("onto_whatis_actionable_desc")}
              </p>
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  inset: 0,
                  background: "radial-gradient(ellipse 55% 50% at 100% 100%, color-mix(in oklab, var(--c-lime) 14%, transparent), transparent 60%)",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* Dual nature statement */}
        <Reveal delay={2}>
          <p className="t-h3 mt-12" style={{ color: "var(--c-ink-2)", maxWidth: 920 }}>
            {t("onto_whatis_dual_lead")}{" "}
            <span style={{ color: "var(--c-violet)" }}>{t("onto_whatis_dual_a")}</span>{" "}
            {t("onto_whatis_dual_mid")}{" "}
            <span style={{ color: "var(--c-lime-ink)" }}>{t("onto_whatis_dual_b")}</span>{" "}
            {t("onto_whatis_dual_end")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
