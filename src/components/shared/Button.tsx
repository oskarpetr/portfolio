"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import Icon, { IconType } from "./Icon";
import { cn } from "@/utils/cn";

interface Props {
  text: string;
  color?: "black" | "white";
  icon?: IconType;
  onClick?: () => void;
  loading?: boolean;
}

export default function Button({
  text,
  color = "white",
  icon,
  onClick,
  loading,
}: Props) {
  const variantsPrev = {
    initial: { top: 0 },
    whileHover: { top: "-70%" },
  };

  const variantsNext = {
    initial: { top: "100%", scale: 0.5, borderRadius: "30%" },
    whileHover: { top: 0, scale: 1, borderRadius: "0%" },
  };

  return (
    <div className="w-fit border">
      <motion.button
        initial="initial"
        whileHover="whileHover"
        className={cn(
          "relative cursor-pointer overflow-hidden px-6 py-3",
          color === "black" ? "bg-black text-white" : "",
        )}
        onClick={onClick}
      >
        <motion.div
          variants={variantsPrev}
          transition={{ duration: 0.5, ease: BEZIER_EASING }}
          className="relative top-0 left-0 flex items-center gap-2"
        >
          <div>{text}</div>
          {icon && (
            <Icon
              name={loading ? "Spinner" : icon}
              size={18}
              color={color === "black" ? "white" : "black"}
              className={loading ? "animate-spin" : ""}
            />
          )}
        </motion.div>

        <motion.div
          variants={variantsNext}
          transition={{ duration: 0.5, ease: BEZIER_EASING }}
          className={cn(
            "absolute top-0 left-0 flex w-full items-center justify-center gap-2 px-6 py-3",
            color === "black" ? "bg-white text-black" : "bg-black text-white",
          )}
        >
          <div>{text}</div>
          {icon && (
            <Icon
              name={loading ? "Spinner" : icon}
              size={18}
              color={color === "black" ? "black" : "white"}
              className={loading ? "animate-spin" : ""}
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
