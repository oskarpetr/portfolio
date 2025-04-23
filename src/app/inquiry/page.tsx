"use client";

import FadeIn from "@/components/animation/FadeIn";
import ContactInput from "@/components/inquiry/InquiryInput";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { contact } from "@/data/footer";
import { useTranslationStore } from "@/translation/useTranslationStore";
import { InquiryValues } from "@/types/ContactForm.types";
import { postInquiry } from "@/utils/cms";
import { sendInquiry } from "@/utils/email";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function InquiryPage() {
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

  return (
    <PageLayout>
      <div className="sm:mt-20">
        <SectionTitle title={translation.sectionTitles.inquiry} />

        {!isSubmitted ? (
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

            <Button
              text={translation.buttons.sendInquiry}
              loading={isLoading}
            />
          </form>
        ) : (
          <div className="flex flex-col gap-6">
            {isError ? <InquiryError /> : <InquirySuccess />}

            <Link href="/">
              <Button text={translation.buttons.backHome} />
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

function InquiryError() {
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

function InquirySuccess() {
  const { translation } = useTranslationStore();

  return (
    <div className="font-normal">
      {translation.inquiry.success.map((text, index) => (
        <div key={`success-${index}`}>{text}</div>
      ))}
    </div>
  );
}
