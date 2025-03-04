"use server";

import { sanityClient } from "@/sanity/lib/client";
import {
  formatProject,
  formatProjects,
  formatProjectSlugs,
} from "./formatters";
import { projectQuery, projectSlugsQuery, projectsQuery } from "./queries";

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

export async function getProjectSlugs() {
  const slugsCms = await sanityClient.fetch(projectSlugsQuery);
  const slugs = formatProjectSlugs(slugsCms);

  return slugs;
}
