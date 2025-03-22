import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const tagType = defineType({
  name: "tag",
  title: "Tags",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "name",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
        },
        {
          name: "cs",
          title: "Czech",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string",
        },
        {
          name: "cs",
          title: "Czech",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name.en",
      subtitle: "service.name.en",
    },
  },
});
