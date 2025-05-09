import Image from "next/image";
import Reveal from "../animation/Reveal";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Fragment, memo, useEffect, useRef } from "react";
import Tooltip from "../animation/Tooltip";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { ProjectImage } from "@/types/Project.types";

interface Props {
  image: ProjectImage;
  index: number;
}

function ProjectDetailImage({ image, index }: Props) {
  const { language } = useTranslationStore();

  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["80%", "100%"],
  );
  const width = useSpring(widthTransform, { stiffness: 100, damping: 20 });

  const setImageWidth = (index: number) => {
    if (index === 0) {
      width.set("100%");
    } else if (index === 1) {
      width.set("90%");
    } else {
      width.set("80%");
    }
  };

  useEffect(() => {
    setImageWidth(index);
  }, []);

  const imageComponent = (
    <Tooltip title={image.alt[language]}>
      <Reveal direction="up" delay={0.1 * index}>
        <div className="relative pt-[80%]">
          <Image
            src={image.url}
            alt={image.alt[language]}
            placeholder="blur"
            blurDataURL={image.placeholder}
            fill
            priority
            // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover grayscale"
          />
        </div>
      </Reveal>
    </Tooltip>
  );

  return (
    <Fragment>
      <motion.div
        ref={imageRef}
        style={{ width }}
        className="hidden lg:block lg:h-[28vw] xl:h-[28vw]"
      >
        {imageComponent}
      </motion.div>

      <div className="block lg:hidden">{imageComponent}</div>
    </Fragment>
  );
}

export default memo(ProjectDetailImage);
