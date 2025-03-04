import Image from "next/image";
import HoverElement from "../animation/HoverElement";
import Reveal from "../animation/Reveal";
import { ProjectImage } from "@/types/Project.types";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";

interface Props {
  image: ProjectImage;
  index: number;
}

export default function ProjectDetailImage({ image, index }: Props) {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["80%", "100%"],
  );
  const width = useSpring(widthTransform, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (index === 0) {
      width.set("100%");
    } else if (index === 1) {
      width.set("90%");
    } else {
      width.set("80%");
    }
  }, [index]);

  const imageComponent = (
    <HoverElement hoverText={image.alt}>
      <Reveal direction="up" delay={0.1 * index}>
        <div className="relative pt-[75%]">
          <Image
            src={image.url}
            alt={image.alt}
            placeholder="blur"
            blurDataURL={image.placeholder}
            fill
            priority
            loading="eager"
            className="object-cover grayscale"
          />
        </div>
      </Reveal>
    </HoverElement>
  );

  return (
    <Fragment>
      <motion.div
        key={image.alt}
        style={{ width }}
        ref={imageRef}
        className="hidden lg:block lg:h-[32vw] xl:h-[28vw]"
      >
        {imageComponent}
      </motion.div>

      <div className="block lg:hidden">{imageComponent}</div>
    </Fragment>
  );
}
