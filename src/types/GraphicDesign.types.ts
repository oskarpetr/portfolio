export interface GraphicDesign {
  id: string;
  image: GraphicDesignImage;
}

export interface GraphicDesignSanity {
  id: string;
  image: GraphicDesignImageSanity;
}

export interface GraphicDesignImage {
  url: string;
  alt: string;
  placeholder: string;
}

export type GraphicDesignImageSanity = Omit<GraphicDesignImage, "placeholder">;
