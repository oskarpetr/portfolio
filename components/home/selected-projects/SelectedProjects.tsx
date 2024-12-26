import { useRef } from "react";
import Container from "../../general/Container";
import ProjectItem from "./ProjectItem";
import { IProject } from "@/types/Project.types";
import TextSlideIn from "../../animation/TextSlideIn";
import SectionTitle from "../../general/SectionTitle";
import { useScroll, useTransform, motion } from "framer-motion";

interface Props {
  projects: IProject[];
}

export default function SelectedProjects({ projects }: Props) {
  // refs
  const projectsRef = useRef<HTMLDivElement>(null);

  // subtitle
  const projectsSubtitle =
    "Dive into a collection of projects I've worked on, ranging from client collaborations to academic explorations.";

  // projects scroll
  const { scrollYProgress } = useScroll({ target: projectsRef });
  const vw = window.innerWidth;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0vw",
      `-${(projects.length - 1) * 50 - 50 + (48 * 2 * 100) / (vw || 1)}vw`,
    ]
  );

  return (
    <div id="projects">
      <Container className="mt-48 mb-32">
        <div className="flex justify-between items-end">
          <TextSlideIn
            className="text-[5.5vw] font-semibold !tracking-tight text-white-primary"
            text="Explore the projects for"
          />
        </div>

        <div className="flex justify-end -mt-4">
          <TextSlideIn
            className="text-[5.5vw] font-semibold !tracking-tight text-white-primary"
            text="clients and in academia"
          />
        </div>

        {/* <div className="-mt-4">
          <TextSlideIn
            className="text-[5.5vw] font-semibold !tracking-tight text-white-primary"
            text="and other purposes"
          />
        </div> */}

        <div className="w-1/2 mt-8">
          <TextSlideIn
            text={projectsSubtitle}
            stagger={0.01}
            className="text-white-primary body-text text-2xl opacity-50"
          />
        </div>
      </Container>

      <div
        className="relative"
        ref={projectsRef}
        style={{ height: projects.length * 40 + "vw" }}
      >
        <Container className="sticky top-0 h-screen overflow-hidden">
          <div className="flex flex-col gap-8 justify-center h-full mt-8">
            {/* <SectionTitle title="Selected projects" color="white" /> */}
            <motion.div
              style={{ x, width: projects.length * 50 + "vw" }}
              className="flex gap-20"
            >
              {projects.map((project) => (
                <ProjectItem
                  key={project.title}
                  project={project}
                  color="white"
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
}
