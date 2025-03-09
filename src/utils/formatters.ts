import { Tag } from "@/types/Tag.types";
import { LanguageType } from "@/types/Translation.types";

export function groupTagsByService(tags: Tag[], language: LanguageType) {
  const groupedTags = Object.entries(
    Object.groupBy(tags, (tag) => tag.service.name[language]),
  ) as [string, Tag[]][];

  const sortedGroups = groupedTags.sort((a, b) => {
    const order1 = a[1][0].service.order;
    const order2 = b[1][0].service.order;
    return order1 - order2;
  });

  return sortedGroups;
}
