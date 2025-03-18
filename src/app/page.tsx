import {
  getAbout,
  getProjectsShort,
  getServices,
  // getArticles,
  // getGraphicDesigns,
  // getTestimonials,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectsAboutWrapper from "@/components/wrappers/home/ProjectsAboutWrapper";
import ServicesWrapper from "@/components/wrappers/home/ServicesWrapper";
// import ArticlesWrapper from "@/components/wrappers/home/ArticlesWrapper";
// import GraphicDesignsWrapper from "@/components/wrappers/home/GraphicDesignsWrapper";
// import TestimonialsWrapper from "@/components/wrappers/home/TestimonialsWrapper";
// import ContactWrapper from "@/components/wrappers/home/ContactWrapper";

// fetch data
const fetchProjectsShort = cache(getProjectsShort);
const fetchAbout = cache(getAbout);
const fetchServices = cache(getServices);
// const fetchArticles = cache(getArticles);
// const fetchGraphicDesigns = cache(getGraphicDesigns);
// const fetchTestimonials = cache(getTestimonials);

// sections
async function ProjectsAboutSection() {
  const projects = await fetchProjectsShort();
  const about = await fetchAbout();
  return <ProjectsAboutWrapper projects={projects} about={about} />;
}

async function ServicesSection() {
  const services = await fetchServices();
  return <ServicesWrapper services={services} />;
}

// async function ArticlesSection() {
//   const articles = await fetchArticles();
//   return <ArticlesWrapper articles={articles} />;
// }

// async function GraphicDesignsSection() {
//   const graphicDesigns = await fetchGraphicDesigns();
//   return <GraphicDesignsWrapper graphicDesigns={graphicDesigns} />;
// }

// async function TestimonialsSection() {
//   const testimonials = await fetchTestimonials();
//   return <TestimonialsWrapper testimonials={testimonials} />;
// }

// async function ContactSection() {
//   return <ContactWrapper />;
// }

export default async function HomePage() {
  return (
    <PageLayout>
      <ProjectsAboutSection />
      <ServicesSection />
      {/* <ArticlesSection />
      <GraphicDesignsSection />
      <TestimonialsSection />
      <ContactSection /> */}
    </PageLayout>
  );
}

export async function generateMetadata() {
  return rootMetadata();
}
