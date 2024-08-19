import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Competence() {
  const competence = [
    {
      section: "Frameworks",
      items: [
        "React.js",
        "Next.js",
        "Node.js + packages",
        "React Native (Expo)",
        "Asp.net + Blazor",
        "Wordpress",
      ],
    },
    {
      section: "Databases",
      items: ["MySQL", "PostgreSQL", "Prisma", "MongoDB", "Firebase"],
    },
    {
      section: "Languages",
      items: ["TypeScript", "JavaScript", "C#"],
    },
    {
      section: "Styling",
      items: ["Tailwind", "CSS", "Sass"],
    },
  ];

  return (
    <div className="mt-12 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16">
      {competence.map((section, index) => {
        return (
          <motion.div
            key={section.section}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + index * 0.25 }}
          >
            <p className="font-semibold uppercase text-sm text-neutral-600">
              {section.section}
            </p>

            <div className="flex flex-col gap-4 mt-1">
              {section.items.map((item) => {
                return (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-[27px]">
                      <Image
                        src={`/logos/monochrome-icons/${
                          item === "C#" ? "Cs" : item
                        }.svg`}
                        alt={"tech"}
                        width={25}
                        height={25}
                        className={cn(
                          "transition-all opacity-70"
                          // item === "React" ? "animate-spin" : ""
                        )}
                      />
                    </div>
                    <p className="opacity-70">{item}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
