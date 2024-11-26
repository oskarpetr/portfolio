import { ReactNode, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  nextRef: RefObject<any>;
  className?: React.ComponentProps<"div">["className"];
}

export default function SlideContainer({
  children,
  nextRef,
  className,
}: Props) {
  const { scrollYProgress } = useScroll({
    target: nextRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], ["0", "30vh"]);

  return (
    <div className={cn("sticky top-0", className)}>
      <motion.div style={{ scale, y, opacity }}>{children}</motion.div>
    </div>
  );
}
