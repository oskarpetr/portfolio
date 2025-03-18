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
    socialSites: "Social sites",
    pages: "Pages",
    country: "Czech Republic",
  },
  tooltips: {
    explore: "Explore",
    read: "Read",
  },
  alts: {
    myself: "Myself",
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
    socialSites: "Sociální sítě",
    pages: "Stránky",
    country: "Česká republika",
  },
  tooltips: {
    explore: "Zobrazit",
    read: "Přečíst",
  },
  alts: {
    myself: "Já sám",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
