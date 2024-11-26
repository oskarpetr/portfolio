import { cn } from "@/utils/cn";
import TextSlideIn from "../animation/TextSlideIn";

interface Props {
  direction: "left" | "right";
  title: string;
  number: number;
  subtitle?: string;
}

export default function Section({ direction, number, title, subtitle }: Props) {
  return (
    <div className="w-full mb-48">
      <div
        className={cn(
          "flex gap-6",
          direction === "left" ? "justify-start" : "flex-row-reverse"
        )}
      >
        <TextSlideIn
          className="text-[6vw] font-semibold !tracking-tight text-white-primary"
          text={title}
        />
        <TextSlideIn
          text={
            direction === "left"
              ? "/ " + number.toString()
              : number.toString() + " /"
          }
          className="text-white-primary text-3xl opacity-80 mt-8"
        />
      </div>

      {subtitle && (
        <div
          className={cn(
            "flex mt-8",
            direction === "left" ? "justify-end" : "justify-start"
          )}
        >
          <div className="w-1/2">
            <TextSlideIn
              text={subtitle}
              stagger={0.01}
              className="text-white-primary body-text text-2xl opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}
