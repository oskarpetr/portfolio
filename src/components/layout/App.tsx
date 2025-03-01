"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Providers from "./Providers";
import Layout from "./Layout";

interface Props {
  children: ReactNode;
}

export default function App({ children }: Props) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return children;
  }

  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}
