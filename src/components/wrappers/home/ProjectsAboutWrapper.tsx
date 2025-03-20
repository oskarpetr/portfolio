"use client";

import { Fragment, useRef } from "react";
import { About as AboutType } from "@/types/About.types";
import { ProjectShort } from "@/types/Project.types";
import dynamic from "next/dynamic";
import EmptyPage from "@/components/layout/EmptyPage";

interface Props {
  projects: ProjectShort[];
  about: AboutType;
}

// dynamic imports
const Projects = dynamic(() => import("@/components/projects/Projects"), {
  loading: () => <EmptyPage />,
  ssr: false,
});
const About = dynamic(() => import("@/components/about/About"), {
  loading: () => <EmptyPage />,
  ssr: false,
});

export default function ProjectsAboutWrapper({ projects, about }: Props) {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <Projects projects={projects} aboutRef={aboutRef} />
      <About about={about} ref={aboutRef} />
    </Fragment>
  );
}
