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
      className={cn(
        "relative flex h-screen w-1/2 flex-col gap-6 lg:w-1/3 xl:w-1/4",
        className,
      )}
    >
      {graphicDesigns.map((graphicDesign, index) => (
        <div
          key={`graphic-design-${graphicDesign.id}-${index}}`}
          className="relative pt-[150%]"
        >
          <Image
            src={graphicDesign.image.url}
            alt={graphicDesign.image.alt}
            fill
            placeholder="blur"
            blurDataURL={graphicDesign.image.placeholder}
            className="relative h-full w-full object-cover grayscale"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default memo(Column);
