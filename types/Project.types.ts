export interface IProject {
  title: string;
  category: "Development" | "Writing" | "Design" | "Developement, Design";
  type: "Client" | "Personal project" | "Academic project";
  client?: string;
  about: string;
  slug: string;
  link?: string;
  secondaryLink?: {
    text: string;
    link: string;
  };
  mainImage: string;
  showcases: IShowcase[];
  detailText: string[];
  services: string[];
  publishedAt: string;
}

export interface IShowcase {
  src: string;
  alt: string;
}

export interface IArticle {
  title: string;
  client: string;
  link: string;
  publishedAt: string;
}
