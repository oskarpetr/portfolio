import Link from "next/link";
import { motion } from "framer-motion";

export default function Section({
  section,
  index,
}: {
  section: {
    title: string;
    subTitle?: string;
  };
  index: number;
}) {
  return (
    <Link href={section.title.toLocaleLowerCase()} prefetch>
      <motion.div
        className="flex flex-col gap-3 group cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.25 }}
      >
        <div className="flex gap-4 items-center">
          <div>
            <p className="text-2xl md:text-[28px] text-white">
              {section.title}
            </p>
            <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          <p className="group-hover:opacity-50 text-2xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
            ➼
          </p>
        </div>

        <p className="opacity-50 tracking-wide w-[20rem] md:w-[25rem]">
          {section.subTitle}
        </p>
      </motion.div>
    </Link>
  );
}
