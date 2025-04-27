import { TagShort } from "@/types/Tag.types";
import FadeIn from "../animation/FadeIn";
import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "@/stores/useTranslationStore";
import Tooltip from "../animation/Tooltip";

interface Props {
  tag: TagShort;
  index?: number;
  isLast: boolean;
  delay: number;
}

export default function TagItem({ tag, index, isLast, delay }: Props) {
  const { language } = useTranslationStore();

  return (
    <FadeIn key={`tag-${tag.id}-${language}`} delay={delay}>
      <Tooltip description={tag.description[language]} index={index}>
        <div className="cursor-default border-b border-dashed border-neutral-400 text-base font-normal">
          <TextStagger>
            {tag.name[language]}
            {!isLast ? "," : ""}
          </TextStagger>
        </div>
      </Tooltip>
    </FadeIn>
  );
}
