import { BEZIER_EASING } from "@/constants/animation";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface Props {
  text: string;
  delay?: number;
  once?: boolean;
  className?: React.ComponentProps<"div">["className"];
  stagger?: number;
  exitAnimation?: boolean;
}

export default function TextSlideIn({
  text,
  delay = 0,
  once = true,
  className,
  stagger = 0.05,
  exitAnimation = false,
}: Props) {
  const variants = {
    initial: {
      y: "100%",
    },
    whileInView: (index: number) => ({
      y: 0,
      transition: {
        duration: 1,
        delay: delay + stagger * index,
        ease: BEZIER_EASING,
      },
    }),
    exit: (index: number) => ({
      y: "-100%",
      transition: {
        duration: 0.3,
        delay: stagger * index,
        ease: BEZIER_EASING,
      },
    }),
  };

  return (
    <motion.p
      whileInView="whileInView"
      initial="initial"
      exit={exitAnimation ? "exit" : ""}
      viewport={{ once, amount: 0.3 }}
    >
      {text.split(" ").map((word, index) => {
        return (
          <span key={index} className="relative overflow-hidden inline-flex">
            <motion.span
              className={className}
              variants={variants}
              custom={index}
              key={index}
            >
              {word}
            </motion.span>

            {index !== text.split(" ").length - 1 && (
              <span className={cn("inline-block", className)}>&nbsp;</span>
            )}
          </span>
        );
      })}
    </motion.p>
  );
}
