export interface DevelopmentProject {
  type: "development";
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  link: string; // Link to a project
  repositary?: string;
  images?: string[];
  design?: string;
}

export interface WritingProject {
  type: "writing";
  title: string;
  slug?: string;
  description: string;
  image: string;
  link: string; // Link to an article
  tag?: string;
}

export interface DesignProject {
  type: "design";
  title: string;
  slug: string;
  description: string;
  image: string;
  link: string; // Link to a figma file
  repositary?: string;
  images?: string[];
}
