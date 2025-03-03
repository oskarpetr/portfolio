"use client";

import { useTranslationStore } from "@/stores/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import ProjectGrid from "./ProjectGrid";
import { Project } from "@/types/Project.types";

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="my-20 flex flex-col gap-16">
      <SectionTitle title={translation.sectionTitles.projects} />

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
