import { InquiryValues } from "@/types/ContactForm.types";
import FadeIn from "../animation/FadeIn";
import InquiryError from "./InquiryFormError";
import InquirySuccess from "./InquiryFormSuccess";
import ContactInput from "./InquiryInput";
import Button from "../shared/Button";
import Link from "next/link";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { FormEvent, useState } from "react";
import { postInquiry } from "@/utils/cms";
import { sendInquiry } from "@/utils/email";

export default function InquiryForm() {
  const { translation } = useTranslationStore();

  const [values, setValues] = useState<InquiryValues>({
    name: "",
    company: "",
    service: "",
    budget: "",
    timeframe: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const successful = await postInquiry(values);
    await sendInquiry(values);

    setIsLoading(false);
    setIsSubmitted(true);
    setIsError(!successful);
  };

  return !isSubmitted ? (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-y-12 lg:grid-cols-2"
    >
      {Object.entries(translation.inquiry.inputs).map((input, index) => (
        <FadeIn key={`field-${input[0]}`} delay={0.1 * index}>
          <ContactInput
            name={input[0] as keyof InquiryValues}
            label={input[1].label}
            placeholder={input[1].placeholder}
            setValues={setValues}
          />
        </FadeIn>
      ))}

      <Button text={translation.buttons.sendInquiry} loading={isLoading} />
    </form>
  ) : (
    <div className="flex flex-col gap-6">
      {isError ? <InquiryError /> : <InquirySuccess />}

      <Link href="/">
        <Button text={translation.buttons.backHome} />
      </Link>
    </div>
  );
}
