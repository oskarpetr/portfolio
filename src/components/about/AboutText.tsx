"use client";

import { About } from "@/types/About.types";
import ParagraphOpacity from "../animation/ParagraphOpacity";
// import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  about: About;
}

export default function AboutText({ about }: Props) {
  const { language } = useTranslationStore();

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="serif text-4xl leading-12 font-normal tracking-tight md:text-5xl md:leading-16 lg:text-6xl lg:leading-18 xl:text-7xl xl:leading-20">
        <ParagraphOpacity text={about.title[language]} />
      </div>

      {/* <div className="text-base font-normal lg:w-1/2">
        <ParagraphSplit text={about.subtitle[language]} />
      </div> */}
    </div>
  );
}
