import { IProject } from "@/types/Project.types";
import Image from "next/image";
import ImageSlideIn from "../animation/ImageSlideIn";
import TextSlideIn from "../animation/TextSlideIn";
import Link from "next/link";
import { cdnBlurImage } from "@/utils/images";
import Container from "../general/Container";
import Icon from "../general/Icon";
import FadeIn from "../animation/FadeIn";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";
import SectionTitle from "../general/SectionTitle";
import Separator from "../general/Separator";
import SectionBubble from "../general/SectionBubble";

interface Props {
  project: IProject;
}

export default function AboutProject({ project }: Props) {
  return (
    project && (
      <Container className="bg-white-primary flex flex-col gap-24 justify-center items-center mt-32">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex items-end justify-between">
            <TextSlideIn
              text={project.title}
              className="text-black-primary text-[3.5vw]"
            />

            {project.link && <ProjectLink link={project.link} />}
          </div>

          {/* <div className="h-[85vh] overflow-hidden rounded-2xl bg-red-500"> */}
          <ImageSlideIn className="h-3/4">
            {/* <Parallax size="md"> */}
            <Image
              src={project.mainImage}
              alt={project.title}
              width={2000}
              height={0}
              className="h-3/4 object-cover rounded-2xl"
              // style={{ marginTop: -PARALLAX_MD / 2 - 150 }}
              placeholder="blur"
              blurDataURL={cdnBlurImage(project.mainImage, 500)}
            />
            {/* </Parallax> */}
          </ImageSlideIn>
          {/* </div> */}
        </div>

        <About project={project} />
      </Container>
    )
  );
}

function ProjectLink({ link }: { link: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="overflow-hidden"
    >
      <Link href={link} target="_blank">
        <FadeIn className="bg-black-primary p-7 rounded-full relative">
          <motion.div
            variants={{ whileHover: { x: 100, y: -100 } }}
            transition={{ duration: 0.5, ease: BEZIER_EASING }}
          >
            <Icon
              name="ArrowUpRight"
              size={36}
              weight="regular"
              className="*:text-white-primary"
            />
          </motion.div>

          <motion.div
            variants={{
              initial: { x: -100, y: 100 },
              whileHover: { x: 0, y: 0 },
            }}
            transition={{ duration: 0.5, ease: BEZIER_EASING }}
            className="absolute top-7 left-7"
          >
            <Icon
              name="ArrowUpRight"
              size={36}
              weight="regular"
              className="*:text-white-primary"
            />
          </motion.div>
        </FadeIn>
      </Link>
    </motion.div>
  );
}

function About({ project }: { project: IProject }) {
  return (
    <div className="flex justify-between mb-32">
      <SectionBubble title="About" delay={0.5} />

      <div className="flex flex-col gap-16 w-3/4">
        <TextSlideIn
          text={project.about}
          className="text-[2.3vw] font-normal"
        />

        <div className="flex flex-col gap-8">
          <Separator className="bg-black-primary" delay={1} />

          <div className="flex gap-24">
            <div className="flex gap-4">
              <TextSlideIn
                text={project.type === "Client" ? "Client" : "Type"}
                delay={1}
                className="text-xl opacity-50 text-black-primary body-text"
              />
              <TextSlideIn
                text={
                  project.type === "Client" && project.client
                    ? project.client
                    : project.type
                }
                delay={1}
                className="text-xl text-black-primary font-normal"
              />
            </div>

            <div className="flex gap-4">
              <TextSlideIn
                text="Year"
                delay={1}
                className="text-xl opacity-50 text-black-primary body-text"
              />
              <TextSlideIn
                text={new Date(project.publishedAt).getFullYear().toString()}
                delay={1}
                className="text-xl text-black-primary font-normal"
              />
            </div>

            {project.secondaryLink && (
              <div className="flex gap-4">
                <TextSlideIn
                  text="Link"
                  delay={1}
                  className="text-xl opacity-50 text-black-primary body-text"
                />
                <Link href={project.secondaryLink.link} target="_blank">
                  <TextSlideIn
                    text={project.secondaryLink.text}
                    delay={1}
                    className="text-xl text-black-primary font-normal"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
