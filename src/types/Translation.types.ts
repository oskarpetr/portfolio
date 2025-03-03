import {
  ProjectCategory,
  ProjectDesign,
  ProjectDevelopment,
} from "./Project.types";

export interface Translation {
  sectionTitles: {
    projects: string;
  };
  categories: {
    [key in ProjectCategory]: string;
  };
  development: {
    [key in ProjectDevelopment]: string;
  };
  design: {
    [key in ProjectDesign]: string;
  };
}

export type Translations = {
  [key in LanguageType]: Translation;
};

export type LanguageType = "en" | "cs";
