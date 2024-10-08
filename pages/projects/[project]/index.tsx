import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Subheading from "@/components/general/Subheading";
import projects from "@/data/projects";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import FadeIn from "@/components/general/FadeIn";
import { motion } from "framer-motion";

export default function Project() {
  const { project } = useRouter().query;
  const projectObj =
    projects.development.find((p) => p.slug === "/" + project) ||
    projects.writing.find((p) => p.slug === "/" + project) ||
    projects.design.find((p) => p.slug === "/" + project);

  const [loadDesign, setLoadDesign] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadDesign(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    projectObj && (
      <Layout title="Project">
        <Menu />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Image
            src={`/projects/${projectObj.image}.png`}
            alt={projectObj.image}
            width={9999}
            height={9999}
            className="opacity-50 absolute -z-40 top-0 left-0 border w-full h-96 object-cover object-center blur-2xl"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <Subheading title={projectObj?.title!} />
          <FadeIn
            delay={0.5}
            className="text-white-primary opacity-50 xl:w-[50rem] leading-7"
          >
            <p>{projectObj?.description}</p>
          </FadeIn>
        </div>

        <div className="mt-32">
          {/* <div className="flex flex-col gap-4">
          <p className="text-2xl">Gallery</p>
          <div className="grid grid-cols-4 gap-4">
            {projectObj?.images?.map((image) => (
              <img
                key={image}
                src={`/sites${projectObj.slug}/${image}.png`}
                alt={image}
                style={{
                  transform:
                    "rotate(-10deg) translate(0px, 0px) skew(-15deg, 10deg)",
                }}
                className="border w-full border-white border-opacity-10 rounded-xl"
              />
            ))}
          </div>
        </div> */}
          {/* <div className="flex justify-between items-center">
          <img
            src={`/sites/${projectObj?.image}.png`}
            alt={projectObj?.image}
            style={{
              transform:
                "rotate(-10deg) translate(0px, 0px) skew(-12deg, 10deg)",
            }}
            className="border w-full w-[40rem] border-white border-opacity-10 rounded-xl"
          />

          <div>
            <SubHeadline title={projectObj?.title!} delay={0.25} />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" text-white opacity-50 md:w-[50rem] mt-6"
            >
              sss
            </motion.p>
          </div>
        </div> */}
        </div>

        <FadeIn delay={1} className="flex flex-col gap-4">
          <p className="font-medium text-xl">View design</p>
          <div
            className={cn(
              "flex items-center gap-2 transition-all",
              loadDesign ? "opacity-0 absolute" : "opacity-100"
            )}
          >
            <div className="opacity-70">Loading design</div>
            <Spinner className="animate-spin opacity-70" size={24} />
          </div>

          {(projectObj.type === "design" ||
            projectObj.type === "development") && (
            <iframe
              height="500"
              src={projectObj.design}
              className={cn(
                "w-full xl:w-3/4 rounded-xl border border-neutral-700 transition-all",
                loadDesign ? "opacity-100" : "opacity-0"
              )}
            ></iframe>
          )}
        </FadeIn>
      </Layout>
    )
  );
}
