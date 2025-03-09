import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { apiVersion } from "../env";

export const aboutType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: InfoOutlineIcon,
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
  validation: (Rule) =>
    Rule.custom(async (value, context) => {
      const existing = await context
        .getClient({ apiVersion })
        .fetch('*[_type == "aboutPage"]');
      return existing.length === 0 ? true : "An About Page already exists.";
    }),
});
