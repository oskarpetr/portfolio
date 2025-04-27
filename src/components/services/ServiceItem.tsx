"use client";

import { Service } from "@/types/Service.types";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/stores/useTranslationStore";
import Tags from "../tags/Tags";
import SectionTitle from "../shared/SectionTitle";
import AnimatedDivider from "../animation/AnimatedDivider";
import Index from "../shared/Index";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceItem({ service, index }: Props) {
  const { language } = useTranslationStore();

  return (
    <div className="pointer-events-none sticky top-[20vh] flex h-[50vh] w-full">
      <div
        className="relative w-full bg-white shadow-[0px_-20px_40px_0px_#ffffff]"
        style={{ top: 110 * index }}
      >
        <AnimatedDivider delay={0.1 * index} />

        <div className="pointer-events-auto flex w-full flex-col gap-8 py-8">
          <div className="flex items-center">
            <div className="w-1/2">
              <SectionTitle
                title={service.name[language]}
                // number={service.tags.length}
                enableMargin={false}
              />
            </div>

            <div className="invisible w-1/2 lg:visible">
              <Index index={index} />
            </div>
          </div>

          <div className="lg:ml-[50%]">
            <div className="flex flex-col gap-2">
              <div className="text-base font-normal lg:text-2xl">
                <ParagraphSplit
                  delay={-0.2}
                  text={service.description[language]}
                />
              </div>

              <div className="pointer-events-auto flex flex-wrap items-center gap-2">
                <Tags tags={service.tags} delay={0.3 * index} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
