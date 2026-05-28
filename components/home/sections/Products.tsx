"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

export default function Products({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel>{t("home_products_label")}</SectionLabel>
        <div className="mt-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="h-chunky h-display-md">
            <span style={{ color: "var(--c-lime)" }}>Ontology</span>{" "}
            <span style={{ color: "var(--c-ink-3)" }}>×</span>{" "}
            <span style={{ color: "var(--c-violet)" }}>Operator</span>
          </h2>
          <p className="h-italic" style={{ fontSize: "clamp(15px, 1.4vw, 18px)", maxWidth: 380, textAlign: "right" }}>
            {t("home_products_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProductCard
            tone="lime"
            href="/ontology"
            launchHref={ontologyUrl}
            chip={t("product_ontology_chip")}
            title={t("product_ontology_title")}
            sub={t("product_ontology_subtitle")}
            desc={t("product_ontology_desc")}
            features={t("product_ontology_features")}
            icon={<I.brain />}
            stamp="01"
          />
          <ProductCard
            tone="violet"
            href="/operator"
            launchHref={operatorUrl}
            chip={t("product_operator_chip")}
            title={t("product_operator_title")}
            sub={t("product_operator_subtitle")}
            desc={t("product_operator_desc")}
            features={t("product_operator_features")}
            icon={<I.cpu />}
            stamp="02"
          />
        </div>
      </Container>
    </section>
  );
}

function ProductCard({
  tone,
  href,
  launchHref,
  chip,
  title,
  sub,
  desc,
  features,
  icon,
  stamp,
}: {
  tone: "lime" | "violet";
  href: string;
  launchHref: string;
  chip: string;
  title: string;
  sub: string;
  desc: string;
  features: string;
  icon: React.ReactNode;
  stamp: string;
}) {
  const c: Record<string, string> = { lime: "var(--c-lime)", violet: "var(--c-violet)" };
  return (
    <div
      className="panel card-hover relative flex flex-col overflow-hidden"
      style={{
        padding: 32,
        minHeight: 380,
        boxShadow: `inset 0 3px 0 0 ${c[tone]}`,
      }}
    >
      {/* corner glow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          inset: 0,
          background: `radial-gradient(ellipse 50% 40% at 100% 0%, color-mix(in oklab, ${c[tone]} 18%, transparent), transparent 60%)`,
        }}
      />

      <div className="relative flex items-start justify-between mb-6">
        <div
          className="inline-flex items-center justify-center"
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: `color-mix(in oklab, ${c[tone]} 14%, transparent)`,
            color: c[tone],
            border: `1px solid color-mix(in oklab, ${c[tone]} 35%, transparent)`,
          }}
        >
          {icon}
        </div>
        <div className="f-mono tabular-nums" style={{ fontSize: 12, color: "var(--c-ink-4)", letterSpacing: "0.1em" }}>
          {stamp}
        </div>
      </div>

      <div className="relative">
        <div className="f-mono" style={{ fontSize: 10.5, color: c[tone], letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
          {chip}
        </div>
        <h3 className="f-display" style={{ fontSize: 32, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 10 }}>
          {title}
        </h3>
        <div className="italic-en" style={{ fontSize: 14, color: "var(--c-ink-2)", marginBottom: 16, fontStyle: "italic" }}>
          {sub}
        </div>
        <p style={{ fontSize: 13.5, color: "var(--c-ink-2)", lineHeight: 1.6, marginBottom: 16, maxWidth: 480 }}>
          {desc}
        </p>
        <div className="f-mono" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.04em", marginBottom: 24 }}>
          {features}
        </div>
      </div>

      <div className="relative mt-auto flex items-center gap-3">
        <Link href={href} className="btn-ghost" style={{ borderColor: `color-mix(in oklab, ${c[tone]} 40%, transparent)`, color: c[tone] }}>
          Learn more
          <I.arrow />
        </Link>
        <a href={launchHref} className="btn-ghost">
          Launch <I.arrow />
        </a>
      </div>
    </div>
  );
}
