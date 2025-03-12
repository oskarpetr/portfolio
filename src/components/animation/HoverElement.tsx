"use client";

import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { memo, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  hoverChildren: ReactNode;
}

function HoverElement({ children, hoverChildren }: Props) {
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
        className="pointer-events-none fixed z-10 hidden sm:block"
        style={{
          left: useSpring(mouseX, animationConfig),
          top: useSpring(mouseY, animationConfig),
        }}
      >
        {hoverChildren}
      </motion.div>
    </div>
  );
}

export default memo(HoverElement);
