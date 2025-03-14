"use client";

import { useTranslationStore } from "@/translation/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import ProjectGrid from "./ProjectGrid";
import { ProjectShort } from "@/types/Project.types";

interface Props {
  projects: ProjectShort[];
}

export default function Projects({ projects }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="mt-20">
      <SectionTitle
        title={translation.sectionTitles.projects}
        number={projects.length}
      />

      <div id="projects">
        <div className="hidden grid-cols-4 lg:grid">
          <ProjectGrid projects={projects} cols={4} />
        </div>

        <div className="hidden grid-cols-2 sm:grid lg:hidden">
          <ProjectGrid projects={projects} cols={2} />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:hidden">
          <ProjectGrid projects={projects} cols={1} />
        </div>
      </div>
    </div>
  );
}
