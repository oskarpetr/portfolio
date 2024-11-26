import Link from "next/link";
import TextSlideIn from "../animation/TextSlideIn";
import FadeIn from "../animation/FadeIn";
import Image from "next/image";
import { inquiriesEmail, socialSites } from "@/data/contact";
import Separator from "./Separator";
import Icon from "./Icon";

export default function Footer() {
  return (
    // <SlideCover height="60vh" direction="down">
    <div className="sticky bottom-0 -z-10 h-[60vh] bg-black-primary p-16 w-full flex flex-col justify-between">
      <NavLinks />
      <ContactMe />
    </div>
    // </SlideCover>
  );
}

const ContactMe = () => {
  const pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex items-end justify-between">
      <TextSlideIn
        className="text-8xl text-white-primary"
        text="Let's connect"
      />

      <div className="flex gap-32 w-1/4">
        <div className="flex flex-col gap-4">
          <TextSlideIn
            text="Social"
            className="text-white-primary text-lg opacity-50 body-text"
          />
          <div className="flex flex-col gap-2">
            {socialSites.map((site) => (
              <Link
                key={site.name}
                href={site.url}
                target="_blank"
                className="flex items-center gap-2"
              >
                <TextSlideIn
                  className="text-xl text-white-primary body-text font-semibold"
                  text={site.name}
                />
                <FadeIn>
                  <Icon
                    name="ArrowUpRight"
                    weight="bold"
                    size={20}
                    className="*:text-white-primary"
                  />
                </FadeIn>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <TextSlideIn
            text="Pages"
            className="text-white-primary text-lg opacity-50 body-text"
          />
          <div className="flex flex-col gap-2">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.link}
                className="flex items-center gap-2"
              >
                <TextSlideIn
                  className="text-xl text-white-primary font-semibold body-text"
                  text={page.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLinks = () => {
  const czechTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Prague",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex items-center w-full">
      <div className="w-1/4">
        <FadeIn className="flex items-end gap-4">
          <Image src={"/logos/Logo.svg"} width={30} height={30} alt="Logo" />
        </FadeIn>
      </div>

      <div className="w-1/4 flex flex-col gap-1">
        <TextSlideIn
          text="Copyright"
          className="text-white-primary text-lg opacity-50 body-text"
        />
        <TextSlideIn
          text={`© ${new Date().getFullYear()}, All rights reserved`}
          className="text-xl text-white-primary body-text font-semibold"
        />
      </div>

      <div className="w-1/4 flex flex-col gap-1">
        <TextSlideIn
          text="Location"
          className="text-white-primary text-lg opacity-50 body-text"
        />
        <TextSlideIn
          text={`Czech Republic (${czechTime})`}
          className="text-xl text-white-primary w-full body-text font-semibold"
        />
      </div>

      <div className="w-1/4 flex flex-col gap-1">
        <TextSlideIn
          text="Inquiries"
          className="text-white-primary text-lg opacity-50 body-text"
        />

        <Link href={`mailto:${inquiriesEmail}`} className="w-fit">
          <TextSlideIn
            text={inquiriesEmail}
            className="text-xl text-white-primary body-text font-semibold"
          />
          <Separator className="bg-white-primary bg-opacity-50" />
        </Link>
      </div>
    </div>
  );
};
