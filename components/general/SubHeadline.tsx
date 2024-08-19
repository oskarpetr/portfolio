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
      className="text-3xl flex gap-4 z-30 relative text-neutral-400"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div>{title}</div>
      {/* <span className="opacity-50">➼</span> */}
    </motion.h2>
  );
}
