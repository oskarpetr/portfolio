"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { About } from "@/types/About.types";
import dynamic from "next/dynamic";

interface Props {
  about: About;
}

// dynamic import
const AboutImages = dynamic(
  () => import("@/components/about-images/AboutImages"),
  { loading: () => <EmptyPage /> },
);

export default function AboutImagesWrapper({ about }: Props) {
  return <AboutImages about={about} />;
}
