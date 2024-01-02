import { cn } from "@/utils/cn";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

export default function ProjectsSelector({
  projectItems,
  indexSelected,
  setIndexSelected,
}: {
  projectItems: string[];
  indexSelected: number;
  setIndexSelected: Dispatch<SetStateAction<number>>;
}) {
  return (
    <motion.div
      className="flex gap-4 text-white rounded-2xl"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {projectItems.map((item, index) => {
        return (
          <button
            key={item}
            onClick={() => setIndexSelected(index)}
            className={cn(
              "px-6 py-2 rounded-2xl transition-all tracking-wide flex items-center gap-3",
              indexSelected === index
                ? "bg-white bg-opacity-10 border border-white border-opacity-50"
                : "bg-white bg-opacity-5 border border-white border-opacity-20 text-neutral-400"
            )}
          >
            <p className="mt-0.5">{item}</p>

            {/* <div
              className={cn(
                "text-sm font-bold bg-white px-1.5 rounded-full flex justify-center items-center transition-all",
                indexSelected === index
                  ? "text-black"
                  : "text-white bg-opacity-20"
              )}
            >
              <p className="mt-0.5">5</p>
            </div> */}
          </button>
        );
      })}
    </motion.div>
  );
}
