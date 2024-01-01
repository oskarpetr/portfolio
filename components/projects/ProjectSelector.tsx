import { cn } from "@/utils/cn";
import { Dispatch, SetStateAction } from "react";

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
    <div className="flex gap-4 text-white rounded-2xl">
      {projectItems.map((item, index) => {
        return (
          <button
            key={item}
            onClick={() => setIndexSelected(index)}
            className={cn(
              "px-6 py-2 rounded-2xl transition-all tracking-wide",
              indexSelected === index
                ? "bg-white bg-opacity-10 border border-white border-opacity-50"
                : "bg-white bg-opacity-5 border border-white border-opacity-20 text-neutral-400"
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
