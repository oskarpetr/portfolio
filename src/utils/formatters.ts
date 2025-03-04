import { Project, ProjectSanity, ProjectSlug } from "@/types/Project.types";
import getPlaceholder from "./placeholder";
import { urlFor } from "@/sanity/lib/image";

export async function formatProjects(projectsCms: ProjectSanity[]) {
  const projects: Project[] = await Promise.all(
    projectsCms.map(
      async (project: ProjectSanity) =>
        await formatProject(project, 1000, false),
    ),
  );

  const projectsSorted = projects.sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  return projectsSorted;
}

export async function formatProject(
  projectCms: ProjectSanity,
  imageWidth: number = 1200,
  images: boolean = true,
) {
  const project: Project = {
    id: projectCms._id,
    title: projectCms.title,
    slug: projectCms.slug,
    category: projectCms.category,
    personal: projectCms.personal,
    client: projectCms.client,
    mainImage: {
      url: formatImage(projectCms.mainImage.url, imageWidth),
      alt: projectCms.mainImage.alt,
    },
    images: images
      ? await Promise.all(
          (projectCms.images ?? []).map(async (image) => ({
            url: formatImage(image.url, imageWidth),
            alt: image.alt,
            placeholder: await getPlaceholder(
              formatImage(image.url, imageWidth),
            ),
          })),
        )
      : [],
    development: projectCms.development ?? [],
    design: projectCms.design ?? [],
    description: projectCms.description,
    startedAt: projectCms.startedAt,
    placeholder: await getPlaceholder(
      formatImage(projectCms.mainImage.url, imageWidth),
    ),
  };

  return project;
}

function formatImage(url: string, width: number) {
  return urlFor(url).width(width).url();
}

export async function formatProjectSlugs(slugsCms: ProjectSlug[]) {
  const slugs = slugsCms.map((slug) => slug.slug);
  return slugs;
}
