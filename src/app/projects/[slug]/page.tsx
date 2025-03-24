import { getProject, getProjectsSlugs } from "@/utils/cms";
import { projectMetadata } from "@/utils/seo";
import { cache, Suspense } from "react";
import ProjectSectionWrapper from "@/components/wrappers/projects/ProjectSection";
import PageLayout from "@/components/layout/PageLayout";
import EmptyPage from "@/components/layout/EmptyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

// fetch data
const fetchProject = cache(getProject);

export default async function ProjectPage({ params }: Props) {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ProjectSection slug={(await params).slug} />
      </Suspense>
    </PageLayout>
  );
}

async function ProjectSection({ slug }: { slug: string }) {
  const project = await fetchProject(slug);
  return <ProjectSectionWrapper project={project} />;
}

export async function generateStaticParams() {
  const projectsSlugs = await getProjectsSlugs();
  return projectsSlugs;
}

export async function generateMetadata({ params }: Props) {
  const project = await fetchProject((await params).slug);
  return projectMetadata(project);
}
