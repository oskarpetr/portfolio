import { useTranslationStore } from "@/translation/useTranslationStore";

export default function InquirySuccess() {
  const { translation } = useTranslationStore();

  return (
    <div className="font-normal">
      {translation.inquiry.success.map((text, index) => (
        <div key={`success-${index}`}>{text}</div>
      ))}
    </div>
  );
}
