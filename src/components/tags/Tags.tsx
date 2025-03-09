import { TagShort } from "@/types/Tag.types";
import TagItem from "./TagItem";

interface Props {
  tags: TagShort[];
  delay: number;
}

export default function Tags({ tags, delay }: Props) {
  return (
    <div className="pointer-events-auto flex flex-wrap items-center gap-x-2 gap-y-1">
      {tags.map((tag, index) => (
        <TagItem
          key={`tag-${tag.id}`}
          tag={tag}
          isLast={index === tags.length - 1}
          delay={delay + 0.1 * index}
        />
      ))}
    </div>
  );
}
