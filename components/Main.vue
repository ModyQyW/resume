<script setup lang="ts">
import { differenceInYears, setYear, setMonth } from "date-fns";
import { toZonedTime } from "date-fns-tz";

defineOptions({
  name: "Main",
});

const { locale, t } = useI18n();

const years = differenceInYears(
  toZonedTime(new Date(), "Asia/Shanghai"),
  toZonedTime(setMonth(setYear(new Date(), 2019), 0), "Asia/Shanghai")
);

const links = computed(() => [
  {
    description: t("base.website"),
    icon: "i-heroicons-home",
    link: "https://modyqyw.top",
  },
  {
    description: t("base.github"),
    icon: "i-simple-icons-github",
    link: "https://github.com/ModyQyW",
  },
  {
    description: t("base.email"),
    icon: "i-heroicons-envelope",
    text: t("base.emailAddress"),
    link: `mailto:${t("base.emailAddress")}`,
  },
  {
    description: t("base.contact"),
    icon: "i-heroicons-phone",
    text: t("base.phoneNumber"),
    link: `tel:${t("base.phoneNumber")}`,
  },
]);

const tools = computed(() => [
  {
    icon: "i-logos-typescript-icon",
    text: "TypeScript",
  },
  {
    icon: "i-logos-react",
    text: "React.js",
  },
  {
    icon: "i-logos-vue",
    text: "Vue.js",
  },
  {
    icon: "i-logos-tailwindcss-icon",
    text: "TailwindCSS",
  },
]);

const roles = computed(() => [
  {
    description: t("philosophy.frontendEngineerDescription"),
    icon: "i-carbon-laptop",
    text: t("philosophy.frontendEngineer"),
  },
  {
    description: t("philosophy.architectureDesignDescription"),
    icon: "i-carbon-chart-network",
    text: t("philosophy.architectureDesign"),
  },
  {
    description: t("philosophy.techLeadAndMentoringDescription"),
    icon: "i-heroicons-academic-cap",
    text: t("philosophy.techLeadAndMentoring"),
  },
]);

const values = computed(() => [
  {
    description: t("philosophy.autonomyDescription"),
    icon: "i-heroicons-user",
    text: t("philosophy.autonomy"),
  },
  {
    description: t("philosophy.highLevelOfRequirementDescription"),
    icon: "i-ph-target",
    text: t("philosophy.highLevelOfRequirement"),
  },
  {
    description: t("philosophy.healthyRelationshipsDescription"),
    icon: "i-heroicons-heart",
    text: t("philosophy.healthyRelationships"),
  },
  {
    description: t("philosophy.teamSpiritDescription"),
    icon: "i-heroicons-users",
    text: t("philosophy.teamSpirit"),
  },
  {
    description: t("philosophy.activeCommunicationDescription"),
    icon: "i-heroicons-chat-bubble-left-right",
    text: t("philosophy.activeCommunication"),
  },
]);
</script>

<template>
  <main class="mt-4 flex flex-col gap-4">
    <!-- BASE -->
    <section class="flex items-center justify-between gap-8 md:gap-24">
      <div class="flex flex-col gap-y-1.5">
        <h1 class="text-2xl font-bold">
          {{ $t("base.name") }} - {{ $t("base.title") }}
        </h1>
        <p>{{ $t("base.intro", years) }}</p>
        <div class="flex gap-1.5 print:hidden">
          <UTooltip v-for="l of links" :key="l.link" :text="l.description">
            <UButton
              :icon="l.icon"
              color="gray"
              variant="solid"
              :to="l.link"
              target="_blank"
              size="xs"
            ></UButton>
          </UTooltip>
        </div>
      </div>
      <div class="hidden print:flex flex-col gap-y-1.5 mt-8">
        <div
          v-for="l of links"
          :key="l.link"
          class="flex gap-1.5 items-center text-sm"
        >
          <UIcon :name="l.icon"></UIcon>
          <span>{{ l.text || l.link }}</span>
        </div>
      </div>
      <div class="size-16 flex-none size-24 print:size-24">
        <NuxtImg
          src="/wurui.jpg"
          alt="Rui Wu"
          class="rounded-full drop-shadow-lg"
        />
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section
      class="flex gap-4 *:flex-initial *:basis-1/3 [&>div>h2]:text-xl [&>div>h2]:font-bold [&>div>h2]:mb-2 [&>div>div]:flex [&>div>div]:print:hidden [&>div>div]:flex-wrap [&>div>div]:gap-2 [&>div>ul]:hidden [&>div>ul]:print:block [&>div>ul]:list-disc [&>div>ul]:ml-4 [&>div>ul]:text-sm"
    >
      <!-- MAIN TOOLS -->
      <div>
        <h2>{{ $t("philosophy.mainTools") }}</h2>
        <div>
          <UBadge
            color="gray"
            variant="solid"
            size="xs"
            v-for="t of tools"
            :key="t.text"
            class="cursor-default"
          >
            <UIcon :name="t.icon" class="mr-1 size-3 shrink-0"></UIcon>
            <span>{{ t.text }}</span>
          </UBadge>
        </div>
        <ul>
          <li v-for="t of tools" :key="t.text">
            <UIcon :name="t.icon" class="mr-1 size-3 shrink-0"></UIcon>
            <span>{{ t.text }}</span>
          </li>
        </ul>
      </div>
      <!-- ROLES -->
      <div>
        <h2>{{ $t("philosophy.roles") }}</h2>
        <div>
          <UTooltip v-for="r of roles" :key="r.text" :text="r.description">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon :name="r.icon" class="mr-1 size-3 shrink-0"></UIcon>
              <span>{{ r.text }}</span>
            </UBadge>
          </UTooltip>
        </div>
        <ul>
          <li v-for="r of roles" :key="r.text">
            <UIcon :name="r.icon" class="mr-1 size-3 shrink-0"></UIcon>
            <span>{{ r.text }}：{{ r.description }}</span>
          </li>
        </ul>
      </div>
      <!-- VALUES -->
      <div>
        <h2>{{ $t("philosophy.values") }}</h2>
        <div>
          <UTooltip v-for="v of values" :key="v.text" :text="v.description">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon :name="v.icon" class="mr-1 size-3"></UIcon>
              {{ v.text }}
            </UBadge>
          </UTooltip>
        </div>
        <ul>
          <li v-for="v of values" :key="v.text">
            <UIcon :name="v.icon" class="mr-1 size-3"></UIcon>
            <span>{{ v.text }}：{{ v.description }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- WORK EXPERIENCE -->
    <section
      class="[&>section]:my-2 [&>section]:flex [&>section]:gap-4 [&>section>a]:size-8 [&>section>a]:shrink-0 [&>section>a]:basis-8 [&>section>div:nth-of-type(1)]:text-sm [&>section>div:nth-of-type(1)]:flex-auto [&>section>div:nth-of-type(1)>a]:text-lg [&>section>div:nth-of-type(1)>a]:font-medium [&>section>div:nth-of-type(1)>a]:text-left [&>section>div:nth-of-type(1)>p:nth-of-type(2)]:text-gray-600 dark:[&>section>div:nth-of-type(1)>p:nth-of-type(2)]:text-gray-400 [&>section>div:nth-of-type(1)>ol]:list-decimal [&>section>div:nth-of-type(1)>ol]:ml-4 [&>section>div:nth-of-type(1)>ol>li>ul]:list-disc [&>section>div:nth-of-type(1)>ol>li>ul]:ml-4 [&>section>div:nth-of-type(1)>ol>li:last-of-type]:hidden [&>section>div:nth-of-type(1)>ol>li:last-of-type]:print:list-item [&>section>div:nth-of-type(1)>ol]:text-gray-600 dark:[&>section>div>ol]:text-gray-400 [&>section>div:nth-of-type(2)]:print:hidden [&>section>div:nth-of-type(2)]:flex [&>section>div:nth-of-type(2)]:flex-wrap [&>section>div:nth-of-type(2)]:gap-2 [&>section>div:nth-of-type(2)]:shrink-0 [&>section>div:nth-of-type(2)]:basis-16 md:[&>section>div:nth-of-type(2)]:basis-24 [&>section>div:nth-of-type(2)]:content-start [&>section>div:nth-of-type(2)>*]:size-4"
    >
      <h2 class="text-xl font-bold">{{ $t("workExperience.title") }}</h2>
      <section>
        <ULink to="https://www.millcloud.cn/" target="_blank">
          <NuxtImg src="/millcloud.png" alt="MillCloud LOGO" />
        </ULink>
        <div>
          <ULink to="https://www.millcloud.cn/" target="_blank">
            {{ $t("workExperience.millcloud") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>前端负责人</p>
            <p>2021-07 至今</p>
            <ol>
              <li>
                团队领导与项目管理
                <ul>
                  <li>
                    领导并管理一支 5
                    人技术团队，负责跨平台教育项目的开发和维护，包括网页、桌面应用、移动应用、小程序等。
                  </li>
                  <li>
                    通过需求沟通与分析、任务拆解和安排，确保项目按时交付且满足客户的信息化需求。
                  </li>
                </ul>
              </li>
              <li>
                技术方案与架构设计
                <ul>
                  <li>
                    负责前端架构设计和优化，确保系统的可扩展性和可维护性。
                  </li>
                  <li>
                    设计并实施技术方案，包括从零开始构建和基于低代码平台的快速开发。
                  </li>
                </ul>
              </li>
              <li>
                技术攻坚与创新
                <ul>
                  <li>
                    引入约定大于配置的设计范式、服务端状态管理思想、JSON Schema
                    表单和表格等，提升开发体验。
                  </li>
                  <li>
                    针对业务重难点（如请求和状态混乱、模块耦合严重、页面加载缓慢等）进行技术攻坚，提升项目性能和用户体验。
                  </li>
                </ul>
              </li>
              <li>
                项目优化与流程改进
                <ul>
                  <li>主导历史项目的升级，优化架构，提升系统性能。</li>
                  <li>
                    实施研发流程改进，包括引入单元测试、CI/CD、监控等，显著提升项目性能和团队效率。
                  </li>
                  <li>
                    优化项目编译和启动时间约 21%，优化项目构建产物体积约
                    18%，优化云服务器实例流出流量约 19%。
                  </li>
                </ul>
              </li>
              <li>
                广东教学研究数字化智慧平台研发
                <ul>
                  <li>
                    基于 JVS
                    企业信息化底座，通过低代码、无代码、全代码等开发方式，构建支撑高水平教研活动、教研队伍及课程教学的教育教学研究数字化平台。
                  </li>
                  <li>
                    针对 JVS
                    前端代码进行二次开发，引入前端工程化，重构部分代码，扩展低代码功能，优化交互体验。
                  </li>
                  <li>
                    平台面向全省，对接多个线上系统，推动教育教学研究的数字化、智能化、信息化。
                  </li>
                </ul>
              </li>
              <li>
                涉及技术栈
                <ul>
                  <li>JavaScript、TypeScript、CSS、SCSS 等基本技术</li>
                  <li>React、Ant Design、Material UI、Taro 等 React 生态</li>
                  <li>
                    Vue、Element Plus、Naive UI、uni-app、uni-helper 等 Vue 生态
                  </li>
                  <li>TailwindCSS、UnoCSS 等原子化 CSS 生态</li>
                  <li>
                    Electron、Rollup、Vite、Vitest、Azure DevOps、GitHub
                    等前端工程化工具
                  </li>
                  <li>Koa、Nest、Hono 等 Node.js 后端生态</li>
                </ul>
              </li>
            </ol>
          </template>
          <template v-else>
            <p>Front-end Lead</p>
            <p>07/2021 - present</p>
            <ol>
              <li>
                Team Leadership and Project Management
                <ul>
                  <li>
                    Lead and manage a 5-member technical team responsible for
                    the development and maintenance of cross-platform education
                    projects, including web pages, desktop applications, mobile
                    applications, and mini-programs.
                  </li>
                  <li>
                    Ensure projects are delivered on time and meet client's IT
                    needs through requirements communication and analysis, task
                    disassembly and scheduling.
                  </li>
                </ul>
              </li>
              <li>
                Technical program and architecture design
                <ul>
                  <li>
                    Responsible for front-end architecture design and
                    optimization to ensure system scalability and
                    maintainability.
                  </li>
                  <li>
                    Design and implement technical solutions, including building
                    from scratch and rapid development based on low-code
                    platforms.
                  </li>
                </ul>
              </li>
              <li>
                Technical Tackling and Innovation
                <ul>
                  <li>
                    Introduce the design paradigm of convention over
                    configuration, server-side state management ideas, JSON
                    Schema forms and tables, etc., to enhance the development
                    experience.
                  </li>
                  <li>
                    Technical attacks on business difficulties (confusing
                    requests and states, serious module coupling, slow page
                    loading, etc.) to improve project performance and user
                    experience.
                  </li>
                </ul>
              </li>
              <li>
                Project optimization and process improvement
                <ul>
                  <li>
                    Lead the upgrade of historical projects, optimize
                    architecture, and improve system performance.
                  </li>
                  <li>
                    Implemented R&D process improvements, including the
                    introduction of unit testing, CI/CD, monitoring, etc. to
                    significantly improve project performance and team
                    efficiency.
                  </li>
                  <li>
                    Optimized project compilation and startup time by about 21%,
                    optimized project build product volume by about 18%, and
                    optimized cloud server instance outflow traffic by about
                    19%.
                  </li>
                </ul>
              </li>
              <li>
                Guangdong Teaching Research Digital Intelligence Platform
                Development
                <ul>
                  <li>
                    Based on the JVS enterprise informatization base, we
                    constructed a digital platform for education and teaching
                    research that supports high-level teaching and research
                    activities, teaching and research teams, and curriculum
                    teaching through low-code, no-code, and full-code
                    development methods.
                  </li>
                  <li>
                    Secondary development for JVS front-end code, introduction
                    of front-end engineering, refactoring of part of the code,
                    expansion of low-code functions, and optimization of
                    interactive experience.
                  </li>
                  <li>
                    The platform is oriented to the whole province, docking with
                    multiple online systems to promote the digitalization,
                    intelligence and informatization of education teaching
                    research.
                  </li>
                </ul>
              </li>
              <li>
                Technology Stack Involved
                <ul>
                  <li>
                    JavaScript, TypeScript, CSS, SCSS and other basic
                    technologies.
                  </li>
                  <li>
                    React, Ant Design, Material UI, Taro and other React
                    ecosystems.
                  </li>
                  <li>
                    Vue, Element Plus, Naive UI, uni-app, uni-helper and other
                    Vue ecosystems.
                  </li>
                  <li>
                    Atomized CSS ecosystems such as TailwindCSS, UnoCSS, etc.
                  </li>
                  <li>
                    Front-end engineering tools such as Electron, Rollup, Vite,
                    Vitest, Azure DevOps, GitHub, etc.
                  </li>
                  <li>
                    Node.js backend ecosystems such as Koa, Nest, Hono, etc.
                  </li>
                </ul>
              </li>
            </ol>
          </template>
        </div>
        <div>
          <UTooltip text="JavaScript">
            <UIcon name="i-logos-javascript" />
          </UTooltip>
          <UTooltip text="TypeScript">
            <UIcon name="i-logos-typescript-icon" />
          </UTooltip>
          <UTooltip text="React.js">
            <UIcon name="i-logos-react" />
          </UTooltip>
          <UTooltip text="Ant Design">
            <UIcon name="i-logos-ant-design" />
          </UTooltip>
          <UTooltip text="Material UI">
            <UIcon name="i-logos-material-ui" />
          </UTooltip>
          <UTooltip text="Taro">
            <UIcon name="i-custom-taro" />
          </UTooltip>
          <UTooltip text="Solid.js">
            <UIcon name="i-logos-solidjs-icon" />
          </UTooltip>
          <UTooltip text="Vue.js">
            <UIcon name="i-logos-vue" />
          </UTooltip>
          <UTooltip text="Element Plus">
            <UIcon name="i-logos-element" />
          </UTooltip>
          <UTooltip text="Naive UI">
            <UIcon name="i-logos-naiveui" />
          </UTooltip>
          <UTooltip text="uni-app">
            <UIcon name="i-custom-uni-app" />
          </UTooltip>
          <UTooltip text="uni-helper">
            <UIcon name="i-custom-uni-helper" />
          </UTooltip>
          <UTooltip text="TailwindCSS">
            <UIcon name="i-logos-tailwindcss-icon" />
          </UTooltip>
          <UTooltip text="UnoCSS">
            <UIcon name="i-logos-unocss" />
          </UTooltip>
          <UTooltip text="Electron">
            <UIcon name="i-logos-electron" />
          </UTooltip>
          <UTooltip text="Rollup">
            <UIcon name="i-logos-rollup" />
          </UTooltip>
          <UTooltip text="Vite">
            <UIcon name="i-logos-vitejs" />
          </UTooltip>
          <UTooltip text="Vitest">
            <UIcon name="i-logos-vitest" />
          </UTooltip>
          <UTooltip text="Koa">
            <UIcon name="i-logos-koa" />
          </UTooltip>
          <UTooltip text="Nest.js">
            <UIcon name="i-logos-nestjs" />
          </UTooltip>
          <UTooltip text="Hono">
            <UIcon name="i-logos-hono" />
          </UTooltip>
          <UTooltip text="Azure DevOps">
            <UIcon name="i-devicon-azuredevops" />
          </UTooltip>
          <UTooltip text="GitHub">
            <UIcon name="i-simple-icons-github" />
          </UTooltip>
        </div>
      </section>
      <section>
        <ULink to="https://globus-china.com/" target="_blank">
          <NuxtImg src="/globus.svg" alt="Globus LOGO" />
        </ULink>
        <div>
          <ULink to="https://globus-china.com/" target="_blank">
            {{ $t("workExperience.globus") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>全栈工程师</p>
            <p>2021-05 ~ 2021-07</p>
            <ol>
              <li>
                系统功能开发
                <ul>
                  <li>
                    实施内部 ERP 系统验货流程记录和 PDF
                    文件在线预览功能，提升了业务处理的效率和用户体验。
                  </li>
                </ul>
              </li>
              <li>
                技术架构迁移与升级
                <ul>
                  <li>
                    负责调研将传统 Express 后端服务迁移到 Serverless Framework
                    的可行性及方案，预期利用 AWS
                    无服务器计算服务，实现系统高可用性和伸缩性并降低运维成本。
                  </li>
                </ul>
              </li>
              <li>
                涉及技术栈
                <ul>
                  <li>JavaScript、TypeScript、CSS 等基本技术</li>
                  <li>React、Next、Ant Design 等 React 生态</li>
                  <li>TailwindCSS 等原子化 CSS 生态</li>
                  <li>Webpack、Vite、GitHub 等前端工程化工具</li>
                  <li>Express、Serverless Framework 等 Node.js 后端生态</li>
                </ul>
              </li>
            </ol>
          </template>
          <template v-else>
            <p>Fullstack Engineer</p>
            <p>05/2021 - 07/2021</p>
            <ol>
              <li>
                System functionality development
                <ul>
                  <li>
                    Implemented the internal ERP system to record the inspection
                    process and the online preview function of PDF files, which
                    enhanced the efficiency of business processing and user
                    experience.
                  </li>
                </ul>
              </li>
              <li>
                Technical Architecture Migration and Upgrade
                <ul>
                  <li>
                    Responsible for investigating the feasibility of migrating
                    traditional Express back-end services to Serverless
                    Framework, and expected to utilize AWS serverless computing
                    services to achieve high availability and scalability of the
                    system and reduce operation and maintenance costs.
                  </li>
                </ul>
              </li>
              <li>
                Technology Stack Involved
                <ul>
                  <li>
                    JavaScript, TypeScript, CSS and other basic technologies.
                  </li>
                  <li>React ecosystem such as React, Next, Ant Design, etc.</li>
                  <li>TailwindCSS and other atomized CSS ecosystems.</li>
                  <li>
                    Front-end engineering tools such as Webpack, Vite, GitHub,
                    etc.
                  </li>
                  <li>
                    Node.js backend ecosystems such as Express, Serverless
                    Framework, etc.
                  </li>
                </ul>
              </li>
            </ol>
          </template>
        </div>
        <div>
          <UTooltip text="JavaScript">
            <UIcon name="i-logos-javascript" />
          </UTooltip>
          <UTooltip text="TypeScript">
            <UIcon name="i-logos-typescript-icon" />
          </UTooltip>
          <UTooltip text="React.js">
            <UIcon name="i-logos-react" />
          </UTooltip>
          <UTooltip text="Next.js">
            <UIcon name="i-logos-nextjs-icon" />
          </UTooltip>
          <UTooltip text="Ant Design">
            <UIcon name="i-logos-ant-design" />
          </UTooltip>
          <UTooltip text="TailwindCSS">
            <UIcon name="i-logos-tailwindcss-icon" />
          </UTooltip>
          <UTooltip text="Webpack">
            <UIcon name="i-logos-webpack" />
          </UTooltip>
          <UTooltip text="Vite">
            <UIcon name="i-logos-vitejs" />
          </UTooltip>
          <UTooltip text="Express.js">
            <UIcon name="i-logos-express" />
          </UTooltip>
          <UTooltip text="Serverless Framework">
            <UIcon name="i-logos-serverless" />
          </UTooltip>
          <UTooltip text="GitHub">
            <UIcon name="i-simple-icons-github" />
          </UTooltip>
        </div>
      </section>
      <section>
        <ULink to="https://www.millcloud.cn/" target="_blank">
          <NuxtImg src="/millcloud.png" alt="MillCloud LOGO" />
        </ULink>
        <div>
          <ULink to="https://www.millcloud.cn/" target="_blank">
            {{ $t("workExperience.millcloud") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>前端工程师</p>
            <p>2019-06 ~ 2021-04</p>
            <ol>
              <li>
                旧项目接管与优化
                <ul>
                  <li>
                    成功接管并重构了遗留项目，统一技术栈，确保了跨平台兼容性和代码的可维护性。
                  </li>
                </ul>
              </li>
              <li>
                连锁餐饮企业（都城快餐）技术解决方案
                <ul>
                  <li>
                    主导设计并实施了一套针对连锁餐饮企业都城快餐的技术解决方案，包括网站、小程序和移动应用，以支持客户、顾客、分店、员工及订单的后台管理和数据展示等。
                  </li>
                  <li>
                    项目稳定运行，每天有超过 5000
                    名用户使用小程序和移动应用，每月金额流水达到 1000
                    万元，有效推动数字化转型。
                  </li>
                </ul>
              </li>
              <li>
                在线教育资源库（MTU互动学习平台教学资源库）
                <ul>
                  <li>
                    主导从零开始设计并开发了一个类百度网盘的在线教育资源库（MTU互动学习平台教学资源库），实现教学资源在线制作管理、信息发布、教学交流、资源共享。
                  </li>
                  <li>
                    项目稳定运行，平台托管超过 100 门课程，访问量超过 100 万次。
                  </li>
                </ul>
              </li>
              <li>
                涉及技术栈
                <ul>
                  <li>JavaScript、TypeScript、CSS、SCSS 等基本技术</li>
                  <li>React、Ant Design、Material UI、Taro 等 React 生态</li>
                  <li>Vue、Element UI、uni-app、uni-helper 等 Vue 生态</li>
                  <li>TailwindCSS、UnoCSS 等原子化 CSS 生态</li>
                  <li>
                    Electron、Webpack、Azure DevOps、GitHub 等前端工程化工具
                  </li>
                </ul>
              </li>
            </ol>
          </template>
          <template v-else>
            <p>Front-end Engineer</p>
            <p>06/2019 - 04/2021</p>
            <ol>
              <li>
                Legacy project takeover and optimization
                <ul>
                  <li>
                    Successfully took over and refactored the legacy project,
                    unified the technology stack, and ensured cross-platform
                    compatibility and code maintainability.
                  </li>
                </ul>
              </li>
              <li>
                Technology solution for restaurant chain (Ducheng Fast Food)
                <ul>
                  <li>
                    Led the design and implementation of a set of technology
                    solutions for restaurant chain Capitol Express, including
                    website, applets and mobile apps, to support the backend
                    management and data display of clients, customers, outlets,
                    employees and orders.
                  </li>
                  <li>
                    The project is running stably, with more than 5,000 users
                    using the applets and mobile applications every day, and the
                    monthly amount of water flow has reached RMB 10 million,
                    effectively promoting digital transformation.
                  </li>
                </ul>
              </li>
              <li>
                Online Education Resource Library (MTU Interactive Learning
                Platform Teaching Resource Library)
                <ul>
                  <li>
                    Leading the design and development of a Baidu.com-like
                    online education resource library (MTU Interactive Learning
                    Platform Teaching Resource Library) from scratch, realizing
                    online production and management of teaching resources,
                    information dissemination, teaching exchanges, and resource
                    sharing.
                  </li>
                  <li>
                    The project is running stably, with more than 100 courses
                    hosted on the platform and more than 1 million visits.
                  </li>
                </ul>
              </li>
              <li>
                Technology Stacks Involved
                <ul>
                  <li>
                    JavaScript, TypeScript, CSS, SCSS and other basic
                    technologies.
                  </li>
                  <li>
                    React, Ant Design, Material UI, Taro and other React
                    ecosystems.
                  </li>
                  <li>
                    Vue, Element UI, uni-app, uni-helper and other Vue
                    ecosystems.
                  </li>
                  <li>
                    Atomized CSS ecosystems such as TailwindCSS, UnoCSS, etc.
                  </li>
                  <li>
                    Front-end engineering tools such as Electron, Webpack, Azure
                    DevOps, GitHub, and so on.
                  </li>
                </ul>
              </li>
            </ol>
          </template>
        </div>
        <div>
          <UTooltip text="JavaScript">
            <UIcon name="i-logos-javascript" />
          </UTooltip>
          <UTooltip text="TypeScript">
            <UIcon name="i-logos-typescript-icon" />
          </UTooltip>
          <UTooltip text="React.js">
            <UIcon name="i-logos-react" />
          </UTooltip>
          <UTooltip text="Ant Design">
            <UIcon name="i-logos-ant-design" />
          </UTooltip>
          <UTooltip text="Taro">
            <UIcon name="i-custom-taro" />
          </UTooltip>
          <UTooltip text="Vue.js">
            <UIcon name="i-logos-vue" />
          </UTooltip>
          <UTooltip text="Element UI">
            <UIcon name="i-logos-element" />
          </UTooltip>
          <UTooltip text="uni-app">
            <UIcon name="i-custom-uni-app" />
          </UTooltip>
          <UTooltip text="uni-helper">
            <UIcon name="i-custom-uni-helper" />
          </UTooltip>
          <UTooltip text="TailwindCSS">
            <UIcon name="i-logos-tailwindcss-icon" />
          </UTooltip>
          <UTooltip text="Electron">
            <UIcon name="i-logos-electron" />
          </UTooltip>
          <UTooltip text="Webpack">
            <UIcon name="i-logos-webpack" />
          </UTooltip>
          <UTooltip text="Azure DevOps">
            <UIcon name="i-devicon-azuredevops" />
          </UTooltip>
          <UTooltip text="GitHub">
            <UIcon name="i-simple-icons-github" />
          </UTooltip>
        </div>
      </section>
    </section>

    <!-- PROJECT -->
    <section
      class="[&>section]:my-2 [&>section]:text-sm [&>section>a]:text-lg [&>section>a]:font-medium [&>section>p]:text-gray-600 dark:[&>section>p]:text-gray-400"
    >
      <h2 class="text-xl font-bold">{{ $t("projectExperience.title") }}</h2>
      <section>
        <ULink to="https://vite-plugin-eslint2.modyqyw.top/" target="_blank">
          vite-plugin-eslint2
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>2022-02 至今</p>
          <p>
            Vite ESLint 插件，允许 ESLint 校验代码质量。该插件周下载量达
            10k，支撑了上千个项目，被 Nuxt 官方模块（<ULink
              to="https://eslint.nuxt.com/"
              target="_blank"
              >@nuxt/eslint</ULink
            >）内置。
          </p>
        </template>
        <template v-else>
          <p>02/2022 - present</p>
          <p>
            ESLint plugin for Vite. The plugin has been downloaded 10k times a
            week, supports thousands of projects, and is built into the official
            Nuxt module (<ULink to="https://eslint.nuxt.com/" target="_blank"
              >@nuxt/eslint</ULink
            >).
          </p>
        </template>
      </section>
      <section>
        <ULink
          to="https://github.com/ModyQyW/vite-plugin-stylelint"
          target="_blank"
        >
          vite-plugin-stylelint
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>2021-08 至今</p>
          <p>
            Vite Stylelint 插件，允许 Stylelint 校验代码质量。该插件周下载量达
            36k，支撑了上千个项目，被 Nuxt 官方模块（<ULink
              to="https://github.com/nuxt-modules/stylelint"
              target="_blank"
              >@nuxtjs/stylelint-module</ULink
            >）内置。
          </p>
        </template>
        <template v-else>
          <p>08/2021 - present</p>
          <p>
            Stylelint plugin for Vite. The plugin has been downloaded 36k times
            a week, supports thousands of projects, and is built into the
            official Nuxt module (<ULink
              to="https://github.com/nuxt-modules/stylelint"
              target="_blank"
              >@nuxtjs/stylelint-module</ULink
            >).
          </p>
        </template>
      </section>
      <section>
        <ULink to="https://fabric.modyqyw.top" target="_blank">
          @modyqyw/fabric
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>2020-10 至今</p>
          <p>
            开箱即用的共享规范，适用于不同的 JavaScript / TypeScript
            项目。该项目支撑了十多个公司项目和十多个个人项目。
          </p>
        </template>
        <template v-else>
          <p>10/2020 - present</p>
          <p>
            Opinionated shareable specification for different
            JavaScript/TypeScript projects. The project has supported 10+
            company projects and 10+ personal projects.
          </p>
        </template>
      </section>
      <section>
        <ULink
          to="https://github.com/ModyQyW/tailwind-extensions"
          target="_blank"
        >
          tailwind-extensions
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>2022-04 至今</p>
          <p>
            开箱即用的 TailwindCSS v3 扩展，方便与组件库结合使用，提升开发效率。
          </p>
        </template>
        <template v-else>
          <p>04/2022 - present</p>
          <p>
            Opinionated TailwindCSS v3 extensions. Easily integrate with
            component libraries.
          </p>
        </template>
      </section>
      <section>
        <ULink to="https://uni-helper.js.org/" target="_blank">
          uni-helper
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>2020-12 至今</p>
          <p>
            增强 uni-app 系列产品的开发体验。该项目提供了 VS Code、TypeScript 和
            npm 生态相关的集成支持，支撑了上千个 uni-app 项目。
          </p>
        </template>
        <template v-else>
          <p>12/2020 - present</p>
          <p>
            Enhance the development experience of the uni-app family of
            products. The project provides integrated support for VS Code,
            TypeScript, and the npm ecosystem, supporting thousands of uni-app
            projects.
          </p>
        </template>
      </section>
    </section>

    <!-- QUALIFICATION CERTIFICATE -->
    <section
      class="[&>section]:my-2 [&>section]:text-sm [&>section>a]:text-lg [&>section>a]:font-medium"
    >
      <h2 class="text-xl font-bold">
        {{ $t("qualificationCertificate.title") }}
      </h2>
      <section>
        <ul class="list-disc ml-4">
          <li>
            {{
              $t(
                "qualificationCertificate.systemIntegrationProjectManagementEngineer"
              )
            }}
          </li>
        </ul>
      </section>
    </section>

    <!-- EDUCATION -->
    <section
      class="[&>section]:my-2 [&>section]:flex [&>section]:gap-4 [&>section>img]:size-8 [&>section>div]:text-sm [&>section>div>a]:text-lg [&>section>div>a]:font-medium [&>section>div>p:nth-of-type(2)]:text-gray-600 dark:[&>section>div>p:nth-of-type(2)]:text-gray-400"
    >
      <h2 class="text-xl font-bold">{{ $t("education.title") }}</h2>
      <section>
        <NuxtImg
          src="https://www.sysu.edu.cn/__local/C/8E/79/6236A91AEAFBB9F7F2C23A9F836_97F1F3B5_178FF.png?e=.png"
          alt="SYSU LOGO"
        />
        <div>
          <ULink to="https://www.sysu.edu.cn/" target="_blank">
            {{ $t("education.university") }}
          </ULink>
          <p>{{ $t("education.degree") }}</p>
          <p>{{ $t("education.dateTime") }}</p>
        </div>
      </section>
    </section>
  </main>
</template>
