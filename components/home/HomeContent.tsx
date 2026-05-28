"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import HeroV2 from "./v2/HeroV2";
import TrustStripV2 from "./v2/TrustStripV2";
import PositionV2 from "./v2/PositionV2";
import ProductBentoV2 from "./v2/ProductBentoV2";
import LiveInProdV2 from "./v2/LiveInProdV2";
import ArchPreviewV2 from "./v2/ArchPreviewV2";
import RoadmapV2 from "./v2/RoadmapV2";
import ClosingV2 from "./v2/ClosingV2";

export default function HomeContent({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  return (
    <PageShell>
      <HeroV2 />
      <TrustStripV2 />
      <PositionV2 />
      <ProductBentoV2 ontologyUrl={ontologyUrl} operatorUrl={operatorUrl} />
      <LiveInProdV2 />
      <ArchPreviewV2 />
      <RoadmapV2 />
      <ClosingV2 />
    </PageShell>
  );
}
