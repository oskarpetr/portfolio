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

      <div className="mt-20 flex flex-col items-center text-8xl">
        <div className="rotate-y-0 hover:rotate-y-180">Text</div>
        <div className="group transition-all duration-1000 perspective-none hover:perspective-dramatic">
          <div className="rotate-y-[20deg] transition-all duration-1000 group-hover:rotate-y-[60deg]">
            Text
          </div>
        </div>
        <div className="rotate-y-[40deg]">Text</div>
        <div className="rotate-y-90">Text</div>
        <div className="rotate-y-45">Text</div>
      </div>
    </div>
  );
}
