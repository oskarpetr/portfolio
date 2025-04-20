import { useTranslationStore } from "@/translation/useTranslationStore";
import { type ProjectImage } from "@/types/Project.types";
import Image from "next/image";

interface Props {
  image: ProjectImage;
}

export default function ProjectImage({ image }: Props) {
  const { language } = useTranslationStore();

  return (
    <div className="relative pt-[70%]">
      <Image
        src={image.url}
        alt={image.alt[language]}
        fill
        priority
        placeholder="blur"
        blurDataURL={image.placeholder}
        // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover grayscale transition-all duration-700 hover:scale-[1.03]"
      />
    </div>
  );
}
