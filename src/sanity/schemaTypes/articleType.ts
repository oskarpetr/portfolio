import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const articleType = defineType({
  name: "article",
  title: "Articles",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "url",
    }),
    defineField({
      name: "publishedAt",
      type: "date",
    }),
  ],
});
