"use client";

import { useTranslationStore } from "@/translation/useTranslationStore";
import { Project } from "@/types/Project.types";
import FadeIn from "../animation/FadeIn";
import ParagraphSplit from "../animation/ParagraphSplit";
import ProjectDetailImage from "./ProjectDetailImage";
import { memo } from "react";

interface Props {
  project: Project;
}

function ProjectDetail({ project }: Props) {
  const { language, translation } = useTranslationStore();

  const development = project.development
    .map((service) => translation.development[service])
    .join(", ");

  const design = project.design
    .map((service) => translation.design[service])
    .join(", ");

  return (
    <div className="min-h-[70vh]">
      <div className="flex flex-col-reverse gap-24 lg:flex-row lg:gap-0">
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-12 lg:w-3/4">
            {[project.mainImage, ...project.images].map((image, index) => (
              <ProjectDetailImage key={image.alt} image={image} index={index} />
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col gap-8 lg:sticky lg:top-[205px] lg:mt-20 lg:w-1/2 xl:gap-16">
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
            <FadeIn delay={0.2}>
              <div className="w-32 whitespace-nowrap">{project.title}</div>
            </FadeIn>

            <div className="text-justify text-base leading-snug font-normal">
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
              <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
                <FadeIn delay={0.3}>
                  <div className="w-32 text-base whitespace-nowrap">
                    {translation.services.development}
                  </div>
                </FadeIn>

                <div className="w-80 text-base leading-snug font-normal">
                  <ParagraphSplit
                    text={development}
                    delay={0.3}
                    indent={false}
                  />
                </div>
              </div>
            )}

            {design.length > 0 && (
              <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
                <FadeIn delay={0.4}>
                  <div className="w-32 text-base whitespace-nowrap">
                    {translation.services.design}
                  </div>
                </FadeIn>

                <div className="w-80 text-base leading-snug font-normal">
                  <ParagraphSplit text={design} delay={0.4} indent={false} />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
              <FadeIn delay={0.5}>
                <div className="w-32 text-base">
                  {project.personal
                    ? translation.projectDetail.projectType
                    : translation.projectDetail.client}
                </div>
              </FadeIn>

              <div className="text-base font-normal">
                <ParagraphSplit
                  text={
                    project.personal
                      ? translation.projectDetail.personal
                      : (project.client ?? "")
                  }
                  delay={0.5}
                  indent={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectDetail);
