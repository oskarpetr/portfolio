"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { ProjectShort } from "@/types/Project.types";
import dynamic from "next/dynamic";

interface Props {
  projects: ProjectShort[];
  projectId: string;
}

// dynamic import
const NextProjects = dynamic(
  () => import("@/components/project-detail/NextProjects"),
  { loading: () => <EmptyPage /> },
);

export default function NextProjectsWrapper({ projects, projectId }: Props) {
  const possibleProjects = projects.filter(
    (project) => project.id !== projectId,
  );
  const randomProjects = getRandomProjects(possibleProjects);

  return <NextProjects projects={randomProjects} />;
}

function getRandomProjects(
  projects: ProjectShort[],
): [ProjectShort, ProjectShort] {
  const firstIndex = Math.floor(Math.random() * projects.length);
  let secondIndex;

  do {
    secondIndex = Math.floor(Math.random() * projects.length);
  } while (secondIndex === firstIndex);

  return [projects[firstIndex], projects[secondIndex]];
}
