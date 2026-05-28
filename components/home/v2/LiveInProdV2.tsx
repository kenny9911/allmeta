"use client";
import React from "react";
import LiveOpsMock from "./mocks/LiveOpsMock";
import Reveal from "./Reveal";

export default function LiveInProdV2() {
  return (
    <section className="relative" style={{ paddingTop: 120, paddingBottom: 100 }}>
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">Live · production traffic</div>
              <h2 className="h-sans" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", letterSpacing: "-0.045em", lineHeight: 0.98 }}>
                <span className="h-edito" style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}>Eight agents.</span>{" "}
                One ontology.{" "}
                <span style={{ color: "var(--c-ink-3)" }}>3.5 seconds.</span>
              </h2>
            </div>
            <p className="lg:col-span-5" style={{ fontSize: 14.5, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 460 }}>
              A real resume in. Eight specialized agents on the same shared
              Ontology. No mock data, no slide tricks — end-to-end auto-pilot
              under production traffic at ChinaSoft RAAS.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1} className="relative">
          <LiveOpsMock />

          {/* Pull-out annotations (desktop only) */}
          <Annotation
            top="42%" leftSide
            offsetLeft={-30}
            label="One ontology — every agent reads/writes the same surface"
          />
          <Annotation
            top="14%" leftSide={false}
            offsetRight={-30}
            label="92.0 match · 5 / 5 rules · auto-invite — no human breakpoint"
          />
        </Reveal>

        <Reveal delay={2}>
          <p
            className="mt-10 mx-auto h-edito text-center"
            style={{
              fontSize: "clamp(20px, 2vw, 26px)",
              fontStyle: "italic",
              color: "var(--c-ink-2)",
              maxWidth: 720,
              lineHeight: 1.3,
            }}
          >
            “Not mock data. Not a slide. <span style={{ color: "var(--c-ink-1)" }}>Real agents.</span>”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Annotation({
  top,
  leftSide,
  offsetLeft,
  offsetRight,
  label,
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
      <div
        style={{
          height: 1,
          width: 70,
          background:
            "linear-gradient(90deg, var(--c-lime), color-mix(in oklab, var(--c-lime) 0%, transparent))",
        }}
      />
      <p
        className="f-mono"
        style={{
          fontSize: 11,
          color: "var(--c-ink-2)",
          letterSpacing: "0.02em",
          lineHeight: 1.5,
          textAlign: leftSide ? "left" : "right",
        }}
      >
        {label}
      </p>
    </div>
  );
}
