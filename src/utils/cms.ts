"use server";

import { sanityClient } from "@/sanity/lib/client";
import { formatProject, formatProjects } from "./formatters";
import { projectQuery, projectsQuery } from "./queries";

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
