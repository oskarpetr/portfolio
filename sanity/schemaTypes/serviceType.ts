// import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  // icon: CogIcon,
  fields: [
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
          type: "text",
        },
        {
          name: "cs",
          title: "Czech",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ name: "tag", type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "order",
      type: "number",
    }),
  ],

  preview: {
    select: {
      title: "name.en",
    },
  },
});
