// components/SmoothScroll.tsx
"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, memo } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default memo(SmoothScroll);