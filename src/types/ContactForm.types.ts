export interface InquiryField {
  name: keyof InquiryValues;
  label: string;
  type: "text" | "email";
  placeholder: string;
  required: boolean;
}

export interface InquiryValues {
  name: string;
  company: string;
  service: string;
  budget: string;
  timeframe: string;
  email: string;
}
