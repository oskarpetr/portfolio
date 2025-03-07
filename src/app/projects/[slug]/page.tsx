import { Suspense } from "react";
import ProjectDetail from "@/components/project-detail/ProjectDetail";
import { getProject } from "@/utils/cms";
import { projectMetadata } from "@/utils/seo";
import { cache } from "react";
import EmptyPage from "@/components/layout/EmptyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

const fetchProject = cache((slug: string) => getProject(slug));

export default async function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<EmptyPage />}>
      <ProjectContent slug={(await params).slug} />
    </Suspense>
  );
}

async function ProjectContent({ slug }: { slug: string }) {
  const project = await fetchProject(slug);
  return <ProjectDetail project={project} />;
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject((await params).slug);
  return projectMetadata(project);
}
