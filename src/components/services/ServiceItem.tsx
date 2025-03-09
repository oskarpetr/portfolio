"use client";

import { Service } from "@/types/Service.types";
import Index from "../shared/Index";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/translation/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import Tags from "../tags/Tags";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceItem({ service, index }: Props) {
  const { language } = useTranslationStore();

  return (
    <div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4 * index + 0.2,
          duration: 1,
          ease: BEZIER_EASING,
        }}
        className="border-t"
      ></motion.div>

      <div className="flex w-full flex-col py-8 lg:flex-row">
        <div className="lg:mb:0 mb-4 flex flex-row-reverse items-center justify-between lg:w-1/2 lg:flex-row lg:items-start lg:justify-center">
          <div className="lg:w-1/2">
            <FadeIn delay={0.1 * index + 0.2 * index + 0.2}>
              <Index index={index} />
            </FadeIn>
          </div>

          <div className="lg:w-1/2">
            <FadeIn delay={0.2 * index + 0.2 * index + 0.2}>
              <div>{service.name[language]}</div>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:w-1/2">
          <div className="text-base font-normal">
            <ParagraphSplit
              delay={0.3 * index + 0.2 * index + 0.2}
              text={service.description[language]}
            />
          </div>

          <div className="pointer-events-auto flex flex-wrap items-center gap-2">
            <Tags tags={service.tags} delay={0.4 * index + 0.2 * index + 0.2} />
          </div>
        </div>
      </div>
    </div>
  );
}
