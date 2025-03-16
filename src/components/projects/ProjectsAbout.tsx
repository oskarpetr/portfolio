"use client";

import { Fragment, useRef } from "react";
import { About as AboutType } from "@/types/About.types";
import { ProjectShort } from "@/types/Project.types";
import dynamic from "next/dynamic";
import EmptyPage from "../layout/EmptyPage";

interface Props {
  projects: ProjectShort[];
  about: AboutType;
}

export default function ProjectsAbout({ projects, about }: Props) {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const Projects = dynamic(() => import("@/components/projects/Projects"), {
    loading: () => <EmptyPage />,
  });

  const About = dynamic(() => import("@/components/about/About"), {
    loading: () => <EmptyPage />,
  });

  return (
    <Fragment>
      <Projects projects={projects} aboutRef={aboutRef} />
      <About about={about} ref={aboutRef} />
    </Fragment>
  );
}
