import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  );
}
