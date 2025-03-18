"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { Service } from "@/types/Service.types";
import dynamic from "next/dynamic";

interface Props {
  services: Service[];
}

const Services = dynamic(() => import("@/components/services/Services"), {
  loading: () => <EmptyPage />,
});

export default function ServicesWrapper({ services }: Props) {
  return <Services services={services} />;
}
