export interface IProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  mainImage: string;
  images: IImage[];
  description: string;
  startedAt: string;
  placeholder: string;
}

interface IImage {
  url: string;
  alt: string;
  placeholder: string;
}

export interface IProjectSanity {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: { asset: { url: string } };
  images: { url: string; alt: string }[];
  description: string;
  startedAt: string;
}
