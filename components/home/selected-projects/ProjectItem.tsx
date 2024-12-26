import TextSlideIn from "../../animation/TextSlideIn";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/types/Project.types";
import { useRef, useState } from "react";
import { handleMouseMove } from "@/utils/mouseMove";
import MoveObject from "../../animation/MoveObject";
import CircleLink from "../../general/CircleLink";
import { cn } from "@/utils/cn";
import SectionTitle from "@/components/general/SectionTitle";

interface Props {
  project: IProject;
  color: "white" | "black";
}

export default function ProjectItem({ project, color }: Props) {
  // preview position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // refs
  const projectRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="absolute top-0 pointer-events-none" ref={circleRef}>
        <MoveObject mousePosition={mousePosition}>
          <CircleLink text="View" icon="ArrowUpRight" />
        </MoveObject>

        <div className="w-36 h-36"></div>
      </div>

      <div
        ref={projectRef}
        onMouseMove={(event) =>
          handleMouseMove({
            event,
            setMousePosition,
            outerRef: projectRef,
            innerRef: circleRef,
            offset: -40,
          })
        }
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <Link
          key={project.title}
          href={"/projects/" + project?.slug}
          className="flex flex-col cursor-pointer gap-6"
        >
          <div className="overflow-hidden">
            <div className="flex items-end justify-between mb-3">
              {/* <TextSlideIn
                text={project.title}
                className={cn(
                  "text-3xl text-white-primary font-medium",
                  color === "white"
                    ? "text-white-primary"
                    : "text-black-primary"
                )}
              />
              <TextSlideIn
                text={project.category}
                className={cn(
                  "text-xl body-text font-medium opacity-50",
                  color === "white"
                    ? "text-white-primary"
                    : "text-black-primary"
                )}
              /> */}
              <TextSlideIn
                text={project.title}
                className="text-white-primary text-2xl font-medium"
              />
              <TextSlideIn
                text={project.category}
                className="text-white-primary body-text opacity-50"
              />
              {/* <SectionTitle title={project.category} color="white" /> */}
            </div>

            <Image
              src={project.mainImage}
              alt={project.title}
              width={1000}
              height={0}
              className={cn(
                "border border-opacity-5 object-cover transition-all duration-700 hover:scale-[1.02]",
                color === "white"
                  ? "border-white-primary"
                  : "border-black-primary"
              )}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
