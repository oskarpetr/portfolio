import { useTranslationStore } from "@/stores/useTranslationStore";
import SectionTitle from "../shared/SectionTitle";
import InquiryForm from "./InquiryForm";

export default function Inquiry() {
  const { translation } = useTranslationStore();

  return (
    <div className="sm:mt-20">
      <SectionTitle title={translation.sectionTitles.inquiry} />
      <InquiryForm />
    </div>
  );
}
