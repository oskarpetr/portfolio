import { getProject } from "@/utils/cms";
import { projectMetadata } from "@/utils/seo";
import { cache } from "react";
import ProjectSectionWrapper from "@/components/wrappers/projects/ProjectSection";

interface Props {
  params: Promise<{ slug: string }>;
}

// fetch data
const fetchProject = cache(getProject);

export default async function ProjectPage({ params }: Props) {
  return <ProjectSection slug={(await params).slug} />;
}

async function ProjectSection({ slug }: { slug: string }) {
  const project = await fetchProject(slug);
  return <ProjectSectionWrapper project={project} />;
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject((await params).slug);
  return projectMetadata(project);
}
