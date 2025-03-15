import { ServiceShort, ServiceShortSanity } from "./Service.types";
import { Tag, TagSanity } from "./Tag.types";
import { LanguagesType } from "./Translation.types";

export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: Tag[];
  personal: boolean;
  client: string | null;
  mainImage: ProjectImage;
  images: ProjectImage[];
  description: LanguagesType;
  startedAt: string;
}

export interface ProjectShort {
  id: string;
  title: string;
  slug: string;
  service: ServiceShort;
  mainImage: ProjectImage;
  startedAt: string;
}

export type ProjectSanity = Omit<Project, "tags" | "mainImage" | "images"> & {
  tags: TagSanity[];
  mainImage: ProjectImageSanity;
  images: ProjectImageSanity[];
};

export type ProjectShortSanity = Omit<ProjectShort, "service" | "mainImage"> & {
  service: ServiceShortSanity;
  mainImage: ProjectImageSanity;
};

export interface ProjectSitemapSanity {
  slug: string;
  images: string[];
}

export interface ProjectImage {
  url: string;
  alt: LanguagesType;
  placeholder: string;
}

export type ProjectImageSanity = Omit<ProjectImage, "placeholder">;
