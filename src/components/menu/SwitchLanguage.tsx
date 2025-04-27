import { useTranslationStore } from "@/stores/useTranslationStore";
import TextStagger from "../animation/TextStagger";

export default function SwitchLanguage() {
  const { language, toggleLanguage } = useTranslationStore();

  return (
    <button
      onClick={toggleLanguage}
      className="flex w-8 cursor-pointer items-center justify-center"
    >
      <TextStagger>{language.toUpperCase()}</TextStagger>
    </button>
  );
}
