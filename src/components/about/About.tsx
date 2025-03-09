"use client";

import SectionTitle from "../shared/SectionTitle";
import AboutUniversity from "./AboutUniversity";
import AboutText from "./AboutText";
import { type About } from "@/types/About.types";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  about: About;
}

export default function About({ about }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div>
      <SectionTitle title={translation.sectionTitles.about} />

      <div className="flex flex-col gap-32">
        <AboutText about={about} />
        <AboutUniversity />
      </div>
    </div>
  );
}
