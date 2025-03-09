"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import { memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

function FadeIn({ children, delay = 0 }: Props) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      viewport={{ once: true, amount: 1 }}
      transition={{
        delay,
        duration: 1,
        ease: BEZIER_EASING,
      }}
    >
      {children}
    </motion.div>
  );
}

export default memo(FadeIn);
