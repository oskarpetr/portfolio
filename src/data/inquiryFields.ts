import { InquiryFieldBrief } from "@/types/InquiryForm.types";

const inquiryFields: InquiryFieldBrief[] = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "company",
    type: "text",
  },
  {
    name: "service",
    type: "select",
  },
  {
    name: "budget",
    type: "text",
  },
  {
    name: "timeframe",
    type: "text",
  },
  {
    name: "email",
    type: "email",
  },
  {
    name: "description",
    type: "textarea",
  },
];

export default inquiryFields;
