import { Translation, Translations } from "@/types/Translation.types";

const translationEn: Translation = {
  sectionTitles: {
    projects: "Projects",
    about: "About",
    services: "Services",
    graphicDesigns: "Graphic designs",
    articles: "Articles",
    testimonials: "Testimonials",
    endOfWebsite: "End of website",
    inquiry: "General inquiry",
    notFound: "Page not found",
  },
  projectDetail: {
    client: "Client",
    projectType: "Project type",
    personal: "Personal",
    nextProjects: "Next projects",
  },
  menu: {
    projects: "Projects",
    about: "About",
    services: "Services",
    testimonials: "Testimonials",
  },
  footer: {
    country: "Czech Republic",
    city: "Prague",
  },
  tooltips: {
    explore: "Explore",
    read: "Read",
  },
  alts: {
    myself: "Photo of myself",
    design: "Design process",
    development: "Development process",
  },
  navigation: {
    next: "Next",
    previous: "Previous",
  },
  inquiry: {
    inputs: {
      name: {
        label: "My full name is",
        placeholder: "Your name",
      },
      company: {
        label: "I'm representing",
        placeholder: "Your company",
      },
      service: {
        label: "I'm looking for",
        placeholder: "Select service",
        options: [
          "Complete web solution",
          "Web development",
          "Web design",
          "Technical writing",
          "Other (specify in description)",
        ],
      },
      budget: {
        label: "My budget is",
        placeholder: "Your budget",
      },
      timeframe: {
        label: "The project is planned for",
        placeholder: "Time frame",
      },
      email: {
        label: "You can contact me at",
        placeholder: "Your email",
      },
      description: {
        label: "Brief project description",
        placeholder: "Project description",
      },
    },
    success: [
      "Thanks! Your inquiry has been successfully sent!",
      "I'll get back to you as soon as possible.",
    ],
    error: [
      "An error has occurred with sending your inquiry!",
      "Please try again later or contact me directly at:",
    ],
  },
  notFound: {
    description: "The page you are looking for does not exist.",
  },
  buttons: {
    backHome: "Back home",
    sendInquiry: "Send inquiry",
    hitMeUp: "Hit me up",
  },
  contact: {
    title: ["Start a", "project?"],
    description:
      "Hey there! If you are looking for working on a project or a collaboration with me, hit me up with your inquiry and we'll get to work!",
  },
  clientFiles: {
    files: {
      projectProposal: "Project proposal",
      termsAndConditions: "Terms and conditions",
      projectOnboarding: "Project onboarding",
      invoice: "Invoice",
    },
    notAvailable: "Not available yet",
    pdfFile: "PDF file",
  },
};

const translationCs: Translation = {
  sectionTitles: {
    projects: "Projekty",
    about: "O mně",
    services: "Služby",
    graphicDesigns: "Grafické designy",
    articles: "Články",
    testimonials: "Reference",
    endOfWebsite: "Konec webu",
    inquiry: "Obecná poptávka",
    notFound: "Stránka nenalezena",
  },
  projectDetail: {
    client: "Klient",
    projectType: "Typ projektu",
    personal: "Osobní",
    nextProjects: "Další projekty",
  },
  menu: {
    projects: "Projekty",
    about: "O mně",
    services: "Služby",
    testimonials: "Reference",
  },
  footer: {
    country: "Česká republika",
    city: "Praha",
  },
  tooltips: {
    explore: "Prozkoumat",
    read: "Přečíst",
  },
  alts: {
    myself: "Moje fotka",
    design: "Proces návrhu",
    development: "Proces vývoje",
  },
  navigation: {
    next: "Další",
    previous: "Předchozí",
  },
  inquiry: {
    inputs: {
      name: {
        label: "Moje celé jméno je",
        placeholder: "Vaše jméno",
      },
      company: {
        label: "Zastupuji",
        placeholder: "Vaše společnost",
      },
      service: {
        label: "Hledám",
        placeholder: "Služba",
        options: [
          "Kompletní webové řešení",
          "Webový vývoj",
          "Webový design",
          "Technické psaní",
          "Jiné (specifikujte v popisu)",
        ],
      },
      budget: {
        label: "Můj rozpočet je",
        placeholder: "Váš rozpočet",
      },
      timeframe: {
        label: "Projekt je plánován na",
        placeholder: "Časový rámec",
      },
      email: {
        label: "Můžete mě kontaktovat na",
        placeholder: "Váš e-mail",
      },
      description: {
        label: "Stručný popis projektu",
        placeholder: "Popis projektu",
      },
    },
    success: [
      "Děkuji! Váše poptávka byla úspěšně odeslána!",
      "Ozvu se Vám co nejdříve.",
    ],
    error: [
      "Při odesílání vašeho dotazu došlo k chybě!",
      "Zkuste to prosím znovu později nebo mě kontaktujte přímo na:",
    ],
  },
  notFound: {
    description: "Stránka, kterou hledáte, neexistuje.",
  },
  buttons: {
    backHome: "Zpět domů",
    sendInquiry: "Odeslat poptávku",
    hitMeUp: "Mám zájem",
  },
  contact: {
    title: ["Začneme", "projekt?"],
    description:
      "Ahoj! Pokud plánujete projekt nebo byste rádi na něčem spolupracovali, ozvěte se mi se svou představou a pustíme se do toho!",
  },
  clientFiles: {
    files: {
      projectProposal: "Návrh projektu",
      termsAndConditions: "Obchodní podmínky",
      projectOnboarding: "Zahájení projektu",
      invoice: "Faktura",
    },
    notAvailable: "Zatím není k dispozici",
    pdfFile: "PDF soubor",
  },
};

export const translations: Translations = {
  en: translationEn,
  cs: translationCs,
};
