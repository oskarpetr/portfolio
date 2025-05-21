import { InquiryValues } from "@/types/InquiryForm.types";
import FadeIn from "../animation/FadeIn";
import InquiryError from "./InquiryFormError";
import InquirySuccess from "./InquiryFormSuccess";
import Button from "../shared/Button";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { FormEvent, useState } from "react";
import { postInquiry } from "@/utils/cms";
import { sendInquiry } from "@/utils/email";
import PageLink from "../layout/PageLink";
import InquiryInput from "./InquiryInput";
import inquiryFields from "@/data/inquiryFields";

export default function InquiryForm() {
  const { translation } = useTranslationStore();

  const [values, setValues] = useState<InquiryValues>({
    name: "",
    company: "",
    service: "",
    budget: "",
    timeframe: "",
    email: "",
    description: "",
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2">
        {inquiryFields.map((field, index) => (
          <FadeIn key={`field-${field.name}`} delay={0.05 * index + 0.8}>
            <InquiryInput
              name={field.name}
              label={translation.inquiry.inputs[field.name].label}
              type={field.type}
              options={translation.inquiry.inputs[field.name].options}
              placeholder={translation.inquiry.inputs[field.name].placeholder}
              setValues={setValues}
              required
              index={index}
            />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.05 * inquiryFields.length + 0.8}>
        <Button
          text={translation.buttons.sendInquiry}
          loading={isLoading}
          icon="ArrowRight"
        />
      </FadeIn>
    </form>
  ) : (
    <div className="flex flex-col gap-6">
      {isError ? <InquiryError /> : <InquirySuccess />}

      <PageLink href="/">
        <Button text={translation.buttons.backHome} />
      </PageLink>
    </div>
  );
}
