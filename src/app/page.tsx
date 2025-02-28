import Layout from "@/components/layout/Layout";
import projects from "@/components/mock-data/projects";
import Projects from "@/components/projects/Projects";
import SectionTitle from "@/components/shared/SectionTitle";
import getPlaceholder from "@/utils/placeholder";

export default async function HomePage() {
  const projectsWithPlaceholders = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      placeholder: await getPlaceholder(project.imageUrl),
    })),
  );

  return (
    <Layout>
      <div className="my-20 flex flex-col gap-16">
        <SectionTitle title="Projects" />
        <Projects projects={projectsWithPlaceholders} />
      </div>
    </Layout>
  );
}
