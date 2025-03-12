import EmptyPage from "@/components/layout/EmptyPage";
import Projects from "@/components/projects/Projects";
import {
  getAbout,
  // getArticles,
  // getGraphicDesigns,
  getProjectsShort,
  getServices,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";
// import KnowBetter from "@/components/know-better/KnowBetter";
import dynamic from "next/dynamic";
import PageLayout from "@/components/layout/PageLayout";

export default async function HomePage() {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <ServicesSection />
      </Suspense>

      {/* <KnowBetter />

      <Suspense fallback={<EmptyPage />}>
        <ArticlesSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <GraphicDesignsSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <TestimonialsSection />
      </Suspense> */}
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
const About = dynamic(() => import("@/components/about/About"));
const Services = dynamic(() => import("@/components/services/Services"));
// const Articles = dynamic(() => import("@/components/articles/Articles"));
// const GraphicDesigns = dynamic(
//   () => import("@/components/graphic-designs/GraphicDesigns"),
// );
// const Testimonials = dynamic(
//   () => import("@/components/testimonials/Testimonials"),
// );

async function ProjectsSection() {
  const projects = await fetchProjectsShort();
  return <Projects projects={projects} />;
}

async function AboutSection() {
  const about = await fetchAbout();
  return <About about={about} />;
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

export async function generateMetadata() {
  return rootMetadata();
}
