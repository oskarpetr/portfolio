import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";

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
      className="relative h-14 cursor-pointer overflow-hidden px-10 outline -outline-offset-1"
    >
      <motion.div
        variants={variantsPrev}
        transition={{ duration: 0.5, ease: BEZIER_EASING }}
        className="relative top-0 left-0"
      >
        {text}
      </motion.div>

      <motion.div
        variants={variantsNext}
        transition={{ duration: 0.5, ease: BEZIER_EASING }}
        className="absolute top-0 left-0 flex h-14 w-full items-center bg-black px-10 text-white"
      >
        {text}
      </motion.div>
    </motion.button>
  );
}
