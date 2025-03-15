import { useScroll, useTransform, motion } from "framer-motion";
import { memo, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  multiplier?: number;
}

function Parallax({ children, multiplier = 1 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * multiplier]);

  return (
    <motion.div ref={containerRef} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default memo(Parallax);
