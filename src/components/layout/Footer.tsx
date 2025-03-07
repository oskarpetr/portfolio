import Link from "next/link";
import TextStagger from "../animation/TextStagger";
import SectionTitle from "../shared/SectionTitle";
import Logo from "./Logo";
import { contact, location, socialSites } from "@/data/footer";
import Icon from "../shared/Icon";
import { menuItems } from "@/data/menu";
import { useTranslationStore } from "@/translation/useTranslationStore";

export default function Footer() {
  const { translation } = useTranslationStore();

  return (
    <div
      className="relative mt-48 h-[500px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[500px] w-full">
        <div className="flex h-full flex-col justify-between bg-neutral-950 p-10 text-white">
          <Logo color="white" />

          <div className="grid grid-cols-4 font-normal">
            <StartProject />
            <Location />
            <SocialSites />
            <FooterItems />
          </div>

          <SectionTitle
            title={translation.sectionTitles.footer}
            enableMargin={false}
          />
        </div>
      </div>
    </div>
  );
}

function StartProject() {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col gap-1">
      <div className="opacity-50">{translation.footer.startProject}</div>

      <div className="w-fit">
        <TextStagger>
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </TextStagger>
      </div>

      <div className="w-fit">
        <TextStagger>
          <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </TextStagger>
      </div>
    </div>
  );
}

function Location() {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col gap-1">
      <div className="opacity-50">{translation.footer.location}</div>
      <div>{translation.footer.country}</div>
      <div>{location.city}</div>
    </div>
  );
}

function SocialSites() {
  return (
    <div className="flex flex-col gap-1">
      {socialSites.map((site) => (
        <div className="w-fit" key={`social-site-${site.name}`}>
          <TextStagger>
            <Link
              href={site.url}
              target="_blank"
              className="flex items-center gap-1"
            >
              <div>{site.name}</div>
              <Icon name="ArrowUpRight" color="white" size={18} />
            </Link>
          </TextStagger>
        </div>
      ))}
    </div>
  );
}

function FooterItems() {
  const { translation } = useTranslationStore();

  return (
    <div className="flex flex-col gap-1">
      {menuItems.map((item) => (
        <TextStagger key={`footer-item-${item.title}`}>
          <Link href={`/#${item.name}`} className="flex cursor-pointer">
            {translation.menu[item.name as keyof typeof translation.menu]}
          </Link>
        </TextStagger>
      ))}
    </div>
  );
}
