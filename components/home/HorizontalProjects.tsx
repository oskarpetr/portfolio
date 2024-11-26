import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { IProject, IShowcase } from "@/types/Project.types";
import Image from "next/image";

interface Props {
  projects: IProject[];
}

export default function HorizontalProjects({ projects }: Props) {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-400px", "0px"]);
  const xN = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 2]);
  const y = useTransform(scrollYProgress, [0.5, 1], ["0px", "-200px"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  function shuffleShowcases(array: IShowcase[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const showcases = shuffleShowcases(
    projects.flatMap(
      (project) => project.showcases.map((showcase) => showcase) || []
    )
  );

  const midpoint = Math.ceil(showcases.length / 2);
  const firstHalf = showcases.slice(0, midpoint);
  const secondHalf = showcases.slice(midpoint);

  return (
    <div ref={projectsRef} className="h-[200vh]">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 mt-48 overflow-hidden h-screen w-screen justify-center items-center"
      >
        <motion.div className="flex flex-col gap-8">
          <motion.div
            style={{ x }}
            className="flex whitespace-nowrap gap-8 h-fit"
          >
            {firstHalf.map((showcase) => (
              <ShowcaseCard key={showcase.alt} showcase={showcase} />
            ))}
          </motion.div>

          <motion.div
            style={{ x: xN }}
            className="flex whitespace-nowrap gap-8"
          >
            {secondHalf.map((showcase) => (
              <ShowcaseCard key={showcase.alt} showcase={showcase} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ShowcaseCard({ showcase }: { showcase: IShowcase }) {
  return (
    <div
      key={showcase.alt}
      className="rounded-lg h-fit bg-neutral-700 relative min-w-fit overflow-hidden"
    >
      <div className="rounded-lg overflow-hidden p-10 shadow-2xl">
        <Image
          src={showcase.src}
          alt={showcase.alt}
          width={300}
          height={300}
          className="min-w-96 relative rounded-lg z-10"
        />
      </div>

      {/* <Image
        src={showcase.src}
        alt={showcase.alt}
        width={100}
        height={100}
        className="w-full h-full shadow-2xl absolute top-0 left-0 z-0 blur-3xl will-change-[filter] opacity-50"
      /> */}
    </div>
  );
}
