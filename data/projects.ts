import { ProjectType } from "@/types/Project.types";

const projects: Projects = {
  development: [
    {
      type: "development",
      title: "Reminders",
      description:
        "Reminders is an app that helps you manage your urgent tasks, as well as sharing them with your project colleagues. To each project, there can be assigned many tasks, even with deadlines and assignees.",
      image: "Reminders",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
      ],
      link: "https://reminders.oskarpetr.dev",
      repositary: "https://github.com/oskarpetr/reminders",
    },
    {
      type: "development",
      title: "Kosmo Production: Coming Soon",
      description:
        "Kosmo Production is a company that focuses on social media management, web development, design and photography. For now, there is only a coming soon static page but in future it will be furthured to a complete version.",
      image: "Coming soon",
      technologies: ["Next.js", "React", "Typescript", "Tailwind"],
      link: "https://www.kosmoproduction.eu",
      repositary: "https://github.com/oskarpetr/kosmoproduction-coming-soon",
    },
    {
      type: "development",
      title: "Crosswords",
      description: "",
      image: "",
      technologies: ["Next.js", "React", "Typescript", "Tailwind"],
      link: "https://dev.krizovkarna.cz",
    },
  ],
  writing: [
    {
      type: "writing",
      title: "VPN Vs. Residential Proxies: Which Should You Choose and When?",
      description:
        "Learn the differences between VPNs and residential proxies and find out the ideal option for better online security, uninterrupted data collection, and seamless social media automation.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/vpn-vs-residential-proxies-which-should-you-choose-and-when-4b331baf3f88",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "Measuring the Sierpiński Triangle",
      description:
        "Reminders is an app that helps you manage your urgent tasks, as well as sharing them with your project colleagues. To each project, there can be assigned many tasks, even with deadlines and assignees.",
      image: "Reminders",
      link: "docs/sierpinski-triangle.pdf",
      tag: "Written in Latex",
    },
    {
      type: "writing",
      title: "Top 5 Instant Data Scraping Tools for Easy Web Scraping",
      description:
        "Web scraping has proven to be an invaluable tool for individuals and companies alike, to gather data for a variety of purposes such as academic research, training machine learning models, price monitoring, keyword research, lead generation, and consumer sentiment analysis.",
      image: "Reminders",
      link: "https://docs.google.com/document/d/1Ec4aOiCJmUr9SCb2FyCS5GP6-NuQUoHqe2VhXZ-DAtY/edit?usp=sharing",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "CSS and XPath selectors in web scraping",
      description:
        "Selectors are web commands that tell the browser to obtain certain elements of the DOM with specified arguments. The elements that the selectors will get can be further filtered by special symbols, classes, IDs, or other selectors.",
      image: "Reminders",
      link: "https://docs.google.com/document/d/15mXHKGcPOkWc8sOQxXMtdV6jRytcGPszvUR1asbYm2s/edit?usp=sharing",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "Overcoming 3 Major Web Scraping Challenges that Developers Face",
      description:
        "How to overcome 3 major web scraping limitations - dynamic websites, website interaction, and fingerprint management faced by developers with Bright Data's Web Scraper IDE.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/overcoming-3-major-web-scraping-challenges-that-developers-face-1e664ffe4783",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "Web scraping in C#",
      description:
        "In this guide, we will focus on how to execute an HTTP request, navigate through the elements of the DOM tree and scrape their values. We will make the scraping process as private as possible on the sites we target.",
      image: "Reminders",
      link: "https://docs.google.com/document/d/1ub21jsKw-gh-Yz-pHdr5yv7C3Q65jYgADVCRATLq3F4/edit?usp=sharing",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "How to Create an Amazon Product Search API with Data Collectors",
      description:
        "How to scrape amazon.com with Bright Data's data collectors, to then create a product search API that you can deploy to the web and monetize it.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/how-to-create-an-amazon-product-search-api-with-data-collectors-7d8b03676a52",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "10 Best Icon Packs to Improve Your File's Appearance in VS Code",
      description:
        "A suitable file pack in your VS Code software can boost your confidence within the IDE and please your eye more than the default ones. I have already written a lot of articles about VS Code themes, extensions, and other enhancements.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/10-icon-packs-for-vs-code-87d2ff700d0c",
      tag: "60K+ Views",
    },
    {
      type: "writing",
      title: "How to Improve Your VS Code's Appearance with Settings",
      description:
        "Having your VS Code appear more pleasing may have a positive effect on your productivity, speed, and confidence within this environment. You will be sure that this is the software for you and that it was meant for you.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/how-to-improve-your-vs-codes-appearance-with-settings-cf30cb1de5ba",
      tag: "10K+ Views",
    },
  ],
  design: [],
};

interface Projects {
  development: ProjectType[];
  writing: ProjectType[];
  design: [];
}

export default projects;
