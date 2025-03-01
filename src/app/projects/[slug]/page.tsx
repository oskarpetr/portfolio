import { getProject } from "@/utils/cms";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject((await params).slug);

  return (
    <div className="flex h-[calc(100vh-85px-80px)] flex-col justify-between gap-8">
      <div className="flex gap-24">
        <div>{project.title}</div>
        <div className="max-w-[55rem] indent-8 text-xl leading-tight font-normal">
          {project.description}
        </div>
      </div>

      <div className="flex w-full flex-nowrap gap-4">
        {project.images.map((image) => (
          <div
            key={image.alt}
            style={{ paddingTop: "25%", position: "relative" }}
            className="w-1/2"
          >
            <Image
              src={image.url}
              alt={image.alt}
              placeholder="blur"
              blurDataURL={image.placeholder}
              fill
              priority
              className="object-cover grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
