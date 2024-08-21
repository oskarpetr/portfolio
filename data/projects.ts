import { ProjectType } from "@/types/Project.types";

const projects: Projects = {
  development: [
    {
      type: "development",
      title: "Renata Mirková: Chinese Classes",
      slug: "/renata-mirkova",
      description:
        "Renata Mirková's website offers sign-ups for Chinese language classes, providing options for various levels and formats. It features course details, events, and registration information.",
      image: "Renata Mirková",
      technologies: ["Wordpress", "Figma"],
      link: "https://renatamirkova.com",
    },
    {
      type: "development",
      title: "Reminders",
      slug: "/reminders",
      description:
        "Reminders is an app that helps you manage your urgent tasks, as well as sharing them with your project colleagues. To each project, there can be assigned many tasks, even with deadlines and assignees.",
      image: "Reminders",
      technologies: [
        "Next.js",
        "React.js",
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
      slug: "/kosmo-production",
      description:
        "Kosmo Production is a company that focuses on social media management, web development, design and photography. For now, there is only a coming soon static page but in future it will be furthured to a complete version.",
      image: "Coming soon",
      technologies: ["Next.js", "React.js", "Typescript", "Tailwind"],
      link: "https://kosmoproduction.eu",
      repositary: "https://github.com/oskarpetr/kosmoproduction-coming-soon",
    },
    {
      type: "development",
      title: "Crosswords",
      slug: "/crosswords",
      description:
        "The Křížovkárna website specializes in creating custom crosswords, providing tailored puzzle solutions for various needs. They offer personalized crossword design and production services.",
      image: "",
      technologies: ["Next.js", "React.js", "Typescript", "Tailwind"],
      link: "https://dev.krizovkarna.cz",
    },
  ],
  writing: [
    {
      type: "writing",
      title: "VPN vs. Residential Proxies",
      slug: "/vpns-vs-proxies",
      description:
        "Learn the differences between VPNs and residential proxies and find out the ideal option for better online security, uninterrupted data collection, and seamless social media automation.",
      image: "VPNs vs. Proxies",
      link: "https://medium.com/javascript-in-plain-english/vpn-vs-residential-proxies-which-should-you-choose-and-when-4b331baf3f88",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "Measuring the Sierpiński Triangle",
      slug: "/sierpinski-triangle",
      description:
        "Reminders is an app that helps you manage your urgent tasks, as well as sharing them with your project colleagues. To each project, there can be assigned many tasks, even with deadlines and assignees.",
      image: "Sierpiński Triangle",
      link: "docs/sierpinski-triangle.pdf",
      tag: "Written in Latex",
    },
    {
      type: "writing",
      title: "Top 5 Tools for Web Scraping",
      slug: "/web-scraping-tools",
      description:
        "Web scraping has proven to be an invaluable tool for individuals and companies alike, to gather data for a variety of purposes such as academic research, training machine learning models, price monitoring, keyword research, lead generation, and consumer sentiment analysis.",
      image: "Web Scraping Tools",
      link: "https://docs.google.com/document/d/1Ec4aOiCJmUr9SCb2FyCS5GP6-NuQUoHqe2VhXZ-DAtY/edit?usp=sharing",
      tag: "Written for Bright Data",
    },
    {
      type: "writing",
      title: "CSS and XPath: Web scraping selectors",
      slug: "/css-and-xpath-selectors",
      description:
        "Selectors are web commands that tell the browser to obtain certain elements of the DOM with specified arguments. The elements that the selectors will get can be further filtered by special symbols, classes, IDs, or other selectors.",
      image: "CSS and XPath Selectors",
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
      tag: "60K+ Views on Medium",
    },
    {
      type: "writing",
      title: "How to Improve Your VS Code's Appearance with Settings",
      description:
        "Having your VS Code appear more pleasing may have a positive effect on your productivity, speed, and confidence within this environment. You will be sure that this is the software for you and that it was meant for you.",
      image: "Reminders",
      link: "https://medium.com/javascript-in-plain-english/how-to-improve-your-vs-codes-appearance-with-settings-cf30cb1de5ba",
      tag: "10K+ Views on Medium",
    },
  ],
  design: [
    {
      type: "design",
      title: "Planco: Plan and Collaborate",
      slug: "/planco",
      description:
        "Having your VS Code appear more pleasing may have a positive effect on your productivity, speed, and confidence within this environment. You will be sure that this is the software for you and that it was meant for you.",
      image: "Planco",
      design:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FigwSqdS3DRJa9btxL3Xlay%2FPlanco%3Fnode-id%3D0-1%26t%3Dp3Bnzw8MZ0GXAcJV-1",
      // images: [
      //   "Planco",
      //   "Branch",
      //   "Task",
      //   "Employees",
      //   "Profile",
      //   "Roles",
      //   "Invitation",
      //   "Register 1",
      //   "Register 2",
      //   "Register 3",
      //   "Register 4",
      //   "Login",
      // ],
    },
    {
      type: "design",
      title: "Lango icons",
      slug: "/lango-icons",
      description:
        "Lango icons is an icon family pack created for designers and developers. It aims to enhance visual storytelling and user interfaces of digital projects across diverse platforms.",
      design:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FEY3wtBCY80baUDjycCKrNK%2FIcons%3Fnode-id%3D1-9322%26t%3DsjgNbzqpvhaJj17E-1",
      image: "Lango icons",
    },
  ],
};

interface Projects {
  development: ProjectType[];
  writing: ProjectType[];
  design: ProjectType[];
}

export default projects;
