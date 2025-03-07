import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import { articleType } from "./articleType";
import { graphicDesignType } from "./graphicDesignType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, articleType, graphicDesignType],
};
