import { Lenis } from "lenis/react";
import { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LazyWrapper from "../animation/LazyWrapper";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <LazyWrapper>
      <Lenis root>
        {children}
        <SpeedInsights />
      </Lenis>
    </LazyWrapper>
  );
}
