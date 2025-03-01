import { IProject, IProjectSanity } from "@/types/Project.types";
import getPlaceholder from "./placeholder";
import { urlFor } from "@/sanity/lib/image";

export async function formatProjects(projectsCms: IProjectSanity[]) {
  const projects: IProject[] = await Promise.all(
    projectsCms.map(
      async (project: IProjectSanity) =>
        await formatProject(project, 400, false),
    ),
  );

  const projectsSorted = projects.sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  return projectsSorted;
}

export async function formatProject(
  projectCms: IProjectSanity,
  imageWidth: number = 1200,
  images: boolean = true,
) {
  const project: IProject = {
    id: projectCms._id,
    title: projectCms.title,
    slug: projectCms.slug.current,
    category: projectCms.category,
    mainImage: urlFor(projectCms.mainImage.asset.url).width(imageWidth).url(),
    images: images
      ? await Promise.all(
          (projectCms.images ?? []).map(async (image) => ({
            url: urlFor(image.url).width(imageWidth).url(),
            alt: image.alt,
            placeholder: await getPlaceholder(image.url),
          })),
        )
      : [],
    description: projectCms.description,
    startedAt: projectCms.startedAt,
    placeholder: await getPlaceholder(projectCms.mainImage.asset.url),
  };

  return project;
}
