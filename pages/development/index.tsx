import Competence from "@/components/development/Competence";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import SubHeadline from "@/components/general/SubHeadline";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";

export default function Development() {
  return (
    <Layout title="Development">
      <Menu />

      <SubHeadline title="Competence" delay={1} />
      <Competence />

      <SubHeadline title="Projects" delay={6} />
      <Projects projects={projects.development} />
    </Layout>
  );
}
