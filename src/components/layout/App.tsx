"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import Providers from "./Providers";
import Layout from "./Layout";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import { useTimeout } from "../hooks/useTimeout";

export default function App({ children }: PropsWithChildren) {
  const pathname = usePathname();

  // preloader
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // preloader timing
  const preloaderTime = 3000;
  const contentDelay = 500;

  useTimeout(() => setIsLoading(false), preloaderTime);
  useTimeout(() => setShowContent(true), preloaderTime + contentDelay);

  // cms page route
  if (pathname.startsWith("/admin")) {
    return children;
  }

  return (
    <Providers>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && <Layout key="layout">{children}</Layout>}
      </AnimatePresence>
    </Providers>
  );
}
