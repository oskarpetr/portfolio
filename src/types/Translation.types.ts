import { menuItems } from "@/data/menu";
import { InquiryValues } from "./InquiryForm.types";

export interface Translation {
  sectionTitles: {
    projects: string;
    about: string;
    services: string;
    graphicDesigns: string;
    articles: string;
    testimonials: string;
    endOfWebsite: string;
    inquiry: string;
    notFound: string;
  };
  projectDetail: {
    client: string;
    projectType: string;
    personal: string;
    nextProjects: string;
  };
  menu: {
    [key in (typeof menuItems)[number]]: string;
  };
  footer: {
    country: string;
    city: string;
  };
  tooltips: {
    explore: string;
    read: string;
  };
  alts: {
    myself: string;
    design: string;
    development: string;
  };
  navigation: {
    next: string;
    previous: string;
  };
  inquiry: {
    inputs: {
      [key in keyof InquiryValues]: {
        label: string;
        placeholder: string;
        options?: string[];
      };
    };
    success: string[];
    error: string[];
  };
  notFound: {
    description: string;
  };
  buttons: {
    backHome: string;
    sendInquiry: string;
    hitMeUp: string;
  };
  contact: {
    title: [string, string];
    description: string;
  };
  clientFiles: {
    files: {
      projectProposal: string;
      termsAndConditions: string;
      projectOnboarding: string;
      invoice: string;
    };
    notAvailable: string;
    pdfFile: string;
  };
}

export type Translations = {
  [key in LanguageType]: Translation;
};

export type LanguagesType = {
  [key in LanguageType]: string;
};

export type LanguageType = "en" | "cs";
