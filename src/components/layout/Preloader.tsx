"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useState } from "react";
import { useTimeout } from "../../hooks/useTimeout";
import { preloaderTime } from "./App";

export default function Preloader() {
  const [showName, setShowName] = useState(true);
  useTimeout(() => setShowName(false), preloaderTime - 500);

  const stairsCount = 4;

  return (
    <div>
      <div className="pointer-events-none fixed top-0 left-0 z-40 flex h-screen w-full">
        {[...Array(stairsCount)].map((_, index) => (
          <Stair key={`stair-${index}`} index={index} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showName && (
          <div className="absolute right-6 bottom-6 left-6 z-50 flex items-baseline justify-center text-white lg:justify-start">
            <div className="text-4xl tracking-tighter sm:text-6xl lg:text-8xl">
              <ParagraphSplit text="Oskar Petr" includeExitAnimation />
            </div>
            <div className="-ml-6 text-4xl sm:text-5xl lg:text-6xl">
              <ParagraphSplit text="©" includeExitAnimation />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface StairProps {
  index: number;
}

function Stair({ index }: StairProps) {
  const variants = {
    initial: { y: 0 },
    exit: (index: number) => ({
      y: "-100vh",
      transition: {
        duration: 1,
        delay: index * 0.1,
        ease: BEZIER_EASING,
      },
    }),
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      exit="exit"
      custom={index}
      key={`stair-${index}`}
      className="h-full w-full bg-black"
    />
  );
}
