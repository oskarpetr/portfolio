import { motion } from "framer-motion";

export default function SubHeadline({
  title,
  delay,
}: {
  title: string;
  delay: number;
}) {
  return (
    <motion.h2
      className="text-white text-3xl flex gap-4 tracking-wide"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.25 * delay }}
    >
      {title}
    </motion.h2>
  );
}
