"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal } from "@/components/editorial/parts";
import { useReducedMotion } from "@/components/home/v2/useReducedMotion";

/** Behind your wall, the whole system. Outside it, one model endpoint.
 *
 *  This is the section that pays the hero's debt. The home page claims
 *  自主可控 / "Sovereign AI Systems" and nothing before this point says WHERE
 *  the five layers physically run or what crosses out. So the picture is a
 *  deployment: one perimeter (the customer's host), the app and its three
 *  stores inside it, and exactly one aperture — the model gateway — in the
 *  wall. The call goes out through it; the answer comes back through it.
 *
 *  Three things the drawing says that a list cannot:
 *   1. The same socket serves a model hosted INSIDE the wall. It is drawn in
 *      --c-info because a self-hosted model is still borrowed capability —
 *      sovereignty is not about where the weights sit, it is about where
 *      judgement, action and record sit. One call cycle goes to the cloud,
 *      the next to the in-house model; nothing inside changes between them.
 *   2. The model has no direct reach into the systems of record: an attempt
 *      dies at an amber strike on the wall. Tools execute inside.
 *   3. A two-line ledger underneath says what stays and what leaves.
 *
 *  Every claim here is scoped to something checkable in the repos: the
 *  compose services, the gateway's `local` provider, the credentials that
 *  live only in the environment file, the llm_calls table. "One opening" is
 *  a RUN-TIME claim — the ontology generator calls a web-search API at
 *  design time, so do not widen it. The words 自主可控 / 信创 / 主权 do not
 *  appear: the geometry makes the argument the adjectives could not.
 *
 *  Careful: "wall / 墙" here is the deployment boundary. DualityV2's
 *  perimeter on the home page is a conceptual one (judgement vs capability).
 *  They rhyme on purpose; they are not the same line. */

const DUR = "12s";

export default function BoundaryV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_bnd_label")}
          title={
            <>
              <span style={{ color: "var(--c-ink-3)" }}>{t("tech_bnd_lead")}</span>
              <span style={{ color: "var(--c-ink-1)" }}>{t("tech_bnd_main")}</span>
            </>
          }
          desc={t("tech_bnd_desc")}
        />
        <Reveal>
          <div className="min-w-0">
            <div className="overflow-x-auto hidden lg:block"><BoundaryWide t={t} /></div>
            <div className="lg:hidden"><BoundaryNarrow t={t} /></div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body mt-8" style={{ maxWidth: 760, color: "var(--c-ink-1)" }}>{t("tech_bnd_note")}</p>
        </Reveal>
        <Reveal delay={2}>
          <p className="t-small mt-6" style={{ maxWidth: 760 }}>{t("tech_bnd_proof")}</p>
        </Reveal>
        <Reveal delay={3}>
          <p className="t-h3 mt-12 mx-auto text-center" style={{ color: "var(--c-ink-2)", maxWidth: 760 }}>{t("tech_bnd_punch")}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── wide geometry ───────────────────────────────────────────────────────
   perimeter 8..608 × 40..460 · inner plates x 26..410 · write-back rail
   x=420 (146..424) · call line y=124 from 410 to 720, drawn BEFORE the
   socket so the socket's fill (528..688) hides the wall segment and the
   line — that is how the aperture becomes visible · self-hosted plate
   436..596 inside the wall · cloud plate 720..932 outside · refused reach
   from the cloud plate's underside to a strike on the wall at (608,424).
   Only cx / cy / opacity are animated, with plain numbers. ─────────────── */
function BoundaryWide({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg viewBox="0 0 940 500" style={{ width: "100%", minWidth: 860 }} role="img"
      aria-label={`${t("tech_bnd_lead")}${t("tech_bnd_main")}`}>

      {/* the wall */}
      <rect x="8" y="40" width="600" height="420" rx="14" fill="none" stroke="var(--c-lime)" strokeWidth="1.5" />
      <text x="26" y="64" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_infra")}</text>
      <text x="26" y="82" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_bnd_d_compose")}</text>
      <text x="720" y="64" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_bnd_d_outside")}</text>

      {/* the runtime writes back into the systems of record — yours, lime */}
      <path d="M 410 146 H 420 V 424 H 416" fill="none" stroke="var(--c-lime)" strokeWidth="1.2" />
      <polygon points="416,420 410,424 416,428" fill="var(--c-lime)" />
      <path d="M 420 326 H 416" stroke="var(--c-lime)" strokeWidth="1.2" />
      <polygon points="416,322 410,326 416,330" fill="var(--c-lime)" />

      {/* the call — borrowed capability, info. Drawn before the socket. */}
      <path d="M 410 124 H 720" fill="none" stroke="var(--c-info)" strokeWidth="1.2" />
      <path d="M 516 200 V 124" fill="none" stroke="var(--c-info)" strokeWidth="1.2" />

      {/* a reach the model does not have: dies at the wall. Dash + strike,
          never a lowered opacity. */}
      <path d="M 916 156 V 424 H 626" fill="none" stroke="var(--c-amber)" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M 602 418 L 614 430" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 614 418 L 602 430" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />

      {/* inside: what runs on your host */}
      <rect x="26" y="96" width="384" height="90" rx="10" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="26" y="96" width="4" height="90" rx="2" fill="var(--c-lime)" />
      <text x="44" y="122" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_os_k")}</text>
      <text x="44" y="146" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_bnd_d_os")}</text>
      <text x="44" y="170" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_bnd_d_os_sub")}</text>

      <rect x="26" y="202" width="384" height="72" rx="10" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="26" y="202" width="4" height="72" rx="2" fill="var(--c-lime)" />
      <text x="44" y="228" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_onto_k")}</text>
      <text x="44" y="252" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_bnd_d_onto")}</text>

      <rect x="26" y="290" width="384" height="72" rx="10" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="44" y="316" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_bnd_d_rec_k")}</text>
      <text x="44" y="340" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_bnd_d_rec")}</text>

      <rect x="26" y="378" width="384" height="72" rx="10" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="44" y="404" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_bnd_d_core_k")}</text>
      <text x="44" y="428" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_bnd_d_core")}</text>

      {/* a model hosted inside the wall — still borrowed capability, still info */}
      <rect x="436" y="200" width="160" height="72" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="448" y="224" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_bnd_d_local_k")}</text>
      <text x="448" y="246" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12" fill="var(--c-ink-1)">{t("tech_bnd_d_local")}</text>
      <text x="448" y="264" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_local_sub")}</text>

      {/* the one aperture, straddling the wall */}
      <rect x="528" y="100" width="160" height="48" rx="10" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="608" y="118" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_sock_k")}</text>
      <text x="608" y="136" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="12" fill="var(--c-ink-1)">{t("tech_bnd_d_sock")}</text>

      {/* outside: the cloud model */}
      <rect x="720" y="92" width="212" height="64" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="738" y="118" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_bnd_d_cloud_k")}</text>
      <text x="738" y="142" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_bnd_d_cloud")}</text>
      <text x="738" y="176" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_bnd_d_swap")}</text>

      {/* edge labels */}
      <text x="469" y="114" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_call")}</text>
      <text x="428" y="416" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_writes")}</text>
      <text x="640" y="412" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_refused")}</text>

      {/* the ledger */}
      <text x="8" y="486" fontFamily="var(--f-mono)" fontSize="10.5">
        <tspan fontWeight="600" fill="var(--c-ink-1)">{t("tech_bnd_d_stay_k")}</tspan>
        <tspan fill="var(--c-ink-3)">{t("tech_bnd_d_stay")}</tspan>
      </text>
      <text x="470" y="486" fontFamily="var(--f-mono)" fontSize="10.5">
        <tspan fontWeight="600" fill="var(--c-ink-1)">{t("tech_bnd_d_leave_k")}</tspan>
        <tspan fill="var(--c-ink-3)">{t("tech_bnd_d_leave")}</tspan>
      </text>

      {/* the call, twice: once to the cloud model, once to the in-house one.
          Nothing inside the wall changes between the two — that IS the swap.
          Then a reach the model does not have, dying at the wall. */}
      {still ? (
        <>
          <circle cx="608" cy="124" r="4" fill="var(--c-info)" />
          <circle cx="630" cy="424" r="4" fill="var(--c-amber)" />
        </>
      ) : (
        <>
          <circle r="4" fill="var(--c-info)">
            <animate attributeName="cx" values="410;720;720;410;410;516;516;516;410;410" keyTimes="0;0.18;0.24;0.42;0.50;0.58;0.68;0.74;0.82;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="cy" values="124;124;200;200;124;124" keyTimes="0;0.58;0.64;0.68;0.74;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0;0;1;1;0;0" keyTimes="0;0.02;0.40;0.42;0.50;0.52;0.80;0.82;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="var(--c-amber)">
            <animate attributeName="cx" values="916;916;626;626" keyTimes="0;0.90;0.97;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="cy" values="156;156;424;424" keyTimes="0;0.84;0.90;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.84;0.85;0.97;0.98;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
}

/* ── narrow geometry ─────────────────────────────────────────────────────
   The perimeter becomes a tall box; the socket straddles the BOTTOM wall
   on the right; the cloud model sits below; core systems is the LAST plate
   so the strike lands directly under the plate it refuses. The write-back
   rail, the outside caption and the CALL label are dropped — the copy
   carries them. ────────────────────────────────────────────────────────── */
function BoundaryNarrow({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg viewBox="0 0 360 620" style={{ width: "100%" }} role="img"
      aria-label={`${t("tech_bnd_lead")}${t("tech_bnd_main")}`}>
      <text x="8" y="26" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_infra_n")}</text>
      <rect x="8" y="38" width="344" height="396" rx="12" fill="none" stroke="var(--c-lime)" strokeWidth="1.5" />
      <text x="24" y="60" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_compose")}</text>

      <path d="M 276 108 H 296 V 490" fill="none" stroke="var(--c-info)" strokeWidth="1.2" />
      <path d="M 232 184 H 296" fill="none" stroke="var(--c-info)" strokeWidth="1.2" />

      <path d="M 80 490 V 446" fill="none" stroke="var(--c-amber)" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M 74 428 L 86 440" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 86 428 L 74 440" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />

      <rect x="24" y="72" width="252" height="72" rx="8" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="24" y="72" width="3" height="72" rx="1.5" fill="var(--c-lime)" />
      <text x="38" y="94" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_os_k")}</text>
      <text x="38" y="116" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12.5" fill="var(--c-ink-1)">{t("tech_bnd_d_os_n")}</text>
      <text x="38" y="136" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_os_sub_n")}</text>

      <rect x="24" y="158" width="208" height="52" rx="8" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="38" y="178" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_bnd_d_local_k")}</text>
      <text x="38" y="200" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12" fill="var(--c-ink-1)">{t("tech_bnd_d_local_n")}</text>

      <rect x="24" y="224" width="252" height="56" rx="8" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="24" y="224" width="3" height="56" rx="1.5" fill="var(--c-lime)" />
      <text x="38" y="246" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_onto_k")}</text>
      <text x="38" y="268" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12.5" fill="var(--c-ink-1)">{t("tech_bnd_d_onto_n")}</text>

      <rect x="24" y="294" width="252" height="56" rx="8" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="38" y="316" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_bnd_d_rec_k")}</text>
      <text x="38" y="338" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12.5" fill="var(--c-ink-1)">{t("tech_bnd_d_rec_n")}</text>

      <rect x="24" y="364" width="252" height="56" rx="8" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="38" y="386" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_bnd_d_core_k")}</text>
      <text x="38" y="408" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12.5" fill="var(--c-ink-1)">{t("tech_bnd_d_core")}</text>

      <rect x="248" y="412" width="96" height="44" rx="8" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="296" y="430" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_bnd_d_sock_k_n")}</text>
      <text x="296" y="448" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="12" fill="var(--c-ink-1)">{t("tech_bnd_d_sock")}</text>

      <text x="92" y="462" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_refused_n1")}</text>
      <text x="92" y="476" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_refused_n2")}</text>

      <rect x="24" y="490" width="320" height="56" rx="8" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="38" y="512" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_bnd_d_cloud_k")}</text>
      <text x="38" y="534" fontFamily="var(--f-sans)" fontWeight="600" fontSize="12.5" fill="var(--c-ink-1)">{t("tech_bnd_d_cloud")}</text>
      <text x="24" y="566" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_bnd_d_swap_n")}</text>

      <text x="24" y="590" fontFamily="var(--f-mono)" fontSize="10">
        <tspan fontWeight="600" fill="var(--c-ink-1)">{t("tech_bnd_d_stay_k")}</tspan>
        <tspan fill="var(--c-ink-3)">{t("tech_bnd_d_stay_n")}</tspan>
      </text>
      <text x="24" y="606" fontFamily="var(--f-mono)" fontSize="10">
        <tspan fontWeight="600" fill="var(--c-ink-1)">{t("tech_bnd_d_leave_k_n")}</tspan>
        <tspan fill="var(--c-ink-3)">{t("tech_bnd_d_leave_n")}</tspan>
      </text>

      {still ? (
        <>
          <circle cx="296" cy="434" r="4" fill="var(--c-info)" />
          <circle cx="80" cy="450" r="4" fill="var(--c-amber)" />
        </>
      ) : (
        <>
          <circle r="4" fill="var(--c-info)">
            <animate attributeName="cy" values="108;490;490;108;108;184;184;184;108;108" keyTimes="0;0.18;0.24;0.42;0.50;0.58;0.68;0.74;0.82;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="cx" values="296;296;232;232;296;296" keyTimes="0;0.58;0.64;0.68;0.74;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0;0;1;1;0;0" keyTimes="0;0.02;0.40;0.42;0.50;0.52;0.80;0.82;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
          </circle>
          <circle cx="80" r="4" fill="var(--c-amber)">
            <animate attributeName="cy" values="490;490;446;446" keyTimes="0;0.84;0.94;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.84;0.85;0.94;0.95;1" dur={DUR} calcMode="linear" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
}
