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
import SectionTitle from "../shared/SectionTitle";

interface Props {
  project: Project;
}

function ProjectDetail({ project }: Props) {
  const { language, translation } = useTranslationStore();

  const tags = groupTagsByService(project.tags, language);

  return (
    <div className="min-h-[70vh] sm:mt-10">
      <SectionTitle title={project.title} enableMargin={false} />

      <div className="mt-6 flex flex-col-reverse gap-24 lg:flex-row lg:gap-0">
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-6 lg:w-3/4">
            {[project.mainImage, ...project.images].map((image, index) => (
              <ProjectDetailImage
                key={`project-image-${image.url}`}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col gap-8 lg:sticky lg:top-[190px] lg:mt-0 lg:w-1/2">
          <div className="flex flex-col gap-2">
            {/* 2xl:flex-row 2xl:gap-24 */}
            {/* <FadeIn delay={0.1}>
              <div className="w-32 whitespace-nowrap">{project.title}</div>
            </FadeIn> */}

            <div className="text-base opacity-50">Description</div>

            <div className="text-justify text-xl leading-tight font-medium md:pr-10">
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
                  className="flex flex-col gap-1 lg:w-3/4"
                >
                  {/* 2xl:flex-row 2xl:gap-24 */}
                  <FadeIn delay={0.2 + 0.1 * index}>
                    <div className="text-base opacity-50">
                      {service.name[language]}
                    </div>
                  </FadeIn>

                  <Tags tags={tags as TagShort[]} delay={0.2 + 0.1 * index} />
                </div>
              ) : null,
            )}

            <div className="flex flex-col gap-1">
              {/* 2xl:flex-row 2xl:gap-24 */}
              <FadeIn delay={0.1 + 0.1 * tags.length}>
                <div className="text-base opacity-50">
                  {project.personal
                    ? translation.projectDetail.projectType
                    : translation.projectDetail.client}
                </div>
              </FadeIn>

              <div className="text-lg leading-tight font-medium">
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
