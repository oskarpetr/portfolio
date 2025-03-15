import { motion, useScroll, useTransform } from "framer-motion";
import { memo, ReactNode, RefObject } from "react";

interface Props {
  children: ReactNode;
  sectionRef: RefObject<HTMLDivElement | null>;
}

function SectionSlideUp({ children, sectionRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start start"],
    layoutEffect: false,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const opacityBlack = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <div className="relative">
      <motion.div style={{ scale, y }}>{children}</motion.div>

      <motion.div
        className="pointer-events-none absolute -bottom-64 -left-10 z-20 h-screen w-screen bg-black"
        style={{ opacity: opacityBlack }}
      ></motion.div>
    </div>
  );
}

export default memo(SectionSlideUp);
