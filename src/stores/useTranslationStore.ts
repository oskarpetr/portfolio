import { translations } from "@/translation/translations";
import { LanguageType, Translation } from "@/types/Translation.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TranslationStore {
  language: LanguageType;
  translation: Translation;
  toggleLanguage: () => void;
}

const LANGUAGE_STORE_KEY = "language";
const defaultLanguage: LanguageType = "en";

export const useTranslationStore = create<TranslationStore>()(
  persist(
    (set, get) => ({
      language: defaultLanguage,
      translation: translations[defaultLanguage],
      toggleLanguage: () =>
        set({
          language: toggleLanguage(get().language),
          translation: translations[toggleLanguage(get().language)],
        }),
    }),
    {
      name: LANGUAGE_STORE_KEY,
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // If language is not set or translation does not exist,
          // set the default language
          if (!state.language || !translations[state.language]) {
            state.language = defaultLanguage;
          } else {
            state.translation = translations[state.language];
          }
        }
      },
    },
  ),
);

function toggleLanguage(language: LanguageType): LanguageType {
  return language === "en" ? "cs" : "en";
}
