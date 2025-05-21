export interface InquiryField {
  name: keyof InquiryValues;
  label: string;
  type: "text" | "email" | "select";
  placeholder: string;
  required: boolean;
  options?: string[];
}

export interface InquiryValues {
  name: string;
  company: string;
  service: string;
  budget: string;
  timeframe: string;
  email: string;
}
