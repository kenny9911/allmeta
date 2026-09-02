"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import type { LaunchMap } from "@/lib/products";
import Hero from "./Hero";
import ArchitectureV2 from "./ArchitectureV2";
import CognitionV2 from "./CognitionV2";
import ProductTech from "./ProductTech";
import BoundaryV2 from "./BoundaryV2";

/** Technology, in the order an engineer needs it: the claim (hero), the
 *  shape of the system (architecture), what an agent actually is inside it
 *  (cognition), what each product contributes (products), and where all of
 *  it physically runs and what crosses out (boundary). */
export default function TechnologyContent({ launch }: { launch?: LaunchMap }) {
  return (
    <PageShell launch={launch}>
      <Hero />
      <ArchitectureV2 />
      <CognitionV2 />
      <ProductTech />
      <BoundaryV2 />
    </PageShell>
  );
}
