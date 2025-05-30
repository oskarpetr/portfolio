"use client";

import { useTranslationStore } from "@/stores/useTranslationStore";
import { Project } from "@/types/Project.types";
import FadeIn from "../animation/FadeIn";
import ParagraphSplit from "../animation/ParagraphSplit";
import ProjectDetailImage from "./ProjectDetailImage";
import { memo } from "react";
import Tags from "../tags/Tags";
import { groupTagsByService } from "@/utils/formatters";
import { TagShort } from "@/types/Tag.types";

interface Props {
  project: Project;
}

function ProjectDetail({ project }: Props) {
  const { language, translation } = useTranslationStore();

  const tags = groupTagsByService(project.tags, language);

  return (
    <div className="min-h-[70vh]">
      <div className="mt-0 flex flex-col-reverse gap-24 lg:mt-20 lg:flex-row lg:gap-0">
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-4 sm:gap-12 lg:w-3/4">
            {[project.mainImage, ...project.images].map((image, index) => (
              <ProjectDetailImage
                key={`project-image-${image.url}`}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col gap-8 lg:sticky lg:top-[205px] lg:mt-0 lg:w-1/2 xl:gap-16">
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-24">
            <FadeIn delay={0.1}>
              <div className="w-32 whitespace-nowrap">{project.title}</div>
            </FadeIn>

            <div className="s text-justify text-base leading-snug font-normal">
              <ParagraphSplit
                text={project.description[language]}
                delay={0.1}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {tags.map(([service, tags], index) =>
              tags!.length > 0 ? (
                <div
                  key={`service-${service.id}`}
                  className="flex flex-col gap-3 2xl:flex-row 2xl:gap-24"
                >
                  <FadeIn delay={0.2 + 0.1 * index}>
                    <div className="w-32 text-base whitespace-nowrap">
                      {service.name[language]}
                    </div>
                  </FadeIn>

                  <div className="sm:w-96">
                    <Tags tags={tags as TagShort[]} delay={0.2 + 0.1 * index} />
                  </div>
                </div>
              ) : null,
            )}

            <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-24">
              <FadeIn delay={0.1 + 0.1 * tags.length}>
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
                  delay={0.1 + 0.1 * tags.length}
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
