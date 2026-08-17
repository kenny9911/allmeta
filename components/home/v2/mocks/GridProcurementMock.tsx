"use client";
import React from "react";
import { useApp } from "@/lib/i18n";

/** Faux product UI panel — a power-utility procurement run, live.
 *
 *  The hero's job is to show the thesis rather than assert it: an ontology
 *  on the left (the domain model), an agent workflow on the right (the run),
 *  and a moving token proving the two are the same system. Every step lights
 *  the exact object types it reads and writes, so by the last step the whole
 *  graph is lit — that *is* the "actionable ontology" claim, drawn.
 *
 *  Domain accuracy is load-bearing here, because a materials manager is the
 *  audience. Three things are deliberate and should not be "simplified":
 *   1. The award (定标) is a HUMAN node, never an agent. Award is a legally
 *      required collective decision under 三重一大; an agent shown awarding a
 *      tender reads as a compliance violation, not as automation.
 *   2. 中标候选人公示 stays in the chain as a timed wait. The publicity window
 *      is statutory; a flow going 评标 → 合同 tells a buyer we've never seen
 *      a real run.
 *   3. Every identifier is synthetic and the panel says so (示例数据). No real
 *      supplier, substation, utility mark or tender number appears.
 *
 *  Strings are local rather than in lib/i18n: this is illustrative product
 *  chrome, not site copy, and it would otherwise add ~50 keys to both
 *  dictionaries. It still switches with `lang`. */

type NodeId = "demand" | "material" | "batch" | "lot" | "supplier" | "contract";

const NODES: {
  id: NodeId;
  type: string;
  zh: string;
  en: string;
  x: number;
  y: number;
  w: number;
}[] = [
  { id: "demand", type: "DemandPlan", zh: "需求计划", en: "Demand Plan", x: 2, y: 6, w: 126 },
  { id: "material", type: "MaterialMaster", zh: "物料主数据", en: "Material Master", x: 150, y: 6, w: 148 },
  { id: "batch", type: "ProcurementBatch", zh: "采购批次", en: "Procurement Batch", x: 72, y: 118, w: 156 },
  { id: "lot", type: "TenderLot", zh: "招标标包", en: "Tender Lot", x: 2, y: 230, w: 118 },
  { id: "supplier", type: "QualifiedSupplier", zh: "合格供应商", en: "Qualified Supplier", x: 160, y: 230, w: 138 },
  { id: "contract", type: "PurchaseContract", zh: "采购合同", en: "Purchase Contract", x: 72, y: 344, w: 156 },
];

const NODE_H = 40;

/** Static lattice, drawn once and dimmed; the running step redraws its own
 *  edge over the top. The viewBox is deliberately portrait (300×390) to match
 *  the column it sits in — a landscape one letterboxes and strands the graph. */
const EDGES: { d: string; label?: { zh: string; en: string; x: number; y: number } }[] = [
  { d: "M 65 46 C 65 82, 88 86, 110 118", label: { zh: "提报", en: "submits", x: 14, y: 90 } },
  { d: "M 224 46 C 224 82, 208 88, 190 118", label: { zh: "编码", en: "coded-by", x: 234, y: 90 } },
  { d: "M 110 158 C 88 190, 76 202, 61 230", label: { zh: "分包", en: "splits", x: 14, y: 202 } },
  { d: "M 190 158 C 212 190, 218 202, 229 230", label: { zh: "入围", en: "shortlists", x: 234, y: 202 } },
  { d: "M 160 250 L 120 250", label: { zh: "投标", en: "bids", x: 126, y: 268 } },
  { d: "M 61 270 C 61 306, 84 316, 110 344", label: { zh: "定标", en: "awards", x: 14, y: 316 } },
  { d: "M 229 270 C 229 306, 212 316, 190 344", label: { zh: "签约", en: "signs", x: 234, y: 316 } },
];

/** One procurement run. `touches` is [read, write] and drives what lights up
 *  in the graph — the workflow and the ontology are not two pictures, they
 *  are one. `sys` names the system of record the step reaches into, because
 *  crossing ERP → tendering platform → back is the actual product argument. */
const STEPS: {
  zh: string;
  en: string;
  sys: { zh: string; en: string };
  by: { zh: string; en: string };
  edge: number;
  touches: [NodeId, NodeId];
  kind: "read" | "reason" | "gate" | "wait" | "human" | "write";
}[] = [
  {
    zh: "归集需求", en: "Aggregate demand",
    sys: { zh: "ERP", en: "ERP" }, by: { zh: "DemandAgent", en: "DemandAgent" },
    edge: 0, touches: ["demand", "batch"], kind: "read",
  },
  {
    zh: "匹配物料编码", en: "Resolve material code",
    sys: { zh: "ERP", en: "ERP" }, by: { zh: "SpecAgent", en: "SpecAgent" },
    edge: 1, touches: ["material", "batch"], kind: "reason",
  },
  {
    zh: "定采购方式", en: "Select sourcing route",
    sys: { zh: "电商平台", en: "Tender" }, by: { zh: "SourcingAgent", en: "SourcingAgent" },
    edge: 2, touches: ["batch", "lot"], kind: "reason",
  },
  {
    zh: "投标资格核验", en: "Vet bidder standing",
    sys: { zh: "供应商库", en: "Registry" }, by: { zh: "VettingAgent", en: "VettingAgent" },
    edge: 3, touches: ["batch", "supplier"], kind: "gate",
  },
  {
    zh: "中标候选人公示", en: "Candidate publicity",
    sys: { zh: "电商平台", en: "Tender" }, by: { zh: "法定公示 3 日", en: "statutory 3 days" },
    edge: 4, touches: ["supplier", "lot"], kind: "wait",
  },
  {
    zh: "集体决策定标", en: "Award decision",
    sys: { zh: "治理", en: "Governance" }, by: { zh: "人工决策 · 三重一大", en: "human decision" },
    edge: 5, touches: ["lot", "contract"], kind: "human",
  },
  {
    zh: "生成合同订单", en: "Write contract & PO",
    sys: { zh: "ERP", en: "ERP" }, by: { zh: "ContractAgent", en: "ContractAgent" },
    edge: 6, touches: ["supplier", "contract"], kind: "write",
  },
];

/** Each rule fires at its own step rather than all turning green at once —
 *  one evaluated predicate argues "actionable" better than five green dots. */
const RULES: { id: string; zh: string; en: string; firesAt: number }[] = [
  { id: "R-PROC-016", zh: "须公开招标", en: "Open tender required", firesAt: 2 },
  { id: "R-SUPP-114", zh: "资格在有效期", en: "Bidder standing valid", firesAt: 3 },
  { id: "R-GOV-301", zh: "三重一大决策", en: "Collective decision", firesAt: 5 },
];

const TXT = {
  zh: {
    path: "ontology.allmeta.ai / 电力采购域",
    running: "运行中",
    ontology: "本体 · 采购域",
    workflow: "智能体工作流",
    rules: "治理规则",
    caseId: "PR-2603-0187 · 220kV 泾湾变 · 春检物资",
    elapsed: "用时",
    done: "已完成",
    trace: "执行轨迹",
    read: "读",
    write: "写",
    sample: "示例数据",
    committed: "已回写 ERP",
  },
  en: {
    path: "ontology.allmeta.ai / grid-procurement",
    running: "RUNNING",
    ontology: "Ontology · Procurement",
    workflow: "Agentic workflow",
    rules: "Governance rules",
    caseId: "PR-2603-0187 · 220kV Jingwan S/S · spring overhaul",
    elapsed: "elapsed",
    done: "COMPLETE",
    trace: "Trace",
    read: "read",
    write: "write",
    sample: "Sample data",
    committed: "written back to ERP",
  },
} as const;

const TYPE_OF = NODES.reduce(
  (m, n) => ({ ...m, [n.id]: n.type }),
  {} as Record<NodeId, string>
);

/** lime = an agent acting · violet = a human deciding · amber = waiting.
 *  Cyan and coral stay unused: two accents beside a two-line headline reads
 *  as restraint, five reads as a dashboard demo. */
const TONE: Record<string, string> = {
  read: "var(--c-lime)",
  reason: "var(--c-lime)",
  gate: "var(--c-lime)",
  write: "var(--c-lime)",
  wait: "var(--c-amber)",
  human: "var(--c-violet)",
};

/** The same map for anything rendered as TEXT. On a near-white canvas the
 *  fill lime measures 3.4:1 — correct behind a button label, not readable as
 *  9px type. Amber and violet already clear AA, so only lime differs; in dark
 *  --c-lime-ink is byte-identical to --c-lime and this map is a no-op. */
const TONE_INK: Record<string, string> = {
  ...TONE,
  read: "var(--c-lime-ink)",
  reason: "var(--c-lime-ink)",
  gate: "var(--c-lime-ink)",
  write: "var(--c-lime-ink)",
};

const CYCLE = STEPS.length + 1; // one extra beat holds the finished state

export default function GridProcurementMock() {
  const { lang } = useApp();
  const tx = TXT[lang];
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    // A looping run is the point of the panel, but not at the cost of anyone
    // who has asked the OS for stillness — they get the completed end state.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStep(STEPS.length);
      return;
    }
    const id = window.setInterval(() => setStep((s) => (s + 1) % CYCLE), 1600);
    return () => window.clearInterval(id);
  }, []);

  const finished = step >= STEPS.length;
  const active = finished ? null : STEPS[step];

  // A node stays lit once a step has touched it: the graph fills in as the run
  // proceeds, which is the whole argument in one gesture.
  const lit = new Set<NodeId>();
  const litEdges = new Set<number>();
  STEPS.slice(0, Math.min(step + 1, STEPS.length)).forEach((s) => {
    s.touches.forEach((n) => lit.add(n));
    litEdges.add(s.edge);
  });
  const hot = new Set<NodeId>(active?.touches ?? []);

  const seconds = 47 + step * 31;
  const clock = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div
      className="@container hairline relative overflow-hidden flex flex-col"
      style={{
        // Height is content-driven with a floor, not a fixed aspect ratio: the
        // right column's step + trace + rule stack is the tallest thing here
        // and a fixed ratio let it spill over the status bar in light theme.
        minHeight: 540,
        boxShadow:
          "0 40px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
      }}
    >
      {/* Window chrome */}
      <div className="term-chrome shrink-0">
        <span /><span /><span />
        <div className="ml-2 f-mono truncate" style={{ fontSize: 11, color: "var(--c-ink-3)" }}>
          {tx.path}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span
            className={finished ? undefined : "anim-pulse"}
            style={{
              width: 6, height: 6, borderRadius: 999,
              background: finished ? "var(--c-ink-4)" : "var(--c-lime)",
              boxShadow: finished ? "none" : "0 0 6px var(--c-lime)",
            }}
          />
          <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-3)", letterSpacing: "0.08em" }}>
            {finished ? tx.done : tx.running}
          </span>
        </div>
      </div>

      {/* Container query, not a viewport one: this panel sits in a 5-of-12
          column, so at 1024px the hero splits and the graph column would be
          ~170px wide — narrower than on a phone. Stack whenever the panel
          itself is narrow, regardless of what the viewport is doing. */}
      <div className="grid grid-cols-1 @md:grid-cols-[1fr_208px] flex-1 min-h-0">
        {/* ── LEFT: the ontology ─────────────────────────────────── */}
        <section className="relative min-w-0 flex flex-col" style={{ padding: "14px 8px 10px 12px" }}>
          <Rail>{tx.ontology}</Rail>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(color-mix(in oklab, var(--c-ink-4) 26%, transparent) 0.7px, transparent 0.7px)",
              backgroundSize: "16px 16px",
              opacity: 0.5,
            }}
          />
          <svg
            viewBox="0 0 300 390"
            className="relative w-full max-h-[300px] @md:max-h-none"
            style={{ flex: 1, minHeight: 0, marginTop: 6 }}
            preserveAspectRatio="xMidYMid meet"
          >
            {EDGES.map((e, i) => (
              <path
                key={i}
                d={e.d}
                fill="none"
                strokeWidth={litEdges.has(i) ? 1.2 : 1}
                stroke={litEdges.has(i) ? "var(--c-lime-line)" : "var(--c-line-graph-soft)"}
              />
            ))}

            {EDGES.map((e, i) =>
              e.label ? (
                <text
                  key={`l${i}`}
                  x={e.label.x}
                  y={e.label.y}
                  fontFamily="var(--f-mono)"
                  fontSize="8.5"
                  fill="var(--c-ink-4)"
                  letterSpacing="0.04em"
                >
                  {e.label[lang]}
                </text>
              ) : null
            )}

            {/* the edge the current step is running over */}
            {active && (
              <g key={`edge-${step}`}>
                <path
                  d={EDGES[active.edge].d}
                  fill="none"
                  strokeWidth="1.8"
                  stroke={TONE[active.kind]}
                />
                <circle r="3" fill={TONE[active.kind]}>
                  <animateMotion dur="1.4s" repeatCount="indefinite" path={EDGES[active.edge].d} />
                  <animate attributeName="opacity" values="0;1;0" dur="1.4s" repeatCount="indefinite" />
                </circle>
              </g>
            )}

            {NODES.map((n) => (
              <GraphNode
                key={n.id}
                n={n}
                lang={lang}
                lit={lit.has(n.id)}
                hot={hot.has(n.id)}
                tone={active ? TONE[active.kind] : "var(--c-lime)"}
              />
            ))}
          </svg>
        </section>

        {/* ── RIGHT: the run ─────────────────────────────────────── */}
        <section
          className="flex flex-col border-t @md:border-t-0 @md:border-l"
          style={{
            borderColor: "color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
            padding: "14px 12px 8px",
          }}
        >
          <Rail>{tx.workflow}</Rail>
          {/* Narrow panel → steps and meta sit side by side, so stacking the
              two halves of the mock doesn't double the hero's height. */}
          <div className="flex-1 min-h-0 flex gap-5 @md:flex-col @md:gap-0">
            <ol className="mt-1 shrink-0">
              {STEPS.map((s, i) => {
                const state = i < step || finished ? "done" : i === step ? "run" : "wait";
                return (
                  <li key={s.en} className="relative flex items-start gap-2" style={{ padding: "6px 0" }}>
                    {/* connector spine */}
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden
                        style={{
                          position: "absolute", left: 8, top: 24, bottom: -2, width: 1,
                          background:
                            state === "done"
                              ? "var(--c-lime-line)"
                              : "color-mix(in oklab, var(--c-ink-4) 26%, transparent)",
                        }}
                      />
                    )}
                    <StepGlyph state={state} tone={TONE[s.kind]} human={s.kind === "human"} />
                    <div className="min-w-0" style={{ paddingTop: 1 }}>
                      <div
                        style={{
                          fontSize: 11.5,
                          lineHeight: 1.25,
                          letterSpacing: "-0.01em",
                          color:
                            state === "wait"
                              ? "var(--c-ink-4)"
                              : state === "run"
                              ? "var(--c-ink-1)"
                              : "var(--c-ink-2)",
                          fontWeight: state === "run" ? 600 : 400,
                        }}
                      >
                        {s[lang]}
                      </div>
                      <div
                        className="f-mono truncate"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.03em",
                          color: state === "run" ? TONE_INK[s.kind] : "var(--c-ink-4)",
                        }}
                      >
                        {s.sys[lang]} · {s.by[lang]}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="flex flex-col flex-1 min-w-0">
              {/* What the running step is doing TO the ontology. The read →
                  write pair is the whole "actionable" claim in three lines. */}
              <div
                className="mt-1 @md:mt-3 @md:border-t"
                style={{ borderColor: "color-mix(in oklab, var(--c-ink-4) 14%, transparent)", paddingTop: 9 }}
              >
                <Rail>{tx.trace}</Rail>
                <div className="mt-1.5 f-mono" style={{ fontSize: 9.5, lineHeight: 1.55 }}>
                  <div className="truncate" style={{ color: active ? TONE_INK[active.kind] : "var(--c-ink-3)" }}>
                    {active ? active.by[lang] : "PurchaseContract"}
                  </div>
                  {active ? (
                    <>
                      <div className="truncate" style={{ color: "var(--c-ink-3)" }}>
                        <span style={{ color: "var(--c-ink-4)" }}>{tx.read}</span> {TYPE_OF[active.touches[0]]}
                      </div>
                      <div className="truncate" style={{ color: "var(--c-ink-3)" }}>
                        <span style={{ color: "var(--c-ink-4)" }}>{tx.write}</span> {TYPE_OF[active.touches[1]]}
                      </div>
                    </>
                  ) : (
                    <div style={{ color: "var(--c-ink-3)" }}>{tx.committed}</div>
                  )}
                </div>
              </div>

              <div
                className="mt-4 @md:mt-auto @md:border-t"
                style={{ borderColor: "color-mix(in oklab, var(--c-ink-4) 14%, transparent)", paddingTop: 10 }}
              >
                <Rail>{tx.rules}</Rail>
                <ul className="mt-1.5 space-y-1">
                  {RULES.map((r) => {
                    const firing = step === r.firesAt;
                    const passed = step > r.firesAt || finished;
                    return (
                      <li key={r.id} className="flex items-center gap-1.5" style={{ fontSize: 9.5 }}>
                        <span
                          style={{
                            width: 5, height: 5, borderRadius: 999, flexShrink: 0,
                            background: firing
                              ? "var(--c-amber)"
                              : passed
                              ? "var(--c-lime)"
                              : "var(--c-line-graph-strong)",
                          }}
                        />
                        <span className="f-mono shrink-0" style={{ color: "var(--c-ink-4)" }}>{r.id}</span>
                        <span className="truncate" style={{ color: passed || firing ? "var(--c-ink-2)" : "var(--c-ink-4)" }}>
                          {r[lang]}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center gap-3 shrink-0"
        style={{
          height: 32,
          padding: "0 14px",
          borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
          background: "color-mix(in oklab, var(--c-bg) 45%, transparent)",
        }}
      >
        <span className="f-mono truncate" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.04em" }}>
          {tx.caseId}
        </span>
        <span className="f-mono ml-auto shrink-0" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.06em" }}>
          {tx.sample} · <span style={{ color: "var(--c-ink-3)" }}>{clock}</span>
        </span>
      </div>

      {/* Lime side glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none mock-glow"
        style={{
          top: 0, right: -120, width: 280, height: "100%",
          background:
            "radial-gradient(ellipse 50% 50% at 30% 50%, color-mix(in oklab, var(--c-lime) 22%, transparent), transparent 70%)",
          filter: "blur(36px)",
        }}
      />
    </div>
  );
}

function Rail({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="f-mono"
      style={{ fontSize: 9.5, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}
    >
      {children}
    </div>
  );
}

function GraphNode({
  n,
  lang,
  lit,
  hot,
  tone,
}: {
  n: (typeof NODES)[number];
  lang: "zh" | "en";
  lit: boolean;
  hot: boolean;
  tone: string;
}) {
  // These outlines are the object boundaries of the graph, so they carry
  // meaning and WCAG 1.4.11 applies at 3:1 — an alpha mix of grey cannot get
  // there on white, hence the solid token.
  const stroke = hot ? tone : lit ? "var(--c-lime-line)" : "var(--c-line-graph-mid)";
  return (
    <g transform={`translate(${n.x} ${n.y})`}>
      {hot && (
        <rect
          x="-3" y="-3" width={n.w + 6} height={NODE_H + 6} rx="10"
          fill="none" stroke={tone} strokeWidth="1" opacity="0.4"
        />
      )}
      <rect
        width={n.w} height={NODE_H} rx="8"
        fill="var(--c-surface)"
        stroke={stroke}
        strokeWidth={hot ? 1.4 : 1}
      />
      <text x="10" y="15" fontFamily="var(--f-mono)" fontSize="7.5" fill="var(--c-ink-4)" letterSpacing="0.06em">
        {n.type}
      </text>
      <text
        x="10" y="31"
        fontFamily="var(--f-sans)"
        fontWeight="600"
        fontSize={lang === "zh" ? 12 : 11}
        fill={lit ? "var(--c-ink-1)" : "var(--c-ink-3)"}
        letterSpacing="-0.01em"
      >
        {n[lang]}
      </text>
    </g>
  );
}

/** Step marker. The human decision gate is a square outline, not a filled
 *  circle — the contrast between "an agent ran" and "a person decided" is
 *  the trust story, so it has to be legible at thumbnail size. */
function StepGlyph({ state, tone, human }: { state: "done" | "run" | "wait"; tone: string; human: boolean }) {
  const radius = human ? 4 : 999;
  if (state === "run") {
    return (
      <span className="relative shrink-0" style={{ width: 17, height: 17, marginTop: 1 }}>
        <svg width="17" height="17" viewBox="0 0 17 17" style={{ animation: "orb-rotate 1.2s linear infinite" }}>
          <circle cx="8.5" cy="8.5" r="6.5" fill="none" stroke={`color-mix(in oklab, ${tone} 22%, transparent)`} strokeWidth="1.6" />
          <path d="M 8.5 2 A 6.5 6.5 0 0 1 15 8.5" fill="none" stroke={tone} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  if (state === "done") {
    return (
      <span
        className="flex items-center justify-center shrink-0"
        style={{
          width: 17, height: 17, marginTop: 1, borderRadius: radius,
          background: `color-mix(in oklab, ${tone} 16%, transparent)`,
          border: `1px solid color-mix(in oklab, ${tone} 55%, transparent)`,
        }}
      >
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke={tone} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1.5 5.2 L4 7.5 L8.5 2.5" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="shrink-0"
      style={{
        width: 17, height: 17, marginTop: 1, borderRadius: radius,
        border: "1px solid color-mix(in oklab, var(--c-ink-4) 40%, transparent)",
      }}
    />
  );
}
