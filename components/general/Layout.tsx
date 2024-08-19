import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({
  children,
  homeLayout = false,
  title,
}: {
  children: ReactNode;
  homeLayout?: boolean;
  title?: string;
}) {
  const customTitle = `Oskar Petr${title !== undefined ? ` | ${title}` : ""}`;

  return (
    <div
      className={cn(
        "transition-all duration-500 text-white min-h-screen px-10 py-10 md:px-16 md:py-10 lg:px-32 lg:py-16"
        // homeLayout
        //   ? "bg-left bg-[url('/images/Background2.png')] bg-opacity-20 bg-no-repeat"
        //   : ""
      )}
    >
      <Head>
        <title>{customTitle}</title>
      </Head>

      <div>{children}</div>

      <div className="absolute -z-50 inset-0 h-full w-full bg-[radial-gradient(#281D0E_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
    </div>
  );
}
