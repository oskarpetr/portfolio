import { GraphicDesign } from "@/types/GraphicDesign.types";
import { MotionValue } from "framer-motion";
import { ComponentProps, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface Props {
  graphicDesigns: GraphicDesign[];
  y: MotionValue<number>;
  className?: ComponentProps<"div">["className"];
}

function Column({ graphicDesigns, y, className }: Props) {
  return (
    <motion.div
      style={{ y }}
      className={cn("relative flex h-screen w-1/4 flex-col gap-10", className)}
    >
      {graphicDesigns.map((graphicDesign, index) => (
        <div
          key={`graphic-design-${graphicDesign.id}-${index}`}
          className="relative pt-[150%]"
        >
          <Image
            src={graphicDesign.image.url}
            alt={graphicDesign.image.alt}
            fill
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL={graphicDesign.image.placeholder}
            className="relative h-full w-full rounded-sm object-cover grayscale"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default memo(Column);
