"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import LiveOpsMock from "./mocks/LiveOpsMock";
import Reveal from "./Reveal";

export default function LiveInProdV2() {
  const { t } = useApp();
  return (
    <section className="section relative">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("h_live_eyebrow")}</div>
              <h2 className="t-h2">
                <Rich text={t("h_live_title")} />
              </h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              {t("h_live_sub")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1} className="relative">
          <LiveOpsMock />
          <Annotation top="42%" leftSide offsetLeft={-30} label={t("h_live_anno1")} />
          <Annotation top="14%" leftSide={false} offsetRight={-30} label={t("h_live_anno2")} />
        </Reveal>

        <Reveal delay={2}>
          <p
            className="t-h3 mt-10 mx-auto text-center"
            style={{ color: "var(--c-ink-2)", maxWidth: 720 }}
          >
            <Rich text={t("h_live_punch")} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Annotation({
  top, leftSide, offsetLeft, offsetRight, label,
}: {
  top: string;
  leftSide: boolean;
  offsetLeft?: number;
  offsetRight?: number;
  label: string;
}) {
  return (
    <div
      className="hidden xl:flex absolute items-center gap-3"
      style={{
        top,
        left: leftSide ? `${offsetLeft || 0}px` : undefined,
        right: !leftSide ? `${offsetRight || 0}px` : undefined,
        transform: "translate(0, -50%)",
        flexDirection: leftSide ? "row" : "row-reverse",
        maxWidth: 240,
      }}
    >
      <span className="annotation-dot" />
      <div style={{ height: 1, width: 70, background: "linear-gradient(90deg, var(--c-lime), color-mix(in oklab, var(--c-lime) 0%, transparent))" }} />
      <p className="f-mono" style={{ fontSize: 11, color: "var(--c-ink-2)", letterSpacing: "0.02em", lineHeight: 1.5, textAlign: leftSide ? "left" : "right" }}>
        {label}
      </p>
    </div>
  );
}
