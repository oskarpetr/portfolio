import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/cms";
import { Fragment } from "react";

export default async function HomePage() {
  const projects = await getProjects();

  return <Fragment></Fragment>;
  return <Projects projects={projects} />;
}
