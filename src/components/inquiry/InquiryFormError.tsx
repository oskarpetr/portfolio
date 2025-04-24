import { contact } from "@/data/footer";
import { useTranslationStore } from "@/translation/useTranslationStore";

export default function InquiryError() {
  const { translation } = useTranslationStore();

  return (
    <div className="font-normal">
      {translation.inquiry.error.map((text, index) => (
        <div key={`error-${index}`}>{text}</div>
      ))}
      <a
        href={`mailto:${contact.email}`}
        className="underline underline-offset-2"
      >
        {contact.email}
      </a>
      .
    </div>
  );
}
