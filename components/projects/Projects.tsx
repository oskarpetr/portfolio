import { useState } from "react";
import ProjectsSelector from "./ProjectSelector";
import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ArrowRight, ShareFat } from "@phosphor-icons/react";

export default function Projects() {
  const projectItems = ["Development", "Writing", "Design"];
  const [indexSelected, setIndexSelected] = useState(0);

  const developmentProject = [
    {
      title: "Reminders",
      description:
        "Reminders is an app that helps you manage your urgent tasks, as well as sharing them with your project colleagues. To each project, there can be assigned many tasks, even with deadlines and assignees.",
      image: "Reminders",
      technologies: ["Next", "React", "Typescript", "Postgresql", "Tailwind"],
      link: "https://reminders.oskarpetr.dev",
      repositary: "https://github.com/oskarpetr/reminders",
    },
    {
      title: "Kosmo Production: Coming Soon",
      description:
        "Kosmo Production is a company that focuses on social media management, web development, design and photography. For now, there is only a coming soon static page but in future it will be furthured to a complete version.",
      image: "Coming soon",
      technologies: ["Next", "React", "Typescript", "Tailwind"],
      link: "https://www.kosmoproduction.eu",
      repositary: "https://github.com/oskarpetr/kosmoproduction-coming-soon",
    },
  ];

  return (
    <div className="mt-8 flex flex-col gap-32">
      <ProjectsSelector
        projectItems={projectItems}
        indexSelected={indexSelected}
        setIndexSelected={setIndexSelected}
      />

      <div className="flex flex-col gap-16">
        {developmentProject.map((project, index) => {
          return (
            <Project
              key={project.title}
              {...project}
              last={index === developmentProject.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({
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
    <div>
      <div className="flex gap-16 text-white">
        <Image
          src={`/sites/${image}.png`}
          alt={image}
          width={480}
          height={270}
          className="border h-fit border-white border-opacity-10 rounded-xl"
        />

        <div className="flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-8">
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

          <p className="opacity-50 tracking-wide w-3/4">{description}</p>

          <div className="flex items-center gap-4 mt-4">
            {technologies.map((tech) => {
              return (
                <Image
                  key={tech}
                  src={`/logos/${tech}.svg`}
                  alt={tech}
                  width={30}
                  height={30}
                  className="hover:opacity-80 transition-all"
                />
              );
            })}

            <p className="mx-4 opacity-50">•</p>

            <Link href={repositary} target="_blank">
              <Image
                src="/logos/Github.svg"
                alt="Github"
                width={30}
                height={30}
                className="hover:opacity-80 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>

      {!last && <div className="border-b border-neutral-800 mt-16"></div>}
    </div>
  );
}
