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
        loading="lazy"
        placeholder="blur"
        blurDataURL={image.placeholder}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover grayscale transition-all duration-500 hover:scale-105"
      />
    </div>
  );
}
