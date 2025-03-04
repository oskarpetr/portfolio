"use client";

import { useTranslationStore } from "@/stores/useTranslationStore";
import { Project } from "@/types/Project.types";
import FadeIn from "../animation/FadeIn";
import ParagraphSplit from "../animation/ParagraphSplit";
import ProjectDetailImage from "./ProjectDetailImage";

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
        {[project.mainImage, ...project.images].map((image, index) => (
          <ProjectDetailImage key={image.alt} image={image} index={index} />
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
                  {translation.projectDetail.development}
                </div>
              </FadeIn>

              <div className="w-80 text-base leading-snug font-normal">
                <ParagraphSplit text={development} delay={0.3} indent={false} />
              </div>
            </div>
          )}

          {design.length > 0 && (
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
              <FadeIn delay={0.4}>
                <div className="w-32 text-base whitespace-nowrap">
                  {translation.projectDetail.design}
                </div>
              </FadeIn>

              <div className="w-80 text-base leading-snug font-normal">
                <ParagraphSplit text={design} delay={0.4} indent={false} />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 xl:flex-row xl:gap-32">
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
  );
}
