type InquiryInputType = "text" | "email" | "textarea" | "select";

export interface InquiryFieldBrief {
  name: keyof InquiryValues;
  type: InquiryInputType;
}

export interface InquiryField {
  name: keyof InquiryValues;
  label: string;
  type: InquiryInputType;
  placeholder: string;
  options?: string[];
}

export interface InquiryValues {
  name: string;
  company: string;
  service: string;
  budget: string;
  timeframe: string;
  email: string;
  description: string;
}
