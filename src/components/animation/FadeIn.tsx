"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  once?: boolean;
}

export default function FadeIn({ children, delay = 0, once = true }: Props) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      viewport={{ once, amount: 0.5 }}
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
