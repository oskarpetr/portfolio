import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Fragment } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Analytics />
    </Fragment>
  );
}
