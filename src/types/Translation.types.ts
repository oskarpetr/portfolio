import {
  ProjectCategory,
  ProjectDesign,
  ProjectDevelopment,
} from "./Project.types";

export interface Translation {
  sectionTitles: {
    projects: string;
    services: string;
    graphicDesigns: string;
    articles: string;
    footer: string;
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
  projectDetail: {
    client: string;
    projectType: string;
    personal: string;
  };
  services: {
    development: string;
    design: string;
    writing: string;
  };
  menu: {
    projects: string;
    about: string;
    services: string;
    contact: string;
  };
  footer: {
    startProject: string;
    location: string;
    country: string;
  };
}

export type Translations = {
  [key in LanguageType]: Translation;
};

export type LanguageType = "en" | "cs";
