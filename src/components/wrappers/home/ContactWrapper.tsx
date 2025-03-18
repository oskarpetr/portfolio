"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import dynamic from "next/dynamic";

// dynamic import
const Contact = dynamic(() => import("@/components/contact/Contact"), {
  loading: () => <EmptyPage />,
});

export default function ContactWrapper() {
  return <Contact />;
}
