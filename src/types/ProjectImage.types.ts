export interface ProjectImage {
  url: string;
  alt: string;
  placeholder: string;
}

export type ProjectImageSanity = Omit<ProjectImage, "placeholder">;
