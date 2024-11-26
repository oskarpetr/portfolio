import Technology from "@/types/Technology.types";

const technologies: Technology[] = [
  {
    id: "development",
    title: "What do I develop in?",
    content: [
      {
        section: "Frameworks",
        technologies: [
          "React.js",
          "Next.js",
          "Node.js + packages",
          "React Native (Expo)",
          "Asp.net + Blazor",
          "Wordpress",
        ],
      },
      {
        section: "Databases",
        technologies: ["MySQL", "PostgreSQL", "Prisma", "MongoDB", "Firebase"],
      },
      {
        section: "Languages",
        technologies: ["TypeScript", "JavaScript", "C#"],
      },
      {
        section: "Styling",
        technologies: ["Framer Motion", "Tailwind", "CSS", "Sass"],
      },
    ],
  },
  {
    id: "design",
    title: "What design tools I use?",
    content: [],
  },
  {
    id: "writing",
    title: "For what clients I have written?",
    content: [],
  },
];

export default technologies;
