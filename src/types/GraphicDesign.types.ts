export interface GraphicDesign {
  id: string;
  image: GraphicDesignImage;
}

export interface GraphicDesignSanity {
  _id: string;
  image: Omit<GraphicDesignImage, "placeholder">;
}

interface GraphicDesignImage {
  url: string;
  alt: string;
  placeholder: string;
}
