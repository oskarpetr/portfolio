import {
  Project,
  ProjectImage,
  ProjectImageSanity,
  ProjectSanity,
  ProjectShort,
  ProjectShortSanity,
  ProjectSitemapSanity,
} from "@/types/Project.types";
import { urlFor } from "../../sanity/lib/image";
import { Article, ArticleSanity } from "@/types/Article.types";
import {
  GraphicDesign,
  GraphicDesignImage,
  GraphicDesignImageSanity,
  GraphicDesignSanity,
} from "@/types/GraphicDesign.types";
import { getPlaceholder } from "./placeholder";
import { Service, ServiceSanity } from "@/types/Service.types";
import {
  TestimoniaImageSanity,
  TestimonialImage,
  TestimonialSanity,
} from "@/types/Testimonial.types";

export async function formatProjectsShort(
  projectsShortCms: ProjectShortSanity[],
) {
  const projectsShort: ProjectShort[] = await Promise.all(
    projectsShortCms.map(async (projectShort) => ({
      ...projectShort,
      service: projectShort.service,
      mainImage: (await formatImage(
        projectShort.mainImage,
        700,
      )) as ProjectImage,
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
    tags: projectCms.tags ?? [],
    mainImage: (await formatImage(projectCms.mainImage, 800)) as ProjectImage,
    images: await Promise.all(
      (projectCms.images ?? []).map(
        async (image) => (await formatImage(image, 800)) as ProjectImage,
      ),
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
      formatImageUrl(image, 1000),
    ),
  }));

  return projectsSitemap;
}

export function formatServices(servicesCms: ServiceSanity[]) {
  const services: Service[] = servicesCms.map((service) => ({
    ...service,
    tags: service.tags ?? [],
  }));

  const servicesSorted = services.sort((a, b) => a.order - b.order);

  return servicesSorted;
}

export function formatArticles(articlesCms: ArticleSanity[]) {
  const articlesSorted = articlesCms.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return articlesSorted as Article[];
}

export async function formatGraphicDesigns(
  graphicDesignsCms: GraphicDesignSanity[],
) {
  const graphicDesigns: GraphicDesign[] = await Promise.all(
    graphicDesignsCms.map(async (graphicDesign) => ({
      ...graphicDesign,
      image: (await formatImage(
        graphicDesign.image,
        800,
      )) as GraphicDesignImage,
    })),
  );

  return graphicDesigns;
}

export async function formatTestimonials(testimonialsCms: TestimonialSanity[]) {
  const testimonials = await Promise.all(
    (testimonialsCms ?? []).map(async (testimonial) => ({
      ...testimonial,
      logo: (await formatImage(testimonial.logo, 100)) as TestimonialImage,
      content: testimonial.content,
    })),
  );

  const testimonialsSorted = testimonials.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return testimonialsSorted;
}

async function formatImage(
  imageSanity:
    | ProjectImageSanity
    | GraphicDesignImageSanity
    | TestimoniaImageSanity,
  width: number,
) {
  const formattedUrl = formatImageUrl(imageSanity.url, width);

  const image = {
    url: formattedUrl,
    alt: imageSanity.alt,
    placeholder: await getPlaceholder(formattedUrl),
  };

  if (typeof image.alt === "object") return image as ProjectImage;
  return image;
}

function formatImageUrl(url: string, width: number) {
  return urlFor(url).width(width).saturation(-100).url();
}
