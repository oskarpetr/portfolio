import Introduction from "@/components/home/Introduction";
import Layout from "@/components/general/Layout";
import About from "@/components/home/about/About";
import { Fragment, useEffect, useRef, useState } from "react";
import Preloader from "@/components/general/Preloader";
import { AnimatePresence } from "framer-motion";
import SelectedArticles from "@/components/home/selected-articles/SelectedArticles";
import { projectsQuery, useCMS } from "@/utils/fetchers";
import { IProject } from "@/types/Project.types";
import Testimonials from "@/components/home/testimonials/Testimonials";
import SelectedProjects from "@/components/home/selected-projects/SelectedProjects";
import Link from "next/link";

export default function Home() {
  const [isPreloaded, setIsPreloaded] = useState(false);

  const aboutRef = useRef(null);

  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     sessionStorage.setItem("isPreloaded", "false");
  //   };

  //   const sessionPreloaded = sessionStorage.getItem("isPreloaded");

  //   if (sessionPreloaded === null) {
  //     sessionStorage.setItem("isPreloaded", "false");
  //   }

  //   if (sessionPreloaded === "true") {
  //     setIsPreloaded(true);
  //   }
  // }, []);

  // projects
  const fetchProjects = useCMS<IProject>({ query: projectsQuery() });
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (!fetchProjects.loading) {
      const sortedProjects = fetchProjects.data.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      setProjects(sortedProjects);
    }
  }, [fetchProjects.loading]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {!isPreloaded && <Preloader setIsPreloaded={setIsPreloaded} />}
      </AnimatePresence>

      {isPreloaded && (
        <Fragment>
          <Introduction nextRef={aboutRef} />

          <div className="bg-black-primary w-screen sticky top-0">
            <div ref={aboutRef}>
              <About />
            </div>

            {/* <HorizontalProjects projects={projects} /> */}
            <SelectedProjects projects={projects} />
            <SelectedArticles />
            <Testimonials />
            {/* <Footer /> */}
          </div>
        </Fragment>
      )}
    </Layout>
  );
}

// This portfolio is licensed under CC BY-NC-ND 4.0
// © 2024 by Oskar Petr
