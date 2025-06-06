"use client";

import { cn } from "@/utils/cn";
import FadeIn from "../animation/FadeIn";
import Index from "./Index";

interface Props {
  title: string;
  number?: number;
  enableMargin?: boolean;
  delay?: number;
  big?: boolean;
}

export default function SectionTitle({
  title,
  number,
  enableMargin = true,
  delay = 0,
  big = false,
}: Props) {
  return (
    <div className={enableMargin ? "mb-12" : ""}>
      <FadeIn delay={0.1 + delay}>
        <div className="flex items-baseline gap-2">
          <h2
            className={cn(
              "serif whitespace-nowrap",
              big ? "text-4xl lg:text-6xl xl:text-7xl" : "text-4xl sm:text-5xl",
            )}
          >
            {title}
          </h2>

          {number && <Index index={number - 1} />}
        </div>
      </FadeIn>
    </div>
  );
}
