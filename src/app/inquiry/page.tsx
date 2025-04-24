import InquiryForm from "@/components/inquiry/InquiryForm";
import PageLayout from "@/components/layout/PageLayout";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslationStore } from "@/translation/useTranslationStore";

export default function InquiryPage() {
  const { translation } = useTranslationStore();

  return (
    <PageLayout>
      <div className="sm:mt-20">
        <SectionTitle title={translation.sectionTitles.inquiry} />
        <InquiryForm />
      </div>
    </PageLayout>
  );
}
