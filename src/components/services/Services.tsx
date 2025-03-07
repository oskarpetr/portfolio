"use client";

import { Service } from "@/types/Service.types";
import SectionTitle from "../shared/SectionTitle";
import ServiceItem from "./ServiceItem";
import { useTranslationStore } from "@/translation/useTranslationStore";

export default function Services() {
  const { translation } = useTranslationStore();

  const services: Service[] = [
    {
      name: "development",
      description:
        "In addition, the website also supports Chinese students learning Czech by offering tailored lessons and interactive sessions. These resources focus on improving Czech grammar, vocabulary, and pronunciation, helping learners build fluency and confidence in the language.",
      technologies: ["nextJs", "cms", "tailwindCss", "framerMotion"],
    },
    {
      name: "design",
      description:
        "In addition, the website also supports Chinese students learning Czech by offering tailored lessons and interactive sessions. These resources focus on improving Czech grammar, vocabulary, and pronunciation, helping learners build fluency and confidence in the language.",
      technologies: ["uiUxDesign", "identityDesign", "animation"],
    },
    // {
    //   name: "writing",
    //   description:
    //     "In addition, the website also supports Chinese students learning Czech by offering tailored lessons and interactive sessions. These resources focus on improving Czech grammar, vocabulary, and pronunciation, helping learners build fluency and confidence in the language.",
    //   technologies: [],
    // },
  ];

  return (
    <div>
      <SectionTitle title={translation.sectionTitles.services} />

      {services.map((service, index) => (
        <ServiceItem key={service.name} service={service} index={index} />
      ))}
    </div>
  );
}
