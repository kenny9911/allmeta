"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { PRODUCTS, TONE_VAR, TONE_VAR_INK, pk, type LaunchMap, type Product } from "@/lib/products";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";

/** Every product in the suite, in pipeline order, each with a direct
 *  launch link to the running app. Uniform cards on purpose — the point
 *  of this section is comparability at a glance, so the two cores are
 *  marked with a badge rather than given a bigger tile. */
export default function ProductSuiteV2({ launch }: { launch: LaunchMap }) {
  const { t } = useApp();

  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("suite_grid_eyebrow")}</div>
              <h2 className="t-h2">
                {t("suite_grid_t1")} {t("suite_grid_t2")}
              </h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              {t("suite_grid_sub")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="flex"
            >
              <ProductCard product={p} launch={launch} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p, launch }: { product: Product; launch: LaunchMap }) {
  const { t } = useApp();
  const tone = TONE_VAR[p.tone];       // fills: borders, tints, rails
  const toneInk = TONE_VAR_INK[p.tone]; // text: lime differs on a light canvas
  const url = launch[p.id] ?? "#";

  return (
    <article
      id={`p-${p.id}`}
      className="hairline card-hover flex flex-col w-full"
      style={{
        padding: "26px 26px 24px",
        borderTop: `2px solid ${tone}`,
        scrollMarginTop: 96,
      }}
    >
      {/* stage · role · core badge */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-baseline gap-2.5">
          <span
            className="f-mono"
            style={{ fontSize: 10.5, color: toneInk, letterSpacing: "0.16em" }}
          >
            {String(p.stage).padStart(2, "0")}
          </span>
          <span
            className="f-mono"
            style={{
              fontSize: 10.5,
              color: "var(--c-ink-4)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {t(pk(p.id, "role"))}
          </span>
        </span>
        {p.core && (
          <span
            className="f-mono"
            style={{
              fontSize: 9.5,
              color: toneInk,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              border: `1px solid color-mix(in oklab, ${tone} 45%, transparent)`,
              background: `color-mix(in oklab, ${tone} 12%, transparent)`,
              borderRadius: 999,
              padding: "3px 9px",
              whiteSpace: "nowrap",
            }}
          >
            {t("suite_core")}
          </span>
        )}
      </div>

      <h3 className="t-h3" style={{ marginBottom: 8 }}>
        {p.name}
      </h3>

      <div className="t-title" style={{ color: "var(--c-ink-2)", marginBottom: 14 }}>
        <Rich text={t(pk(p.id, "tag"))} emColor={toneInk} />
      </div>

      <p className="t-body" style={{ color: "var(--c-ink-3)", marginBottom: 18 }}>
        {t(pk(p.id, "body"))}
      </p>

      {/* capability chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {(["c1", "c2", "c3"] as const).map((c) => (
          <span
            key={c}
            style={{
              fontSize: 11.5,
              color: "var(--c-ink-3)",
              border: "1px solid color-mix(in oklab, var(--c-ink-4) 26%, transparent)",
              borderRadius: 999,
              padding: "4px 10px",
              whiteSpace: "nowrap",
            }}
          >
            {t(pk(p.id, c))}
          </span>
        ))}
      </div>

      {/* named modules — Ontology Studio only */}
      {p.modules && (
        <div
          className="mb-5"
          style={{
            borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)",
            paddingTop: 14,
          }}
        >
          <div
            className="f-mono mb-2.5"
            style={{
              fontSize: 10,
              color: "var(--c-ink-4)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {t("suite_modules")}
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {p.modules.map((m) => {
              const mUrl = launch[`${p.id}.${m.key}`];
              const label = t(m.key);
              return mUrl ? (
                // Modules that ship their own app get their own launch link.
                <a
                  key={m.key}
                  href={mUrl}
                  className="no-underline"
                  style={{ fontSize: 12, color: toneInk, borderBottom: `1px solid color-mix(in oklab, ${tone} 40%, transparent)` }}
                >
                  {label} ↗
                </a>
              ) : (
                <span key={m.key} style={{ fontSize: 12, color: "var(--c-ink-3)" }}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* actions — direct launch is the primary affordance */}
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
        <a
          href={url}
          className="inline-flex items-center gap-2 no-underline"
          style={{
            fontFamily: "var(--f-sans)",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "-0.005em",
            color: toneInk,
            border: `1px solid color-mix(in oklab, ${tone} 45%, transparent)`,
            background: `color-mix(in oklab, ${tone} 10%, transparent)`,
            borderRadius: 999,
            padding: "9px 16px",
            transition: "background 180ms ease, border-color 180ms ease",
          }}
        >
          {t("suite_launch")}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
        {p.href && (
          <Link href={p.href} className="link-edito" style={{ fontSize: 13 }}>
            {t("suite_readmore")} →
          </Link>
        )}
      </div>
    </article>
  );
}
