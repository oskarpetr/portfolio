export interface Translation {
  sectionTitles: {
    projects: string;
    services: string;
    graphicDesigns: string;
    articles: string;
    footer: string;
  };
  projectDetail: {
    client: string;
    projectType: string;
    personal: string;
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

export type LanguagesType = {
  [key in LanguageType]: string;
};

export type LanguageType = "en" | "cs";
