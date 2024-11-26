import { ReactNode } from "react";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: React.ComponentProps<"div">["className"];
  direction?: "up" | "down";
  exitAnimation?: boolean;
}

export default function ImageSlideIn({
  children,
  delay = 0,
  className,
  direction = "up",
  exitAnimation = false,
}: Props) {
  const variants = {
    initial: {
      y: "100%",
    },
    whileInView: {
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: BEZIER_EASING,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      whileInView="whileInView"
      initial="initial"
      exit={exitAnimation ? "exit" : ""}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden"
    >
      <motion.div variants={variants} className={className}>
        {children}
      </motion.div>
    </motion.div>
  );
}
