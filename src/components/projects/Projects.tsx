import ProjectGrid from "./ProjectGrid";
import { IProject } from "@/types/Project.types";

interface Props {
  projects: IProject[];
}

export default function Projects({ projects }: Props) {
  return (
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
  );
}
