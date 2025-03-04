"use client";

import { motion, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  hoverText: string;
}

export default function HoverElement({ children, hoverText }: Props) {
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
        <HoverText text={hoverText} />
      </motion.div>
    </div>
  );
}

interface HoverProps {
  text: string;
}

function HoverText({ text }: HoverProps) {
  return (
    <div className="border bg-white px-4 py-2 text-sm uppercase">
      [ {text} ]
    </div>
  );
}
