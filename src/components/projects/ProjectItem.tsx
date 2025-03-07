"use client";

import { Project } from "@/types/Project.types";
import ProjectImage from "./ProjectImage";
import Link from "next/link";
import { useTranslationStore } from "@/translation/useTranslationStore";
import Reveal from "../animation/Reveal";
import HoverElement from "../animation/HoverElement";
import Index from "../shared/Index";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectItem({ project, index }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="relative">
      <Link href={`/projects/${project.slug}`}>
        <HoverElement
          hoverText={{
            title: "Visit",
          }}
        >
          <Reveal direction="up" delay={0.2 * index}>
            <ProjectImage project={project} />
          </Reveal>
        </HoverElement>
      </Link>

      <div className="static block w-full overflow-hidden sm:absolute">
        <Reveal direction="down" delay={0.2 * index}>
          <div className="flex w-full justify-between py-4 sm:px-8">
            <div>
              <div>{project.title}</div>
              <div className="text-sm opacity-50">
                {translation.categories[project.category]}
              </div>
            </div>

            <Index index={index} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
