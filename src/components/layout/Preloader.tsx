"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowName(false);
    }, 2500);

    return () => setShowName(true);
  }, []);

  const stairsCount = 4;

  return (
    <div>
      <div className="pointer-events-none fixed top-0 left-0 z-40 flex h-screen w-full">
        {[...Array(stairsCount)].map((_, index) => (
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "-100vh",
              transition: {
                duration: 1,
                delay: index * 0.1,
                ease: BEZIER_EASING,
              },
            }}
            key={`stair-${index}`}
            className="h-full w-full bg-black"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showName && (
          <div className="absolute bottom-10 left-10 z-50 flex items-baseline text-white">
            <div className="text-4xl tracking-tighter sm:text-6xl lg:text-8xl">
              <ParagraphSplit text="Oskar Petr" />
            </div>
            <div className="-ml-6 text-4xl sm:text-5xl lg:text-6xl">
              <ParagraphSplit text="©" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
