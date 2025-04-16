import Link from "next/link";
import TextStagger from "../animation/TextStagger";
import SectionTitle from "../shared/SectionTitle";
// import Logo from "./Logo";
import { contact, socialSites } from "@/data/footer";
import Icon from "../shared/Icon";
// import { menuItems } from "@/data/menu";
import { useTranslationStore } from "@/translation/useTranslationStore";
import usePragueTime from "../hooks/usePragueTime";

export default function Footer() {
  const { translation } = useTranslationStore();

  return (
    <div
      className="relative md:h-[400px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="bottom-0 w-full md:fixed md:h-[400px]">
        <div className="flex h-full flex-col justify-end bg-neutral-950 px-10 py-20 text-white">
          <div className="flex flex-col-reverse gap-16 xl:flex-row xl:items-end xl:gap-0">
            <div className="xl:w-1/2">
              <SectionTitle
                title={translation.footer.startProject}
                enableMargin={false}
                big
              />
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:gap-0 xl:w-1/2">
              <div className="md:w-1/2">
                <StartProject />
              </div>
              <div className="md:w-1/2">
                <SocialSites />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartProject() {
  const { translation } = useTranslationStore();
  const time = usePragueTime();

  return (
    <div className="flex w-fit flex-col gap-1">
      <TextStagger>
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </TextStagger>

      <div>{translation.footer.country}</div>
      <div className="font-normal tabular-nums opacity-50">{time}, Prague</div>
    </div>
  );
}

function SocialSites() {
  return (
    <div className="flex w-fit flex-col gap-1">
      {socialSites.map((site) => (
        <div className="w-fit" key={`social-site-${site.name}`}>
          <TextStagger>
            <Link
              href={site.url}
              target="_blank"
              className="flex items-center gap-1"
            >
              <div>{site.name}</div>
              <Icon
                name="ArrowUpRight"
                color="white"
                size={18}
                className="opacity-50"
              />
            </Link>
          </TextStagger>
        </div>
      ))}
    </div>
  );
}
