"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

type AgentTile = {
  id: string;
  name: string;
  read: string;
  write: string;
  status: "live" | "idle" | "pending";
};

const tiles: AgentTile[] = [
  { id: "01", name: "MatchResume", read: "Candidate.skills", write: "Match.score", status: "live" },
  { id: "02", name: "RuleChecker", read: "Rule[5] · Candidate", write: "Eval.result", status: "live" },
  { id: "03", name: "ScoreEngine", read: "Match · Rule", write: "Candidate.fit", status: "live" },
  { id: "04", name: "DegreeVerify", read: "Candidate.edu", write: "Candidate.degreeOK", status: "live" },
  { id: "05", name: "ExperienceTag", read: "Candidate.exp", write: "Candidate.tags", status: "live" },
  { id: "06", name: "SkillExtract", read: "Resume.raw", write: "Candidate.skills", status: "live" },
  { id: "07", name: "InterviewBot", read: "Candidate · Slot", write: "Interview.invite", status: "pending" },
  { id: "08", name: "OfferDrafter", read: "Candidate · Job", write: "Offer.draft", status: "idle" },
];

export default function OntologyInMotion() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container size="wide">
        <SectionLabel tone="lime">{t("onto_demo_label")}</SectionLabel>

        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">
            <span style={{ color: "var(--c-lime)" }}>8</span> Agents{" "}
            <span style={{ color: "var(--c-ink-3)" }}>·</span>{" "}
            <span style={{ color: "var(--c-violet)" }}>1</span> Ontology
          </h2>
        </div>
        <p className="italic-en mb-10" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("onto_demo_subtitle")}
        </p>

        <div className="panel overflow-hidden" style={{ boxShadow: "inset 0 3px 0 0 var(--c-lime)" }}>
          {/* terminal-style header bar */}
          <div
            className="flex items-center justify-between"
            style={{ padding: "14px 20px", borderBottom: "1px solid var(--c-line)", background: "color-mix(in oklab, var(--c-bg) 50%, transparent)" }}
          >
            <div className="flex items-center gap-2">
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "var(--c-coral)" }} />
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "var(--c-amber)" }} />
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "var(--c-lime)" }} />
              <span className="f-mono ml-4" style={{ fontSize: 12, color: "var(--c-ink-3)" }}>
                ontology.allmeta.ai / candidate-domain / live-ops
              </span>
            </div>
            <span className="chip-lime"><span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 8px var(--c-lime)" }} /> LIVE</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--c-line)" }}>
            {tiles.map((tile) => (
              <AgentTileView key={tile.id} {...tile} />
            ))}
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "var(--c-line)", borderTop: "1px solid var(--c-line)" }}
          >
            <StatCell value="1" caption={t("onto_demo_stat1")} tone="lime" />
            <StatCell value="1.2K" caption={t("onto_demo_stat2")} tone="amber" />
            <StatCell value="1.2s" caption={t("onto_demo_stat3")} tone="cyan" />
            <StatCell value="12.4K" caption={t("onto_demo_stat4")} tone="violet" />
          </div>
        </div>

        <p className="mt-6 text-center f-mono italic" style={{ fontSize: 12.5, color: "var(--c-ink-3)", letterSpacing: "0.03em" }}>
          8 Agents 操作的不是数据库 — 是同一个 Ontology。监控的是它的读写, 不是代码栈。
        </p>
      </Container>
    </section>
  );
}

function AgentTileView({ id, name, read, write, status }: AgentTile) {
  const statusColor = status === "live" ? "var(--c-amber)" : status === "pending" ? "var(--c-cyan)" : "var(--c-ink-4)";
  return (
    <div style={{ background: "var(--c-surface)", padding: "16px 18px" }}>
      <div className="flex items-center justify-between mb-3">
        <span style={{ width: 8, height: 8, borderRadius: 999, background: statusColor, boxShadow: status === "live" ? `0 0 8px ${statusColor}` : undefined }} />
        <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)" }}>{id}</span>
      </div>
      <div className="f-display" style={{ fontSize: 15, fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.01em", marginBottom: 10 }}>
        {name}
      </div>
      <div className="f-mono" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.02em" }}>
        <div><span style={{ color: "var(--c-cyan)", fontWeight: 600 }}>R</span> {read}</div>
        <div className="mt-1"><span style={{ color: "var(--c-lime)", fontWeight: 600 }}>W</span> {write}</div>
      </div>
    </div>
  );
}

function StatCell({ value, caption, tone }: { value: string; caption: string; tone: "lime" | "amber" | "cyan" | "violet" }) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", amber: "var(--c-amber)", cyan: "var(--c-cyan)", violet: "var(--c-violet)"
  };
  return (
    <div style={{ background: "var(--c-surface)", padding: "20px 18px", textAlign: "left" }}>
      <div className="f-display tabular-nums" style={{ fontSize: 36, fontWeight: 700, color: c[tone], lineHeight: 1, letterSpacing: "-0.02em" }}>
        {value}
      </div>
      <div className="f-mono mt-2" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {caption}
      </div>
    </div>
  );
}
