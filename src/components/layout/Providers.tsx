import { Lenis } from "lenis/react";
import { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LazyWrapper from "../animation/LazyWrapper";
import { Geist, Instrument_Serif } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentalSerif = Instrument_Serif({
  variable: "--font-instrumental-serif",
  subsets: ["latin"],
  weight: "400",
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <div
      className={`${geistSans.variable} ${instrumentalSerif.variable} antialiased`}
    >
      <LazyWrapper>
        <Lenis root>
          {children}
          <SpeedInsights />
        </Lenis>
      </LazyWrapper>
    </div>
  );
}
