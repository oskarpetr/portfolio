"use client";

import { About } from "@/types/About.types";
import ParagraphOpacity from "../animation/ParagraphOpacity";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  about: About;
}

export default function AboutText({ about }: Props) {
  const { language } = useTranslationStore();

  return (
    <div className="serif text-4xl leading-12 font-normal tracking-tight md:text-5xl md:leading-16 lg:text-5xl lg:leading-18 xl:text-6xl xl:leading-20">
      <ParagraphOpacity text={about.title[language]} />
    </div>
  );
}
