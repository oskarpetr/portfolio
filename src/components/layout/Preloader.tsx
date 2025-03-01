"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { BEZIER_EASING } from "@/utils/animation";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: "-100vh" }}
      transition={{
        duration: 1,
        ease: BEZIER_EASING,
      }}
      className="relative z-20"
    >
      <div
        className={cn(
          "absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black",
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center gap-3">
          <div className="text-xl text-white">Oskar Petr</div>
        </div>
      </div>
    </motion.div>
  );
}
