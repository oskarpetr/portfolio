"use client";

import { useTranslationStore } from "@/translation/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import ProjectGrid from "./ProjectGrid";
import { ProjectShort } from "@/types/Project.types";
import SectionSlideUp from "../animation/SectionSlideUp";
import { RefObject } from "react";

interface Props {
  projects: ProjectShort[];
  aboutRef: RefObject<HTMLDivElement | null>;
}

export default function Projects({ projects, aboutRef }: Props) {
  const { translation } = useTranslationStore();

  return (
    <SectionSlideUp sectionRef={aboutRef}>
      <div id="projects" className="mt-20">
        <SectionTitle
          title={translation.sectionTitles.projects}
          number={projects.length}
        />
        <div>
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
    </SectionSlideUp>
  );
}
