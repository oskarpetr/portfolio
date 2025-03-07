import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";

interface Props {
  children: ReactNode;
  direction: "up" | "down";
  delay?: number;
}

function Reveal({ children, direction, delay = 0 }: Props) {
  return (
    <div className="relative block overflow-hidden">
      <motion.div
        initial={{ y: direction === "up" ? "100%" : "-100%" }}
        animate={{ y: 0 }}
        transition={{
          delay,
          ease: BEZIER_EASING,
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default memo(Reveal);
