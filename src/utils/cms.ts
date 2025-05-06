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
  invoiceQuery,
} from "./queries";
import { InquiryValues } from "@/types/ContactForm.types";
import { Invoice } from "@/types/Invoice.types";

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

export async function getInvoice(slug: string) {
  const invoiceCms: Invoice = await sanityClient.fetch(
    invoiceQuery(slug),
    {},
    revalidate,
  );

  if (!invoiceCms) {
    return null;
  }

  return invoiceCms;
}
