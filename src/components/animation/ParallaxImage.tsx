import { useScroll, useTransform, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export default function ParallaxImage({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7vh", "3vh"]);

  return (
    <div
      className="h-fit w-fit overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <motion.div ref={containerRef} style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  );
}
