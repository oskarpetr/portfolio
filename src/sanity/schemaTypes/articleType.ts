import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
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
