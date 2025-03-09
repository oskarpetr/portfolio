import { ServiceShort, ServiceShortSanity } from "./Service.types";
import { LanguagesType } from "./Translation.types";

export interface Tag {
  id: string;
  service: ServiceShort;
  name: LanguagesType;
  description: LanguagesType;
}

export type TagShort = {
  id: string;
  name: LanguagesType;
  description: LanguagesType;
};

export type TagSanity = Omit<Tag, "id" | "service"> & {
  _id: string;
  service: ServiceShortSanity;
};

export type TagShortSanity = Omit<TagShort, "id"> & { _id: string };
