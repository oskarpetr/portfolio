import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    }),

    defineField({
      name: "personal",
      type: "boolean",
    }),
    defineField({
      name: "client",
      type: "string",
      hidden: ({ parent }) => parent?.personal === true,
    }),
    defineField({
      name: "mainImage",
      type: "image",
      fields: [{ name: "alt", type: "string" }],
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          type: "object",
          name: "imageObject",
          fields: [
            { name: "image", type: "image" },
            { name: "alt", type: "string" },
          ],
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
      name: "startedAt",
      type: "date",
    }),
  ],
});
