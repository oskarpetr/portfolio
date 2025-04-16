import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "logo",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "content",
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
      name: "author",
      type: "string",
    }),
    defineField({
      name: "authorPosition",
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
      name: "publishedAt",
      type: "date",
    }),
  ],
});
