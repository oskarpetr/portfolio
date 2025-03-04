import { Project } from "@/types/Project.types";
import { Metadata } from "next";

export function homeMetadata(): Metadata {
  return {
    title: "Oskar Petr",
    description: "Personal portfolio of Oskar Petr.",
  };
}

export function projectMetadata(project: Project): Metadata {
  return {
    title: `${project.title} | Oskar Petr`,
    description: project.description.en,
    openGraph: {
      images: project.images.map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
  };
}
