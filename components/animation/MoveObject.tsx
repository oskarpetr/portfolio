import { BEZIER_EASING } from "@/constants/animation";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  mousePosition: { x: number; y: number };
  children: ReactNode;
  invert?: boolean;
  blur?: "big" | "small";
}

export default function MoveObject({
  mousePosition,
  children,
  invert = true,
  blur = "big",
}: Props) {
  return (
    <AnimatePresence mode="wait">
      {mousePosition.x !== 0 && mousePosition.y !== 0 && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            y: mousePosition.y,
            x: mousePosition.x,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: mousePosition.y,
            x: mousePosition.x,
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { ease: BEZIER_EASING },
          }}
          transition={{ ease: "backOut", duration: 0.3 }}
          className={cn(
            "absolute top-0 left-0 z-50 rounded-full filter will-change-[filter]",
            invert ? "mix-blend-difference" : "",
            blur === "big" ? "backdrop-blur-2xl" : "backdrop-blur-md"
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
