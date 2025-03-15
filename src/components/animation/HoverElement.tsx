"use client";

import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { memo, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  hoverChildren: ReactNode;
  zIndex?: number;
}

function HoverElement({ children, hoverChildren, zIndex = 10 }: Props) {
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

  const animationConfig: SpringOptions = {
    damping: 30,
    stiffness: 300,
  };

  const hoverElement = (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0,
      }}
      className="pointer-events-none fixed hidden sm:block"
      style={{
        left: useSpring(mouseX, animationConfig),
        top: useSpring(mouseY, animationConfig),
        zIndex,
      }}
    >
      {hoverChildren}
    </motion.div>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {createPortal(hoverElement, document.body)}
    </div>
  );
}

export default memo(HoverElement);
