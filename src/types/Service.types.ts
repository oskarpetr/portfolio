import { TagShort, TagShortSanity } from "./Tag.types";
import { LanguagesType } from "./Translation.types";

export interface Service {
  id: string;
  name: LanguagesType;
  description: LanguagesType;
  tags: TagShort[];
  order: number;
}

export interface ServiceShort {
  id: string;
  name: LanguagesType;
  order: number;
}

export type ServiceSanity = Omit<Service, "id" | "tags"> & {
  _id: string;
  tags: TagShortSanity[];
};

export type ServiceShortSanity = Omit<ServiceShort, "id"> & { _id: string };
