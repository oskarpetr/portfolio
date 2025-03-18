import { LanguagesType } from "./Translation.types";

export interface Testimonial {
  id: number;
  logo: TestimonialImage;
  content: LanguagesType;
  author: string;
  authorPosition: string;
  publishedAt: string;
}

export type TestimonialSanity = Omit<Testimonial, "logo"> & {
  logo: TestimoniaImageSanity;
};

export interface TestimonialImage {
  url: string;
  alt: string;
  placeholder: string;
}

export type TestimoniaImageSanity = Omit<TestimonialImage, "placeholder">;
