"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useDimensions from "../../hooks/useDimensions";
import SectionTitle from "../shared/SectionTitle";
import { GraphicDesign } from "@/types/GraphicDesign.types";
import GraphicColumn from "./GraphicColumn";
import { useTranslationStore } from "@/stores/useTranslationStore";

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

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  return (
    <div>
      <SectionTitle title={translation.sectionTitles.graphicDesigns} />

      <div className="relative -left-6 w-screen">
        <div
          ref={postersRef}
          className="box-border flex h-screen gap-6 overflow-hidden bg-neutral-900 p-10 sm:h-[150vh]"
        >
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[0],
              graphicDesigns[1],
              graphicDesigns[2],
              graphicDesigns[3],
            ]}
            y={y}
            className="-top-[30%] hidden xl:flex"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[3],
              graphicDesigns[4],
              graphicDesigns[0],
              graphicDesigns[1],
            ]}
            y={y2}
            className="-top-[100%] hidden lg:flex"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[1],
              graphicDesigns[2],
              graphicDesigns[3],
              graphicDesigns[4],
            ]}
            y={y3}
            className="-top-[100%] lg:-top-[40%]"
          />
          <GraphicColumn
            graphicDesigns={[
              graphicDesigns[4],
              graphicDesigns[0],
              graphicDesigns[1],
              graphicDesigns[2],
            ]}
            y={y4}
            className="-top-[110%] lg:-top-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
