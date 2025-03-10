"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Providers from "./Providers";
import Layout from "./Layout";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

interface Props {
  children: ReactNode;
}

export default function App({ children }: Props) {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const preloaderTime = 3500;
  const contentDelay = 500;

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setIsLoading(false);
    }, preloaderTime);

    const timeoutContent = setTimeout(() => {
      setShowContent(true);
    }, preloaderTime + contentDelay);

    return () => {
      clearTimeout(timeoutLoading);
      clearTimeout(timeoutContent);
    };
  }, []);

  if (pathname.startsWith("/admin")) {
    return children;
  }

  return (
    <Providers>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && <Layout>{children}</Layout>}
      </AnimatePresence>
    </Providers>
  );
}
