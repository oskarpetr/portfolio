import EmptyPage from "@/components/layout/EmptyPage";
import PageLayout from "@/components/layout/PageLayout";
import InquiryWrapper from "@/components/wrappers/inquiry/InquiryWrapper";
import { Suspense } from "react";

export default function InquiryPage() {
  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <InquiryWrapper />
      </Suspense>
    </PageLayout>
  );
}
