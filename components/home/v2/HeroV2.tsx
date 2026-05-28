"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import OntologyStudioMock from "./mocks/OntologyStudioMock";
import Reveal from "./Reveal";

export default function HeroV2() {
  const { t, lang } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 56, paddingBottom: 72 }}>
      <div className="aurora" aria-hidden />

      <div className="edito-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — typography */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow mb-7">
                <span>v0.5 · Live</span>
                <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 6px var(--c-lime)" }} />
                <span>Shanghai West Bund · Huawei Cloud Inspire</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1
                className="h-sans"
                style={{
                  fontSize: "clamp(56px, 9vw, 132px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.045em",
                }}
              >
                Beyond&nbsp;ERP.<br />
                <span className="h-sans">Make Enterprise </span>
                <span
                  className="h-edito"
                  style={{
                    fontSize: "1.06em",
                    color: "var(--c-ink-1)",
                  }}
                >
                  AI-Native.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p
                style={{
                  marginTop: 28,
                  maxWidth: 560,
                  fontSize: lang === "zh" ? 17 : 17,
                  lineHeight: 1.55,
                  color: "var(--c-ink-2)",
                  fontWeight: 400,
                }}
              >
                allm²eta is the Actionable Ontology platform — the layer between
                LLMs that understand and agents that execute. We turn business
                objects, rules and actions into an{" "}
                <em className="f-serif" style={{ color: "var(--c-ink-1)", fontStyle: "italic" }}>
                  Enterprise Operation Surface
                </em>{" "}
                that agents can natively call.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link href="/ontology" className="btn-edito">
                  Explore the platform
                  <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="/technology" className="link-edito" style={{ fontSize: 14 }}>
                  Read the architecture
                </Link>
              </div>
            </Reveal>

            {/* Tiny metric line — restrained, not chunky */}
            <Reveal delay={4}>
              <div
                className="mt-14 flex flex-wrap items-baseline gap-8"
                style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)", paddingTop: 22 }}
              >
                <MetricInline value="8" label="agents in parallel" />
                <MetricInline value="3.5s" label="end-to-end" />
                <MetricInline value="0" label="human breaks" />
                <span className="ml-auto f-mono" style={{ fontSize: 11, color: "var(--c-ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Live · ChinaSoft RAAS
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — product mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={2} className="relative">
              <OntologyStudioMock />
              <div
                className="absolute hidden lg:block f-mono"
                style={{
                  top: -14,
                  right: 14,
                  fontSize: 10.5,
                  letterSpacing: "0.16em",
                  color: "var(--c-ink-4)",
                  textTransform: "uppercase",
                }}
              >
                Ontology Studio
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricInline({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2.5">
      <span
        className="f-display tabular-nums"
        style={{ fontWeight: 500, fontSize: 26, color: "var(--c-ink-1)", letterSpacing: "-0.03em", lineHeight: 1 }}
      >
        {value}
      </span>
      <span style={{ fontSize: 12.5, color: "var(--c-ink-3)" }}>{label}</span>
    </div>
  );
}
