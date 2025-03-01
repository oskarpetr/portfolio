import { IProject, IProjectSanity } from "@/types/Project.types";
import getPlaceholder from "./placeholder";

export async function formatProjects(projectsCms: IProjectSanity[]) {
  const projects: IProject[] = await Promise.all(
    projectsCms.map(
      async (project: IProjectSanity) => await formatProject(project),
    ),
  );

  const projectsSorted = projects.sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  return projectsSorted;
}

export async function formatProject(projectCms: IProjectSanity) {
  const project: IProject = {
    id: projectCms._id,
    title: projectCms.title,
    slug: projectCms.slug.current,
    category: projectCms.category,
    mainImage: projectCms.mainImage.asset.url,
    images: await Promise.all(
      (projectCms.images ?? []).map(async (image) => ({
        url: image.url,
        alt: image.alt,
        placeholder: await getPlaceholder(image.url),
      })),
    ),
    description: projectCms.description,
    startedAt: projectCms.startedAt,
    placeholder: await getPlaceholder(projectCms.mainImage.asset.url),
  };

  return project;
}
