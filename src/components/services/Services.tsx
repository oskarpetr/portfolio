import { Service } from "@/types/Service.types";
import dynamic from "next/dynamic";

interface Props {
  services: Service[];
}

const ServiceItem = dynamic(() => import("./ServiceItem"));

export default function Services({ services }: Props) {
  return (
    <div id="services" className="w-full">
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
