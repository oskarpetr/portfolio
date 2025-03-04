import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/cms";
import { homeMetadata } from "@/utils/metadata";

export default async function HomePage() {
  const projects = await getProjects();

  return <Projects projects={projects} />;
}

export async function generateMetadata() {
  return homeMetadata();
}
