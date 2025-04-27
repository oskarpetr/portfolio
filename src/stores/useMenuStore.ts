import { create } from "zustand";

interface MenuStore {
  scrollTarget: string | null;
  setScrollTarget: (target: string | null) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  scrollTarget: null,
  setScrollTarget: (target) => set({ scrollTarget: target }),
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
}));
