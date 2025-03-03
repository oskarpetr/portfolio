import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProject } from "@/utils/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject((await params).slug);

  return <ProjectDetail project={project} />;
}
