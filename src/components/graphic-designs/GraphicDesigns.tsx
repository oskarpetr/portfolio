"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useDimensions from "../hooks/useDimensions";
import SectionTitle from "../shared/SectionTitle";
import { GraphicDesign } from "@/types/GraphicDesign.types";
import GraphicColumn from "./GraphicColumn";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  graphicDesigns: GraphicDesign[];
}

export default function GraphicDesigns({ graphicDesigns }: Props) {
  const { translation } = useTranslationStore();

  const postersRef = useRef<HTMLDivElement>(null);

  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: postersRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div>
      <SectionTitle title={translation.sectionTitles.graphicDesigns} />

      <div className="relative -right-10 -left-10 w-screen">
        <div
          ref={postersRef}
          className="box-border flex h-[175vh] gap-10 overflow-hidden bg-neutral-900 p-10"
        >
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[0],
              graphicDesigns[1],
              graphicDesigns[2],
            ]}
            y={y}
            className="-top-[30%]"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[3],
              graphicDesigns[4],
              graphicDesigns[0],
            ]}
            y={y2}
            className="-top-[100%]"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[1],
              graphicDesigns[2],
              graphicDesigns[3],
            ]}
            y={y3}
            className="-top-[40%]"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[4],
              graphicDesigns[0],
              graphicDesigns[1],
            ]}
            y={y4}
            className="-top-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
