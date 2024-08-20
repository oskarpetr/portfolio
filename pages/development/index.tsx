import Competence from "@/components/development/Competence";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Subheading from "@/components/general/Subheading";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";

export default function Development() {
  return (
    <Layout title="Development">
      <Menu />

      <Subheading title="What do I use?" />
      <Competence />

      {/* <Subheading title="Projects" delay={0.5} /> */}
      <Projects projects={projects.development} delay={1.5} />
    </Layout>
  );
}
