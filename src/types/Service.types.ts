import { TagShort, TagShortSanity } from "./Tag.types";
import { LanguagesType } from "./Translation.types";

export interface Service {
  id: string;
  name: LanguagesType;
  description: LanguagesType;
  tags: TagShort[];
}

export interface ServiceShort {
  id: string;
  name: LanguagesType;
}

export type ServiceSanity = Omit<Service, "id" | "tags"> & {
  _id: string;
  tags: TagShortSanity[];
};

export type ServiceShortSanity = Omit<ServiceShort, "id"> & { _id: string };
