import { StaticImageData } from "next/image";

export interface Client {
  id: string;
  slug: string;
  client: string;
  projectProposal: string | null;
  projectOnboarding: string | null;
  invoice: string | null;
  termsAndConditions: string | null;
}

export interface ClientFile {
  name: keyof ClientFileNames;
  thumbnail: StaticImageData;
  url: string | null;
}

interface ClientFileNames {
  projectProposal: string;
  termsAndConditions: string;
  projectOnboarding: string;
  invoice: string;
}
