import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import SubHeadline from "@/components/general/SubHeadline";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Writing() {
  return (
    <Layout title="Writing">
      <Menu />

      <SubHeadline title="Who am I writing for?" delay={0.25} />
      <motion.div className="mt-12 mb-32 flex items-center gap-10">
        {/* <div className="bg-neutral-800 border border-neutral-700 rounded-xl py-4 px-8"> */}
        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/Medium.svg"}
          alt="Medium logo"
          height={100}
          width={130}
        />
        {/* </div> */}

        {/* <div className="bg-neutral-800 border border-neutral-700 rounded-xl py-4 px-8"> */}
        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/Bright data.svg"}
          alt="Medium logo"
          height={100}
          width={130}
        />
        {/* </div> */}

        {/* <div className="bg-neutral-800 border border-neutral-700 rounded-xl py-4 px-8"> */}
        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/In plain english.svg"}
          alt="Medium logo"
          height={100}
          width={25}
        />
        {/* </div> */}
      </motion.div>

      {/* <SubHeadline title="Featured articles" delay={0.5} /> */}
      <Projects projects={projects.writing} delay={0.5} />
    </Layout>
  );
}
