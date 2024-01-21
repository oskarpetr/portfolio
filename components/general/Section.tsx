import Link from "next/link";
import { motion } from "framer-motion";

export default function Section({
  section,
  index,
}: {
  section: string;
  index: number;
}) {
  return (
    <Link href={section.toLocaleLowerCase()}>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.25 }}
        className="tracking-wide group cursor-pointer flex gap-4 items-center"
      >
        <div>
          <p className="text-xl md:text-3xl text-white">{section}</p>
          <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
        </div>

        <p className="group-hover:opacity-50 text-2xl md:text-3xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
          ➼
        </p>
      </motion.button>
    </Link>
  );
}
