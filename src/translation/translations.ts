import { Translation, Translations } from "@/types/Translation.types";

const translationEn: Translation = {
  sectionTitles: {
    projects: "Projects",
  },
  categories: {
    webDevelopment: "Web development",
    webDesign: "Web design",
    graphicDesign: "Graphic design",
    writing: "Writing",
  },
  development: {
    nextJs: "Next.js",
    wordpressDevelopment: "WordPress development",
    ecommerceManagement: "E-commerce management",
    elementor: "Elementor",
    seoOptimization: "SEO optimization",
    multiLanguageSupport: "Multi-language support",
    newsletterIntegration: "Newsletter integration",
  },
  design: {
    uiUxDesign: "UI/UX design",
    webRedesign: "Web redesign",
    graphicDesign: "Graphic design",
    identityDesign: "Identity design",
    animation: "Animation",
  },
  projectDetail: {
    development: "Development",
    design: "Design",
    client: "Client",
    projectType: "Project type",
    personal: "Personal",
  },
};

const translationCs: Translation = {
  sectionTitles: {
    projects: "Projekty",
  },
  categories: {
    webDevelopment: "Vývoj webu",
    webDesign: "Design webu",
    graphicDesign: "Grafický design",
    writing: "Tvorba článků",
  },
  development: {
    nextJs: "Next.js",
    wordpressDevelopment: "Vývoj WordPressu",
    ecommerceManagement: "Správa e-shopu",
    elementor: "Elementor",
    seoOptimization: "SEO optimalizace",
    multiLanguageSupport: "Podpora více jazyků",
    newsletterIntegration: "Integrace newsletteru",
  },
  design: {
    uiUxDesign: "UI/UX design",
    webRedesign: "Redesign webu",
    graphicDesign: "Grafický design",
    identityDesign: "Design vizuální identity",
    animation: "Animace",
  },
  projectDetail: {
    development: "Vývoj",
    design: "Design",
    client: "Klient",
    projectType: "Typ projektu",
    personal: "Osobní",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
