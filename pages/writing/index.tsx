import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";

export default function Writing() {
  return (
    <Layout title="Writing">
      <Menu />

      <Projects projects={projects.development} />
    </Layout>
  );
}
