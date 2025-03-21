"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTimeout } from "../hooks/useTimeout";
import dynamic from "next/dynamic";
import Layout from "./Layout";

const Preloader = dynamic(() => import("@/components/layout/Preloader"));
const Providers = dynamic(() => import("@/components/layout/Providers"));
// const Layout = dynamic(() => import("@/components/layout/Layout"));

// preloader timing
const preloaderTime = 3000;
const contentDelay = 500;

export default function App({ children }: PropsWithChildren) {
  const pathname = usePathname();

  // preloader
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

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
