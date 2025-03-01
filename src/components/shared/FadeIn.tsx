"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: React.ComponentProps<"div">["className"];
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      viewport={{ once, amount: 0.5 }}
      transition={{
        duration: 1,
        delay,
        ease: BEZIER_EASING,
      }}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
}
