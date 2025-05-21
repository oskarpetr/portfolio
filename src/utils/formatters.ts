import { Client, ClientFile } from "@/types/Client.types";
import { ServiceShort } from "@/types/Service.types";
import { Tag } from "@/types/Tag.types";
import { LanguageType } from "@/types/Translation.types";
import projectProposal from "@/../public/images/project-proposal.webp";
import termsAndConditions from "@/../public/images/terms-and-conditions.webp";
import projectOnboarding from "@/../public/images/project-onboarding.webp";
import invoice from "@/../public/images/invoice.webp";

export function groupTagsByService(tags: Tag[], language: LanguageType) {
  const serviceMap = new Map<string, { service: ServiceShort; tags: Tag[] }>();

  for (const tag of tags) {
    const key = tag.service.name[language];
    if (!serviceMap.has(key)) {
      serviceMap.set(key, { service: tag.service, tags: [] });
    }
    serviceMap.get(key)!.tags.push(tag);
  }

  const sortedGroups = Array.from(serviceMap.values())
    .map(({ service, tags }) => [service, tags] as [ServiceShort, Tag[]])
    .sort((a, b) => a[0].order - b[0].order);

  return sortedGroups;
}

export function formatClientFiles(client: Client) {
  const clientFiles: ClientFile[] = [
    {
      name: "projectProposal",
      thumbnail: projectProposal,
      url: client.projectProposal,
    },
    {
      name: "termsAndConditions",
      thumbnail: termsAndConditions,
      url: client.termsAndConditions,
    },
    {
      name: "projectOnboarding",
      thumbnail: projectOnboarding,
      url: client.projectOnboarding,
    },
    {
      name: "invoice",
      thumbnail: invoice,
      url: client.invoice,
    },
  ];

  return clientFiles;
}
