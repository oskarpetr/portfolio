import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";

interface Props {
  delay: number;
}

export default function AnimatedDivider({ delay }: Props) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 1 }}
      transition={{
        delay,
        duration: 1,
        ease: BEZIER_EASING,
      }}
      className="border-t"
    ></motion.div>
  );
}
