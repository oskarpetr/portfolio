import { ProjectImage, ProjectImageSanity } from "./ProjectImage.types";
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

export type ProjectSanity = Omit<
  Project,
  "id" | "tags" | "mainImage" | "images"
> & {
  _id: string;
  tags: TagSanity[];
  mainImage: ProjectImageSanity;
  images: ProjectImageSanity[];
};

export type ProjectShortSanity = Omit<
  ProjectShort,
  "id" | "service" | "mainImage"
> & {
  _id: string;
  service: ServiceShortSanity;
  mainImage: ProjectImageSanity;
};

export interface ProjectSitemapSanity {
  slug: string;
  images: string[];
}
