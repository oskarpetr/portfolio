import { getProject, getProjectsShort, getProjectsSlugs } from "@/utils/cms";
import { notFoundMetadata, projectMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";
import ProjectWrapper from "@/components/wrappers/projects/ProjectWrapper";
import PageLayout from "@/components/layout/PageLayout";
import EmptyPage from "@/components/layout/EmptyPage";
import { notFound } from "next/navigation";
import NextProjectsWrapper from "@/components/wrappers/projects/NextProjectsWrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

// fetch data
const fetchProject = cache(getProject);
const fetchProjectsShort = cache(getProjectsShort);

export default async function ProjectPage({ params }: Props) {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ProjectSection slug={(await params).slug} />
        <NextProjectsSection slug={(await params).slug} />
      </Suspense>
    </PageLayout>
  );
}

async function ProjectSection({ slug }: { slug: string }) {
  const project = await fetchProject(slug);

  if (!project) {
    return notFound();
  }

  return <ProjectWrapper project={project} />;
}

async function NextProjectsSection({ slug }: { slug: string }) {
  const projects = await fetchProjectsShort();
  const project = await fetchProject(slug);

  if (!project) {
    return notFound();
  }

  return <NextProjectsWrapper projects={projects} projectId={project.id} />;
}

export async function generateStaticParams() {
  const projectsSlugs = await getProjectsSlugs();
  return projectsSlugs;
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject((await params).slug);

  if (project) {
    return projectMetadata(project);
  } else {
    return notFoundMetadata();
  }
}
