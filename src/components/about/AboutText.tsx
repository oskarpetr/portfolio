"use client";

import { About } from "@/types/About.types";
import ParagraphOpacity from "../animation/ParagraphOpacity";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  about: About;
}

export default function AboutText({ about }: Props) {
  const { language } = useTranslationStore();

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="text-2xl font-normal tracking-tight uppercase md:text-3xl lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-16">
        <ParagraphOpacity text={about.title[language]} />
      </div>

      <div className="text-base font-normal md:w-1/2">
        <ParagraphSplit text={about.subtitle[language]} />
      </div>
    </div>
  );
}
