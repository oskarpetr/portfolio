import { Project } from "@/types/Project.types";
import Image from "next/image";

interface Props {
  project: Project;
}

export default function ProjectImage({ project }: Props) {
  return (
    <div className="pt-[75%]">
      <Image
        src={project.mainImage.url}
        alt={project.mainImage.alt}
        fill
        priority
        placeholder="blur"
        blurDataURL={project.mainImage.placeholder}
        className="object-cover grayscale transition-all duration-500 hover:scale-105"
      />
    </div>
  );
}
