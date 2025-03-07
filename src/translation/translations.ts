import { Translation, Translations } from "@/types/Translation.types";

const translationEn: Translation = {
  sectionTitles: {
    projects: "Projects",
    services: "Services",
    graphicDesigns: "Graphic designs",
    articles: "Articles",
    footer: "Footer",
  },
  categories: {
    webDevelopment: "Web development",
    webDesign: "Web design",
    graphicDesign: "Graphic design",
    writing: "Writing",
  },
  development: {
    nextJs: "Next.js",
    cms: "CMS",
    wordpressDevelopment: "WordPress development",
    ecommerceManagement: "E-commerce management",
    elementor: "Elementor",
    tailwindCss: "Tailwind CSS",
    framerMotion: "Framer Motion",
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
    client: "Client",
    projectType: "Project type",
    personal: "Personal",
  },
  services: {
    development: "Development",
    design: "Design",
    writing: "Writing",
  },
  menu: {
    projects: "Projects",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
  footer: {
    startProject: "Start a project?",
    location: "Location",
    country: "Czech Republic",
  },
};

const translationCs: Translation = {
  sectionTitles: {
    projects: "Projekty",
    services: "Služby",
    graphicDesigns: "Grafické designy",
    articles: "Články",
    footer: "Zápatí",
  },
  categories: {
    webDevelopment: "Vývoj webu",
    webDesign: "Design webu",
    graphicDesign: "Grafický design",
    writing: "Tvorba článků",
  },
  development: {
    nextJs: "Next.js",
    cms: "CMS",
    wordpressDevelopment: "Vývoj WordPressu",
    ecommerceManagement: "Správa e-shopu",
    elementor: "Elementor",
    tailwindCss: "Tailwind CSS",
    framerMotion: "Framer Motion",
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
    client: "Klient",
    projectType: "Typ projektu",
    personal: "Osobní",
  },
  services: {
    development: "Vývoj",
    design: "Design",
    writing: "Tvorba článků",
  },
  menu: {
    projects: "Projekty",
    about: "O mně",
    services: "Služby",
    contact: "Kontakt",
  },
  footer: {
    startProject: "Začneme projekt?",
    location: "Lokace",
    country: "Česká republika",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
