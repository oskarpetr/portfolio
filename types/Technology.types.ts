interface ITechnology {
  id: string;
  title: string;
  content: ITechnologyContent[];
}

interface ITechnologyContent {
  section: string;
  technologies: string[];
}

export default ITechnology;
