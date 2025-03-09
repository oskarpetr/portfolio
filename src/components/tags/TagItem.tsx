import { TagShort } from "@/types/Tag.types";
import FadeIn from "../animation/FadeIn";
import HoverElement from "../animation/HoverElement";
import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  tag: TagShort;
  isLast: boolean;
  delay: number;
}

export default function TagItem({ tag, isLast, delay }: Props) {
  const { language } = useTranslationStore();

  return (
    <FadeIn key={`tag-${tag.id}`} delay={delay}>
      <HoverElement
        hoverText={{
          description: tag.description[language],
        }}
      >
        <TextStagger>
          <div className="cursor-pointer text-base font-normal underline decoration-neutral-300 underline-offset-4">
            {tag.name[language]}
            {!isLast ? "," : ""}
          </div>
        </TextStagger>
      </HoverElement>
    </FadeIn>
  );
}
