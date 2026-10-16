import type { Resume } from "./model";

/**
 * The Chinese edition. Company names, the school name and the certificate live
 * in `dictionary` rather than inline, because the English file needs to
 * translate exactly these keys.
 */
export const zhCN: Resume = {
  certificates: ["系统集成项目管理工程师"],
  controls: {
    download: "下载 PDF",
    language: "切换语言",
    print: "打印或导出 PDF",
    source: "查看源码",
    theme: "切换主题",
  },
  description:
    "吴睿，前端工程师，7 年前端经验，熟悉 React 和 Vue 相关技术栈，具备项目管理和完整项目上线经验。",
  dictionary: {
    "company.globus": "佛山市马威贸易有限公司",
    "company.millcloud": "广东砺云教育科技有限公司",
    "school.sysu": "中山大学",
  },
  documentTitle: "吴睿 - 前端工程师",
  education: {
    degree: "全日制本科学历，工学学士学位，软件工程专业（移动信息工程）",
    period: { end: "2019-06", start: "2015-08" },
    schoolKey: "school.sysu",
    schoolUrl: "https://www.sysu.edu.cn/",
  },
  footer: {
    builtWith: "React、HeroUI 与 Tailwind CSS 构建",
    sourceUrl: "https://github.com/ModyQyW/resume",
  },
  htmlLang: "zh-CN",
  jobs: [
    {
      companyKey: "company.millcloud",
      companyUrl: "https://www.millcloud.cn/",
      groups: [
        {
          items: [
            {
              label: "",
              text: "带领 5 人团队，负责网页、桌面、移动端、小程序等跨平台教育项目的开发与维护。",
            },
            {
              label: "",
              text: "与客户确认需求，拆解任务并排期，保证项目按时交付。",
            },
          ],
          title: "团队领导与项目管理",
        },
        {
          items: [
            {
              label: "",
              text: "负责前端架构设计与优化，兼顾系统可扩展性和可维护性。",
            },
            {
              label: "",
              text: "设计并落地技术方案，覆盖从零搭建和基于低代码平台的快速开发。",
            },
          ],
          title: "技术方案与架构设计",
        },
        {
          items: [
            {
              label: "",
              text: "引入约定大于配置的设计范式、服务端状态管理、JSON Schema 驱动的表单和表格，提升开发体验。",
            },
            {
              label: "",
              text: "攻克请求与状态混乱、模块耦合、页面加载缓慢等业务重难点，提升性能与用户体验。",
            },
          ],
          title: "技术攻坚与创新",
        },
        {
          items: [
            { label: "", text: "主导历史项目升级，优化架构，提升系统性能。" },
            {
              label: "",
              text: "引入单元测试、CI/CD、监控，完善研发流程，提升项目质量与团队效率。",
            },
            {
              label: "编译启动",
              text: "提速约 21%，构建产物体积减少约 18%，云服务器流出流量减少约 19%。",
            },
          ],
          title: "项目优化与流程改进",
        },
        {
          items: [
            {
              label: "",
              text: "基于 JVS 企业信息化底座，以低代码、无代码、全代码结合的方式，搭建面向全省的教研数字化平台。",
            },
            {
              label: "",
              text: "对 JVS 前端做二次开发：引入前端工程化，重构代码，扩展低代码能力，优化交互。",
            },
            {
              label: "",
              text: "对接多个线上系统，推动教研活动的数字化与信息化。",
            },
          ],
          title: "广东教学研究数字化智慧平台",
        },
      ],
      location: "中国广东佛山",
      logo: "/millcloud.png",
      period: { end: null, start: "2021-07" },
      role: "前端负责人",
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
              text: "实现内部 ERP 系统的验货流程记录与 PDF 在线预览，提升业务处理效率。",
            },
          ],
          title: "系统功能开发",
        },
        {
          items: [
            {
              label: "",
              text: "调研将 Express 后端迁移到 Serverless Framework 的可行性，以期借助 AWS 无服务器计算实现高可用与弹性伸缩，并降低运维成本。",
            },
          ],
          title: "技术架构迁移与升级",
        },
      ],
      location: "中国广东佛山",
      logo: "/globus.svg",
      period: { end: "2021-07", start: "2021-05" },
      role: "全栈工程师",
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
              text: "接管并重构遗留项目，统一技术栈，恢复跨平台兼容性与代码可维护性。",
            },
          ],
          title: "旧项目接管与优化",
        },
        {
          items: [
            {
              label: "",
              text: "主导设计并交付连锁餐饮企业（都城快餐）的网站、小程序和移动应用，覆盖客户、顾客、分店、员工与订单的后台管理和数据展示。",
            },
            {
              label: "每天 5000+ 用户",
              text: "在小程序与移动应用使用，月流水达到 1000 万元。",
            },
          ],
          title: "连锁餐饮企业（都城快餐）技术解决方案",
        },
        {
          items: [
            {
              label: "",
              text: "从零设计并开发类百度网盘的在线教育资源库，支持教学资源在线制作与管理、信息发布、教学交流和资源共享。",
            },
            {
              label: "托管 100+ 门课程",
              text: "访问量超过 100 万次。",
            },
          ],
          title: "在线教育资源库（MTU 互动学习平台）",
        },
      ],
      location: "中国广东广州",
      logo: "/millcloud.png",
      period: { end: "2021-04", start: "2019-06" },
      role: "前端工程师",
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
  localeCode: "zh-CN",
  person: {
    contacts: [
      {
        href: "https://modyqyw.top",
        icon: "heroicons:home",
        label: "访问博客",
        value: "modyqyw.top",
      },
      {
        href: "https://github.com/ModyQyW",
        icon: "simple-icons:github",
        label: "访问 GitHub",
        value: "github.com/ModyQyW",
      },
      {
        href: "mailto:wurui-dev@foxmail.com",
        icon: "heroicons:envelope",
        label: "写邮件",
        value: "wurui-dev@foxmail.com",
      },
      {
        href: "tel:13266337925",
        icon: "heroicons:phone",
        label: "电话联系",
        value: "13266337925",
      },
    ],
    intro:
      "7 年前端经验，带过 5 人团队，负责网页、桌面、移动端和小程序等跨平台项目。主导架构设计与性能优化，构建提速 21%，熟悉 React 与 Vue 技术栈。",
    name: "吴睿",
    portrait: "/wurui.jpg",
    title: "前端工程师",
  },
  projects: [
    {
      after: "）内置。",
      before:
        "Vite ESLint 插件，允许 ESLint 校验代码质量。该插件周下载量达 111k，支撑了上千个项目，被 Nuxt 官方模块（",
      name: "vite-plugin-eslint2",
      period: { end: null, start: "2022-02" },
      relatedName: "@nuxt/eslint",
      relatedUrl: "https://eslint.nuxt.com/",
      url: "https://vite-plugin-eslint2.modyqyw.top/",
    },
    {
      after: "）内置。",
      before:
        "Vite Stylelint 插件，允许 Stylelint 校验代码质量。该插件周下载量达 57k，支撑了上千个项目，被 Nuxt 官方模块（",
      name: "vite-plugin-stylelint",
      period: { end: null, start: "2021-08" },
      relatedName: "@nuxtjs/stylelint-module",
      relatedUrl: "https://github.com/nuxt-modules/stylelint",
      url: "https://github.com/ModyQyW/vite-plugin-stylelint",
    },
    {
      after: "",
      before:
        "增强 uni-app 系列产品的开发体验。该项目提供了 VS Code、TypeScript 和 npm 生态相关的集成支持，支撑了上千个 uni-app 项目。",
      name: "uni-helper",
      period: { end: null, start: "2020-12" },
      url: "https://uni-helper.js.org/",
    },
  ],
  roles: [
    {
      description: "我构建网页端、桌面端、移动端和小程序应用。",
      icon: "carbon:laptop",
      label: "前端工程师",
    },
    {
      description: "我喜欢设计具有挑战性的技术解决方案和产品。",
      icon: "carbon:chart-network",
      label: "架构设计",
    },
    {
      description: "我通过展示最佳实践来帮助初级开发人员进阶。",
      icon: "heroicons:academic-cap",
      label: "技术主管与指导",
    },
  ],
  sectionTitles: {
    certificate: "资格证书",
    education: "教育经历",
    projects: "业余项目",
    roles: "角色",
    tools: "主要工具",
    values: "价值观",
    work: "工作经历",
  },
  tools: [
    { icon: "logos:typescript-icon", label: "TypeScript" },
    { icon: "logos:react", label: "React" },
    { icon: "logos:vue", label: "Vue" },
    { icon: "logos:tailwindcss-icon", label: "Tailwind CSS" },
  ],
  values: [
    {
      description: "我能承担复杂任务并高度专注地完成工作。",
      icon: "heroicons:user",
      label: "自我驱动",
    },
    {
      description: "我很关注细节并尝试提供最佳解决方案。",
      icon: "ph:target",
      label: "高要求",
    },
    {
      description: "我很重视充满信任、诚实和友善的工作空间。",
      icon: "heroicons:heart",
      label: "健康关系",
    },
    {
      description: "我相信协作努力和环境支持有助于实现目标。",
      icon: "heroicons:users",
      label: "团队精神",
    },
    {
      description: "我根据具体情况使用有效方式积极沟通。",
      icon: "heroicons:chat-bubble-left-right",
      label: "积极沟通",
    },
  ],
};
