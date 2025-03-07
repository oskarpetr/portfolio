import {
  Project,
  ProjectSanity,
  ProjectSitemapSanity,
} from "@/types/Project.types";
import { urlFor } from "@/sanity/lib/image";
import { Article, ArticleSanity } from "@/types/Article.types";
import {
  GraphicDesign,
  GraphicDesignSanity,
} from "@/types/GraphicDesign.types";
import { getPlaceholder } from "./placeholder";

export async function formatProjects(projectsCms: ProjectSanity[]) {
  const projects: Project[] = await Promise.all(
    projectsCms.map(
      async (project: ProjectSanity) =>
        await formatProject(project, 800, false),
    ),
  );

  const projectsSorted = projects.sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  return projectsSorted;
}

export async function formatProject(
  projectCms: ProjectSanity,
  imageWidth: number = 1000,
  images: boolean = true,
) {
  const project: Project = {
    ...projectCms,
    id: projectCms._id,
    mainImage: {
      url: formatImage(projectCms.mainImage.url, imageWidth),
      alt: projectCms.mainImage.alt,
      placeholder: await getPlaceholder(
        formatImage(projectCms.mainImage.url, imageWidth),
      ),
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
  };

  return project;
}

export async function formatProjectsSitemap(
  projectsSitemapCms: ProjectSitemapSanity[],
) {
  const projectsSitemap = projectsSitemapCms.map((projectSitemap) => ({
    ...projectSitemap,
    images: (projectSitemap.images ?? []).map((image) =>
      formatImage(image, 1000),
    ),
  }));

  return projectsSitemap;
}

export async function formatArticles(articlesCms: ArticleSanity[]) {
  const articles: Article[] = articlesCms.map((article: ArticleSanity) => ({
    ...article,
    id: article._id,
  }));

  const articlesSorted = articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return articlesSorted;
}

export async function formatGraphicDesigns(
  graphicDesignsCms: GraphicDesignSanity[],
) {
  const graphicDesigns: GraphicDesign[] = await Promise.all(
    graphicDesignsCms.map(async (graphicDesign) => ({
      id: graphicDesign._id,
      image: {
        url: formatImage(graphicDesign.image.url, 800),
        alt: graphicDesign.image.alt,
        placeholder: await getPlaceholder(
          formatImage(graphicDesign.image.url, 800),
        ),
      },
    })),
  );

  return graphicDesigns;
}

function formatImage(url: string, width: number) {
  return urlFor(url).width(width).url();
}
