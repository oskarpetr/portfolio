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
    <FadeIn delay={delay} className="mt-12">
      {projects.map((project, index) => {
        return (
          <Project
            key={project.title}
            project={project}
            index={index}
            last={index === projects.length - 1}
          />
        );
      })}
    </FadeIn>
  );
}
