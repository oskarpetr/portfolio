import {
  getAbout,
  getProjectsShort,
  getServices,
  getArticles,
  getGraphicDesigns,
  getTestimonials,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectsAboutWrapper from "@/components/wrappers/home/ProjectsAboutWrapper";
import ServicesWrapper from "@/components/wrappers/home/ServicesWrapper";
import ArticlesWrapper from "@/components/wrappers/home/ArticlesWrapper";
import GraphicDesignsWrapper from "@/components/wrappers/home/GraphicDesignsWrapper";
import TestimonialsWrapper from "@/components/wrappers/home/TestimonialsWrapper";
import ContactWrapper from "@/components/wrappers/home/ContactWrapper";

export const revalidate = 300;

// fetch data
const fetchProjectsShort = cache(getProjectsShort);
const fetchAbout = cache(getAbout);
const fetchServices = cache(getServices);
const fetchArticles = cache(getArticles);
const fetchGraphicDesigns = cache(getGraphicDesigns);
const fetchTestimonials = cache(getTestimonials);

// fetch all
async function fetchAllSectionData() {
  return Promise.all([
    fetchProjectsShort(),
    fetchAbout(),
    fetchServices(),
    fetchArticles(),
    fetchGraphicDesigns(),
    fetchTestimonials(),
  ]);
}

export default async function HomePage() {
  const [projects, about, services, articles, graphicDesigns, testimonials] =
    await fetchAllSectionData();

  return (
    <PageLayout>
      <ProjectsAboutWrapper projects={projects} about={about} />
      <ServicesWrapper services={services} />
      <ArticlesWrapper articles={articles} />
      <GraphicDesignsWrapper graphicDesigns={graphicDesigns} />
      <TestimonialsWrapper testimonials={testimonials} />
      <ContactWrapper />
    </PageLayout>
  );
}

export async function generateMetadata() {
  return rootMetadata();
}
