import Image from "next/image";
import { motion } from "framer-motion";

export default function Competence() {
  const competence = [
    ["React", "Next.js", "Node.js"],
    ["Typescript", "Javascript"],
    ["Tailwind", "CSS", "SASS"],
    ["MySQL", "PostgreSQL", "Prisma", "MongoDB", "Firebase"],
  ];

  return (
    <div className="mt-8 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16">
      {competence.map((section, index) => {
        return (
          <motion.div
            key={Math.random()}
            className="flex flex-col gap-4 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + index * 0.25 }}
          >
            {section.map((item) => {
              return (
                <div key={item} className="flex items-center gap-3">
                  <Image
                    src={`/logos/monochrome-icons/${item}.svg`}
                    alt={"tech"}
                    width={22}
                    height={22}
                    className="transition-all opacity-80"
                  />
                  <p className="text-lg tracking-wide">{item}</p>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
