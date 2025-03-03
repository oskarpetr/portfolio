"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";

interface Props {
  children: ReactNode;
}

export default function TextStagger({ children }: Props) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{ ease: BEZIER_EASING, duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{ ease: BEZIER_EASING, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
