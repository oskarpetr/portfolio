import { IProject } from "@/types/Project.types";
import TextSlideIn from "../animation/TextSlideIn";
import Container from "../general/Container";
import ProjectItem from "../home/selected-projects/ProjectItem";

interface Props {
  projects: IProject[];
  project: IProject;
}

export default function RelatedProjects({ projects, project }: Props) {
  // filtered projects
  const filteredProjects = projects.filter((p) => p.title !== project.title);

  // random projects
  const randomProjects = shuffleProjects(filteredProjects);

  function shuffleProjects(array: IProject[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  return (
    <Container className="bg-white-primary">
      <TextSlideIn text="Next projects" className="text-[5.5vw] font-medium" />

      <div className="flex gap-20 mt-16 pb-48 relative">
        {randomProjects.slice(0, 2).map((project) => (
          <ProjectItem key={project.title} project={project} color="black" />
        ))}
      </div>
    </Container>
  );
}
