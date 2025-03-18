"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { GraphicDesign } from "@/types/GraphicDesign.types";
import dynamic from "next/dynamic";

interface Props {
  graphicDesigns: GraphicDesign[];
}

// dynamic import
const GraphicDesigns = dynamic(
  () => import("@/components/graphic-designs/GraphicDesigns"),
  { loading: () => <EmptyPage /> },
);

export default function GraphicDesignsWrapper({ graphicDesigns }: Props) {
  return <GraphicDesigns graphicDesigns={graphicDesigns} />;
}
