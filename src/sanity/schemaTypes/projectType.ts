import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
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
      options: {
        list: [
          {
            title: "Web development",
            value: "webDevelopment",
          },
          {
            title: "Web design",
            value: "webDesign",
          },
          {
            title: "Graphic design",
            value: "graphicDesign",
          },
          {
            title: "Writing",
            value: "writing",
          },
        ],
      },
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
          type: "text",
        },
        {
          name: "cs",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "development",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          {
            title: "Next.js",
            value: "nextJs",
          },
          {
            title: "CMS",
            value: "cms",
          },
          {
            title: "WordPress development",
            value: "wordpressDevelopment",
          },
          {
            title: "E-commerce management",
            value: "ecommerceManagement",
          },
          {
            title: "Elementor",
            value: "elementor",
          },
          {
            title: "Tailwind CSS",
            value: "tailwindCss",
          },
          {
            title: "Framer Motion",
            value: "framerMotion",
          },
          {
            title: "SEO optimization",
            value: "seoOptimization",
          },
          {
            title: "Multi-language support",
            value: "multiLanguageSupport",
          },
          {
            title: "Newsletter integration",
            value: "newsletterIntegration",
          },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "design",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          {
            title: "UI/UX design",
            value: "uiUxDesign",
          },
          {
            title: "Web redesign",
            value: "webRedesign",
          },
          {
            title: "Graphic design",
            value: "graphicDesign",
          },
          {
            title: "Identity design",
            value: "identityDesign",
          },
          {
            title: "Animation",
            value: "animation",
          },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "startedAt",
      type: "date",
    }),
  ],
});
