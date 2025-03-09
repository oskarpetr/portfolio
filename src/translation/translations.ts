import { Translation, Translations } from "@/types/Translation.types";

const translationEn: Translation = {
  sectionTitles: {
    projects: "Projects",
    about: "About",
    university: "University",
    services: "Services",
    graphicDesigns: "Graphic designs",
    articles: "Articles",
    footer: "Footer",
  },
  projectDetail: {
    client: "Client",
    projectType: "Project type",
    personal: "Personal",
  },
  menu: {
    projects: "Projects",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
  footer: {
    startProject: "Start a project?",
    location: "Location",
    country: "Czech Republic",
  },
};

const translationCs: Translation = {
  sectionTitles: {
    projects: "Projekty",
    about: "O mně",
    university: "Vysoká škola",
    services: "Služby",
    graphicDesigns: "Grafické designy",
    articles: "Články",
    footer: "Zápatí",
  },
  projectDetail: {
    client: "Klient",
    projectType: "Typ projektu",
    personal: "Osobní",
  },
  menu: {
    projects: "Projekty",
    about: "O mně",
    services: "Služby",
    contact: "Kontakt",
  },
  footer: {
    startProject: "Začneme projekt?",
    location: "Lokace",
    country: "Česká republika",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
