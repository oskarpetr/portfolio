import {
  Project,
  ProjectSanity,
  ProjectShort,
  ProjectShortSanity,
  ProjectSitemapSanity,
} from "@/types/Project.types";
import { urlFor } from "@/sanity/lib/image";
import { Article, ArticleSanity } from "@/types/Article.types";
import {
  GraphicDesign,
  GraphicDesignSanity,
} from "@/types/GraphicDesign.types";
import { getPlaceholder } from "./placeholder";
import {
  Service,
  ServiceSanity,
  ServiceShort,
  ServiceShortSanity,
} from "@/types/Service.types";
import { Tag, TagSanity, TagShort, TagShortSanity } from "@/types/Tag.types";

export async function formatProjectsShort(
  projectsShortCms: ProjectShortSanity[],
) {
  const projectsShort: ProjectShort[] = await Promise.all(
    projectsShortCms.map(async (projectShort) => ({
      ...projectShort,
      id: projectShort._id,
      service: formatServiceShort(projectShort.service),
      mainImage: {
        url: formatImage(projectShort.mainImage.url, 800),
        alt: projectShort.mainImage.alt,
        placeholder: await getPlaceholder(
          formatImage(projectShort.mainImage.url, 800),
        ),
      },
    })),
  );

  const projectsShortSorted = projectsShort.sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  return projectsShortSorted;
}

export async function formatProject(projectCms: ProjectSanity) {
  const project: Project = {
    ...projectCms,
    id: projectCms._id,
    tags: formatTags(projectCms.tags ?? []),
    mainImage: {
      url: formatImage(projectCms.mainImage.url, 1000),
      alt: projectCms.mainImage.alt,
      placeholder: await getPlaceholder(
        formatImage(projectCms.mainImage.url, 1000),
      ),
    },
    images: await Promise.all(
      (projectCms.images ?? []).map(async (image) => ({
        url: formatImage(image.url, 1000),
        alt: image.alt,
        placeholder: await getPlaceholder(formatImage(image.url, 1000)),
      })),
    ),
  };

  return project;
}

export function formatProjectsSitemap(
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

export function formatServices(servicesCms: ServiceSanity[]) {
  console.log(servicesCms);
  const services: Service[] = servicesCms.map((service) => ({
    ...service,
    id: service._id,
    tags: formatTagsShort(service.tags ?? []),
  }));

  return services;
}

export function formatServiceShort(serviceShortCms: ServiceShortSanity) {
  const serviceShort: ServiceShort = {
    ...serviceShortCms,
    id: serviceShortCms._id,
  };

  return serviceShort;
}

export function formatTags(tagsCms: TagSanity[]) {
  const tags: Tag[] = tagsCms.map((tag) => ({
    ...tag,
    id: tag._id,
    service: formatServiceShort(tag.service),
  }));

  return tags;
}

export function formatTagsShort(tagsShortCms: TagShortSanity[]) {
  const tagsShort: TagShort[] = tagsShortCms.map((tagShort) => ({
    ...tagShort,
    id: tagShort._id,
  }));

  return tagsShort;
}

export function formatArticles(articlesCms: ArticleSanity[]) {
  const articles: Article[] = articlesCms.map((article) => ({
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
