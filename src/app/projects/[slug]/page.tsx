import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProject } from "@/utils/cms";
import { projectMetadata } from "@/utils/metadata";
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
