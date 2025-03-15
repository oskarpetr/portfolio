"use client";

import { Service } from "@/types/Service.types";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/translation/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import Tags from "../tags/Tags";
import SectionTitle from "../shared/SectionTitle";
import AnimatedDivider from "../animation/AnimatedDivider";
import Parallax from "../animation/Parallax";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceItem({ service, index }: Props) {
  const { language } = useTranslationStore();

  return (
    <Parallax multiplier={index * 0.5}>
      <AnimatedDivider delay={0.1 * index + 0.2} />

      <div className="flex w-full flex-col py-8 lg:flex-row">
        <div className="w-1/2">
          <FadeIn delay={0.1 * index + 0.1 * index + 0.2}>
            <SectionTitle
              title={service.name[language]}
              number={service.tags.length}
            />
          </FadeIn>
        </div>

        <div className="flex flex-col gap-2 lg:w-1/2">
          <div className="text-base font-normal">
            <ParagraphSplit
              delay={0.2 * index + 0.1 * index + 0.2}
              text={service.description[language]}
            />
          </div>

          <div className="pointer-events-auto flex flex-wrap items-center gap-2">
            <Tags tags={service.tags} delay={0.3 * index + 0.1 * index + 0.2} />
          </div>
        </div>
      </div>
    </Parallax>
  );
}
