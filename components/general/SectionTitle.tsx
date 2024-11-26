import { cn } from "@/utils/cn";
import TextSlideIn from "../animation/TextSlideIn";

interface Props {
  title: string;
  color?: "white" | "black";
  delay?: number;
}

export default function SectionTitle({ title, color, delay = 0 }: Props) {
  return (
    <TextSlideIn
      text={`${title}`}
      delay={delay}
      className={cn(
        "text-md uppercase body-text mb-12",
        color === "white" ? "text-white-primary" : "text-black-primary"
      )}
    />
  );
}
