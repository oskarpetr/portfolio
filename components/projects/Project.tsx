import { ProjectType } from "@/types/Project.types";
import { cn } from "@/utils/cn";
import { HourglassHigh } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "../general/FadeIn";

export default function Project({
  project,
  last,
  index,
}: {
  project: ProjectType;
  last: boolean;
  index: number;
}) {
  const [hoverTechnology, setHoverTechnology] = useState<string | null>(null);

  return (
    <FadeIn whileInView>
      <Link href={"/projects" + project.slug!} className="group cursor-pointer">
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-12 text-white">
          <img
            src={`/projects/${project.image}.png`}
            alt={project.image}
            className="group-hover:scale-95 transition-all duration-500 border w-full sm:w-auto md:h-[13rem] border-white border-opacity-10 rounded-xl"
          />

          {/* <div className="min-w-[16rem] h-[9rem] md:min-w-[24rem] md:h-[13.5rem] bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl flex justify-center items-center">
            <HourglassHigh className="text-5xl opacity-20" />
          </div> */}

          <div className="flex flex-col gap-4 justify-center items-start xl:items-start">
            <div className="flex flex-col justify-center xl:justify-start">
              <h3 className="text-2xl text-left tracking-wide md:max-w-[35rem] xl:max-w-[40rem] leading-9">
                {project.title}
              </h3>

              <div className="mt-[-3px] h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="opacity-50 tracking-wide text-left md:w-[40rem] leading-7">
              {project.description.length > 150
                ? project.description.substring(0, 151) + "..."
                : project.description}
            </p>

            {project.type === "development" && (
              <div className="flex items-center gap-5 mt-2">
                {project.technologies.map((tech, index) => {
                  return (
                    <div className="flex items-center" key={tech}>
                      <div className="flex justify-center">
                        <Image
                          src={`/logos/monochrome-icons/${tech}.svg`}
                          alt={tech}
                          height={25}
                          width={25}
                          className="transition-all duration-500 opacity-50 group hover:opacity-80"
                          onMouseEnter={() => setHoverTechnology(tech)}
                          onMouseLeave={() => setHoverTechnology(null)}
                        />
                        <div
                          className={cn(
                            "absolute text-neutral-300 text-sm mt-10 duration-500 transition-all bg-neutral-800 py-1 px-4 rounded-xl border border-neutral-700",
                            tech === hoverTechnology
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        >
                          {tech}
                        </div>
                      </div>

                      {index !== project.technologies.length - 1 && (
                        <div className="ml-5 opacity-20 bg-white-primary w-1 h-1 rounded-full"></div>
                      )}
                    </div>
                  );
                })}

                {/* {project.repositary ? (
                  <Link href={project.repositary} target="_blank">
                    <p className="hover:opacity-80 opacity-50 transition-all tracking-wide">
                      Repositary
                    </p>
                  </Link>
                ) : (
                  <p className="opacity-50">Private repository</p>
                )} */}
              </div>
            )}

            {project.type === "writing" && (
              <div className="flex items-center gap-5 mt-2">
                <div className="px-4 py-1 rounded-full border border-neutral-500 flex justify-center items-center">
                  <p className="text-sm opacity-50 mt-0.5 tracking-wide">
                    {project.tag}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>

      {!last && <div className="border-b border-neutral-800 my-12"></div>}
    </FadeIn>
  );
}
