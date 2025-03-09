import EmptyPage from "@/components/layout/EmptyPage";
import Projects from "@/components/projects/Projects";
import { getProjectsShort } from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<EmptyPage />}>
      <HomeContent />
    </Suspense>
  );
}

const fetchProjectsShort = cache(getProjectsShort);
// const fetchServices = cache(getServices);

async function HomeContent() {
  const projects = await fetchProjectsShort();
  // const services = await fetchServices();
  // const articles = await getArticles();
  // const graphicDesigns = await getGraphicDesigns();

  return (
    <div className="flex flex-col gap-64">
      <Projects projects={projects} />
      {/* <About />
      <Services services={services} /> */}
      {/* <GraphicDesigns graphicDesigns={graphicDesigns} />
      <Articles articles={articles} /> */}
    </div>
  );
}

export async function generateMetadata() {
  return rootMetadata();
}
