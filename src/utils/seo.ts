import { Project } from "@/types/Project.types";
import { Metadata } from "next";

export const baseUrl = "https://oskarpetr.com";
export const avatarUrl = `${baseUrl}/images/myself.webp`;

export function rootMetadata(): Metadata {
  const title = "Oskar Petr";
  const description =
    "Creative developer specializing in web development, web design, and UI/UX. Crafting innovative layouts, dynamic animations, and responsive, high-performance websites for an engaging user experience.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Oskar Petr",
      images: [avatarUrl],
      type: "website",
    },
    metadataBase: new URL(baseUrl),
    other: {
      "profile:first_name": "Oskar",
      "profile:last_name": "Petr",
      "profile:username": "oskarpetr",
    },
  };
}

export function projectMetadata(project: Project): Metadata {
  const title = `${project.title} | Oskar Petr`;
  const description = project.description.en;

  return {
    ...rootMetadata(),
    title,
    description,
    openGraph: {
      ...rootMetadata().openGraph,
      title,
      description,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        avatarUrl,
        {
          url: project.mainImage.url,
          alt: project.mainImage.alt.en,
        },
        ...project.images.map((image) => ({
          url: image.url,
          alt: image.alt.en,
        })),
      ],
    },
  };
}

export function notFoundMetadata(): Metadata {
  const title = "Page Not Found | Oskar Petr";
  const description = "The page you are looking for does not exist.";

  return {
    ...rootMetadata(),
    title,
    description,
    openGraph: {
      ...rootMetadata().openGraph,
      title,
      description,
    },
  };
}
