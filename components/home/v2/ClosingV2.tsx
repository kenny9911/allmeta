"use client";
import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function ClosingV2() {
  return (
    <section className="relative" style={{ paddingTop: 140, paddingBottom: 120 }}>
      <div className="aurora" aria-hidden />
      <div className="edito-container relative">
        <Reveal>
          <div className="eyebrow mb-9" style={{ justifyContent: "center" }}>
            <span>One last thing</span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2
            className="text-center"
            style={{
              fontSize: "clamp(56px, 9vw, 156px)",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontFamily: "var(--f-display)",
              fontWeight: 500,
              color: "var(--c-ink-1)",
            }}
          >
            <span style={{ color: "var(--c-ink-3)" }}>Code is dead.</span>
            <br />
            <span className="h-edito" style={{ fontSize: "1.04em", letterSpacing: "-0.012em", fontWeight: 400 }}>
              Knowledge is King.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p
            className="mx-auto mt-9 text-center"
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "var(--c-ink-2)",
              maxWidth: 620,
              lineHeight: 1.55,
            }}
          >
            The era of selling software is over. We sell{" "}
            <em className="f-serif" style={{ fontStyle: "italic", color: "var(--c-ink-1)" }}>tokens</em>{" "}
            and{" "}
            <em className="f-serif" style={{ fontStyle: "italic", color: "var(--c-ink-1)" }}>APIs</em>{" "}
            — and the enterprises that buy them stop being software companies
            with AI bolt-ons. They become something else.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link href="/ontology" className="btn-edito">
              Start with the Ontology
              <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/operator" className="link-edito" style={{ fontSize: 14 }}>
              See the runtime →
            </Link>
          </div>
        </Reveal>

        {/* signature line */}
        <Reveal delay={4}>
          <p
            className="text-center mt-20 f-mono"
            style={{
              fontSize: 10.5,
              color: "var(--c-ink-4)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            模思 · 故我在 — Cogito ergo sum
          </p>
        </Reveal>
      </div>
    </section>
  );
}
