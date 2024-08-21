import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Subheading from "@/components/general/Subheading";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";

export default function Writing() {
  return (
    <Layout title="Design">
      <Menu />

      <Subheading title="Design" delay={0.5} />
      <Projects projects={projects.design} delay={0.75} />
    </Layout>
  );
}
