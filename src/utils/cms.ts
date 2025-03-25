"use server";

import { ProjectSlug } from "@/types/Project.types";
import { sanityClient } from "../../sanity/lib/client";
import {
  formatArticles,
  formatGraphicDesigns,
  formatProject,
  formatProjectsShort,
  formatProjectsSitemap,
  formatServices,
  formatTestimonials,
} from "./cmsFormatters";
import {
  projectQuery,
  projectsSitemapQuery,
  projectsShortQuery,
  articlesQuery,
  graphicDesignsQuery,
  servicesQuery,
  aboutQuery,
  testimonialsQuery,
  projectsSlugsQuery,
} from "./queries";

export async function getProjectsShort() {
  const projectsSanity = await sanityClient.fetch(
    projectsShortQuery,
    {},
    { next: { revalidate: 300 } },
  );
  const projects = formatProjectsShort(projectsSanity);

  return projects;
}

export async function getProject(slug: string) {
  const projectSanity = await sanityClient.fetch(
    projectQuery(slug),
    {},
    { next: { revalidate: 300 } },
  );

  if (!projectSanity) {
    return null;
  }

  const project = formatProject(projectSanity);
  return project;
}

export async function getProjectsSitemap() {
  const projectsSitemapCms = await sanityClient.fetch(projectsSitemapQuery);
  const projectsSitemap = formatProjectsSitemap(projectsSitemapCms);

  return projectsSitemap;
}

export async function getProjectsSlugs() {
  const projectsSlugsCms: ProjectSlug[] = await sanityClient.fetch(
    projectsSlugsQuery,
    {},
    { next: { revalidate: 300 } },
  );
  return projectsSlugsCms;
}

export async function getServices() {
  const servicesCms = await sanityClient.fetch(
    servicesQuery,
    {},
    { next: { revalidate: 300 } },
  );
  const services = formatServices(servicesCms);

  return services;
}

export async function getArticles() {
  const articlesCms = await sanityClient.fetch(
    articlesQuery,
    {},
    { next: { revalidate: 300 } },
  );
  const articles = formatArticles(articlesCms);

  return articles;
}

export async function getGraphicDesigns() {
  const graphicDesignsCms = await sanityClient.fetch(
    graphicDesignsQuery,
    {},
    { next: { revalidate: 300 } },
  );
  const graphicDesigns = formatGraphicDesigns(graphicDesignsCms);

  return graphicDesigns;
}

export async function getAbout() {
  const aboutCms = await sanityClient.fetch(
    aboutQuery,
    {},
    { next: { revalidate: 300 } },
  );
  return aboutCms;
}

export async function getTestimonials() {
  const testimonialsCms = await sanityClient.fetch(
    testimonialsQuery,
    {},
    { next: { revalidate: 300 } },
  );
  const testimonials = formatTestimonials(testimonialsCms);

  return testimonials;
}
