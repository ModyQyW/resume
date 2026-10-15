import type { Resume } from "./model";

/**
 * The English edition. Mirrors `zh-CN.ts` field for field, so a missing or
 * mistyped translation breaks the build rather than rendering a blank.
 */
export const enUS: Resume = {
  certificates: [
    "System Integration Project Management Engineer, Computer and Software Technology Proficiency",
  ],
  controls: {
    language: "Change language",
    print: "Print or save as PDF",
    source: "View source",
    theme: "Change theme",
  },
  description:
    "Rui Wu is a front-end engineer with 7 years of experience across the React and Vue ecosystems, comfortable running a small team and shipping projects end to end.",
  dictionary: {
    "company.globus": "Globus LTD.",
    "company.millcloud": "Guangdong MillCloud Technology Co., Ltd.",
    "school.sysu": "Sun Yat-sen University",
  },
  documentTitle: "Rui Wu - Front-end Engineer",
  education: {
    degree:
      "Bachelor of Engineering, Software Engineering (Mobile Information Engineering)",
    period: { end: "2019-06", start: "2015-08" },
    schoolKey: "school.sysu",
    schoolUrl: "https://www.sysu.edu.cn/",
  },
  footer: {
    builtWith: "Built with React, HeroUI and Tailwind CSS",
    sourceUrl: "https://github.com/ModyQyW/resume",
  },
  htmlLang: "en-US",
  jobs: [
    {
      companyKey: "company.millcloud",
      companyUrl: "https://www.millcloud.cn/",
      groups: [
        {
          items: [
            {
              label: "",
              text: "Lead a five-person team building and maintaining cross-platform education products: web, desktop, mobile and mini-program.",
            },
            {
              label: "",
              text: "Keep delivery on schedule by scoping requirements with the client, then breaking the work into tasks the team can pick up.",
            },
          ],
          title: "Team leadership and project management",
        },
        {
          items: [
            {
              label: "",
              text: "Own the front-end architecture, keeping systems extensible and maintainable as they grow.",
            },
            {
              label: "",
              text: "Design and ship technical solutions, both greenfield builds and fast delivery on a low-code platform.",
            },
          ],
          title: "Technical design and architecture",
        },
        {
          items: [
            {
              label: "",
              text: "Introduced convention-over-configuration structure, server-state management, and JSON Schema driven forms and tables.",
            },
            {
              label: "",
              text: "Worked through the problems that hurt most — tangled request state, tightly coupled modules, slow page loads — and improved both performance and the user's experience.",
            },
          ],
          title: "Hard problems and new practice",
        },
        {
          items: [
            {
              label: "",
              text: "Led the upgrade of legacy projects, simplifying their architecture and lifting system performance.",
            },
            {
              label: "",
              text: "Introduced unit testing, CI/CD and monitoring into the development process, which raised both project quality and team throughput.",
            },
            {
              label: "~21% faster builds",
              text: "about 18% smaller build output, and about 19% less outbound traffic from the cloud instances.",
            },
          ],
          title: "Modernisation and process",
        },
        {
          items: [
            {
              label: "",
              text: "Built a provincial education research platform on the JVS low-code base, supporting research activity, research teams and classroom teaching across low-code, no-code and full-code development.",
            },
            {
              label: "",
              text: "Did secondary development on the JVS front end: introduced front-end tooling, refactored existing code, extended the low-code features and reworked the interactive experience.",
            },
            {
              label: "",
              text: "The platform serves the whole province and connects to several external systems, moving education research online.",
            },
          ],
          title: "Guangdong Teaching Research Digital Intelligence Platform",
        },
      ],
      location: "Foshan",
      logo: "/millcloud.png",
      period: { end: null, start: "2021-07" },
      role: "Front-end Lead",
      stack: [
        "logos:javascript",
        "logos:typescript-icon",
        "logos:react",
        "logos:ant-design",
        "logos:material-ui",
        "custom:taro",
        "logos:solidjs-icon",
        "logos:vue",
        "logos:element",
        "logos:naiveui",
        "custom:uni-app",
        "custom:uni-helper",
        "logos:tailwindcss-icon",
        "logos:unocss",
        "logos:electron",
        "logos:rollupjs",
        "logos:vitejs",
        "logos:vitest",
        "logos:koa",
        "logos:nestjs",
        "logos:hono",
        "devicon:azuredevops",
        "simple-icons:github",
      ],
    },
    {
      companyKey: "company.globus",
      companyUrl: "https://globus-china.com/",
      groups: [
        {
          items: [
            {
              label: "",
              text: "Built inspection-record capture and in-browser PDF preview for the internal ERP system, which sped up processing and improved the experience for its users.",
            },
          ],
          title: "Product features",
        },
        {
          items: [
            {
              label: "",
              text: "Researched whether the existing Express back end could move to Serverless Framework, with the goal of using AWS serverless compute to gain availability and elasticity while cutting operational cost.",
            },
          ],
          title: "Architecture migration",
        },
      ],
      location: "Foshan",
      logo: "/globus.svg",
      period: { end: "2021-07", start: "2021-05" },
      role: "Full-stack Engineer",
      stack: [
        "logos:javascript",
        "logos:typescript-icon",
        "logos:react",
        "logos:nextjs-icon",
        "logos:ant-design",
        "logos:tailwindcss-icon",
        "logos:webpack",
        "logos:vitejs",
        "logos:express",
        "logos:serverless",
        "simple-icons:github",
      ],
    },
    {
      companyKey: "company.millcloud",
      companyUrl: "https://www.millcloud.cn/",
      groups: [
        {
          items: [
            {
              label: "",
              text: "Took charge of a legacy project and refactored it, unifying the stack and restoring cross-platform compatibility and maintainability.",
            },
          ],
          title: "Taking over a legacy codebase",
        },
        {
          items: [
            {
              label: "",
              text: "Led the design and delivery of a platform for a restaurant chain — website, mini-program and mobile app — covering back-office management and reporting for clients, customers, outlets, staff and orders.",
            },
            {
              label: "5,000+ daily users",
              text: "on the mini-program and mobile app, with monthly transaction volume reaching RMB 10 million.",
            },
          ],
          title: "Restaurant chain platform (Ducheng Fast Food)",
        },
        {
          items: [
            {
              label: "",
              text: "Designed and built a course-material library from scratch, comparable to a document cloud: authoring and managing teaching resources, publishing announcements, discussion and resource sharing.",
            },
            {
              label: "100+ courses hosted",
              text: "and more than one million visits to date.",
            },
          ],
          title: "Online education resource library (MTU)",
        },
      ],
      location: "Foshan",
      logo: "/millcloud.png",
      period: { end: "2021-04", start: "2019-06" },
      role: "Front-end Engineer",
      stack: [
        "logos:javascript",
        "logos:typescript-icon",
        "logos:react",
        "logos:ant-design",
        "custom:taro",
        "logos:vue",
        "logos:element",
        "custom:uni-app",
        "custom:uni-helper",
        "logos:tailwindcss-icon",
        "logos:electron",
        "logos:webpack",
        "devicon:azuredevops",
        "simple-icons:github",
      ],
    },
  ],
  localeCode: "en-US",
  person: {
    contacts: [
      {
        href: "https://modyqyw.top",
        icon: "heroicons:home",
        label: "Visit my website",
        value: "modyqyw.top",
      },
      {
        href: "https://github.com/ModyQyW",
        icon: "simple-icons:github",
        label: "Visit GitHub",
        value: "github.com/ModyQyW",
      },
      {
        href: "mailto:wurui.dev@gmail.com",
        icon: "heroicons:envelope",
        label: "Send an email",
        value: "wurui.dev@gmail.com",
      },
      {
        href: "tel:+8613266337925",
        icon: "heroicons:phone",
        label: "Call me",
        value: "+8613266337925",
      },
    ],
    name: "Rui Wu",
    portrait: "/wurui.jpg",
    title: "Front-end Engineer",
  },
  projects: [
    {
      after: ").",
      before:
        "Run ESLint as part of a Vite build. Downloaded about 111k times a week, used by thousands of projects, and bundled into Nuxt's official module (",
      name: "vite-plugin-eslint2",
      period: { end: null, start: "2022-02" },
      relatedName: "@nuxt/eslint",
      relatedUrl: "https://eslint.nuxt.com/",
      url: "https://vite-plugin-eslint2.modyqyw.top/",
    },
    {
      after: ").",
      before:
        "Run Stylelint as part of a Vite build. Downloaded about 57k times a week, used by thousands of projects, and bundled into Nuxt's official module (",
      name: "vite-plugin-stylelint",
      period: { end: null, start: "2021-08" },
      relatedName: "@nuxtjs/stylelint-module",
      relatedUrl: "https://github.com/nuxt-modules/stylelint",
      url: "https://github.com/ModyQyW/vite-plugin-stylelint",
    },
    {
      after: "",
      before:
        "A better development experience for the uni-app family, covering VS Code, TypeScript and npm integration. It supports thousands of uni-app projects.",
      name: "uni-helper",
      period: { end: null, start: "2020-12" },
      url: "https://uni-helper.js.org/",
    },
  ],
  roles: [
    {
      description: "I build web, desktop, mobile and mini-program apps.",
      icon: "carbon:laptop",
      label: "Front-end Engineer",
    },
    {
      description: "I design challenging technical solutions and products.",
      icon: "carbon:chart-network",
      label: "Architecture & Design",
    },
    {
      description:
        "I help junior developers level up by showing best practices.",
      icon: "heroicons:academic-cap",
      label: "Tech Lead & Mentoring",
    },
  ],
  sectionTitles: {
    certificate: "Qualification Certificate",
    education: "Education",
    projects: "Side Projects",
    roles: "Roles",
    tools: "Main Tools",
    values: "Values",
    work: "Work Experience",
  },
  tools: [
    { icon: "logos:typescript-icon", label: "TypeScript" },
    { icon: "logos:react", label: "React" },
    { icon: "logos:vue", label: "Vue" },
    { icon: "logos:tailwindcss-icon", label: "Tailwind CSS" },
  ],
  values: [
    {
      description: "I take on complex tasks and finish them with strong focus.",
      icon: "heroicons:user",
      label: "Autonomy",
    },
    {
      description:
        "I pay close attention to detail and aim for the best solution.",
      icon: "ph:target",
      label: "High standards",
    },
    {
      description: "I value workspaces full of trust, honesty and kindness.",
      icon: "heroicons:heart",
      label: "Healthy relationships",
    },
    {
      description:
        "I believe collaborative effort and a supportive environment are what get goals met.",
      icon: "heroicons:users",
      label: "Team spirit",
    },
    {
      description:
        "I communicate directly, choosing the channel that fits the case rather than one default.",
      icon: "heroicons:chat-bubble-left-right",
      label: "Active communication",
    },
  ],
};
