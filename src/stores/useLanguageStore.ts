import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageStore {
  language: LanguageType;
  toggleLanguage: () => void;
}

const languageStoreKey = "language-store";
type LanguageType = "EN" | "CZ";
const defaultLanguage: LanguageType = "EN";

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: defaultLanguage,
      toggleLanguage: () =>
        set({ language: get().language === "EN" ? "CZ" : "EN" }),
    }),
    { name: languageStoreKey },
  ),
);
