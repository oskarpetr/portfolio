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
import dynamic from "next/dynamic";
import PageLayout from "@/components/layout/PageLayout";

export default async function HomePage() {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ProjectsSection />
      </Suspense>

      <AboutSection />

      <ServicesSection />

      {/* <KnowBetter /> */}

      {/* <ArticlesSection /> */}

      {/* <GraphicDesignsSection /> */}

      {/* <TestimonialsSection /> */}
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
const About = dynamic(() => import("@/components/about/About"), {
  loading: () => <EmptyPage />,
});
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
