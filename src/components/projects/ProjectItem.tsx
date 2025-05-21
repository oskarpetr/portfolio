"use client";

import { ProjectShort } from "@/types/Project.types";
import { useTranslationStore } from "@/stores/useTranslationStore";
import Reveal from "../animation/Reveal";
import Index from "../shared/Index";
import Tooltip from "../animation/Tooltip";
import ProjectImage from "./ProjectImage";
import PageLink from "../layout/PageLink";

interface Props {
  project: ProjectShort;
  index: number;
}

export default function ProjectItem({ project, index }: Props) {
  const { translation, language } = useTranslationStore();

  return (
    <div className="relative w-full">
      <PageLink href={`/projects/${project.slug}`}>
        <Tooltip
          title={translation.tooltips.explore}
          icon="ArrowElbowDownRight"
        >
          <Reveal direction="up" delay={0.1 * index}>
            <ProjectImage image={project.mainImage} />
          </Reveal>
        </Tooltip>
      </PageLink>

      <div className="static block w-full overflow-hidden sm:absolute">
        <Reveal direction="down" delay={0.1 * index}>
          <div className="flex w-full justify-between py-4 sm:px-8">
            <div>
              <div>{project.title}</div>
              <div className="text-sm font-medium opacity-60">
                {project.service.name[language]}
              </div>
            </div>

            <Index index={index} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
