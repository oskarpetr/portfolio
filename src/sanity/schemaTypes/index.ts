import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import { articleType } from "./articleType";
import { graphicDesignType } from "./graphicDesignType";
import { serviceType } from "./serviceType";
import { tagType } from "./tagType";
import { aboutType } from "./aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    serviceType,
    tagType,
    articleType,
    graphicDesignType,
    aboutType,
  ],
};
