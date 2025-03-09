import { ProjectImage } from "./ProjectImage.types";

export interface GraphicDesign {
  id: string;
  image: ProjectImage;
}

export interface GraphicDesignSanity {
  _id: string;
  image: Omit<ProjectImage, "placeholder">;
}
