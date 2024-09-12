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
    tooltip: t("base.website"),
    icon: "i-heroicons-home",
    link: "https://modyqyw.top",
  },
  {
    tooltip: t("base.github"),
    icon: "i-simple-icons-github",
    link: "https://github.com/ModyQyW",
  },
  {
    tooltip: t("base.email"),
    icon: "i-heroicons-envelope",
    link: `${t("base.emailAddress")}`,
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
  {
    icon: "i-logos-hono",
    text: "Hono",
  },
]);

const roles = computed(() => [
  {
    tooltip: t("philosophy.frontendEngineerTooltip"),
    icon: "i-carbon-laptop",
    text: t("philosophy.frontendEngineer"),
  },
  {
    tooltip: t("philosophy.architectureDesignTooltip"),
    icon: "i-carbon-chart-network",
    text: t("philosophy.architectureDesign"),
  },
  {
    tooltip: t("philosophy.techLeadAndMentoringTooltip"),
    icon: "i-heroicons-academic-cap",
    text: t("philosophy.techLeadAndMentoring"),
  },
]);

const values = computed(() => [
  {
    tooltip: t("philosophy.autonomyTooltip"),
    icon: "i-heroicons-user",
    text: t("philosophy.autonomy"),
  },
  {
    tooltip: t("philosophy.highLevelOfRequirementTooltip"),
    icon: "i-ph-target",
    text: t("philosophy.highLevelOfRequirement"),
  },
  {
    tooltip: t("philosophy.healthyRelationshipsTooltip"),
    icon: "i-heroicons-heart",
    text: t("philosophy.healthyRelationships"),
  },
  {
    tooltip: t("philosophy.teamSpiritTooltip"),
    icon: "i-heroicons-users",
    text: t("philosophy.teamSpirit"),
  },
  {
    tooltip: t("philosophy.activeCommunicationTooltip"),
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
        <div class="flex items-center gap-1 text-xs">
          <UIcon name="i-heroicons-map-pin" class="size-4 shrink-0" />
          <span>{{ $t("base.position") }}</span>
        </div>
        <div class="flex gap-1.5 print:hidden">
          <UTooltip v-for="l of links" :key="l.link" :text="l.tooltip">
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
          <span>{{ l.link }}</span>
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
      class="flex gap-4 *:flex-initial *:basis-1/3 [&>div>h2]:text-xl [&>div>h2]:font-bold [&>div>h2]:mb-2 [&>div>div]:flex [&>div>div]:flex-wrap [&>div>div]:gap-2"
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
      </div>
      <!-- ROLES -->
      <div>
        <h2>{{ $t("philosophy.roles") }}</h2>
        <div>
          <UTooltip v-for="r of roles" :key="r.text" :text="r.tooltip">
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
      </div>
      <!-- VALUES -->
      <div>
        <h2>{{ $t("philosophy.values") }}</h2>
        <div>
          <UTooltip v-for="v of values" :key="v.text" :text="v.tooltip">
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
      </div>
    </section>

    <!-- WORK EXPERIENCE -->
    <section
      class="[&>section]:my-2 [&>section]:flex [&>section]:gap-4 [&>section>img]:size-8 [&>section>img]:shrink-0 [&>section>img]:basis-8 [&>section>div:nth-of-type(1)]:text-sm [&>section>div:nth-of-type(1)]:flex-auto [&>section>div:nth-of-type(1)>a]:text-lg [&>section>div:nth-of-type(1)>a]:font-medium [&>section>div:nth-of-type(1)>a]:text-left [&>section>div:nth-of-type(1)>p:nth-of-type(2)]:text-gray-600 dark:[&>section>div:nth-of-type(1)>p:nth-of-type(2)]:text-gray-400 [&>section>div:nth-of-type(1)>ul]:list-disc [&>section>div:nth-of-type(1)>ul]:ml-4 [&>section>div:nth-of-type(1)>ul]:text-gray-600 dark:[&>section>div>ul]:text-gray-400 [&>section>div:nth-of-type(2)]:flex [&>section>div:nth-of-type(2)]:flex-wrap [&>section>div:nth-of-type(2)]:gap-2 [&>section>div:nth-of-type(2)]:shrink-0 [&>section>div:nth-of-type(2)]:basis-16 md:[&>section>div:nth-of-type(2)]:basis-24 [&>section>div:nth-of-type(2)]:content-start [&>section>div:nth-of-type(2)>*]:size-4"
    >
      <h2 class="text-xl font-bold">{{ $t("workExperience.title") }}</h2>
      <section>
        <NuxtImg src="https://www.millcloud.cn/logo.ico" alt="MillCloud LOGO" />
        <div>
          <ULink to="https://www.millcloud.cn/" target="_blank">
            {{ $t("workExperience.millcloud") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>前端负责人</p>
            <p>2021-07 至今</p>
            <ul>
              <li>
                负责团队沟通和协作、需求沟通与分析、任务拆解和安排、前端架构设计、前端组件抽象扩展、业务重难点攻坚等。
              </li>
              <li>
                管理 5
                人小团队，深度参与多个教育类项目，既有从头设计与实现部分项目的技术方案，也有基于低代码平台框架实现部分项目，包括网页、桌面应用、移动应用、小程序等，满足高校和教研院等对于信息化、研修、教研、校内宣传、学生管理、课程管理等实际需求。
              </li>
              <li>
                主导升级历史项目，优化项目架构，确立研发与文档规范、引入单元测试、引入
                CI/CD、引入监控等，优化项目编译和启动时间约
                21%，优化项目构建产物体积约 18%，优化云服务器实例流出流量约
                19%。
              </li>
            </ul>
          </template>
          <template v-else>
            <p>Front-end Lead</p>
            <p>07/2021 - present</p>
            <ul>
              <li>
                I am responsible for team communication and collaboration,
                requirement communication and analysis, task disassembly and
                scheduling, front-end architecture design, front-end component
                abstraction and extension, and business critical point
                overcoming.
              </li>
              <li>
                I managed a small team of 5 people, and have been deeply
                involved in many education projects, including designing and
                implementing some projects from scratch, as well as implementing
                some projects based on low-code platform frameworks, including
                web pages, desktop apps, mobile apps, applets, etc., to meet the
                practical needs of colleges and universities for
                informatization, training, teaching and research, on-campus
                publicity, student management, and course management.
              </li>
              <li>
                I took the lead in upgrading historical projects, optimizing
                project architecture, establishing R&D and documentation
                specifications, introducing unit testing, CI/CD, monitoring,
                etc., which optimized the project compilation and startup time
                by about 21%, the volume of the project build product by about
                18%, and the outgoing traffic of the cloud server instance by
                about 19%.
              </li>
            </ul>
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
        <NuxtImg src="https://globus-china.com/favicon.svg" alt="Globus LOGO" />
        <div>
          <ULink to="https://globus-china.com/" target="_blank">
            {{ $t("workExperience.globus") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>全栈工程师</p>
            <p>2021-05 ~ 2021-07</p>
            <ul>
              <li>参与到内部外贸管理系统研发，包括验货、PDF预览等功能研发。</li>
              <li>
                调研现有 Express.js 后端服务迁移到 Serverless Framework 和 AWS
                的可行性并设计方案。
              </li>
            </ul>
          </template>
          <template v-else>
            <p>Fullstack Engineer</p>
            <p>05/2021 - 07/2021</p>
            <ul>
              <li>
                I was involved in the development of an internal foreign trade
                management system, including the development of features such as
                goods inspection and PDF preview.
              </li>
              <li>
                I investigated the feasibility of migrating existing Express.js
                backend services to Serverless Framework and AWS and designed
                the solution.
              </li>
            </ul>
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
        <NuxtImg src="https://www.millcloud.cn/logo.ico" alt="MillCloud LOGO" />
        <div>
          <ULink
            to="https://www.millcloud.cn/"
            target="_blank"
            class="font-medium"
          >
            {{ $t("workExperience.millcloud") }}
          </ULink>
          <template v-if="locale === 'zh-CN'">
            <p>前端工程师</p>
            <p>2019-06 ~ 2021-04</p>
            <ul>
              <li>接手旧项目并加以改进，规范化技术栈、兼容性适配等方面。</li>
              <li>
                深度参与餐饮类项目，从头设计并实现相关的网站、小程序和移动端应用的技术方案，用于后台管理客户、菜单和订单，用户下单、支付、取餐等。每天有
                5000 或以上用户使用小程序和移动端应用，每月金额流水达到 1000
                万元。
              </li>
              <li>
                深度参与教育类项目，从头设计并实现类百度网盘的共享文件库的技术方案，为高校、企业等在线教育需求提供使用平台。平台目前托管了
                100 多门课程，被访问 100 多万次。
              </li>
              <li>协助评估招聘新的开发人员。</li>
            </ul>
          </template>
          <template v-else>
            <p>Front-end Engineer</p>
            <p>06/2019 - 04/2021</p>
            <ul>
              <li>
                I take over old projects and improve them, normalizing the tech
                stack, compatibility adaptations, and other aspects.
              </li>
              <li>
                I was deeply involved in a restaurant project, designing and
                implementing from scratch the technical solution for the related
                website, mini programs and mobile apps for management of
                customers, menus and orders, as well as for users to place, pay
                and pick up orders. Every day, 5000 or more users use the app
                and mobile application, and the monthly amount of money flow
                reaches 10 million RMB.
              </li>
              <li>
                I am deeply involved in education projects, designing and
                realizing the technical solution of Baidu.com-like shared file
                library from scratch, providing a platform for colleges,
                universities, enterprises and other online education needs. The
                platform currently hosts over 100 courses and has been visited
                over 1 million times.
              </li>
              <li>I help evaluate hiring new developers.</li>
            </ul>
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
          <UTooltip text="WePY">
            <UIcon name="i-custom-wepy" />
          </UTooltip>
          <UTooltip text="uni-app">
            <UIcon name="i-custom-uni-app" />
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
          <UTooltip text="Express.js">
            <UIcon name="i-logos-express" />
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
      class="[&>section]:my-2 [&>section]:text-sm [&>section>a]:text-lg [&>section>a]:font-medium"
    >
      <h2 class="text-xl font-bold">{{ $t("projectExperience.title") }}</h2>
      <section>
        <ULink to="https://vite-plugin-eslint2.modyqyw.top/" target="_blank">
          vite-plugin-eslint2
        </ULink>
        <template v-if="locale === 'zh-CN'">
          <p>
            Vite ESLint 插件。🌟被 Nuxt 官方模块（<ULink
              to="https://eslint.nuxt.com/"
              target="_blank"
              >@nuxt/eslint</ULink
            >）采纳使用。
          </p>
        </template>
        <template v-else>
          <p>
            ESLint plugin for Vite. 🌟 Adopted by Nuxt official module (<ULink
              to="https://eslint.nuxt.com/"
              target="_blank"
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
          <p>
            Vite Stylelint 插件。🌟被 Nuxt 官方模块（<ULink
              to="https://github.com/nuxt-modules/stylelint"
              target="_blank"
              >@nuxtjs/stylelint-module</ULink
            >）采纳使用。
          </p>
        </template>
        <template v-else>
          <p>
            Stylelint plugin for Vite. 🌟 Adopted by Nuxt official module
            (<ULink
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
          <p>开箱即用的共享规范，适用于不同的 JavaScript / TypeScript 项目。</p>
        </template>
        <template v-else>
          <p>
            Opinionated shareable specification for different
            JavaScript/TypeScript projects.
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
          <p>开箱即用的 TailwindCSS v3 扩展，方便与组件库结合使用。</p>
        </template>
        <template v-else>
          <p>
            Opinionated TailwindCSS v3 extensions. Easily integrate with
            component libraries.
          </p>
        </template>
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
