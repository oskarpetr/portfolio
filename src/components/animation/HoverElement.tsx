"use client";

import { motion, useMotionValue } from "framer-motion";
import { memo, ReactNode, useEffect, useState } from "react";
import HoverText, { HoverTextType } from "./HoverText";

interface Props {
  children: ReactNode;
  hoverText: HoverTextType;
}

function HoverElement({ children, hoverText }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.set(event.clientX + 20);
    mouseY.set(event.clientY + 20);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        className="pointer-events-none fixed z-10"
        style={{
          left: mouseX,
          top: mouseY,
        }}
      >
        <HoverText hoverText={hoverText} />
      </motion.div>
    </div>
  );
}

export default memo(HoverElement);
