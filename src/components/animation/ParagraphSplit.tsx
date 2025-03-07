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

  return (
    <div className="inline-block overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: "200%", clipPath: "inset(100% 0 100% 0)" }}
          animate={{ y: 0, clipPath: "inset(0 0 0 0)" }}
          // viewport={{ once: true }}
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
    </div>
  );
}

export default memo(ParagraphSplit);
