import { TagShort } from "@/types/Tag.types";
import FadeIn from "../animation/FadeIn";
import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "@/translation/useTranslationStore";
import Tooltip from "../animation/Tooltip";

interface Props {
  tag: TagShort;
  isLast: boolean;
  delay: number;
}

export default function TagItem({ tag, isLast, delay }: Props) {
  const { language } = useTranslationStore();

  return (
    <FadeIn key={`tag-${tag.id}-${language}`} delay={delay}>
      <Tooltip description={tag.description[language]} icon="BracketsCurly">
        <div className="cursor-default border-b border-neutral-300 text-base font-normal">
          <TextStagger>
            {tag.name[language]}
            {!isLast ? "," : ""}
          </TextStagger>
        </div>
      </Tooltip>
    </FadeIn>
  );
}
