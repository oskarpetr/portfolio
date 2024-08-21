import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import FadeIn from "../general/FadeIn";

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

  const tableLines = Math.max(
    ...competence.map((section) => section.items.length)
  );

  // return (
  //   <div className="mt-12 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16">
  //     {competence.map((section, index) => {
  //       return (
  //         <FadeIn
  //           key={section.section}
  //           delay={0.5 + index * 0.25}
  //           className="flex flex-col gap-4"
  //         >
  //           <div className="font-semibold text-sm text-neutral-500">
  //             {section.section} ➼
  //           </div>

  //           <div className="flex flex-col gap-4 mt-1">
  //             {section.items.map((item) => {
  //               return (
  //                 <div key={item} className="flex items-start gap-3">
  //                   <div className="w-[27px]">
  //                     <Image
  //                       src={`/logos/monochrome-icons/${
  //                         item === "C#" ? "Cs" : item
  //                       }.svg`}
  //                       alt={"tech"}
  //                       width={25}
  //                       height={25}
  //                       className={cn(
  //                         "transition-all opacity-70"
  //                         // item === "React" ? "animate-spin" : ""
  //                       )}
  //                     />
  //                   </div>
  //                   <div className="opacity-70">{item}</div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </FadeIn>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <FadeIn className="mt-12 mb-32">
      <table className="w-full">
        <tr>
          {Array(competence.length)
            .fill("")
            .map((_, section) => (
              <td
                key={section}
                className="font-semibold text-sm text-neutral-500 px-12 pb-4"
              >
                {competence[section].section}
              </td>
            ))}
        </tr>

        {Array(tableLines)
          .fill("")
          .map((_, row) => (
            <tr key={row} className="border-t border-b border-neutral-700">
              {Array(competence.length)
                .fill("")
                .map((_, section) => (
                  <td key={row + section} className="px-12 py-6">
                    <div className="flex items-start gap-3">
                      <div className="w-[27px]">
                        {row + 1 <= competence[section].items.length && (
                          <Image
                            src={`/logos/monochrome-icons/${
                              competence[section].items[row] === "C#"
                                ? "Cs"
                                : competence[section].items[row]
                            }.svg`}
                            alt={"tech"}
                            width={25}
                            height={25}
                            className={cn(
                              "transition-all opacity-30"
                              // item === "React" ? "animate-spin" : ""
                            )}
                          />
                        )}
                      </div>
                      <div>
                        {row + 1 <= competence[section].items.length
                          ? competence[section].items[row]
                          : ""}
                      </div>
                    </div>
                  </td>
                ))}
            </tr>
          ))}
      </table>
    </FadeIn>
  );
}
