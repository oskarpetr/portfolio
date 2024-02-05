export type ProjectType =
  | {
      type: "development";
      title: string;
      description: string;
      image: string;
      technologies: string[];
      link: string;
      repositary?: string;
    }
  | {
      type: "writing";
      title: string;
      description: string;
      image: string;
      link: string;
      tag?: string;
    };
