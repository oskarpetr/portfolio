"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import Icon from "./Icon";

interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  const variantsPrev = {
    initial: { top: 0 },
    whileHover: { top: "-70%" },
  };

  const variantsNext = {
    initial: { top: "100%", scale: 0.5, borderRadius: "30%" },
    whileHover: { top: 0, scale: 1, borderRadius: "0%" },
  };

  return (
    <motion.button
      initial="initial"
      whileHover="whileHover"
      className="relative h-14 w-fit cursor-pointer overflow-hidden px-6 outline -outline-offset-1"
    >
      <motion.div
        variants={variantsPrev}
        transition={{ duration: 0.5, ease: BEZIER_EASING }}
        className="relative top-0 left-0 flex items-center gap-2"
      >
        <div>{text}</div>
        <Icon name="ArrowRight" size={18} color="black" />
      </motion.div>

      <motion.div
        variants={variantsNext}
        transition={{ duration: 0.5, ease: BEZIER_EASING }}
        className="absolute top-0 left-0 flex h-14 w-full items-center justify-center gap-2 bg-black px-6 text-white"
      >
        <div>{text}</div>
        <Icon name="ArrowRight" size={18} color="white" />
      </motion.div>
    </motion.button>
  );
}
