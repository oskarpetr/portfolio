"use client";

import { useTranslationStore } from "@/stores/useTranslationStore";
import { Project } from "@/types/Project.types";
import Image from "next/image";
import FadeIn from "../animation/FadeIn";
import ParagraphSplit from "../animation/ParagraphSplit";
import Reveal from "../animation/Reveal";
import HoverElement from "../animation/HoverElement";

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const { language, translation } = useTranslationStore();

  const development = project.development
    .map((service) => translation.development[service])
    .join(", ");

  const design = project.design
    .map((service) => translation.design[service])
    .join(", ");

  return (
    <div className="flex h-full flex-col-reverse gap-24 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-2/5">
        {project.images.map((image, index) => (
          <HoverElement hoverText={image.alt} key={image.alt}>
            <Reveal direction="up" delay={0.1 * index}>
              <div className="pt-[75%]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  placeholder="blur"
                  blurDataURL={image.placeholder}
                  fill
                  priority
                  className="object-cover grayscale"
                />
              </div>
            </Reveal>
          </HoverElement>
        ))}
      </div>

      <div className="flex h-full flex-col gap-16 lg:sticky lg:top-[205px] lg:mt-20 lg:w-3/5 xl:gap-32">
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
          <FadeIn delay={0.2}>
            <div className="w-32 whitespace-nowrap">{project.title}</div>
          </FadeIn>

          <div className="text-justify leading-snug font-normal">
            <ParagraphSplit
              text={
                language === "en"
                  ? project.description.en
                  : project.description.cs
              }
              delay={0.2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {development.length > 0 && (
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
              <FadeIn delay={0.3}>
                <div className="w-32 text-base whitespace-nowrap">
                  Development
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="w-80 text-base leading-snug font-normal">
                  <ParagraphSplit
                    text={development}
                    delay={0.3}
                    indent={false}
                  />
                </div>
              </FadeIn>
            </div>
          )}

          {design.length > 0 && (
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
              <FadeIn delay={0.4}>
                <div className="w-32 text-base whitespace-nowrap">Design</div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="w-80 text-base leading-snug font-normal">
                  <ParagraphSplit text={design} delay={0.4} indent={false} />
                </div>
              </FadeIn>
            </div>
          )}

          <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
            <FadeIn delay={0.5}>
              <div className="w-32 text-base">
                {project.personal ? "Project type" : "Client"}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="text-base font-normal">
                <ParagraphSplit
                  text={project.personal ? "Personal" : (project.client ?? "")}
                  delay={0.5}
                  indent={false}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
