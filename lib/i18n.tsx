"use client";
import React from "react";

export type Lang = "zh" | "en";

export const I18N: Record<Lang, Record<string, string>> = {
  zh: {
    // ===== Brand / global =====
    brand_tag_zh: "新一代企业智能业务操作系统",
    brand_tag_en: "Beyond ERP. Make Enterprise AI-Native.",
    brand_motto: "模思 · 故我在",
    brand_motto_en: "Cogito ergo sum — Modeled, therefore I am.",

    // ===== Nav =====
    nav_home: "首页",
    nav_ontology: "Ontology",
    nav_operator: "Operator",
    nav_technology: "技术",
    nav_launch: "进入控制台",
    nav_book_demo: "预约 Demo",

    // ===== Footer =====
    footer_copyright: "© 2026 allm²eta · ChinaSoft International AI Center of Excellence",
    footer_version: "v0.5 · Ontology",
    footer_links_product: "产品",
    footer_links_company: "公司",
    footer_links_resources: "资源",
    footer_links_legal: "法务",
    footer_about: "关于我们",
    footer_partners: "合作伙伴",
    footer_blog: "博客",
    footer_docs: "文档",
    footer_changelog: "更新日志",
    footer_security: "安全",
    footer_privacy: "隐私",
    footer_terms: "服务条款",
    footer_addr: "中软国际 · 上海西岸",
    footer_made_with: "在上海西岸 · 北京 · 深圳手工打磨",

    // ===== Home / Hero =====
    home_hero_eyebrow: "v0.5 · 发布于上海西岸 · 华为云 Inspire 2026",
    home_hero_h1_1: "Beyond ERP.",
    home_hero_h1_2: "Make Enterprise",
    home_hero_h1_3: "AI-Native.",
    home_hero_sub_zh: "把企业业务变成 AI Agent 可理解 · 可调用 · 可执行 · 可审计 · 可治理 · 可进化 的企业操作界面。",
    home_hero_sub_en:
      "Turn business objects, rules, processes and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    home_hero_cta_primary: "看 Ontology",
    home_hero_cta_secondary: "看 Operator",
    home_hero_cta_tech: "看完整架构",
    home_hero_stat_agents: "Agents 并行",
    home_hero_stat_wallclock: "端到端 Wall-clock",
    home_hero_stat_breaks: "无人工断点",

    // ===== Home / The Gap =====
    home_gap_label: "ACT 01 · THE GAP",
    home_gap_title_zh: "你的 ERP, 跑得动 AI 吗?",
    home_gap_title_en: "Does your ERP run AI?",
    home_gap_stat_before: "10%",
    home_gap_stat_after: "60%",
    home_gap_stat_caption: "三年内,客户在企业软件上的钱,一半以上会付给 AI。",
    home_gap_stat_caption_en: "Within three years, more than half of enterprise software spend will go to AI · 2024 → 2027",
    home_gap_quote: "「客户上了一年某全球 ERP,什么都没看到。」",
    home_gap_quote_attr: "不是产品不行 — 是 ERP 这个范式只解决一半问题。另一半,叫 Actions。",
    home_gap_quote_en: "It's not the product. The ERP paradigm only solves half the problem. The other half is called Actions.",

    // The Gap — 3 boxes
    home_gap_box1_label: "LLM",
    home_gap_box1_zh: "大模型",
    home_gap_box1_verb: "Understands",
    home_gap_box1_caption: "智能理解",
    home_gap_box2_label: "???",
    home_gap_box2_zh: "缺失环节",
    home_gap_box2_verb: "Translates",
    home_gap_box2_caption: "把业务变成 Agent 可执行的语义",
    home_gap_box2_caption_en: "Translate business into Agent-callable semantics",
    home_gap_box3_label: "Agent",
    home_gap_box3_zh: "智能体",
    home_gap_box3_verb: "Executes",
    home_gap_box3_caption: "任务执行",
    home_gap_h2_zh: "但企业真正缺的是",
    home_gap_h2_em: "中间这一层",
    home_gap_h2_zh_after: "。",

    // ===== Home / ERP vs System of Actions =====
    home_sysrec_label: "System of Records",
    home_sysrec_title: "ERP 做 Management.",
    home_sysrec_sub: "But it does *not* Operate.",
    home_sysrec_caption: "做记录、做合规、做审计",
    home_sysrec_caption_en: "Transactions · Compliance · Audit & Reporting",
    home_sysact_label: "System of Actions",
    home_sysact_title: "Ontology + Agent 做 Operate.",
    home_sysact_sub: "会理解 · 会调用 · 会执行 · 会进化",
    home_sysact_caption: "Agent-driven business operations · Live ontology that evolves with business · Auto-pilot, traceable, governable",

    // ===== Home / Trinity =====
    home_trinity_label: "ACT 02 · TRINITY ARCHITECTURE",
    home_trinity_title: "三位一体",
    home_trinity_title_en: "Trinity. Three layers, one operating system.",
    home_trinity_top_label: "AI ↑",
    home_trinity_top_subtitle: "System of Actions",
    home_trinity_top_title: "Agent Layer",
    home_trinity_top_caption: "AI 员工 · 自主 / 半自主 / 人机协作",
    home_trinity_top_note: "由 FDE 在客户那里搭建",
    home_trinity_mid_label: "—",
    home_trinity_mid_subtitle: "Actionable Ontology",
    home_trinity_mid_title: "Cognition Core",
    home_trinity_mid_caption: "Data Object · Action · Rule",
    home_trinity_mid_note: "Agent 的认知大脑 · 控 LLM 幻觉",
    home_trinity_bot_label: "DATA ↓",
    home_trinity_bot_subtitle: "System of Records",
    home_trinity_bot_title: "ERP / CRM / MES / Finance",
    home_trinity_bot_caption: "Transactions · Compliance · Audit",
    home_trinity_bot_note: "保留原有掌控力 — 不丢",
    home_trinity_footer: "绿色这一层 — Ontology — 是 allmeta 真正的差异化所在。",
    home_trinity_footer_en: "The green layer — Ontology — is where allmeta is genuinely different.",

    // ===== Home / Products =====
    home_products_label: "ACT 03 · THE DUAL CORE",
    home_products_title: "Ontology × Operator",
    home_products_subtitle: "双核架构 — 一个让 Agent 思考, 一个让 Agent 跑起来。",
    home_products_subtitle_en: "Dual core — one makes agents think, the other makes them run.",

    product_ontology_chip: "CORE · the BRAIN",
    product_ontology_title: "allm²eta Ontology",
    product_ontology_subtitle: "The Actionable Ontology Platform",
    product_ontology_desc:
      "AI 优先的企业本体工作台 — 统一对象 / 规则 / 动作 / 事件,让大模型推理 · 智能体规划 · 自然语言交互 在同一语义空间中协作。",
    product_ontology_desc_en:
      "An AI-first ontology studio. Author Objects, Rules, Actions and Events on one semantic surface — purpose-built for machine reasoning, agent planning, and natural-language interaction.",
    product_ontology_features:
      "Objects · Actions · Rules · Events · Policies · 10 Builders",

    product_operator_chip: "CORE · the RUNTIME",
    product_operator_title: "Agentic Operator",
    product_operator_subtitle: "Ontology-Driven Agents Runtime",
    product_operator_desc:
      "规模化部署的智能体控制平面 — 可视化编排工作流, 实时追踪运行轨迹, 通过事件总线统一治理舰队, 端到端 Auto-Pilot。",
    product_operator_desc_en:
      "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus, and run end-to-end Auto-Pilot.",
    product_operator_features:
      "Planner · Executor · Validator · Reflection · Approval · Traceability",

    // ===== Home / Demo numbers =====
    home_demo_label: "ACT 04 · DEMO RECAP",
    home_demo_title_zh: "刚才你看到的是什么?",
    home_demo_title_en: "What just ran — live, in production.",
    home_demo_caption_zh: "中软国际 RAAS · 招聘端到端 Auto-Pilot · 真实简历 · 真实岗位 JD",
    home_demo_caption_en: "ChinaSoft RAAS · end-to-end recruiting auto-pilot · real resume, real JD, real agents.",
    home_demo_stat1_value: "8",
    home_demo_stat1_label: "Agents",
    home_demo_stat1_caption: "并行执行 · Event-Driven",
    home_demo_stat2_value: "3.5s",
    home_demo_stat2_label: "Wall-clock",
    home_demo_stat2_caption: "端到端 · 真实生产环境",
    home_demo_stat3_value: "0",
    home_demo_stat3_label: "Human Breaks",
    home_demo_stat3_caption: "Auto-Pilot · 无人工断点",
    home_demo_punchline: "Not Mock Data. Not a Slide. Real Agents.",
    home_demo_punchline_zh: "这才叫真的 Agent 在跑。",

    // ===== Home / Roadmap =====
    home_roadmap_label: "ACT 05 · THE NEXT MILE",
    home_roadmap_title_zh: "今天起步,一年走完。",
    home_roadmap_title_en: "Start today. Walk it in a year.",
    home_roadmap_caption: "今天发的是大脑。明天 脑自己长出 肌肉、骨架、皮肤 — 这就是企业 AI 化。",
    home_roadmap_caption_en: "Today we light up the brain. Tomorrow the brain grows its own muscles, skeleton, and skin — that's enterprise AI-native.",
    home_roadmap_now: "NOW · Jun 2026",
    home_roadmap_q3: "Q3 · 2026",
    home_roadmap_q4: "Q4 · 2026",
    home_roadmap_eoy: "EOY · 2026",
    home_roadmap_2027: "2027+",
    home_roadmap_step1_title: "allmeta Ontology",
    home_roadmap_step1_caption: "the Brain · 今天发布",
    home_roadmap_step2_title: "Agent Operator",
    home_roadmap_step2_caption: "the Runtime",
    home_roadmap_step3_title: "allmeta Code",
    home_roadmap_step3_caption: "Builder Suite · Ontology 自己写代码",
    home_roadmap_step3_caption_en: "Builder Suite · Ontology writes its own code",
    home_roadmap_step4_title: "Full Platform",
    home_roadmap_step4_caption: "通用层 + 3 个 AS",
    home_roadmap_step5_title: "Enterprise AI-Native",
    home_roadmap_step5_caption: "AI 预算 60%+ · 企业自己长出 AI",

    // ===== Home / Closing =====
    home_closing_label: "ONE LAST THING.",
    home_closing_h1_top: "Code is dead.",
    home_closing_h1: "Knowledge is King.",
    home_closing_zh: "未来,企业积淀的知识 — 就是它真正的护城河。",
    home_closing_zh_top: "「Code is King」的时代过去了 —",
    home_closing_kicker: "We don't sell software. We sell Tokens & APIs.",
    home_closing_kicker_zh: "我们不卖软件。我们卖 Tokens 和 APIs。",
    home_closing_cta: "进入 Ontology",
    home_closing_cta2: "进入 Operator",

    // ===== Ontology page =====
    onto_meta_title: "allm²eta Ontology — The Actionable Ontology Platform for Enterprise Agents",
    onto_meta_desc: "把业务对象、规则、动作变成 AI Agent 可调用的企业语义层。统一 Objects / Actions / Rules / Events, 一个 Ontology 跑 N 个 Agent。",

    onto_hero_eyebrow: "Core 01 · the BRAIN · v0.5",
    onto_hero_h1: "allmeta Ontology",
    onto_hero_h2: "the Actionable Ontology.",
    onto_hero_sub: "把企业业务对象、规则、权限、流程、事件和动作 — 变成 AI Agent 可理解 · 可调用 · 可执行 · 可审计 · 可治理 · 可进化 的企业操作界面。",
    onto_hero_sub_en: "Turn business objects, rules, permissions, processes, events, and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    onto_hero_kicker: "From Copilot, to Operator.",
    onto_hero_cta_launch: "启动 Ontology Studio",
    onto_hero_cta_arch: "看完整架构",

    // 6 capabilities
    onto_cap_label: "WHAT IT DOES",
    onto_cap_title: "六种能力 — Six Capabilities",
    onto_cap_subtitle: "把 ERP 的 'System of Records' 升级到 'System of Actions'。",
    onto_cap_1_title: "Understand",
    onto_cap_1_zh: "可理解",
    onto_cap_1_desc: "Agent 能用自然语言读懂业务对象、规则和流程。",
    onto_cap_2_title: "Invoke",
    onto_cap_2_zh: "可调用",
    onto_cap_2_desc: "每个 Action 都暴露成可调用 API,Agent 直接调。",
    onto_cap_3_title: "Execute",
    onto_cap_3_zh: "可执行",
    onto_cap_3_desc: "Action 自带前置条件、约束、回滚,Agent 跑得安全。",
    onto_cap_4_title: "Audit",
    onto_cap_4_zh: "可审计",
    onto_cap_4_desc: "每次读写都打 Trace,Rule 命中可查,谁动过都留底。",
    onto_cap_5_title: "Govern",
    onto_cap_5_zh: "可治理",
    onto_cap_5_desc: "权限、Rule 版本、生效范围,在 Ontology 一处集中管。",
    onto_cap_6_title: "Evolve",
    onto_cap_6_zh: "可进化",
    onto_cap_6_desc: "业务变 → Ontology 改 → Agent 自动跟,不重新写代码。",

    // First principle
    onto_principle_label: "FIRST PRINCIPLE",
    onto_principle_title_zh: "语义就是主谓宾。",
    onto_principle_title_en: "Semantics = Subject + Verb + Object.",
    onto_principle_sub: "Everything else is decoration.",
    onto_principle_s_label: "Subject",
    onto_principle_s_val: "Candidate",
    onto_principle_s_cap: "候选人 · 名词 / Data Object",
    onto_principle_v_label: "Verb",
    onto_principle_v_val: "applies-to",
    onto_principle_v_cap: "投递 · 动词 / Action",
    onto_principle_o_label: "Object",
    onto_principle_o_val: "Requirement",
    onto_principle_o_cap: "岗位 · 名词 / Data Object",
    onto_principle_footer: "Foreign Key 在 LLM 时代已经过时。Agent 需要的是 Semantic Context。",
    onto_principle_footer_en: "Foreign Keys are obsolete in the LLM era. Agents need Semantic Context.",

    // Three pillars
    onto_pillars_label: "THREE PILLARS",
    onto_pillars_title: "Ontology 三要素",
    onto_pillars_sub: "名词 + 动词 + 名词 = 语义。这就是 allmeta 的 first principle。",
    onto_pillars_what: "WHAT",
    onto_pillars_how: "HOW",
    onto_pillars_why: "WHY",
    onto_pillars_obj_title: "Data Object",
    onto_pillars_obj_zh: "名词 · 业务实体",
    onto_pillars_obj_l1: "承载业务事实",
    onto_pillars_obj_l2: "Object 之间有 Semantic Links",
    onto_pillars_obj_l3: "Foreign Key → Semantics",
    onto_pillars_act_title: "Action",
    onto_pillars_act_zh: "动词 · 可执行动作",
    onto_pillars_act_l1: "带前置条件 / 约束",
    onto_pillars_act_l2: "动词开头命名",
    onto_pillars_act_l3: "Action 是定义, Agent 是执行",
    onto_pillars_rule_title: "Rule",
    onto_pillars_rule_zh: "规则 · 业务约束",
    onto_pillars_rule_l1: "每条 Rule 有 Rule ID",
    onto_pillars_rule_l2: "Rule = Prompt 片段",
    onto_pillars_rule_l3: "约束 Action,不改 Object",

    // Logic vs Rule
    onto_decouple_label: "DECOUPLING",
    onto_decouple_title: "Logic 与 Rule 必须解耦。",
    onto_decouple_sub: "Decouple Logic from Rule — and lift Rules out of code into a Knowledge Base.",
    onto_decouple_logic_label: "LOGIC",
    onto_decouple_logic_title: "背后的「为什么」",
    onto_decouple_logic_l1: "无形的推导过程",
    onto_decouple_logic_l2: "业务原理 · Why",
    onto_decouple_logic_l3: "由 LLM + Ontology 联合推理",
    onto_decouple_rule_label: "RULE",
    onto_decouple_rule_title: "显性的「怎么做」",
    onto_decouple_rule_l1: "原子化的可执行约束",
    onto_decouple_rule_l2: "Policy ≠ Rule — Policy 要「脱水」为 Rule",
    onto_decouple_rule_l3: "Rule 是 Prompt 片段, 不是 hardcode",
    onto_decouple_footer: "从代码中解耦出来 → 形成企业自己的 Knowledge Base。",
    onto_decouple_footer_en: "Decouple from code → build the enterprise's own Knowledge Base.",

    // Positioning
    onto_position_label: "THE REAL POSITION",
    onto_position_title: "Ontology 是控制大模型幻觉的工具,不是用来取代大模型的。",
    onto_position_title_en: "Ontology is a tool to control LLM hallucination — not a replacement for the model.",
    onto_position_bad1_title: "Only LLM, no Ontology",
    onto_position_bad1_caption: "只有大模型 → 自由幻觉 · 一致性失控 · 业务规则蒸发",
    onto_position_bad2_title: "Only Ontology, no AI",
    onto_position_bad2_caption: "只有本体 → 死结构 · 无法理解自然语言 · 必须人手填",
    onto_position_good: "→ Only when Ontology constrains AI · AI fills Ontology, the system becomes alive.",
    onto_position_good_zh: "只有当 Ontology 约束 AI · AI 填充 Ontology, 系统才会活起来。",

    // Demo
    onto_demo_label: "ONTOLOGY IN MOTION",
    onto_demo_title: "8 个 Agent · 1 个 Ontology.",
    onto_demo_subtitle: "Same brain. Different roles. — 每个 Agent 操作的是同一个 Ontology。",
    onto_demo_stat1: "Shared Ontology",
    onto_demo_stat2: "Ontology Ops",
    onto_demo_stat3: "P50 Latency",
    onto_demo_stat4: "Tokens Used",

    onto_cta_title: "把你的业务变成 Agent 可调用的语义层。",
    onto_cta_title_en: "Turn your business into an agent-callable semantic surface.",
    onto_cta_primary: "进入 Ontology Studio",
    onto_cta_secondary: "看运行时:Agentic Operator",

    // ===== Operator page =====
    op_meta_title: "Agentic Operator — Ontology-Driven Agents Runtime",
    op_meta_desc: "面向规模化部署的智能体操作中枢,事件驱动 · 可视化编排 · 实时追踪 · 端到端 Auto-Pilot, 由 allmeta Ontology 提供语义。",

    op_hero_eyebrow: "Core 02 · the RUNTIME · Q3 · 2026",
    op_hero_h1: "Agentic Operator",
    op_hero_h2: "Ontology-driven agents.",
    op_hero_sub: "规模化部署的智能体控制平面 — 可视化编排, 实时追踪, 通过事件总线统一治理舰队,端到端 Auto-Pilot。",
    op_hero_sub_en: "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus.",
    op_hero_kicker: "From Copilot, to Operator.",
    op_hero_cta_launch: "进入 Operator",
    op_hero_cta_onto: "看大脑:Ontology",

    // Runtime overview
    op_runtime_label: "WHAT IT IS",
    op_runtime_title: "Ontology 是大脑。Operator 让它跑起来。",
    op_runtime_title_en: "Ontology is the brain. The Operator is what makes it run.",
    op_runtime_sub: "Operator 不是一个工作流引擎 — 它是一个能读懂 Ontology 的 Agent 控制平面。",

    // Agent roster
    op_agents_label: "AGENT ROSTER",
    op_agents_title: "六类内建 Agent",
    op_agents_sub: "Same brain, different roles. 全部跑在同一个 Ontology 上。",
    op_agent_planner_title: "Planner Agent",
    op_agent_planner_desc: "把业务请求拆成 Action 序列, 走 Ontology 推理。",
    op_agent_executor_title: "Executor Agent",
    op_agent_executor_desc: "调用 Action API · 处理 Tool 输出 · 写 Object。",
    op_agent_validator_title: "Validator Agent",
    op_agent_validator_desc: "对每条 Rule 做 Pre-/Post-check, 命中即拦。",
    op_agent_reflection_title: "Reflection Agent",
    op_agent_reflection_desc: "对 Match / Score 结果做 LLM 二次评估。",
    op_agent_approval_title: "Approval Agent",
    op_agent_approval_desc: "Human-in-the-loop · 把人塞回流程的关键节点。",
    op_agent_domain_title: "Domain Agents",
    op_agent_domain_desc: "客户场景 Agent · 由 FDE 基于 Ontology 在客户那搭。",

    // Capabilities
    op_caps_label: "PLATFORM CAPABILITIES",
    op_caps_title: "七项核心能力",
    op_cap1_t: "Event-driven Execution",
    op_cap1_d: "事件总线驱动 · 任何状态变化都广播。",
    op_cap2_t: "Tool Use",
    op_cap2_d: "MCP / OpenAPI / SDK · Agent 自带工具栈。",
    op_cap3_t: "State Management",
    op_cap3_d: "Ontology 即状态 · 跨 Agent 共享, 不丢上下文。",
    op_cap4_t: "Rule Validation",
    op_cap4_d: "每条 Rule 都有 ID · Trace 里能查命中。",
    op_cap5_t: "Human Approval",
    op_cap5_d: "把人塞回流程,但只塞在该塞的地方。",
    op_cap6_t: "Traceability",
    op_cap6_d: "Agent · Tool · Rule · Object 全链路 Trace。",
    op_cap7_t: "Evaluation",
    op_cap7_d: "回放 · 比对 · 评分 · 模型/Prompt 进化闭环。",

    // Live trace
    op_trace_label: "LIVE TRACE",
    op_trace_title: "端到端 · Auto-Pilot · 不需要预览",
    op_trace_sub: "Trust the matching. Remove every human-judgment break-point.",
    op_trace_candidate: "CANDIDATE · MATCHED",
    op_trace_candidate_name: "Z. 同学",
    op_trace_candidate_role: "Senior Backend Engineer · 7y",
    op_trace_match: "Match Score",
    op_trace_rule: "Rule Check",
    op_trace_skill: "Skill Overlap",
    op_trace_next: "Next Action",
    op_trace_next_val: "auto-invite",
    op_trace_log_title: "AGENT TRACE · AUTO-PILOTED",
    op_trace_total: "total wall-clock",
    op_trace_kicker: "招聘最后只剩两件事:找资源 + 跟候选人聊。",
    op_trace_kicker_en: "All that's left in recruiting is sourcing + talking to people.",

    op_cta_title: "把你的 Agent 舰队搬上 Ontology。",
    op_cta_title_en: "Move your agent fleet onto an Ontology.",
    op_cta_primary: "进入 Operator",
    op_cta_secondary: "看大脑:Ontology",

    // ===== Technology page =====
    tech_meta_title: "Technology — 6 Layer Architecture · From Records to Actionable Intelligence",
    tech_meta_desc: "allmeta 的六层架构:Enterprise Core / Data & Integration / Ontology / Generation / Agentic Operator / Application。复制架构,不复制产品。",

    tech_hero_eyebrow: "ARCHITECTURE · v0.5",
    tech_hero_h1: "Ontology-driven",
    tech_hero_h2: "Agentic Architecture.",
    tech_hero_sub: "从企业系统升级到 Ontology-Driven AI Agents — 六层架构,一套语义,N 个 Agent。",
    tech_hero_sub_en: "From enterprise systems to ontology-driven AI agents and business applications. Six layers, one semantic, N agents.",

    // 6 layers
    tech_layers_label: "THE STACK",
    tech_layers_title: "六层 · 一套语义",
    tech_layers_title_en: "Six layers — one semantic surface.",
    tech_l1_index: "1",
    tech_l1_title: "Enterprise Core Systems",
    tech_l1_caption: "ECore · ERP · HR · Finance · Procurement · SCADA · Data Platform · Legacy",
    tech_l1_desc: "原有的 System of Records — 保留, 不抛弃。",
    tech_l2_index: "2",
    tech_l2_title: "Data & Integration Layer",
    tech_l2_caption: "API · Data Connector · Event Connector · Data Quality · Time-series · Master Data",
    tech_l2_desc: "实时拿数据进来 · 实时把事件抛出去。",
    tech_l3_index: "3",
    tech_l3_title: "allmeta Ontology Layer",
    tech_l3_caption: "Objects · Relations · Rules · Events · Actions · States · Permissions · Metrics",
    tech_l3_desc: "Semantic and operational core for enterprise AI agents. 这里是 allmeta 的心脏。",
    tech_l4_index: "4",
    tech_l4_title: "Generation Layer",
    tech_l4_caption: "Prompt Engine · Agent Harness · allmeta CodeGen",
    tech_l4_desc: "Ontology → Prompt Package · Ontology → Agent Logic · Ontology → Code。",
    tech_l5_index: "5",
    tech_l5_title: "Agentic Operator",
    tech_l5_caption: "Planner · Executor · Validator · Reflection · Approval · Domain Agents",
    tech_l5_desc: "Ontology-driven Agents Runtime · Event-driven · Trace · Eval。",
    tech_l6_index: "6",
    tech_l6_title: "Application Layer",
    tech_l6_caption: "Fee Control · Recruiting · Water-Wind-Solar · Compliance · PMO",
    tech_l6_desc: "业务定制层 · 每个客户一个 Container。",

    // Generation Layer detail
    tech_gen_label: "GENERATION LAYER",
    tech_gen_title: "Ontology 不只是 brain, 更是 generator。",
    tech_gen_title_en: "Ontology isn't just a brain — it's a generator.",
    tech_gen_a_title: "Prompt Engine",
    tech_gen_a_sub: "Ontology → Prompt Package",
    tech_gen_a_l1: "System Prompt",
    tech_gen_a_l2: "Task Prompt",
    tech_gen_a_l3: "Context Template",
    tech_gen_a_l4: "Tool Instruction",
    tech_gen_a_l5: "Guardrails",
    tech_gen_a_l6: "Evaluation Criteria",
    tech_gen_b_title: "Agent Harness",
    tech_gen_b_sub: "Ontology → Agent Logic",
    tech_gen_b_l1: "Agent Blueprint",
    tech_gen_b_l2: "Workflow",
    tech_gen_b_l3: "Code",
    tech_gen_b_l4: "Tool Binding",
    tech_gen_b_l5: "Event Handler",
    tech_gen_b_l6: "Validation",
    tech_gen_b_l7: "Human-in-the-loop",
    tech_gen_b_l8: "Audit",
    tech_gen_codegen_title: "allmeta CodeGen",
    tech_gen_codegen_sub: "Ontology-driven code generation and engineering enablement.",

    // Scaling law
    tech_scale_label: "THE SCALING LAW",
    tech_scale_title_zh: "复制架构, 不复制产品。",
    tech_scale_title_en: "Copy the architecture. Don't copy the product.",
    tech_scale_bad1_title: "标准化产品",
    tech_scale_bad1_sub: "Standardized product",
    tech_scale_bad1_desc: "国央企用不起来 — 业务都不一样",
    tech_scale_bad2_title: "纯定制项目",
    tech_scale_bad2_sub: "Pure custom project",
    tech_scale_bad2_desc: "做完一个客户的厨房, 下一个客户重新做",
    tech_scale_good_title: "复制架构",
    tech_scale_good_sub: "Replicate the architecture",
    tech_scale_good_desc: "通用层一套架构 + N 个客户独立 Ontology",

    // 3 servers
    tech_servers_label: "THREE AGENTIC SERVERS",
    tech_servers_title: "三同构 · 一架构 · N 客户",
    tech_servers_title_en: "Three Agentic Servers — same architecture, different business.",
    tech_servers_platform: "allmeta 通用层 (Platform Generic Layer)",
    tech_servers_platform_items: "ECore + Inference Engine + Rule Generator + Code Generator + 6 Builders",
    tech_servers_raas_title: "RAAS",
    tech_servers_raas_sub: "Recruiting AS",
    tech_servers_raas_cust: "某科技大厂 · 中软国际",
    tech_servers_ecas_title: "ECAS",
    tech_servers_ecas_sub: "E-Commerce AS",
    tech_servers_ecas_cust: "某能源央企 · 财务变革",
    tech_servers_geas_title: "GEAS",
    tech_servers_geas_sub: "Generate Electricity AS",
    tech_servers_geas_cust: "某发电集团 · 水风光三业务",
    tech_servers_footer: "每个客户独立 Container · 业务 Ontology 不进 allmeta · 同构架构可复制。",

    // Ecosystem
    tech_eco_label: "ECOSYSTEM",
    tech_eco_title: "战略合作伙伴 — model · cloud · industry",
    tech_eco_huawei: "华为云",
    tech_eco_huawei_en: "HUAWEI CLOUD",
    tech_eco_huawei_role: "算力底座 · 国产生态",
    tech_eco_volcano: "字节火山",
    tech_eco_volcano_en: "Volcano Engine",
    tech_eco_volcano_role: "AI Coding · 模型 · 端到端 AI 软件工程",
    tech_eco_moon: "Moonshot",
    tech_eco_moon_en: "Kimi K-Series",
    tech_eco_moon_role: "拳头模型同步推进 · 共建企业级 ARR",
    tech_eco_cs: "中软国际",
    tech_eco_cs_en: "ChinaSoft Intl",
    tech_eco_cs_role: "行业 · 客户 · FDE",

    // Roadmap
    tech_roadmap_label: "ROADMAP",
    tech_roadmap_title_zh: "今天起步,一年走完。",
    tech_roadmap_title_en: "Start today. Walk it in a year.",

    // ===== Misc CTA =====
    cta_launch: "进入控制台",
    cta_book_demo: "预约 Demo",
    cta_learn_more: "了解更多",
    cta_explore: "深入了解",

    topbar_lang: "语言",
    topbar_theme: "主题",
    theme_light: "亮",
    theme_dark: "暗",
  },

  // ====================================================================
  // ===== ENGLISH ======================================================
  // ====================================================================
  en: {
    brand_tag_zh: "新一代企业智能业务操作系统",
    brand_tag_en: "Beyond ERP. Make Enterprise AI-Native.",
    brand_motto: "模思 · 故我在",
    brand_motto_en: "Cogito ergo sum — Modeled, therefore I am.",

    nav_home: "Home",
    nav_ontology: "Ontology",
    nav_operator: "Operator",
    nav_technology: "Technology",
    nav_launch: "Launch console",
    nav_book_demo: "Book a demo",

    footer_copyright: "© 2026 allm²eta · ChinaSoft International AI Center of Excellence",
    footer_version: "v0.5 · Ontology",
    footer_links_product: "Product",
    footer_links_company: "Company",
    footer_links_resources: "Resources",
    footer_links_legal: "Legal",
    footer_about: "About",
    footer_partners: "Partners",
    footer_blog: "Blog",
    footer_docs: "Docs",
    footer_changelog: "Changelog",
    footer_security: "Security",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_addr: "ChinaSoft International · Shanghai West Bund",
    footer_made_with: "Hand-crafted in Shanghai · Beijing · Shenzhen.",

    // Home
    home_hero_eyebrow: "v0.5 · Shipped at Shanghai West Bund · Huawei Cloud Inspire 2026",
    home_hero_h1_1: "Beyond ERP.",
    home_hero_h1_2: "Make Enterprise",
    home_hero_h1_3: "AI-Native.",
    home_hero_sub_zh: "把企业业务变成 AI Agent 可理解 · 可调用 · 可执行 · 可审计 · 可治理 · 可进化 的企业操作界面。",
    home_hero_sub_en:
      "Turn business objects, rules, processes and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    home_hero_cta_primary: "Explore Ontology",
    home_hero_cta_secondary: "Explore Operator",
    home_hero_cta_tech: "See the architecture",
    home_hero_stat_agents: "Parallel agents",
    home_hero_stat_wallclock: "End-to-end wall-clock",
    home_hero_stat_breaks: "Human break-points",

    home_gap_label: "ACT 01 · THE GAP",
    home_gap_title_zh: "你的 ERP, 跑得动 AI 吗?",
    home_gap_title_en: "Does your ERP run AI?",
    home_gap_stat_before: "10%",
    home_gap_stat_after: "60%",
    home_gap_stat_caption: "三年内,客户在企业软件上的钱,一半以上会付给 AI。",
    home_gap_stat_caption_en: "Within three years, more than half of enterprise software budget will be spent on AI · 2024 → 2027.",
    home_gap_quote: "“We bought a global ERP, ran it for a year, and saw nothing.”",
    home_gap_quote_attr: "It's not the product. The ERP paradigm only solves half the problem.",
    home_gap_quote_en: "The other half is called Actions.",

    home_gap_box1_label: "LLM",
    home_gap_box1_zh: "Large Models",
    home_gap_box1_verb: "Understands",
    home_gap_box1_caption: "comprehension",
    home_gap_box2_label: "???",
    home_gap_box2_zh: "The missing layer",
    home_gap_box2_verb: "Translates",
    home_gap_box2_caption: "Turning business into Agent-callable semantics",
    home_gap_box2_caption_en: "Turning business into Agent-callable semantics",
    home_gap_box3_label: "Agent",
    home_gap_box3_zh: "AI Agents",
    home_gap_box3_verb: "Executes",
    home_gap_box3_caption: "task execution",
    home_gap_h2_zh: "What enterprises are actually missing is",
    home_gap_h2_em: "the layer in the middle",
    home_gap_h2_zh_after: ".",

    home_sysrec_label: "System of Records",
    home_sysrec_title: "ERP does Management.",
    home_sysrec_sub: "But it does *not* Operate.",
    home_sysrec_caption: "Transactions · Compliance · Audit & Reporting",
    home_sysrec_caption_en: "Transactions · Compliance · Audit & Reporting",
    home_sysact_label: "System of Actions",
    home_sysact_title: "Ontology + Agent does Operate.",
    home_sysact_sub: "Understands · Invokes · Executes · Evolves",
    home_sysact_caption: "Agent-driven operations · Live ontology that evolves with business · Auto-pilot, traceable, governable",

    home_trinity_label: "ACT 02 · TRINITY ARCHITECTURE",
    home_trinity_title: "Trinity",
    home_trinity_title_en: "Three layers, one operating system.",
    home_trinity_top_label: "AI ↑",
    home_trinity_top_subtitle: "System of Actions",
    home_trinity_top_title: "Agent Layer",
    home_trinity_top_caption: "AI workforce · autonomous / co-pilot / human-in-the-loop",
    home_trinity_top_note: "Assembled at the customer by FDEs",
    home_trinity_mid_label: "—",
    home_trinity_mid_subtitle: "Actionable Ontology",
    home_trinity_mid_title: "Cognition Core",
    home_trinity_mid_caption: "Data Object · Action · Rule",
    home_trinity_mid_note: "The agent's cognitive brain · controls LLM hallucination",
    home_trinity_bot_label: "DATA ↓",
    home_trinity_bot_subtitle: "System of Records",
    home_trinity_bot_title: "ERP / CRM / MES / Finance",
    home_trinity_bot_caption: "Transactions · Compliance · Audit",
    home_trinity_bot_note: "Existing control retained — nothing lost",
    home_trinity_footer: "The green layer — Ontology — is where allmeta is genuinely different.",
    home_trinity_footer_en: "The green layer — Ontology — is where allmeta is genuinely different.",

    home_products_label: "ACT 03 · THE DUAL CORE",
    home_products_title: "Ontology × Operator",
    home_products_subtitle: "One makes agents think. One makes them run.",
    home_products_subtitle_en: "One makes agents think. One makes them run.",

    product_ontology_chip: "CORE · the BRAIN",
    product_ontology_title: "allm²eta Ontology",
    product_ontology_subtitle: "The Actionable Ontology Platform",
    product_ontology_desc:
      "An AI-first ontology studio. Author Objects, Rules, Actions and Events on one semantic surface — built for machine reasoning, agent planning, and natural-language interaction.",
    product_ontology_desc_en:
      "An AI-first ontology studio. Author Objects, Rules, Actions and Events on one semantic surface — built for machine reasoning, agent planning, and natural-language interaction.",
    product_ontology_features:
      "Objects · Actions · Rules · Events · Policies · 10 Builders",

    product_operator_chip: "CORE · the RUNTIME",
    product_operator_title: "Agentic Operator",
    product_operator_subtitle: "Ontology-Driven Agents Runtime",
    product_operator_desc:
      "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus, and run end-to-end Auto-Pilot.",
    product_operator_desc_en:
      "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus, and run end-to-end Auto-Pilot.",
    product_operator_features:
      "Planner · Executor · Validator · Reflection · Approval · Traceability",

    home_demo_label: "ACT 04 · DEMO RECAP",
    home_demo_title_zh: "What you just saw.",
    home_demo_title_en: "What just ran — live, in production.",
    home_demo_caption_zh: "ChinaSoft RAAS · end-to-end recruiting auto-pilot",
    home_demo_caption_en: "ChinaSoft RAAS · end-to-end recruiting auto-pilot · real resume, real JD, real agents.",
    home_demo_stat1_value: "8",
    home_demo_stat1_label: "Agents",
    home_demo_stat1_caption: "Event-driven · parallel execution",
    home_demo_stat2_value: "3.5s",
    home_demo_stat2_label: "Wall-clock",
    home_demo_stat2_caption: "End-to-end · production traffic",
    home_demo_stat3_value: "0",
    home_demo_stat3_label: "Human Breaks",
    home_demo_stat3_caption: "Auto-pilot · no manual hand-offs",
    home_demo_punchline: "Not Mock Data. Not a Slide. Real Agents.",
    home_demo_punchline_zh: "Real agents running.",

    home_roadmap_label: "ACT 05 · THE NEXT MILE",
    home_roadmap_title_zh: "Start today. Walk it in a year.",
    home_roadmap_title_en: "Start today. Walk it in a year.",
    home_roadmap_caption: "Today we light up the brain. Tomorrow the brain grows its own muscles, skeleton, and skin — that's enterprise AI-native.",
    home_roadmap_caption_en: "Today we light up the brain. Tomorrow the brain grows its own muscles, skeleton, and skin — that's enterprise AI-native.",
    home_roadmap_now: "NOW · Jun 2026",
    home_roadmap_q3: "Q3 · 2026",
    home_roadmap_q4: "Q4 · 2026",
    home_roadmap_eoy: "EOY · 2026",
    home_roadmap_2027: "2027+",
    home_roadmap_step1_title: "allmeta Ontology",
    home_roadmap_step1_caption: "the Brain · launched today",
    home_roadmap_step2_title: "Agent Operator",
    home_roadmap_step2_caption: "the Runtime",
    home_roadmap_step3_title: "allmeta Code",
    home_roadmap_step3_caption: "Builder suite · Ontology writes its own code",
    home_roadmap_step3_caption_en: "Builder suite · Ontology writes its own code",
    home_roadmap_step4_title: "Full Platform",
    home_roadmap_step4_caption: "Generic layer + three Agentic Servers",
    home_roadmap_step5_title: "Enterprise AI-Native",
    home_roadmap_step5_caption: "AI budget 60%+ · the enterprise grows its own AI",

    home_closing_label: "ONE LAST THING.",
    home_closing_h1_top: "Code is dead.",
    home_closing_h1: "Knowledge is King.",
    home_closing_zh: "The knowledge an enterprise accumulates — that is its real moat.",
    home_closing_zh_top: "“Code is King” is over —",
    home_closing_kicker: "We don't sell software. We sell Tokens & APIs.",
    home_closing_kicker_zh: "We don't sell software. We sell Tokens & APIs.",
    home_closing_cta: "Enter Ontology",
    home_closing_cta2: "Enter Operator",

    // Ontology page
    onto_meta_title: "allm²eta Ontology — The Actionable Ontology Platform for Enterprise Agents",
    onto_meta_desc: "Turn business objects, rules, and actions into an enterprise semantic surface AI agents can call. One ontology runs N agents.",

    onto_hero_eyebrow: "Core 01 · the BRAIN · v0.5",
    onto_hero_h1: "allmeta Ontology",
    onto_hero_h2: "the Actionable Ontology.",
    onto_hero_sub: "Turn business objects, rules, permissions, processes, events, and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    onto_hero_sub_en: "Turn business objects, rules, permissions, processes, events, and actions into an Enterprise Operation Surface that AI agents can understand, invoke, execute, audit, govern, and evolve.",
    onto_hero_kicker: "From Copilot, to Operator.",
    onto_hero_cta_launch: "Launch Ontology Studio",
    onto_hero_cta_arch: "See the architecture",

    onto_cap_label: "WHAT IT DOES",
    onto_cap_title: "Six Capabilities",
    onto_cap_subtitle: "Upgrade ERP's 'System of Records' to a 'System of Actions'.",
    onto_cap_1_title: "Understand",
    onto_cap_1_zh: "可理解",
    onto_cap_1_desc: "Agents read business objects, rules and processes in natural language.",
    onto_cap_2_title: "Invoke",
    onto_cap_2_zh: "可调用",
    onto_cap_2_desc: "Every Action is exposed as a callable API — agents invoke them directly.",
    onto_cap_3_title: "Execute",
    onto_cap_3_zh: "可执行",
    onto_cap_3_desc: "Actions carry pre-conditions, constraints, and rollback — agents run safely.",
    onto_cap_4_title: "Audit",
    onto_cap_4_zh: "可审计",
    onto_cap_4_desc: "Every read/write is traced. Rule hits are queryable. Every actor leaves a record.",
    onto_cap_5_title: "Govern",
    onto_cap_5_zh: "可治理",
    onto_cap_5_desc: "Permissions, rule versions, and scope — all centrally governed in the Ontology.",
    onto_cap_6_title: "Evolve",
    onto_cap_6_zh: "可进化",
    onto_cap_6_desc: "Business changes → Ontology changes → Agents follow. No code rewrite.",

    onto_principle_label: "FIRST PRINCIPLE",
    onto_principle_title_zh: "Semantics = Subject + Verb + Object.",
    onto_principle_title_en: "Semantics = Subject + Verb + Object.",
    onto_principle_sub: "Everything else is decoration.",
    onto_principle_s_label: "Subject",
    onto_principle_s_val: "Candidate",
    onto_principle_s_cap: "Noun · Data Object",
    onto_principle_v_label: "Verb",
    onto_principle_v_val: "applies-to",
    onto_principle_v_cap: "Verb · Action",
    onto_principle_o_label: "Object",
    onto_principle_o_val: "Requirement",
    onto_principle_o_cap: "Noun · Data Object",
    onto_principle_footer: "Foreign Keys are obsolete in the LLM era. Agents need Semantic Context.",
    onto_principle_footer_en: "Foreign Keys are obsolete in the LLM era. Agents need Semantic Context.",

    onto_pillars_label: "THREE PILLARS",
    onto_pillars_title: "Three Pillars of allmeta Ontology",
    onto_pillars_sub: "Noun + Verb + Noun = Semantics. This is allmeta's first principle.",
    onto_pillars_what: "WHAT",
    onto_pillars_how: "HOW",
    onto_pillars_why: "WHY",
    onto_pillars_obj_title: "Data Object",
    onto_pillars_obj_zh: "Noun · Business Entity",
    onto_pillars_obj_l1: "Carries business facts",
    onto_pillars_obj_l2: "Objects connect via Semantic Links",
    onto_pillars_obj_l3: "Foreign Key → Semantics",
    onto_pillars_act_title: "Action",
    onto_pillars_act_zh: "Verb · Executable",
    onto_pillars_act_l1: "Carries preconditions / constraints",
    onto_pillars_act_l2: "Verb-prefixed naming",
    onto_pillars_act_l3: "Actions define · Agents execute",
    onto_pillars_rule_title: "Rule",
    onto_pillars_rule_zh: "Rule · Business Constraint",
    onto_pillars_rule_l1: "Every Rule has a Rule ID",
    onto_pillars_rule_l2: "Rule = Prompt fragment",
    onto_pillars_rule_l3: "Constrains Actions, never mutates Objects",

    onto_decouple_label: "DECOUPLING",
    onto_decouple_title: "Logic and Rule must be decoupled.",
    onto_decouple_sub: "Decouple Logic from Rule — and lift Rules out of code into a Knowledge Base.",
    onto_decouple_logic_label: "LOGIC",
    onto_decouple_logic_title: "The implicit \"why\"",
    onto_decouple_logic_l1: "Invisible inference process",
    onto_decouple_logic_l2: "Business principle · the Why",
    onto_decouple_logic_l3: "Joint reasoning by LLM + Ontology",
    onto_decouple_rule_label: "RULE",
    onto_decouple_rule_title: "The explicit \"how\"",
    onto_decouple_rule_l1: "Atomic, executable constraint",
    onto_decouple_rule_l2: "Policy ≠ Rule — policies must be \"dehydrated\" into rules",
    onto_decouple_rule_l3: "Rule is a prompt fragment, not hardcode",
    onto_decouple_footer: "Decouple from code → build the enterprise's own Knowledge Base.",
    onto_decouple_footer_en: "Decouple from code → build the enterprise's own Knowledge Base.",

    onto_position_label: "THE REAL POSITION",
    onto_position_title: "Ontology is a tool to control LLM hallucination — not a replacement for the model.",
    onto_position_title_en: "Ontology is a tool to control LLM hallucination — not a replacement for the model.",
    onto_position_bad1_title: "Only LLM, no Ontology",
    onto_position_bad1_caption: "Free hallucination · consistency loss · business rules evaporate.",
    onto_position_bad2_title: "Only Ontology, no AI",
    onto_position_bad2_caption: "Dead structure · no natural-language understanding · must be hand-filled.",
    onto_position_good: "→ Only when Ontology constrains AI · AI fills Ontology, the system becomes alive.",
    onto_position_good_zh: "Only when Ontology constrains AI, and AI fills Ontology, does the system come alive.",

    onto_demo_label: "ONTOLOGY IN MOTION",
    onto_demo_title: "8 Agents · 1 Ontology.",
    onto_demo_subtitle: "Same brain. Different roles. Every agent operates on the same Ontology.",
    onto_demo_stat1: "Shared Ontology",
    onto_demo_stat2: "Ontology Ops",
    onto_demo_stat3: "P50 Latency",
    onto_demo_stat4: "Tokens Used",

    onto_cta_title: "Turn your business into an agent-callable semantic surface.",
    onto_cta_title_en: "Turn your business into an agent-callable semantic surface.",
    onto_cta_primary: "Launch Ontology Studio",
    onto_cta_secondary: "See the runtime: Agentic Operator",

    // Operator page
    op_meta_title: "Agentic Operator — Ontology-Driven Agents Runtime",
    op_meta_desc: "An operating console for AI agent fleets at scale. Event-driven, visually orchestrated, fully traced, end-to-end auto-pilot — powered by allmeta Ontology.",

    op_hero_eyebrow: "Core 02 · the RUNTIME · Q3 · 2026",
    op_hero_h1: "Agentic Operator",
    op_hero_h2: "Ontology-driven agents.",
    op_hero_sub: "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus.",
    op_hero_sub_en: "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, govern the fleet through an event bus.",
    op_hero_kicker: "From Copilot, to Operator.",
    op_hero_cta_launch: "Enter Operator",
    op_hero_cta_onto: "See the brain: Ontology",

    op_runtime_label: "WHAT IT IS",
    op_runtime_title: "Ontology is the brain. The Operator is what makes it run.",
    op_runtime_title_en: "Ontology is the brain. The Operator is what makes it run.",
    op_runtime_sub: "Operator isn't a workflow engine — it's an agent control plane that reads the Ontology natively.",

    op_agents_label: "AGENT ROSTER",
    op_agents_title: "Six built-in agent classes",
    op_agents_sub: "Same brain, different roles — all running on one Ontology.",
    op_agent_planner_title: "Planner Agent",
    op_agent_planner_desc: "Decomposes business requests into Action sequences via Ontology inference.",
    op_agent_executor_title: "Executor Agent",
    op_agent_executor_desc: "Calls Action APIs, handles tool output, writes Objects.",
    op_agent_validator_title: "Validator Agent",
    op_agent_validator_desc: "Runs pre-/post-checks against every Rule — blocks on hit.",
    op_agent_reflection_title: "Reflection Agent",
    op_agent_reflection_desc: "Re-evaluates Match/Score results with an LLM second pass.",
    op_agent_approval_title: "Approval Agent",
    op_agent_approval_desc: "Human-in-the-loop — places people back at the critical break-points.",
    op_agent_domain_title: "Domain Agents",
    op_agent_domain_desc: "Customer-scenario agents — assembled at the customer by FDEs on top of the Ontology.",

    op_caps_label: "PLATFORM CAPABILITIES",
    op_caps_title: "Seven core capabilities",
    op_cap1_t: "Event-driven Execution",
    op_cap1_d: "Event-bus driven · every state change is broadcast.",
    op_cap2_t: "Tool Use",
    op_cap2_d: "MCP / OpenAPI / SDK — every agent ships with its toolchain.",
    op_cap3_t: "State Management",
    op_cap3_d: "Ontology is the state · shared across agents · context never lost.",
    op_cap4_t: "Rule Validation",
    op_cap4_d: "Each rule has an ID · trace shows exactly which rules hit.",
    op_cap5_t: "Human Approval",
    op_cap5_d: "Humans plugged back in, but only where they belong.",
    op_cap6_t: "Traceability",
    op_cap6_d: "Full-chain trace across Agent · Tool · Rule · Object.",
    op_cap7_t: "Evaluation",
    op_cap7_d: "Replay · diff · score — closed-loop model/prompt evolution.",

    op_trace_label: "LIVE TRACE",
    op_trace_title: "End-to-end · Auto-pilot · No preview needed",
    op_trace_sub: "Trust the matching. Remove every human-judgment break-point.",
    op_trace_candidate: "CANDIDATE · MATCHED",
    op_trace_candidate_name: "Z. Candidate",
    op_trace_candidate_role: "Senior Backend Engineer · 7y",
    op_trace_match: "Match Score",
    op_trace_rule: "Rule Check",
    op_trace_skill: "Skill Overlap",
    op_trace_next: "Next Action",
    op_trace_next_val: "auto-invite",
    op_trace_log_title: "AGENT TRACE · AUTO-PILOTED",
    op_trace_total: "total wall-clock",
    op_trace_kicker: "All that's left in recruiting is sourcing + talking to people.",
    op_trace_kicker_en: "All that's left in recruiting is sourcing + talking to people.",

    op_cta_title: "Move your agent fleet onto an Ontology.",
    op_cta_title_en: "Move your agent fleet onto an Ontology.",
    op_cta_primary: "Enter Operator",
    op_cta_secondary: "See the brain: Ontology",

    // Technology
    tech_meta_title: "Technology — 6 Layer Architecture · From Records to Actionable Intelligence",
    tech_meta_desc: "allmeta's six-layer architecture: Enterprise Core / Data & Integration / Ontology / Generation / Agentic Operator / Application. Copy the architecture, not the product.",

    tech_hero_eyebrow: "ARCHITECTURE · v0.5",
    tech_hero_h1: "Ontology-driven",
    tech_hero_h2: "Agentic Architecture.",
    tech_hero_sub: "From enterprise systems to ontology-driven AI agents — six layers, one semantic, N agents.",
    tech_hero_sub_en: "From enterprise systems to ontology-driven AI agents and business applications. Six layers, one semantic, N agents.",

    tech_layers_label: "THE STACK",
    tech_layers_title: "Six layers — one semantic surface.",
    tech_layers_title_en: "Six layers — one semantic surface.",
    tech_l1_index: "1",
    tech_l1_title: "Enterprise Core Systems",
    tech_l1_caption: "ECore · ERP · HR · Finance · Procurement · SCADA · Data Platform · Legacy",
    tech_l1_desc: "The existing System of Records — kept, never thrown away.",
    tech_l2_index: "2",
    tech_l2_title: "Data & Integration Layer",
    tech_l2_caption: "API · Data Connector · Event Connector · Data Quality · Time-series · Master Data",
    tech_l2_desc: "Live data in. Live events out.",
    tech_l3_index: "3",
    tech_l3_title: "allmeta Ontology Layer",
    tech_l3_caption: "Objects · Relations · Rules · Events · Actions · States · Permissions · Metrics",
    tech_l3_desc: "Semantic and operational core for enterprise AI agents. This is allmeta's heart.",
    tech_l4_index: "4",
    tech_l4_title: "Generation Layer",
    tech_l4_caption: "Prompt Engine · Agent Harness · allmeta CodeGen",
    tech_l4_desc: "Ontology → Prompt Package · Ontology → Agent Logic · Ontology → Code.",
    tech_l5_index: "5",
    tech_l5_title: "Agentic Operator",
    tech_l5_caption: "Planner · Executor · Validator · Reflection · Approval · Domain Agents",
    tech_l5_desc: "Ontology-driven Agents Runtime · event-driven · traced · evaluated.",
    tech_l6_index: "6",
    tech_l6_title: "Application Layer",
    tech_l6_caption: "Fee Control · Recruiting · Water-Wind-Solar · Compliance · PMO",
    tech_l6_desc: "Per-customer container — business customization lives here.",

    tech_gen_label: "GENERATION LAYER",
    tech_gen_title: "Ontology isn't just a brain — it's a generator.",
    tech_gen_title_en: "Ontology isn't just a brain — it's a generator.",
    tech_gen_a_title: "Prompt Engine",
    tech_gen_a_sub: "Ontology → Prompt Package",
    tech_gen_a_l1: "System Prompt",
    tech_gen_a_l2: "Task Prompt",
    tech_gen_a_l3: "Context Template",
    tech_gen_a_l4: "Tool Instruction",
    tech_gen_a_l5: "Guardrails",
    tech_gen_a_l6: "Evaluation Criteria",
    tech_gen_b_title: "Agent Harness",
    tech_gen_b_sub: "Ontology → Agent Logic",
    tech_gen_b_l1: "Agent Blueprint",
    tech_gen_b_l2: "Workflow",
    tech_gen_b_l3: "Code",
    tech_gen_b_l4: "Tool Binding",
    tech_gen_b_l5: "Event Handler",
    tech_gen_b_l6: "Validation",
    tech_gen_b_l7: "Human-in-the-loop",
    tech_gen_b_l8: "Audit",
    tech_gen_codegen_title: "allmeta CodeGen",
    tech_gen_codegen_sub: "Ontology-driven code generation and engineering enablement.",

    tech_scale_label: "THE SCALING LAW",
    tech_scale_title_zh: "Copy the architecture. Don't copy the product.",
    tech_scale_title_en: "Copy the architecture. Don't copy the product.",
    tech_scale_bad1_title: "Standardized product",
    tech_scale_bad1_sub: "One-size-fits-all",
    tech_scale_bad1_desc: "Doesn't work for SOE — every business is different.",
    tech_scale_bad2_title: "Pure custom project",
    tech_scale_bad2_sub: "Rebuild every time",
    tech_scale_bad2_desc: "Finish one customer's kitchen, start over for the next.",
    tech_scale_good_title: "Replicate the architecture",
    tech_scale_good_sub: "One generic layer, N customer ontologies",
    tech_scale_good_desc: "One generic architecture + N independent customer Ontologies.",

    tech_servers_label: "THREE AGENTIC SERVERS",
    tech_servers_title: "Three Agentic Servers — same architecture",
    tech_servers_title_en: "Three Agentic Servers — same architecture, different business.",
    tech_servers_platform: "allmeta Platform Generic Layer",
    tech_servers_platform_items: "ECore + Inference Engine + Rule Generator + Code Generator + 6 Builders",
    tech_servers_raas_title: "RAAS",
    tech_servers_raas_sub: "Recruiting AS",
    tech_servers_raas_cust: "Tier-1 tech customer · ChinaSoft Intl",
    tech_servers_ecas_title: "ECAS",
    tech_servers_ecas_sub: "E-Commerce AS",
    tech_servers_ecas_cust: "SOE energy customer · Finance transformation",
    tech_servers_geas_title: "GEAS",
    tech_servers_geas_sub: "Generate Electricity AS",
    tech_servers_geas_cust: "Power group · Hydro / Wind / Solar",
    tech_servers_footer: "Per-customer container · business Ontology never enters allmeta · architecture replicates.",

    tech_eco_label: "ECOSYSTEM",
    tech_eco_title: "Strategic partners — model · cloud · industry",
    tech_eco_huawei: "Huawei Cloud",
    tech_eco_huawei_en: "HUAWEI CLOUD",
    tech_eco_huawei_role: "Compute foundation · domestic ecosystem",
    tech_eco_volcano: "Volcano Engine",
    tech_eco_volcano_en: "ByteDance · Volcano",
    tech_eco_volcano_role: "AI Coding · models · end-to-end AI software engineering",
    tech_eco_moon: "Moonshot",
    tech_eco_moon_en: "Kimi K-Series",
    tech_eco_moon_role: "Flagship model alignment · enterprise ARR co-build",
    tech_eco_cs: "ChinaSoft International",
    tech_eco_cs_en: "中软国际",
    tech_eco_cs_role: "Industry · customers · FDE",

    tech_roadmap_label: "ROADMAP",
    tech_roadmap_title_zh: "Start today. Walk it in a year.",
    tech_roadmap_title_en: "Start today. Walk it in a year.",

    cta_launch: "Launch console",
    cta_book_demo: "Book a demo",
    cta_learn_more: "Learn more",
    cta_explore: "Explore",

    topbar_lang: "Language",
    topbar_theme: "Theme",
    theme_light: "Light",
    theme_dark: "Dark",
  },
};

type Ctx = {
  lang: Lang;
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  toggleTheme: () => void;
};

const LangContext = React.createContext<Ctx>({
  lang: "zh",
  t: (k) => k,
  setLang: () => {},
  toggleLang: () => {},
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function readThemeFromDOM(): "light" | "dark" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyTheme(next: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("allmeta:theme", next); } catch {}
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("zh");
  const [theme, setThemeState] = React.useState<"light" | "dark">(readThemeFromDOM);

  React.useEffect(() => {
    const storedLang = (typeof window !== "undefined" ? localStorage.getItem("allmeta:lang") : null) as Lang | null;
    if (storedLang === "zh" || storedLang === "en") setLangState(storedLang);
    else {
      const n = (typeof navigator !== "undefined" ? navigator.language : "zh").toLowerCase();
      setLangState(n.startsWith("zh") ? "zh" : "en");
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("allmeta:lang", lang);
  }, [lang]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    function onPageShow(e: PageTransitionEvent) {
      if (!e.persisted) return;
      let stored: string | null = null;
      try { stored = localStorage.getItem("allmeta:theme"); } catch {}
      const next: "light" | "dark" = stored === "light" ? "light" : "dark";
      applyTheme(next);
      setThemeState((prev) => (prev !== next ? next : prev));
    }
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const t = React.useCallback(
    (k: string) => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k,
    [lang]
  );

  const setLang = React.useCallback((l: Lang) => setLangState(l), []);

  const setTheme = React.useCallback((tt: "light" | "dark") => {
    applyTheme(tt);
    setThemeState(tt);
  }, []);

  const toggleLang = React.useCallback(
    () => setLangState((prev) => (prev === "zh" ? "en" : "zh")),
    []
  );
  const toggleTheme = React.useCallback(() => {
    const current = readThemeFromDOM();
    const next: "light" | "dark" = current === "light" ? "dark" : "light";
    applyTheme(next);
    setThemeState(next);
  }, []);

  return (
    <LangContext.Provider
      value={{ lang, t, setLang, toggleLang, theme, setTheme, toggleTheme }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useApp() {
  return React.useContext(LangContext);
}
