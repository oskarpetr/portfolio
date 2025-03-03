import Link from "next/link";
import TextStagger from "../animation/TextStagger";
import { useTranslationStore } from "../../stores/useTranslationStore";
import FadeIn from "../animation/FadeIn";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export default function Menu() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { language, toggleLanguage } = useTranslationStore();

  return (
    <div className="sticky top-0 z-10 flex h-[85px] items-center justify-between bg-[#ffffffd4] px-10 py-6 backdrop-blur-3xl">
      <TextStagger>
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="Logo" width={20} height={20} />
          <div>Oskar Petr</div>
        </Link>
      </TextStagger>

      <div className="hidden gap-16 md:flex">
        <div className="flex gap-4">
          <FadeIn delay={0.1}>
            <button
              onClick={() => scrollTo("projects")}
              className="flex cursor-pointer"
            >
              <TextStagger>Projects,</TextStagger>
            </button>
          </FadeIn>

          <FadeIn delay={0.2}>
            <button
              onClick={() => scrollTo("about")}
              className="flex cursor-pointer"
            >
              <TextStagger>About,</TextStagger>
            </button>
          </FadeIn>

          <FadeIn delay={0.3}>
            <button
              onClick={() => scrollTo("articles")}
              className="cursor-pointer"
            >
              <TextStagger>Articles,</TextStagger>
            </button>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer"
            >
              <TextStagger>Contact</TextStagger>
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <button onClick={toggleLanguage} className="w-8 cursor-pointer">
            <TextStagger>{language.toUpperCase()}</TextStagger>
          </button>
        </FadeIn>
      </div>

      <div className="block md:hidden">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-2">
            <div className="h-[1px] w-10 bg-black"></div>
            <div className="h-[1px] w-10 bg-black"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
