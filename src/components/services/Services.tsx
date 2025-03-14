"use client";

import { Service } from "@/types/Service.types";
import ServiceItem from "./ServiceItem";

interface Props {
  services: Service[];
}

export default function Services({ services }: Props) {
  return (
    <div className="flex flex-col gap-32">
      {services.map((service, index) => (
        <ServiceItem
          key={`service-${service.id}`}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
