"use client";

import EmptyPage from "@/components/layout/EmptyPage";
import dynamic from "next/dynamic";

// dynamic import
const Inquiry = dynamic(() => import("@/components/inquiry/Inquiry"), {
  loading: () => <EmptyPage />,
});

export default function InquiryWrapper() {
  return <Inquiry />;
}
