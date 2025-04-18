import { Translation, Translations } from "@/types/Translation.types";

const translationEn: Translation = {
  sectionTitles: {
    projects: "Projects",
    about: "About",
    university: "University",
    services: "Services",
    graphicDesigns: "Graphic designs",
    articles: "Articles",
    testimonials: "Testimonials",
    footer: "Footer",
  },
  projectDetail: {
    client: "Client",
    projectType: "Project type",
    personal: "Personal",
    nextProjects: "Next projects",
  },
  menu: {
    projects: "Projects",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
  footer: {
    startProject: "Start a project?",
    country: "Czech Republic",
    city: "Prague",
  },
  tooltips: {
    explore: "Explore",
    read: "Read",
  },
  alts: {
    myself: "Myself",
  },
  navigation: {
    next: "Next",
    previous: "Previous",
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
    testimonials: "Reference",
    footer: "Zápatí",
  },
  projectDetail: {
    client: "Klient",
    projectType: "Typ projektu",
    personal: "Osobní",
    nextProjects: "Další projekty",
  },
  menu: {
    projects: "Projekty",
    about: "O mně",
    services: "Služby",
    contact: "Kontakt",
  },
  footer: {
    startProject: "Začneme projekt?",
    country: "Česká republika",
    city: "Praha",
  },
  tooltips: {
    explore: "Prozkoumat",
    read: "Přečíst",
  },
  alts: {
    myself: "Moje fotka",
  },
  navigation: {
    next: "Další",
    previous: "Předchozí",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
