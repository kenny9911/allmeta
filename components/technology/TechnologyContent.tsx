"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import Hero from "./Hero";
import SixLayers from "./SixLayers";
import GenerationLayer from "./GenerationLayer";
import ScalingLaw from "./ScalingLaw";
import ThreeServers from "./ThreeServers";
import Ecosystem from "./Ecosystem";
import Roadmap from "@/components/home/sections/Roadmap";

export default function TechnologyContent() {
  return (
    <PageShell>
      <Hero />
      <SixLayers />
      <GenerationLayer />
      <ScalingLaw />
      <ThreeServers />
      <Ecosystem />
      <Roadmap />
    </PageShell>
  );
}
