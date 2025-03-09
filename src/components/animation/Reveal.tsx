import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";

interface Props {
  children: ReactNode;
  direction: "up" | "down";
  delay?: number;
  viewportAmount?: number;
}

function Reveal({ children, direction, delay = 0, viewportAmount }: Props) {
  const variants = {
    initial: {
      y: direction === "up" ? "100%" : "-100%",
    },
    animate: {
      y: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={viewportAmount ? undefined : "animate"}
      whileInView={viewportAmount ? "animate" : undefined}
      viewport={
        viewportAmount ? { once: true, amount: viewportAmount } : undefined
      }
      className="relative block overflow-hidden"
    >
      <motion.div
        variants={variants}
        transition={{
          delay,
          ease: BEZIER_EASING,
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default memo(Reveal);
