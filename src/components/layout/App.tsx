"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTimeout } from "../hooks/useTimeout";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("./Preloader"));
const Providers = dynamic(() => import("./Providers"));
const Layout = dynamic(() => import("./Layout"));

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
