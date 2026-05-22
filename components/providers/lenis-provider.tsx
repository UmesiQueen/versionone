"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};


export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
