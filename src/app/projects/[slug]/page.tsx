import ProjectDetail from "@/components/project-detail/ProjectDetail";
import { getProject } from "@/utils/cms";
import { projectMetadata } from "@/utils/seo";
import { cache } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const fetchProject = cache((slug: string) => getProject(slug));

export default async function ProjectPage({ params }: Props) {
  const project = await fetchProject((await params).slug);

  return <ProjectDetail project={project} />;
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject((await params).slug);
  return projectMetadata(project);
}
