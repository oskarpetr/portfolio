import { type SchemaTypeDefinition } from "sanity";
import { testimonialSchema } from "../schemas/testimonialSchema";
import { projectSchema } from "../schemas/projectSchema";
import { articleSchema } from "../schemas/articleSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, articleSchema, testimonialSchema],
};
