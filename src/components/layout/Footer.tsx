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
      className="relative mt-48 sm:h-[500px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="bottom-0 w-full sm:fixed sm:h-[500px]">
        <div className="flex h-full flex-col-reverse justify-between gap-16 bg-neutral-950 p-10 text-white sm:flex-col sm:gap-0">
          <div className="hidden sm:block">
            <Logo color="white" />
          </div>

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
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
