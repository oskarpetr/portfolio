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
  clientQuery,
} from "./queries";
import { InquiryValues } from "@/types/ContactForm.types";
import { Client } from "@/types/Client.types";

const revalidate = { next: { revalidate: 300 } };

export async function getProjectsShort() {
  const projectsSanity = await sanityClient.fetch(
    projectsShortQuery,
    {},
    revalidate,
  );
  const projects = formatProjectsShort(projectsSanity);

  return projects;
}

export async function getProject(slug: string) {
  const projectSanity = await sanityClient.fetch(
    projectQuery(slug),
    {},
    revalidate,
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
    revalidate,
  );
  return projectsSlugsCms;
}

export async function getServices() {
  const servicesCms = await sanityClient.fetch(servicesQuery, {}, revalidate);
  const services = formatServices(servicesCms);

  return services;
}

export async function getArticles() {
  const articlesCms = await sanityClient.fetch(articlesQuery, {}, revalidate);
  const articles = formatArticles(articlesCms);

  return articles;
}

export async function getGraphicDesigns() {
  const graphicDesignsCms = await sanityClient.fetch(
    graphicDesignsQuery,
    {},
    revalidate,
  );
  const graphicDesigns = formatGraphicDesigns(graphicDesignsCms);

  return graphicDesigns;
}

export async function getAbout() {
  const aboutCms = await sanityClient.fetch(aboutQuery, {}, revalidate);
  return aboutCms;
}

export async function getTestimonials() {
  const testimonialsCms = await sanityClient.fetch(
    testimonialsQuery,
    {},
    revalidate,
  );
  const testimonials = formatTestimonials(testimonialsCms);

  return testimonials;
}

export async function postInquiry(inquiry: InquiryValues) {
  try {
    const inquiryDoc = {
      _type: "inquiry",
      ...inquiry,
    };

    await sanityClient.create(inquiryDoc);
    return true;
  } catch (error) {
    console.error("CMS inquiry error:", error);
    return false;
  }
}

export async function getClient(slug: string) {
  const clientCms: Client = await sanityClient.fetch(
    clientQuery(slug),
    {},
    revalidate,
  );

  if (!clientCms) {
    return null;
  }

  return clientCms;
}
