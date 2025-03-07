import { ProjectDesign, ProjectDevelopment } from "./Project.types";

export type Service = {
  description: string;
} & (
  | {
      name: "development";
      technologies: ProjectDevelopment[];
    }
  | {
      name: "design";
      technologies: ProjectDesign[];
    }
  | {
      name: "writing";
      technologies: [];
    }
);
