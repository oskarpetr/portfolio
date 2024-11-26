import Layout from "@/components/general/Layout";
import { useRouter } from "next/router";
import Custom404 from "@/pages/404";
import { IProject } from "@/types/Project.types";
import Footer from "@/components/general/Footer";
import { projectQuery, projectsQuery, useCMS } from "@/utils/fetchers";
import Showcases from "@/components/project/showcases/Showcases";
import AboutProject from "@/components/project/AboutProject";
import ProjectDetail from "@/components/project/ProjectDetail";
import RelatedProjects from "@/components/project/RelatedProjects";
import { useEffect, useState } from "react";

export default function Project() {
  const { project: projectParam } = useRouter().query;

  // project
  const fetchProject = useCMS<IProject>({
    query: projectQuery(projectParam as string),
    dependency: projectParam !== undefined,
  });

  // projects
  const fetchProjects = useCMS<IProject>({ query: projectsQuery() });
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (!fetchProjects.loading) {
      const sortedProjects = fetchProjects.data.sort(
        (a, b) =>
          new Date(b.publishedAt).getUTCDate() -
          new Date(a.publishedAt).getUTCDate()
      );
      setProjects(sortedProjects);
    }
  }, [fetchProjects.loading]);

  // project is not found
  if (!fetchProject.loading && fetchProject.data === undefined) {
    return <Custom404 />;
  }

  const project = fetchProject.data[0];

  return (
    !fetchProject.loading &&
    project && (
      <Layout title={project.title}>
        <AboutProject project={project} />
        <Showcases showcases={project.showcases} />
        <ProjectDetail project={project} />
        <RelatedProjects projects={projects} project={project} />
        <Footer />
      </Layout>
    )
  );
}
