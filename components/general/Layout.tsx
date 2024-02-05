import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Head from "next/head";

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
        "text-white min-h-screen px-16 sm:px-32 py-16 transition-all duration-500",
        homeLayout
          ? "bg-left bg-[url('/images/Background2.png')] bg-opacity-20"
          : ""
      )}
    >
      <Head>
        <title>{customTitle}</title>
      </Head>

      {children}
    </div>
  );
}
