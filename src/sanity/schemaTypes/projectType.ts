import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentTextIcon,
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
      name: "category",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
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
      type: "text",
    }),
    defineField({
      name: "startedAt",
      type: "date",
    }),
  ],
});
