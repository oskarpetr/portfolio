import { ProjectType } from "@/types/Project.types";
import { HourglassHigh } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  project,
  last,
}: {
  project: ProjectType;
  last: boolean;
}) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Link
        href={project.link}
        target="_blank"
        className="group cursor-pointer"
      >
        <div className="flex flex-col items-center xl:flex-row xl:items-center gap-8 xl:gap-16 text-white">
          {/* <img
            src={`/sites/${image}.png`}
            alt={image}
            className="border w-[25rem] border-white border-opacity-10 rounded-xl"
          /> */}

          <div className="min-w-[24rem] h-[13.5rem] bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl flex justify-center items-center">
            <HourglassHigh className="text-5xl opacity-20" />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center xl:items-start">
            <div className="flex flex-col justify-center xl:justify-start">
              <h3 className="font-semibold text-2xl text-center xl:text-left tracking-wide xl:max-w-[35rem] leading-9">
                {project.title}
              </h3>

              <div className="mt-[-3px] h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="opacity-50 tracking-wide text-center xl:text-left w-3/4 xl:w-[40rem] leading-7">
              {project.description.length > 150
                ? project.description.substring(0, 151) + "..."
                : project.description}
            </p>

            {project.type === "development" && (
              <div className="flex items-center gap-5 mt-2">
                {project.technologies.map((tech) => {
                  return (
                    <div className="flex items-center" key={tech}>
                      <Image
                        src={`/logos/monochrome-icons/${tech}.svg`}
                        alt={tech}
                        height={25}
                        width={25}
                        className="transition-all opacity-50"
                      />

                      <div className="ml-5 opacity-20 bg-white w-[1px] h-4"></div>
                    </div>
                  );
                })}

                {project.repositary ? (
                  <Link href={project.repositary} target="_blank">
                    <p className="hover:opacity-80 opacity-50 transition-all tracking-wide">
                      Repositary
                    </p>
                  </Link>
                ) : (
                  <p className="opacity-50">Private repo</p>
                )}
              </div>
            )}

            {project.type === "writing" && (
              <div className="flex items-center gap-5 mt-2">
                <div className="px-4 py-1 rounded-full border border-neutral-600 flex justify-center items-center">
                  <p className="text-sm opacity-50 mt-0.5">{project.tag}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>

      {!last && <div className="border-b border-neutral-800 mt-16"></div>}
    </motion.div>
  );
}
