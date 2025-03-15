"use client";

import { Fragment, useRef } from "react";
import Projects from "./Projects";
import { About as AboutType } from "@/types/About.types";
import About from "../about/About";
import { ProjectShort } from "@/types/Project.types";

interface Props {
  projects: ProjectShort[];
  about: AboutType;
}

export default function ProjectsAbout({ projects, about }: Props) {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <Projects projects={projects} aboutRef={aboutRef} />
      <About about={about} ref={aboutRef} />
    </Fragment>
  );
}
