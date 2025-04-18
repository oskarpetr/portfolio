"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { Project } from "@/types/Project.types";
import dynamic from "next/dynamic";

interface Props {
  project: Project;
}

// dynamic import
const ProjectDetail = dynamic(
  () => import("@/components/project-detail/ProjectDetail"),
  { loading: () => <EmptyPage /> },
);

export default function ProjectSectionWrapper({ project }: Props) {
  return <ProjectDetail project={project} />;
}
