"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import { Testimonial } from "@/types/Testimonial.types";
import dynamic from "next/dynamic";

interface Props {
  testimonials: Testimonial[];
}

// dynamic import
const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
  { loading: () => <EmptyPage /> },
);

export default function TestimonialsWrapper({ testimonials }: Props) {
  return <Testimonials testimonials={testimonials} />;
}
