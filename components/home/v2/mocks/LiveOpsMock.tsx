"use client";
import React from "react";

const agents = [
  { id: "01", name: "MatchResume",   r: "Candidate.skills",  w: "Match.score",       state: "live" },
  { id: "02", name: "RuleChecker",   r: "Rule[5] · Cand.",   w: "Eval.result",       state: "live" },
  { id: "03", name: "ScoreEngine",   r: "Match · Rule",      w: "Candidate.fit",     state: "live" },
  { id: "04", name: "DegreeVerify",  r: "Candidate.edu",     w: "Candidate.degreeOK", state: "live" },
  { id: "05", name: "ExperienceTag", r: "Candidate.exp",     w: "Candidate.tags",    state: "live" },
  { id: "06", name: "SkillExtract",  r: "Resume.raw",        w: "Candidate.skills",  state: "live" },
  { id: "07", name: "InterviewBot",  r: "Candidate · Slot",  w: "Interview.invite",  state: "pending" },
  { id: "08", name: "OfferDrafter",  r: "Candidate · Job",   w: "Offer.draft",       state: "idle" },
];

const trace = [
  { ts: "14:18:02", line: "resume.uploaded",       d: "+1.2s" },
  { ts: "14:18:04", line: "candidate.parsed",      d: "+0.4s" },
  { ts: "14:18:05", line: "rules evaluated (5/5)", d: "+0.8s" },
  { ts: "14:18:06", line: "match.score = 92.0",    d: "+0.6s" },
  { ts: "14:18:07", line: "auto-invite sent",      d: "+0.3s" },
  { ts: "14:18:07", line: "interview proposed",    d: "+0.2s" },
];

export default function LiveOpsMock() {
  return (
    <div
      className="hairline relative overflow-hidden"
      style={{
        boxShadow:
          "0 60px 120px -40px rgba(0,0,0,0.65), 0 0 0 1px color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
      }}
    >
      {/* Window chrome */}
      <div className="term-chrome">
        <span /><span /><span />
        <div className="ml-2 f-mono" style={{ fontSize: 11.5, color: "var(--c-ink-3)" }}>
          operator.allmeta.ai / candidate-domain / live-ops
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-3)" }}>ON-PILOT</span>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 8px var(--c-lime)" }} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
        {/* Left main */}
        <div style={{ padding: "26px 28px", borderRight: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" }}>
          {/* Top KPI row */}
          <div className="grid grid-cols-4 gap-3 mb-7">
            {[
              { v: "8", l: "Agents",   c: "var(--c-lime)" },
              { v: "1", l: "Ontology", c: "var(--c-violet)" },
              { v: "3.5s", l: "Wall-clock", c: "var(--c-amber)" },
              { v: "0", l: "Human Breaks", c: "var(--c-cyan)" },
            ].map((k) => (
              <div key={k.l} className="flex flex-col gap-1">
                <div
                  className="f-display tabular-nums"
                  style={{
                    fontWeight: 600,
                    fontSize: 32,
                    color: k.c,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {k.v}
                </div>
                <div className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {k.l}
                </div>
              </div>
            ))}
          </div>

          {/* Agent grid */}
          <div className="f-mono mb-3" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Agent fleet · live
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 overflow-hidden"
            style={{ border: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)", borderRadius: 10 }}
          >
            {agents.map((a, i) => {
              const sc =
                a.state === "live"
                  ? "var(--c-amber)"
                  : a.state === "pending"
                  ? "var(--c-cyan)"
                  : "var(--c-ink-4)";
              const row = Math.floor(i / 4), col = i % 4;
              return (
                <div
                  key={a.id}
                  style={{
                    background: "color-mix(in oklab, var(--c-surface) 60%, transparent)",
                    padding: "14px 14px",
                    borderRight: col < 3 ? "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" : "none",
                    borderBottom: row < 1 ? "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="f-mono"
                      style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.08em" }}
                    >
                      {a.id}
                    </span>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: 999,
                        background: sc,
                        boxShadow: a.state === "live" ? `0 0 8px ${sc}` : undefined,
                      }}
                    />
                  </div>
                  <div className="f-display" style={{ fontSize: 13, fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.01em" }}>
                    {a.name}
                  </div>
                  <div className="f-mono mt-1" style={{ fontSize: 10, color: "var(--c-ink-3)", lineHeight: 1.55 }}>
                    <div><span style={{ color: "var(--c-cyan)" }}>R</span> {a.r}</div>
                    <div><span style={{ color: "var(--c-lime-ink)" }}>W</span> {a.w}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right rail — candidate detail + trace */}
        <aside style={{ padding: "26px 22px" }}>
          <div className="f-mono mb-3" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Candidate · Matched
          </div>
          <div className="f-display" style={{ fontSize: 24, fontWeight: 600, color: "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 2 }}>
            Z. 同学
          </div>
          <div className="f-mono mb-5" style={{ fontSize: 11, color: "var(--c-ink-3)" }}>
            Senior Backend Engineer · 7y
          </div>

          <div className="space-y-3 mb-6">
            <Row label="Match score" value={<span style={{ color: "var(--c-lime-ink)", fontWeight: 600, fontFamily: "var(--f-mono)" }}>92.0</span>} />
            <Row label="Rule check" value={<span style={{ color: "var(--c-lime-ink)", fontFamily: "var(--f-mono)", fontSize: 11.5 }}>✓ 5 / 5</span>} />
            <Row label="Skill overlap" value={<span style={{ color: "var(--c-ink-1)", fontFamily: "var(--f-mono)", fontSize: 11 }}>Go · Kafka · K8s</span>} />
            <Row label="Next action" value={<span style={{ color: "var(--c-amber)", fontFamily: "var(--f-mono)", fontWeight: 600, fontSize: 11.5 }}>auto-invite</span>} />
          </div>

          <div className="rule-thin pt-4">
            <div className="f-mono mb-3" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Trace
            </div>
            <div className="space-y-1.5">
              {trace.map((t, i) => (
                <div key={i} className="grid grid-cols-[68px_1fr_auto] gap-2" style={{ fontFamily: "var(--f-mono)", fontSize: 10.5, lineHeight: 1.55 }}>
                  <span style={{ color: "var(--c-ink-4)" }}>{t.ts}</span>
                  <span style={{ color: "var(--c-ink-1)" }}>{t.line}</span>
                  <span style={{ color: "var(--c-lime-ink)" }}>{t.d}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* corner glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none mock-glow"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 30% at 0% 100%, color-mix(in oklab, var(--c-lime) 12%, transparent), transparent 65%), radial-gradient(ellipse 30% 25% at 100% 0%, color-mix(in oklab, var(--c-violet) 10%, transparent), transparent 65%)",
        }}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
      {value}
    </div>
  );
}
