import { ArrowSquareOut, Hourglass } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  title,
  description,
  image,
  technologies,
  link,
  repositary,
  last,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  repositary: string;
  last: boolean;
}) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="flex flex-col items-center xl:flex-row xl:items-center gap-8 xl:gap-16 text-white">
        {/* <img
          src={`/sites/${image}.png`}
          alt={image}
          className="border w-[25rem] border-white border-opacity-10 rounded-xl"
        /> */}
        <div className="min-w-[24rem] h-[13.5rem] bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl flex justify-center items-center">
          <Hourglass className="text-5xl opacity-30" />
        </div>

        <div className="flex flex-col gap-4 justify-center items-center xl:items-start">
          <div className="flex items-center gap-8 justify-center xl:justify-start">
            <Link href={link} target="_blank">
              <div className="flex gap-3 items-center group">
                <div>
                  <h3 className="font-semibold text-2xl tracking-wide flex gap-2">
                    {title}
                  </h3>

                  <div className="h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                </div>

                <ArrowSquareOut
                  className="mb-2 text-xl opacity-80"
                  weight="bold"
                />
              </div>
            </Link>
          </div>

          <p className="opacity-40 tracking-wide text-center xl:text-left w-3/4 xl:w-full">
            {description}
          </p>

          <div className="flex items-center gap-5 mt-4">
            {technologies.map((tech) => {
              return (
                <div className="flex items-center" key={tech}>
                  <Image
                    src={`/logos/monochrome-icons/${tech}.svg`}
                    alt={tech}
                    height={27}
                    width={27}
                    className="hover:opacity-80 transition-all"
                  />

                  <div className="ml-5 opacity-20 bg-white bg-opacity-100 w-[1px] h-4"></div>
                </div>
              );
            })}

            <Link href={repositary} target="_blank">
              <Image
                src="/logos/monochrome-icons/GitHub.svg"
                alt="Github"
                width={27}
                height={27}
                className="hover:opacity-80 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>

      {!last && <div className="border-b border-neutral-800 mt-16"></div>}
    </motion.div>
  );
}
