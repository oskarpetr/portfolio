import { motion } from "framer-motion";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: React.ComponentProps<"div">["className"];
  whileInView?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  whileInView = false,
}: Props) {
  return (
    <motion.div
      whileInView={whileInView ? { opacity: 1, y: 0 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={whileInView ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
}
