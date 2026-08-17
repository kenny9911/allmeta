"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import type { LaunchMap } from "@/lib/products";
import HeroV2 from "./v2/HeroV2";
import SuiteFlowV2 from "./v2/SuiteFlowV2";
import ProductSuiteV2 from "./v2/ProductSuiteV2";
import DualityV2 from "./v2/DualityV2";
import HarnessV2 from "./v2/HarnessV2";
import ArchPreviewV2 from "./v2/ArchPreviewV2";
import RoadmapV2 from "./v2/RoadmapV2";
import ClosingV2 from "./v2/ClosingV2";

/** Section order tells the story in the order a visitor needs it:
 *  what we claim (hero) → what the suite *is* (flow) → how to get into
 *  each product (grid) → why it works this way (thesis) → proof (live)
 *  → how it's built (architecture) → where it's going (roadmap). */
export default function HomeContent({ launch }: { launch: LaunchMap }) {
  return (
    <PageShell launchUrl={launch.studio} launch={launch}>
      <HeroV2 />
      <SuiteFlowV2 />
      <ProductSuiteV2 launch={launch} />
      <DualityV2 />
      <HarnessV2 />
      <ArchPreviewV2 />
      <RoadmapV2 />
      <ClosingV2 />
    </PageShell>
  );
}
