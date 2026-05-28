"use client";
import React from "react";

/** Big chunky stat — like the "8 / 3.5s / 0" demo numbers. */
export default function Stat({
  value,
  label,
  caption,
  tone = "lime",
}: {
  value: React.ReactNode;
  label?: React.ReactNode;
  caption?: React.ReactNode;
  tone?: "lime" | "violet" | "amber" | "cyan" | "coral" | "ink";
}) {
  const color: Record<string, string> = {
    lime: "var(--c-lime)",
    violet: "var(--c-violet)",
    amber: "var(--c-amber)",
    cyan: "var(--c-cyan)",
    coral: "var(--c-coral)",
    ink: "var(--c-ink-1)",
  };
  return (
    <div className="flex flex-col gap-2">
      <div
        className="f-display tabular-nums"
        style={{
          fontWeight: 700,
          fontSize: "clamp(56px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: color[tone],
          textShadow: tone !== "ink" ? `0 0 36px color-mix(in oklab, ${color[tone]} 35%, transparent)` : undefined,
        }}
      >
        {value}
      </div>
      {label && (
        <div
          className="f-display"
          style={{ fontWeight: 600, fontSize: 18, color: "var(--c-ink-1)", letterSpacing: "-0.005em" }}
        >
          {label}
        </div>
      )}
      {caption && (
        <div className="f-mono" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--c-ink-3)" }}>
          {caption}
        </div>
      )}
    </div>
  );
}
