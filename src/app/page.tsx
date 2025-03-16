import EmptyPage from "@/components/layout/EmptyPage";
import {
  getAbout,
  // getArticles,
  // getGraphicDesigns,
  getProjectsShort,
  getServices,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache } from "react";
import dynamic from "next/dynamic";
import PageLayout from "@/components/layout/PageLayout";

export default async function HomePage() {
  return (
    <PageLayout>
      <ProjectsAboutSection />

      <ServicesSection />

      {/* <ArticlesSection /> */}

      {/* <GraphicDesignsSection /> */}

      {/* <TestimonialsSection /> */}

      {/* <ContactSection /> */}
    </PageLayout>
  );
}

// fetch data
const fetchProjectsShort = cache(getProjectsShort);
const fetchAbout = cache(getAbout);
const fetchServices = cache(getServices);
// const fetchArticles = cache(getArticles);
// const fetchGraphicDesigns = cache(getGraphicDesigns);

// dynamic imports
const ProjectsAbout = dynamic(
  () => import("@/components/projects/ProjectsAbout"),
  {
    loading: () => <EmptyPage />,
  },
);
const Services = dynamic(() => import("@/components/services/Services"), {
  loading: () => <EmptyPage />,
});
// const Articles = dynamic(() => import("@/components/articles/Articles"), {
//   loading: () => <EmptyPage />,
// });
// const GraphicDesigns = dynamic(
//   () => import("@/components/graphic-designs/GraphicDesigns"),
//   { loading: () => <EmptyPage /> },
// );
// const Testimonials = dynamic(
//   () => import("@/components/testimonials/Testimonials"),
//   { loading: () => <EmptyPage /> },
// );
// const Contact = dynamic(() => import("@/components/contact/Contact"), {
//   loading: () => <EmptyPage />,
// });

async function ProjectsAboutSection() {
  const projects = await fetchProjectsShort();
  const about = await fetchAbout();

  return <ProjectsAbout projects={projects} about={about} />;
}

async function ServicesSection() {
  const services = await fetchServices();
  return <Services services={services} />;
}

// async function ArticlesSection() {
//   const articles = await fetchArticles();
//   return <Articles articles={articles} />;
// }

// async function GraphicDesignsSection() {
//   const graphicDesigns = await fetchGraphicDesigns();
//   return <GraphicDesigns graphicDesigns={graphicDesigns} />;
// }

// async function TestimonialsSection() {
//   return <Testimonials />;
// }

// async function ContactSection() {
//   return <Contact />;
// }

export async function generateMetadata() {
  return rootMetadata();
}
