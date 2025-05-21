import Lenis from "lenis/react";
import { PropsWithChildren } from "react";
import LazyWrapper from "../animation/LazyWrapper";
import { Geist, Instrument_Serif } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentalSerif = Instrument_Serif({
  variable: "--font-instrumental-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>
      <div
        className={`${geistSans.variable} ${instrumentalSerif.variable} antialiased`}
      >
        <LazyWrapper>
          <Lenis root>{children}</Lenis>
        </LazyWrapper>
      </div>
    </ViewTransitions>
  );
}
