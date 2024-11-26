import { inquiriesEmail, socialSites } from "@/data/contact";
import TextSlideIn from "../animation/TextSlideIn";
import SectionBubble from "../general/SectionBubble";
import Link from "next/link";
import FadeIn from "../animation/FadeIn";
import Icon from "../general/Icon";
import Separator from "../general/Separator";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/utils/cn";

export default function ContactForm() {
  return (
    <div className="relative h-screen">
      <div className="p-16 sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <Form />
        </div>

        {/* <div className="h-screen bg-gradient-to-t from-red-400 to-blue-400 overflow-scroll"></div> */}
      </div>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-16 pr-32 border-r-[0.5px] border-black-primary">
      <SectionBubble title="Contact" disablePadding />

      <div className="flex flex-col gap-4">
        <TextSlideIn
          text="Inquiries"
          className="text-black-primary text-lg opacity-50"
        />

        <Link href={`mailto:${inquiriesEmail}`} className="w-fit">
          <TextSlideIn
            text={inquiriesEmail}
            className="text-lg uppercase text-black-primary"
          />
          <Separator className="bg-black-primary bg-opacity-50" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <TextSlideIn
          text="Social"
          className="text-black-primary text-lg opacity-50"
        />
        <div className="flex flex-col gap-4">
          {socialSites.map((site) => (
            <Link
              key={site.name}
              href={site.url}
              target="_blank"
              className="flex items-center gap-2"
            >
              <TextSlideIn
                className="text-xl text-black-primary "
                text={site.name}
              />
              <FadeIn>
                <Icon
                  name="ArrowUpRight"
                  weight="light"
                  size={20}
                  className="*:text-black-primary"
                />
              </FadeIn>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const serviceOptions = ["Development", "Design", "Dev + design", "Writing"];
  const [service, setService] = useState<null | string>(null);

  return (
    <div className="pl-32 w-full flex flex-col gap-16 mt-10">
      {/* <div className="opacity-0">
        <SectionBubble title="Form" disablePadding />
      </div> */}

      <div className="flex flex-col gap-24">
        <div className="flex gap-16">
          <div className="w-1/2">
            <Input label="Full name" input={fullname} setInput={setFullname} />
          </div>

          <div className="w-1/2">
            <Input
              label="Company (optional)"
              input={company}
              setInput={setCompany}
            />
          </div>
        </div>

        <Input
          label="Contact email"
          input={contactEmail}
          setInput={setContactEmail}
        />

        <Radio
          label="What are you looking for?"
          options={serviceOptions}
          radio={service}
          setRadio={setService}
        />

        <Input
          label="Your idea"
          input={contactEmail}
          setInput={setContactEmail}
        />

        <Link
          href={`mailto:${inquiriesEmail}?subject=Inquiry&body=Full name: ${fullname}%0D%0ACompany: ${company}%0D%0AEmail: ${contactEmail}`}
        >
          <SectionBubble
            title="Send inquiry"
            button={{
              icon: "ArrowRight",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

const Input = ({
  label,
  input,
  setInput,
}: {
  label: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={cn(
          "transition-[margin] duration-500 absolute",
          focused || input.length > 0 ? "-mt-10" : ""
        )}
      >
        <TextSlideIn
          text={label}
          className={cn(
            "pointer-events-none z-10 transition-[font-size] duration-500",
            focused || input.length > 0 ? "text-2xl opacity-50" : "text-5xl"
          )}
        />
      </div>

      <div className="text-5xl text-transparent">{label}</div>

      <div className="absolute top-0 w-full">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="h-full w-full bg-transparent focus:outline-none text-5xl"
        />
        <Separator className="bg-black-primary bg-opacity-50 mt-3" />
      </div>
    </div>
  );
};

const Radio = ({
  label,
  radio,
  setRadio,
  options,
}: {
  label: string;
  radio: null | string;
  setRadio: Dispatch<SetStateAction<null | string>>;
  options: string[];
}) => {
  return (
    <div>
      <TextSlideIn text={label} className="text-2xl opacity-50" />

      <div className="flex gap-2 mt-4">
        {options.map((option) => (
          <button key={option} onClick={() => setRadio(option)}>
            <SectionBubble
              title={option}
              button={{}}
              //   buttonActive={radio === option}
              disablePadding
            />
            <div>{(radio === option).toString()}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
