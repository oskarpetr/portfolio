import { type ProjectImage } from "@/types/ProjectImage.types";
import Image from "next/image";

interface Props {
  image: ProjectImage;
}

export default function ProjectImage({ image }: Props) {
  return (
    <div className="pt-[75%]">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={image.placeholder}
        className="object-cover grayscale transition-all duration-500 hover:scale-105"
      />
    </div>
  );
}
