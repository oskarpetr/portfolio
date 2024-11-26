import { BEZIER_EASING } from "@/constants/animation";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface Props {
  delay?: number;
  width?: string;
  className?: React.ComponentProps<"div">["className"];
}

export default function Separator({
  delay = 0,
  width = "100%",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1, delay, ease: BEZIER_EASING }}
      className={cn("h-[0.5px]", className)}
    ></motion.div>
  );
}
