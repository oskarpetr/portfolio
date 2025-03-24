import {
  getAbout,
  getProjectsShort,
  getServices,
  getArticles,
  getGraphicDesigns,
  getTestimonials,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectsAboutWrapper from "@/components/wrappers/home/ProjectsAboutWrapper";
import ServicesWrapper from "@/components/wrappers/home/ServicesWrapper";
import ArticlesWrapper from "@/components/wrappers/home/ArticlesWrapper";
import GraphicDesignsWrapper from "@/components/wrappers/home/GraphicDesignsWrapper";
import TestimonialsWrapper from "@/components/wrappers/home/TestimonialsWrapper";
import ContactWrapper from "@/components/wrappers/home/ContactWrapper";
import EmptyPage from "@/components/layout/EmptyPage";

export const revalidate = 300;

// fetch data
const fetchProjectsShort = cache(getProjectsShort);
const fetchAbout = cache(getAbout);
const fetchServices = cache(getServices);
const fetchArticles = cache(getArticles);
const fetchGraphicDesigns = cache(getGraphicDesigns);
const fetchTestimonials = cache(getTestimonials);

async function ProjectsAboutSection() {
  const [projects, about] = await Promise.all([
    fetchProjectsShort(),
    fetchAbout(),
  ]);

  return <ProjectsAboutWrapper projects={projects} about={about} />;
}

async function ServicesSection() {
  const services = await fetchServices();
  return <ServicesWrapper services={services} />;
}

async function ArticlesSection() {
  const articles = await fetchArticles();
  return <ArticlesWrapper articles={articles} />;
}

async function GraphicDesignsSection() {
  const graphicDesigns = await fetchGraphicDesigns();
  return <GraphicDesignsWrapper graphicDesigns={graphicDesigns} />;
}

async function TestimonialsSection() {
  const testimonials = await fetchTestimonials();
  return <TestimonialsWrapper testimonials={testimonials} />;
}

export default function HomePage() {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ProjectsAboutSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <ArticlesSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <GraphicDesignsSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <TestimonialsSection />
      </Suspense>

      <ContactWrapper />
    </PageLayout>
  );
}

export async function generateMetadata() {
  return rootMetadata();
}
