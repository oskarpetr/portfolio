import EmptyPage from "@/components/layout/EmptyPage";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import { getAbout, getProjectsShort, getServices } from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";
import Services from "@/components/services/Services";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-64">
      <Suspense fallback={<EmptyPage />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<EmptyPage />}>
        <ServicesSection />
      </Suspense>
    </div>
  );
}

const fetchProjectsShort = cache(getProjectsShort);
const fetchAbout = cache(getAbout);
const fetchServices = cache(getServices);

// const about = await fetchAbout();
// const services = await fetchServices();
// const articles = await getArticles();
// const graphicDesigns = await getGraphicDesigns();
// <About about={about} />
// <Services services={services} />
{
  /* <GraphicDesigns graphicDesigns={graphicDesigns} />
      <Articles articles={articles} /> */
}
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

export async function generateMetadata() {
  return rootMetadata();
}
