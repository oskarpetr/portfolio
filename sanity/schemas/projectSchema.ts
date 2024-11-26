import { SchemaTypeDefinition } from "sanity";

export const projectSchema: SchemaTypeDefinition = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Development", "Writing", "Design", "Developement, Design"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Client", "Personal project", "Academic project"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.uri(),
    },
    {
      name: "secondaryLink",
      title: "Secondary Link",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "link",
          title: "Link",
          type: "string",
          validation: (Rule) => Rule.uri().required(),
        },
      ],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "showcases",
      title: "Showcases",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "src",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "alt",
              title: "Alt",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "detailText",
      title: "Detail Text",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
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
