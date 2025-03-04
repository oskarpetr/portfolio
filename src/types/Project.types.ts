import { LanguageType } from "./Translation.types";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  personal: boolean;
  client: string | null;
  mainImage: ProjectImage;
  images: ProjectImage[];
  development: ProjectDevelopment[];
  design: ProjectDesign[];
  description: ProjectDescription;
  startedAt: string;
}

interface ProjectImage {
  url: string;
  alt: string;
  placeholder: string;
}

type ProjectDescription = {
  [key in LanguageType]: string;
};

export type ProjectCategory =
  | "webDevelopment"
  | "webDesign"
  | "graphicDesign"
  | "writing";

export type ProjectDevelopment =
  | "nextJs"
  | "wordpressDevelopment"
  | "ecommerceManagement"
  | "elementor"
  | "seoOptimization"
  | "multiLanguageSupport"
  | "newsletterIntegration";

export type ProjectDesign =
  | "uiUxDesign"
  | "webRedesign"
  | "graphicDesign"
  | "identityDesign"
  | "animation";

export interface ProjectSanity {
  _id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  personal: boolean;
  client: string | null;
  mainImage: ProjectImage;
  images: Omit<ProjectImage, "placeholder">[];
  development: ProjectDevelopment[] | null;
  design: ProjectDesign[] | null;
  description: ProjectDescription;
  startedAt: string;
}

export interface ProjectSitemapSanity {
  slug: string;
  images: string[];
}
