"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { memo } from "react";

interface Props {
  text: string;
  indent?: boolean;
  delay?: number;
}

function ParagraphSplit({ text, indent = true, delay = 0 }: Props) {
  const words = text.split(" ");
  const stagger = 0.01;

  const variants = {
    initial: { y: "200%", clipPath: "inset(100% 0 100% 0)" },
    whileInView: { y: 0, clipPath: "inset(0 0 0 0)" },
  };

  return (
    <motion.p
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 1 }}
      className="inline-block overflow-hidden"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={{
            delay: delay + index * stagger,
            duration: 1,
            ease: BEZIER_EASING,
          }}
          className={cn(
            indent && index === 0 ? "indent-8" : "",
            "inline-block",
          )}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}

export default memo(ParagraphSplit);
