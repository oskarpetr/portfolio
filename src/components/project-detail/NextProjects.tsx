import { useTranslationStore } from "@/stores/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import ProjectItem from "../projects/ProjectItem";
import { ProjectShort } from "@/types/Project.types";
import AnimatedDivider from "../animation/AnimatedDivider";

interface Props {
  projects: [ProjectShort, ProjectShort];
}

export default function NextProjects({ projects }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col gap-12 sm:gap-30 sm:pb-12">
      <AnimatedDivider />

      <div className="flex flex-col lg:flex-row">
        <div className="h-fit w-1/2">
          <SectionTitle title={translation.projectDetail.nextProjects} />
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-1/2">
          {projects.map((project, index) => (
            <ProjectItem
              key={`project-${project.id}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
