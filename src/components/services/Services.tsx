"use client";

import { Service } from "@/types/Service.types";
import dynamic from "next/dynamic";

interface Props {
  services: Service[];
}

const ServiceItem = dynamic(() => import("@/components/services/ServiceItem"), {
  ssr: false,
});

export default function Services({ services }: Props) {
  return (
    <div id="services" className="flex flex-col gap-32">
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
