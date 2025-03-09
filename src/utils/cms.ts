"use server";

import { sanityClient } from "@/sanity/lib/client";
import {
  formatArticles,
  formatGraphicDesigns,
  formatProject,
  formatProjectsShort,
  formatProjectsSitemap,
  formatServices,
} from "./cmsFormatters";
import {
  projectQuery,
  projectsSitemapQuery,
  projectsShortQuery,
  articlesQuery,
  graphicDesignsQuery,
  servicesQuery,
  aboutQuery,
} from "./queries";

export async function getProjectsShort() {
  const projectsSanity = await sanityClient.fetch(projectsShortQuery);
  const projects = formatProjectsShort(projectsSanity);

  return projects;
}

export async function getProject(slug: string) {
  const projectSanity = await sanityClient.fetch(projectQuery(slug));
  const project = formatProject(projectSanity);

  return project;
}

export async function getProjectsSitemap() {
  const projectsSitemapCms = await sanityClient.fetch(projectsSitemapQuery);
  const projectsSitemap = formatProjectsSitemap(projectsSitemapCms);

  return projectsSitemap;
}

export async function getServices() {
  const servicesCms = await sanityClient.fetch(servicesQuery);
  const services = formatServices(servicesCms);

  return services;
}

export async function getArticles() {
  const articlesCms = await sanityClient.fetch(articlesQuery);
  const articles = formatArticles(articlesCms);

  return articles;
}

export async function getGraphicDesigns() {
  const graphicDesignsCms = await sanityClient.fetch(graphicDesignsQuery);
  const graphicDesigns = formatGraphicDesigns(graphicDesignsCms);

  return graphicDesigns;
}

export async function getAbout() {
  const aboutCms = await sanityClient.fetch(aboutQuery);
  return aboutCms;
}
