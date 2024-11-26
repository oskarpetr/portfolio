import { SchemaTypeDefinition } from "sanity";

export const articleSchema: SchemaTypeDefinition = {
  name: "articles",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
  ],
};
