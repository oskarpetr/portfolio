import ComingSoon from "@/components/layout/ComingSoon";
import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/cms";

export default async function HomePage() {
  const projects = await getProjects();
  return <ComingSoon />;
  return <Projects projects={projects} />;
}
