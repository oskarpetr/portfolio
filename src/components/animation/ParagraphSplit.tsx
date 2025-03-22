"use client";

import { useTranslationStore } from "@/translation/useTranslationStore";
import { BEZIER_EASING } from "@/utils/animation";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { memo } from "react";

interface Props {
  text: string;
  indent?: boolean;
  delay?: number;
  animateWhileInView?: boolean;
  includeExitAnimation?: boolean;
}

function ParagraphSplit({
  text,
  indent = true,
  delay = 0,
  animateWhileInView = true,
  includeExitAnimation = false,
}: Props) {
  const { language } = useTranslationStore();

  const words = text.split(" ");
  const stagger = 0.01;

  const variants = {
    initial: { y: "300%", clipPath: "inset(100% 0 100% 0)" },
    animate: { y: 0, clipPath: "inset(0 0 0 0)" },
  };

  return (
    <motion.p
      key={`paragraph-${language}`}
      initial="initial"
      animate={animateWhileInView ? undefined : "animate"}
      whileInView={animateWhileInView ? "animate" : undefined}
      exit={includeExitAnimation ? "initial" : undefined}
      viewport={animateWhileInView ? { once: true, amount: 1 } : undefined}
      className="relative inline-block overflow-hidden"
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
