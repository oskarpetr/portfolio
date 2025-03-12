"use client";

import ParagraphOpacity from "../animation/ParagraphOpacity";
import ParagraphSplit from "../animation/ParagraphSplit";

// import { type About } from "@/types/About.types";
// import { useTranslationStore } from "@/translation/useTranslationStore";

// interface Props {
//   about: About;
// }

export default function KnowBetter() {
  //   const { translation } = useTranslationStore();

  const knowBetterText = "See more work from me, know me better";

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="w-1/2 text-2xl font-normal tracking-tight uppercase md:text-3xl lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-16">
        <ParagraphOpacity text={knowBetterText} />
      </div>

      <div className="text-base font-normal lg:w-1/2">
        <ParagraphSplit text={knowBetterText} />
      </div>
    </div>
  );
}
