"use client";

import ParallaxImage from "../animation/ParallaxImage";
import Reveal from "../animation/Reveal";
import design from "../../../public/images/design.webp";
import development from "../../../public/images/development.webp";
import Image from "next/image";
import Index from "../shared/Index";
import { useTranslationStore } from "@/translation/useTranslationStore";
import ParagraphSplit from "../animation/ParagraphSplit";
import { About } from "@/types/About.types";

interface Props {
  about: About;
}

export default function AboutImages({ about }: Props) {
  const { translation, language } = useTranslationStore();

  return (
    <div className="mt-12 flex flex-col items-end gap-8 sm:mt-0 lg:flex-row lg:gap-0">
      <div className="w-full text-justify text-base leading-snug font-normal">
        <div className="w-full lg:w-1/2">
          <ParagraphSplit text={about.process[language]} />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="w-full">
          <Reveal direction="up" viewportAmount={0.2}>
            <ParallaxImage>
              <Image
                src={design}
                alt="Design"
                width={500}
                height={0}
                placeholder="blur"
                className="w-full object-cover grayscale select-none"
              />
            </ParallaxImage>
          </Reveal>

          <div className="mt-3 flex items-center justify-between text-base font-normal opacity-80">
            <div>{translation.alts.design}</div>
            <Index index={1} />
          </div>
        </div>

        <div className="w-full">
          <Reveal direction="up" viewportAmount={0.2}>
            <ParallaxImage>
              <Image
                src={development}
                alt="Development"
                width={500}
                height={0}
                placeholder="blur"
                className="w-full object-cover grayscale select-none"
              />
            </ParallaxImage>
          </Reveal>

          <div className="mt-3 flex items-center justify-between text-base font-normal opacity-80">
            <div>{translation.alts.development}</div>
            <Index index={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
