"use client";

import { Service } from "@/types/Service.types";
import Index from "../shared/Index";
import ParagraphSplit from "../animation/ParagraphSplit";
import { useTranslationStore } from "@/translation/useTranslationStore";
import { cn } from "@/utils/cn";
import { ProjectDesign, ProjectDevelopment } from "@/types/Project.types";
import HoverElement from "../animation/HoverElement";
import TextStagger from "../animation/TextStagger";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceItem({ service, index }: Props) {
  const { translation } = useTranslationStore();
  const technologies = service.technologies.map((technology) =>
    service.name === "development"
      ? translation.development[technology as ProjectDevelopment]
      : translation.design[technology as ProjectDesign],
  );

  return (
    <div
      key={service.name}
      className={cn(
        "pointer-events-none flex h-60 items-center justify-center",
        // "sticky top-0 h-[100vh]",
        // index === 0 ? "mt-[100vh]" : "mt-[50vh]",
      )}
    >
      <div
        className="relative flex w-full border-t bg-white py-8 shadow-[0px_-20px_20px_10px_#ffffff]"
        style={
          {
            // top: index === 1 ? "100px" : index === 2 ? "185px" : "",
            // zIndex: index === 0 ? 0 : index === 1 ? 1 : index === 2 ? 2 : 0,
          }
        }
      >
        <div className="w-1/4">
          <Index index={index} />
        </div>

        <div className="w-1/4">{translation.services[service.name]}</div>
        <div className="flex w-2/4 flex-col gap-4">
          <div className="font-normal">
            <ParagraphSplit text={service.description} />
          </div>

          <div className="pointer-events-auto flex items-center gap-1">
            <div className="mr-2 w-8 border-t"></div>
            {technologies.map((technology, techIndex) => (
              <HoverElement
                key={technology}
                hoverText={{
                  title: technology,
                  description: "Modern web development framework",
                }}
              >
                <TextStagger>
                  <div className="cursor-pointer font-normal">
                    {technology}
                    {techIndex !== technologies.length - 1 ? "," : ""}
                  </div>
                </TextStagger>
              </HoverElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
