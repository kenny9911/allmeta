"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import type { LaunchMap } from "@/lib/products";
import Hero from "./Hero";
import SixLayers from "./SixLayers";
import GenerationLayer from "./GenerationLayer";
import ScalingLaw from "./ScalingLaw";
import ThreeServers from "./ThreeServers";
import Ecosystem from "./Ecosystem";
import RoadmapV2 from "@/components/home/v2/RoadmapV2";

export default function TechnologyContent({ launch }: { launch?: LaunchMap }) {
  return (
    <PageShell launch={launch}>
      <Hero />
      <SixLayers />
      <GenerationLayer />
      <ScalingLaw />
      <ThreeServers />
      <Ecosystem />
      <RoadmapV2 />
    </PageShell>
  );
}
