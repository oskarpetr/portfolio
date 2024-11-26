import { ReactNode, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  PARALLAX_LG,
  PARALLAX_MD,
  PARALLAX_SM,
  PARALLAX_XL,
  PARALLAX_XXL,
} from "@/constants/animation";
import { ParallaxSizes } from "@/types/Animation.types";

interface Props {
  children: ReactNode;
  size: ParallaxSizes;
  direction?: "x" | "y";
  customRef?: React.RefObject<any>;
}

export default function Parallax({
  children,
  size,
  direction = "y",
  customRef,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: customRef ? customRef : ref,
    offset: ["start end", "end start"],
  });

  const parallaxSize =
    size === "sm"
      ? PARALLAX_SM
      : size === "md"
      ? PARALLAX_MD
      : size === "lg"
      ? PARALLAX_LG
      : size === "xl"
      ? PARALLAX_XL
      : PARALLAX_XXL;

  const parallax = useTransform(
    direction === "y" ? scrollYProgress : scrollXProgress,
    [0, 1],
    [0, parallaxSize]
  );

  return (
    <motion.div
      ref={ref}
      style={
        direction === "y"
          ? { y: parallax, marginTop: parallaxSize / 4 }
          : { x: parallax, marginTop: parallaxSize / 4 }
      }
    >
      <div>{children}</div>
    </motion.div>
  );
}
