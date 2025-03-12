import { ServiceShort } from "@/types/Service.types";
import { Tag } from "@/types/Tag.types";
import { LanguageType } from "@/types/Translation.types";

export function groupTagsByService(tags: Tag[], language: LanguageType) {
  const groupedTags = Object.values(
    Object.groupBy(tags, (tag) => tag.service.name[language]),
  ) as Tag[][];

  const sortedGroups = groupedTags
    .map((group) => [group[0].service, group] as [ServiceShort, Tag[]])
    .sort((a, b) => a[0].order - b[0].order);

  return sortedGroups;
}
