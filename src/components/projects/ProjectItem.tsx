"use client";

import { IProject } from "@/types/Project.types";
import ProjectImage from "./ProjectImage";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import Link from "next/link";

interface Props {
  project: IProject;
  index: number;
}

export default function ProjectItem({ project, index }: Props) {
  return (
    <div className="relative">
      <Link
        href={`/projects/${project.slug}`}
        className="relative z-0 block items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2 * index,
            ease: BEZIER_EASING,
            duration: 1,
          }}
          style={{ paddingTop: "75%", position: "relative" }}
          className="group"
        >
          <ProjectImage project={project} />
        </motion.div>
      </Link>

      <div className="static block w-full overflow-hidden sm:absolute">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2 * index,
            ease: BEZIER_EASING,
            duration: 1,
          }}
          className="flex w-full justify-between px-8 py-4"
        >
          <div>
            <div>{project.title}</div>
            <div className="text-sm opacity-50">{project.category}</div>
          </div>

          <div className="text-sm opacity-50">
            [ {String(index).padStart(2, "0")} ]
          </div>
        </motion.div>
      </div>
    </div>
  );
}
