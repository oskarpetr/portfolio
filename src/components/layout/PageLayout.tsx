"use client";

import { PropsWithChildren } from "react";
import Menu from "./Menu";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white">
      <Menu />

      <div className="flex min-h-[calc(100vh-85px)] flex-col gap-24 border-b border-dashed border-black p-6 pb-16 sm:pb-32 lg:gap-48">
        {children}
      </div>
    </div>
  );
}
