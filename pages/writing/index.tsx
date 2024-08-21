import FadeIn from "@/components/general/FadeIn";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Subheading from "@/components/general/Subheading";
import Projects from "@/components/projects/Projects";
import projects from "@/data/projects";
import Image from "next/image";

export default function Writing() {
  return (
    <Layout title="Writing">
      <Menu />

      {/* <Subheading title="Who am I writing for?" delay={0.5} /> */}

      {/* <FadeIn delay={0.75} className="mt-12 mb-32 flex items-center gap-10">
        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/Medium.svg"}
          alt="Medium logo"
          height={100}
          width={130}
        />

        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/Bright data.svg"}
          alt="Medium logo"
          height={100}
          width={130}
        />

        <Image
          className="h-[30px] opacity-50"
          src={"/logos/monochrome-icons/In plain english.svg"}
          alt="Medium logo"
          height={100}
          width={25}
        />
      </FadeIn> */}

      {/* <Subheading title="Featured articles" delay={0.5} /> */}
      <Projects projects={projects.writing} delay={0.5} />
    </Layout>
  );
}
