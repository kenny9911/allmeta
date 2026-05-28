"use client";
import React from "react";
import clsx from "clsx";

/** "ACT 01 · OPENING" deck-style section label.
 *  Mono uppercase + lime bar at the left, optional kicker on the right. */
export default function SectionLabel({
  children,
  kicker,
  tone = "lime",
  className,
}: {
  children: React.ReactNode;
  kicker?: React.ReactNode;
  tone?: "lime" | "violet" | "amber" | "cyan" | "coral";
  className?: string;
}) {
  const barColor: Record<string, string> = {
    lime: "var(--c-lime)",
    violet: "var(--c-violet)",
    amber: "var(--c-amber)",
    cyan: "var(--c-cyan)",
    coral: "var(--c-coral)",
  };
  return (
    <div className={clsx("flex items-center justify-between gap-3 w-full", className)}>
      <div className="inline-flex items-center gap-2.5 f-mono uppercase tabular-nums" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--c-ink-3)" }}>
        <span style={{ width: 22, height: 4, background: barColor[tone], borderRadius: 1, display: "inline-block" }} />
        <span>{children}</span>
      </div>
      {kicker && (
        <div className="f-mono uppercase" style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "var(--c-ink-4)" }}>
          {kicker}
        </div>
      )}
    </div>
  );
}
