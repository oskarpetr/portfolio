import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const graphicDesignType = defineType({
  name: "graphicDesign",
  title: "Graphic Designs",
  type: "document",
  icon: ImageIcon,
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
