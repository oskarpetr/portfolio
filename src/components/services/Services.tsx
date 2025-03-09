"use client";

import { Service } from "@/types/Service.types";
import SectionTitle from "../shared/SectionTitle";
import ServiceItem from "./ServiceItem";
import { useTranslationStore } from "@/translation/useTranslationStore";

interface Props {
  services: Service[];
}

export default function Services({ services }: Props) {
  const { translation } = useTranslationStore();

  return (
    <div>
      <SectionTitle title={translation.sectionTitles.services} />

      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <ServiceItem
            key={`service-${service.id}`}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
