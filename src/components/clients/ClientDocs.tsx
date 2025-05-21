"use client";

import { Client } from "@/types/Client.types";
import SectionTitle from "../shared/SectionTitle";
import ClientDocItem from "./ClientDocItem";
import { formatClientFiles } from "@/utils/formatters";

interface Props {
  client: Client;
}

export default function ClientDocs({ client }: Props) {
  const clientFiles = formatClientFiles(client);

  return (
    <div className="sm:mt-20">
      <SectionTitle title={client.client} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {clientFiles.map((file, index) => (
          <ClientDocItem key={file.name} file={file} index={index} />
        ))}
      </div>

      {/* <div className="flex flex-col gap-4">
        <div className="w-fit cursor-default border-b border-dashed border-neutral-400 text-base font-normal">
          <TextStagger>
            <Link href={`/clients/${client.slug}/project-proposal`}>
              Project Proposal
            </Link>
          </TextStagger>
        </div>

        <Link
          href={`/clients/${client.slug}/project-onboarding`}
          className="w-fit border-b border-dashed opacity-80"
        >
          Project Onboarding
        </Link>
        <Link
          href={`/clients/${client.slug}/invoice`}
          className="w-fit border-b border-dashed opacity-80"
        >
          Invoice
        </Link>
      </div> */}
    </div>
  );
}
