import { IProject } from "@/types/Project.types";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  project: IProject;
}

export default function ProjectImage({ project }: Props) {
  return (
    <Fragment>
      <Image
        src={project.mainImage}
        alt={project.title}
        fill
        priority
        placeholder="blur"
        blurDataURL={project.placeholder}
        className="object-cover grayscale transition-all duration-500 hover:scale-110"
      />

      <div className="pointer-events-none absolute top-0 flex h-full w-full items-center justify-center opacity-0 transition-all group-hover:opacity-100">
        <div className="bg-white px-4 py-2 text-sm">[ VISIT ]</div>
      </div>
    </Fragment>
  );
}
