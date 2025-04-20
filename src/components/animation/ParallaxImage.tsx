import { useScroll, useTransform, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export default function ParallaxImage({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <div className="h-fit w-full">
      <div
        ref={containerRef}
        className="relative aspect-square w-full overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
