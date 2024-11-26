import { SchemaTypeDefinition } from "sanity";

export const testimonialSchema: SchemaTypeDefinition = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quoteText",
      title: "Quote Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quotes",
      title: "Quotes",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
