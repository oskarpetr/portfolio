import { ProjectType } from "@/types/Project.types";
import Project from "./Project";
import { motion } from "framer-motion";
import FadeIn from "../general/FadeIn";

export default function Projects({
  projects,
  delay,
}: {
  projects: ProjectType[];
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className="mt-12 flex flex-col gap-32">
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => {
          return (
            <Project
              key={project.title}
              project={project}
              last={index === projects.length - 1}
            />
          );
        })}
      </div>
    </FadeIn>
  );
}
