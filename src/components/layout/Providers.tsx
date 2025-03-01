import { Lenis } from "lenis/react";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Lenis root>
      {children}
      <SpeedInsights />
    </Lenis>
  );
}
