"use server";

import { sanityClient } from "@/sanity/lib/client";
import {
  formatArticles,
  formatGraphicDesigns,
  formatProject,
  formatProjects,
  formatProjectsSitemap,
} from "./cmsFormatters";
import {
  projectQuery,
  projectsSitemapQuery,
  projectsQuery,
  articlesQuery,
  graphicDesignsQuery,
} from "./queries";

export async function getProjects() {
  const projectsCms = await sanityClient.fetch(projectsQuery);
  const projects = formatProjects(projectsCms);

  return projects;
}

export async function getProject(slug: string) {
  const projectCms = await sanityClient.fetch(projectQuery(slug));
  const project = formatProject(projectCms);

  return project;
}

export async function getProjectsSitemap() {
  const projectsSitemapCms = await sanityClient.fetch(projectsSitemapQuery);
  const projectsSitemap = formatProjectsSitemap(projectsSitemapCms);

  return projectsSitemap;
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
