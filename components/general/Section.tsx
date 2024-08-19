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
        className="flex flex-col gap-2 group cursor-pointer py-6 px-8 rounded-2xl bg-[#1d6188] border border-[#1d4b65] border-s-2 border-e-2 border-t-2 border-b-[6px] active:border-b-2 active:mt-[4px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      >
        <div className="flex gap-4 items-center">
          <div>
            <p className="text-2xl text-white-primary">{section.title}</p>
            <div className="h-[2px] bg-neutral-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
          </div>

          <p className="group-hover:opacity-50 text-2xl opacity-0 group-hover:translate-x-2 -translate-x-8 transition-all duration-500">
            ➼
          </p>
        </div>

        <p className="opacity-50 md:w-[25rem] leading-7">{section.subTitle}</p>
      </motion.div>
    </Link>
  );
}
