import { LanguagesType } from "./Translation.types";

export interface ProjectImage {
  url: string;
  alt: LanguagesType;
  placeholder: string;
}

export type ProjectImageSanity = Omit<ProjectImage, "placeholder">;
