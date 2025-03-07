// import Articles from "@/components/articles/Articles";
// import GraphicDesigns from "@/components/graphic-designs/GraphicDesigns";
import EmptyPage from "@/components/layout/EmptyPage";
import Projects from "@/components/projects/Projects";
// import Services from "@/components/services/Services";
import {
  // getArticles,
  // getGraphicDesigns,
  getProjects,
} from "@/utils/cms";
import { rootMetadata } from "@/utils/seo";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<EmptyPage />}>
      <HomeContent />
    </Suspense>
  );
}

async function HomeContent() {
  const projects = await getProjects();
  // const articles = await getArticles();
  // const graphicDesigns = await getGraphicDesigns();

  return (
    <div className="flex flex-col gap-32">
      <Projects projects={projects} />
      {/* <Services />
      <GraphicDesigns graphicDesigns={graphicDesigns} />
      <Articles articles={articles} /> */}
    </div>
  );
}

export async function generateMetadata() {
  return rootMetadata();
}
