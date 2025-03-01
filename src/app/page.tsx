import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/cms";

export default async function HomePage() {
  const projects = await getProjects();

  return <Projects projects={projects} />;
}
