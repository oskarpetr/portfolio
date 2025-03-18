export interface Translation {
  sectionTitles: {
    projects: string;
    about: string;
    university: string;
    services: string;
    graphicDesigns: string;
    articles: string;
    testimonials: string;
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
    socialSites: string;
    pages: string;
    country: string;
  };
  tooltips: {
    explore: string;
    read: string;
  };
  alts: {
    myself: string;
  };
}

export type Translations = {
  [key in LanguageType]: Translation;
};

export type LanguagesType = {
  [key in LanguageType]: string;
};

export type LanguageType = "en" | "cs";
