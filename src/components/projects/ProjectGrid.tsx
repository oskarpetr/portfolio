import { Project } from "@/types/Project.types";
import ProjectItem from "./ProjectItem";

interface Props {
  projects: Project[];
  cols: 4 | 2 | 1;
}

export default function ProjectGrid({ projects, cols }: Props) {
  const gridItems = [...Array(projects.length * 2)];

  if (cols === 4 || cols === 2) {
    return gridItems.map((_, index) => {
      const gridIndex = Math.floor(index / 2);
      const project = projects[gridIndex];
      const isOddRow = Math.floor(index / cols) % 2 === 0;

      // If odd row and even index, or even row and odd index
      if ((isOddRow && index % 2 === 0) || (!isOddRow && index % 2 === 1)) {
        return (
          <ProjectItem
            key={`project-${project.id}`}
            project={project}
            index={gridIndex}
          />
        );
      }

      // Else create gap
      else {
        return <div key={`project-gap-${index}`} className="col-span-1" />;
      }
    });
  }

  // For cols === 1
  else {
    return projects.map((project, index) => (
      <ProjectItem
        key={`project-${project.id}`}
        project={project}
        index={index}
      />
    ));
  }
}
