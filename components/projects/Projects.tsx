import { ProjectType } from "@/types/Project.types";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects({
  projects,
  delay,
}: {
  projects: ProjectType[];
  delay: number;
}) {
  return (
    <motion.div
      className="mt-12 flex flex-col gap-32"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
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
    </motion.div>
  );
}
