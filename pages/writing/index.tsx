import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import SubHeadline from "@/components/general/SubHeadline";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";

export default function Writing() {
  return (
    <Layout title="Writing">
      <Menu />

      <SubHeadline title="Featured articles" delay={0.25} />
      <Projects projects={projects.writing} delay={0.25} />
    </Layout>
  );
}
