import { IProject } from "@/types/Project.types";
import { cn } from "@/utils/cn";
import TextSlideIn from "../../animation/TextSlideIn";
import Link from "next/link";
import Separator from "../../general/Separator";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import Icon from "../../general/Icon";

interface Props {
  project: IProject;
  index: number;
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
  projectsLength: number;
}

export default function ProjectItem_Old({
  project,
  index,
  active,
  setActive,
  projectsLength,
}: Props) {
  return (
    <Link
      key={project.title}
      href={"/projects/" + project?.slug}
      className="flex flex-col cursor-pointer"
      onMouseEnter={() => setActive(project.slug)}
      onMouseLeave={() => setActive(null)}
    >
      <Separator className="bg-white-primary opacity-20" />

      <div
        className={cn(
          "flex items-center justify-between py-6 transition-all duration-300",
          active === project.slug ? "pl-4" : "px-0"
        )}
      >
        <div className="flex items-center gap-2">
          <TextSlideIn
            text={project.title}
            className={cn(
              "text-white-primary text-5xl transition-opacity duration-300",
              active !== project.slug && active !== null
                ? "opacity-30"
                : "opacity-100"
            )}
          />
          <div
            className={cn(
              "transition-opacity duration-300",
              active !== project.slug ? "opacity-0" : "opacity-100"
            )}
          >
            <Icon
              name="ArrowUpRight"
              className="*:text-white-primary"
              size={50}
            />
          </div>
        </div>

        <TextSlideIn
          text={project.category}
          className={cn(
            "text-white-primary text-lg body-text transition-opacity duration-300",
            active !== project.slug ? "opacity-0" : "opacity-50"
          )}
        />

        {/* <div
          className={cn(
            "transition-opacity duration-300",
            active !== project.slug ? "opacity-0" : "opacity-50"
          )}
        >
          <SectionBubble title={project.type} type="white" disablePadding />
          <Icon
            name="ArrowUpRight"
            className="*:text-white-primary"
            size={50}
          />
        </div> */}
      </div>

      {index === projectsLength - 1 && (
        <Separator className="bg-white-primary opacity-20" />
      )}
    </Link>
  );
}
