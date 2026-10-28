"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SmoothScroll = dynamic(() => import("@/components/providers/SmoothScroll"), {
  ssr: false,
});

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
