import Image from "next/image";
import Link from "next/link";
import Reveal from "../animation/Reveal";
import Index from "../shared/Index";
import { ClientFile } from "@/types/Client.types";
import { useParams } from "next/navigation";
import { useTranslationStore } from "@/stores/useTranslationStore";
import { cn } from "@/utils/cn";
import Icon from "../shared/Icon";

interface Props {
  file: ClientFile;
  index: number;
}

export default function ClientDocItem({ file, index }: Props) {
  const { slug } = useParams();

  const { translation } = useTranslationStore();

  const fileUrl = file.name.toLowerCase().replace(" ", "-");
  const isAvailable = file.url !== null;

  const docItem = (
    <Reveal direction="up" delay={0.1 * index}>
      <div className="relative flex items-center justify-center">
        <Image
          alt={file.name}
          src={file.thumbnail}
          placeholder="blur"
          className={cn(
            "grayscale",
            isAvailable
              ? "object-cover transition-all duration-700 hover:scale-[1.03]"
              : "border blur-2xl",
          )}
        />

        {!isAvailable && (
          <Icon name="LockSimple" size={32} className="absolute opacity-80" />
        )}
      </div>
    </Reveal>
  );

  return (
    <div className="relative w-full">
      {isAvailable ? (
        <Link href={`/clients/${slug}/${fileUrl}`}>{docItem}</Link>
      ) : (
        <div className="cursor-not-allowed">{docItem}</div>
      )}

      <div className="static block w-full overflow-hidden">
        <Reveal direction="down" delay={0.1 * index}>
          <div className="flex w-full justify-between py-4 sm:px-8">
            <div>
              <div>{translation.clientFiles.files[file.name]}</div>
              <div className="text-sm font-medium opacity-60">
                {isAvailable
                  ? translation.clientFiles.pdfFile
                  : translation.clientFiles.notAvailable}
              </div>
            </div>

            <Index index={index} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
