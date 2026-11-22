import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo({ children, className }) {
  return (
    <WavyBackground
      className={className}
      blur={6}
      speed="slow"
      waveOpacity={0.28}
      isFixed={true}
    >
      {children}
    </WavyBackground>
  );
}
