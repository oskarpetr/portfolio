export type ProjectType =
  | {
      type: "development";
      title: string;
      slug: string;
      description: string;
      image: string;
      technologies: string[];
      link: string;
      repositary?: string;
      images?: string[];
      design?: string;
    }
  | {
      type: "writing";
      title: string;
      slug?: string;
      description: string;
      image: string;
      link: string;
      tag?: string;
    }
  | {
      type: "design";
      title: string;
      slug: string;
      description: string;
      image: string;
      images?: string[];
      design: string;
    };
