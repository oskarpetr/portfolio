import { defineField, defineType } from "sanity";

export const graphicDesignType = defineType({
  name: "graphicDesign",
  title: "Graphic Design",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      fields: [{ name: "alt", type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
  },
});
