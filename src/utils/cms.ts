"use server";

import { sanityClient } from "@/sanity/lib/client";
import {
  formatProject,
  formatProjects,
  formatProjectsSitemap,
} from "./formatters";
import { projectQuery, projectsSitemapQuery, projectsQuery } from "./queries";

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
