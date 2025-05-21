"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Layout from "./Layout";

// const Preloader = dynamic(() => import("@/components/layout/Preloader"));
const Providers = dynamic(() => import("@/components/layout/Providers"));
// const Layout = dynamic(() => import("@/components/layout/Layout"));

// preloader timing
export const preloaderTime = 2000;
// const contentDelay = 0;

export default function App({ children }: PropsWithChildren) {
  const pathname = usePathname();

  // // preloader
  // const [isLoading, setIsLoading] = useState(true);
  // const [showContent, setShowContent] = useState(false);

  // useTimeout(() => setIsLoading(false), preloaderTime);
  // useTimeout(() => setShowContent(true), preloaderTime + contentDelay);

  // cms page route
  if (pathname.startsWith("/admin")) {
    return children;
  }

  // clients page without preloader
  if (pathname.startsWith("/clients")) {
    return (
      <Providers>
        <Layout key="layout">{children}</Layout>
      </Providers>
    );
  }

  return (
    <Providers>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && <Layout key="layout">{children}</Layout>}
      </AnimatePresence> */}

      <Layout key="layout">{children}</Layout>
    </Providers>
  );
}
