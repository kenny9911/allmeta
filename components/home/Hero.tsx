"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import BrandMark from "./BrandMark";

export default function Hero() {
  const { t, lang } = useApp();

  return (
    <section className="relative flex flex-col items-center text-center" style={{ paddingTop: 80, paddingBottom: 40 }}>
      <div
        className="inline-flex items-center gap-2 mb-7 px-3 py-1 rounded-full border"
        style={{
          background: "var(--c-accent-bg)",
          borderColor: "var(--c-accent-line)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full anim-pulse"
          style={{ background: "var(--c-accent)" }}
        />
        <span
          className="text-[10.5px] font-medium tracking-wider uppercase"
          style={{ color: "var(--c-accent)" }}
        >
          v0.1 · Suite Edition
        </span>
      </div>

      <BrandMark size="xl" style={{ fontSize: "clamp(56px, 8vw, 96px)" }} />

      <div
        className="font-medium text-ink-1"
        style={{ marginTop: 26, fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "0.01em" }}
      >
        {t("brand_tag_zh")}
      </div>
      <div
        className="font-normal text-ink-3 uppercase"
        style={{ marginTop: 6, fontSize: "clamp(11px, 1vw, 13px)", letterSpacing: "0.18em" }}
      >
        {t("brand_tag_en")}
      </div>

      <p
        className="text-ink-2 mx-auto"
        style={{
          maxWidth: 560,
          marginTop: 22,
          fontSize: lang === "zh" ? 14 : 13.5,
          lineHeight: 1.6,
        }}
      >
        {t("hero_description")}
      </p>
    </section>
  );
}
