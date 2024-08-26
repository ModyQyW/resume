<script setup lang="ts">
import { differenceInYears, setYear, setMonth } from "date-fns";
import { toZonedTime } from "date-fns-tz";

defineOptions({
  name: "Main",
});

const { locale } = useI18n();

const years = differenceInYears(
  toZonedTime(new Date(), "Asia/Shanghai"),
  toZonedTime(setMonth(setYear(new Date(), 2019), 0), "Asia/Shanghai")
);
</script>

<template>
  <main class="mt-4 flex flex-col gap-4">
    <section class="flex items-center justify-between gap-8 md:gap-24">
      <div class="flex flex-col gap-y-1.5">
        <h1 class="text-2xl font-bold">{{ $t("name") }} - {{ $t("title") }}</h1>
        <p>{{ $t("baseInfo", years) }}</p>
        <div class="flex items-center gap-1 text-xs">
          <UIcon name="i-heroicons-map-pin" class="size-4 flex-shrink-0" />
          <span>{{ $t("position") }}</span>
        </div>
        <div class="flex gap-1.5 print:hidden">
          <UTooltip :text="$t('website')">
            <UButton
              icon="i-heroicons-home"
              color="gray"
              variant="solid"
              to="https://modyqyw.top"
              target="_blank"
              size="xs"
            ></UButton>
          </UTooltip>
          <UTooltip :text="$t('github')">
            <UButton
              icon="i-logos-github-icon"
              color="gray"
              variant="solid"
              to="https://github.com/ModyQyW"
              target="_blank"
              size="xs"
            ></UButton>
          </UTooltip>
          <UTooltip :text="$t('mail')">
            <UButton
              icon="i-heroicons-envelope"
              color="gray"
              variant="solid"
              :to="`mailto:${$t('email')}`"
              target="_blank"
              size="xs"
            ></UButton>
          </UTooltip>
        </div>
      </div>
      <div class="hidden print:flex flex-col gap-y-1.5 mt-8">
        <div class="flex gap-1.5 items-center text-sm">
          <UIcon name="i-heroicons-home"></UIcon>
          <span>https://modyqyw.top</span>
        </div>
        <div class="flex gap-1.5 items-center text-sm">
          <UIcon name="i-logos-github-icon"></UIcon>
          <span>https://github.com/ModyQyW</span>
        </div>
        <div class="flex gap-1.5 items-center text-sm">
          <UIcon name="i-heroicons-envelope"></UIcon>
          <span>{{ $t("email") }}</span>
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
    <section class="flex *:flex-initial *:basis-1/3 gap-4">
      <div>
        <h2 class="text-xl font-bold mb-2">{{ $t("mainTools") }}</h2>
        <div class="flex flex-wrap gap-2">
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-typescript-icon" class="mr-1 size-3"></UIcon>
            TypeScript
          </UBadge>
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-vue" class="mr-1 size-3"></UIcon>
            Vue.js
          </UBadge>
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-react" class="mr-1 size-3"></UIcon>
            React.js
          </UBadge>
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-tailwindcss-icon" class="mr-1 size-3"></UIcon>
            TailwindCSS
          </UBadge>
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-mongodb-icon" class="mr-1 size-3"></UIcon>
            MongoDB
          </UBadge>
          <UBadge color="gray" variant="solid" size="xs">
            <UIcon name="i-logos-hono" class="mr-1 size-3"></UIcon>
            Hono
          </UBadge>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">{{ $t("roles") }}</h2>
        <div class="flex flex-wrap gap-2">
          <UTooltip :text="$t('frontendEngineerTooltip')">
            <UBadge color="gray" variant="solid" size="xs">
              <UIcon name="i-carbon-laptop" class="mr-1 size-3"></UIcon>
              {{ $t("frontendEngineer") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('architectureDesignTooltip')">
            <UBadge color="gray" variant="solid" size="xs">
              <UIcon name="i-carbon-chart-network" class="mr-1 size-3"></UIcon>
              {{ $t("architectureDesign") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('techLeadAndMentoringTooltip')">
            <UBadge color="gray" variant="solid" size="xs">
              <UIcon
                name="i-heroicons-academic-cap"
                class="mr-1 size-3"
              ></UIcon>
              {{ $t("techLeadAndMentoring") }}
            </UBadge>
          </UTooltip>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">{{ $t("values") }}</h2>
        <div class="flex flex-wrap gap-2">
          <UTooltip :text="$t('autonomyTooltip')">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon name="i-heroicons-user" class="mr-1 size-3"></UIcon>
              {{ $t("autonomy") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('highLevelOfRequirementTooltip')">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon name="i-carbon-connect-target" class="mr-1 size-3"></UIcon>
              {{ $t("highLevelOfRequirement") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('healthyRelationshipsTooltip')">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon name="i-heroicons-heart" class="mr-1 size-3"></UIcon>
              {{ $t("healthyRelationships") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('teamSpiritTooltip')">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon name="i-heroicons-users" class="mr-1 size-3"></UIcon>
              {{ $t("teamSpirit") }}
            </UBadge>
          </UTooltip>
          <UTooltip :text="$t('activeCommunicationTooltip')">
            <UBadge
              color="gray"
              variant="solid"
              size="xs"
              class="cursor-default"
            >
              <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="mr-1 size-3"
              ></UIcon>
              {{ $t("activeCommunication") }}
            </UBadge>
          </UTooltip>
        </div>
      </div>
    </section>
    <section
      class="[&>section]:my-2 [&>section>div]:text-sm [&>section>div>ul]:list-disc [&>section>div>ul]:ml-4 [&>section>div>ul]:text-gray-900"
    >
      <h2 class="text-xl font-bold">{{ $t("workExperience") }}</h2>
      <section>
        <ULink
          href="https://www.millcloud.cn/"
          target="_blank"
          class="font-medium"
        >
          {{ $t("millcloud") }}
        </ULink>
        <div>
          <template v-if="locale === 'zh-CN'">
            <p>前端负责人</p>
            <p class="text-gray-500">2021-07 至今</p>
            <ul>
              <li>
                负责团队沟通和协作、需求沟通与分析、任务拆解和安排、前端架构设计、业务重难点攻坚等。
              </li>
              <li>
                管理 5
                人小团队，深度参与并从头设计与实现了多个教育类项目的技术方案，包括网页、桌面应用、移动应用、小程序等分发形式，满足高校等对于校内培训、校内宣传、成人教育管理、多校区协调分配等实际需求。
              </li>
              <li>
                主导升级历史项目，优化项目架构，补充单元测试和 TypeScript
                支持等以提前发现并处理编码错误，优化项目编译和启动时间约
                21%，优化项目构建产物体积约 18%，优化云服务器实例流出流量约
                19%。
              </li>
            </ul>
          </template>
          <template v-else>
            <p>Front-end Lead</p>
            <p class="text-gray-500">07/2021 - present</p>
            <ul>
              <li>
                Responsible for team communication and collaboration,
                requirement communication and analysis, task disassembly and
                scheduling, front-end architecture design, and attacking
                business technical difficulties.
              </li>
              <li>
                Managed a small team of 5 people, deeply involved in the design
                and implementation of several educational projects from the
                ground up, including web pages, desktop applications, mobile
                applications, applets and other forms of distribution, to meet
                the practical needs of colleges and universities for on-campus
                training, on-campus publicity, adult education management, and
                multi-campus coordination and distribution.
              </li>
              <li>
                Leading the upgrade of historical projects, optimizing project
                architecture, supplementing unit testing and TypeScript support,
                etc. to detect and handle coding errors in advance, optimizing
                project compilation and startup time by about 21%, optimizing
                the volume of project build products by about 18%, and
                optimizing the outgoing traffic of cloud server instances by
                about 19%.
              </li>
            </ul>
          </template>
        </div>
      </section>
      <section>
        <ULink
          href="https://globus-china.com/"
          target="_blank"
          class="font-medium text-base"
        >
          {{ $t("globus") }}
        </ULink>
        <div>
          <template v-if="locale === 'zh-CN'">
            <p>全栈工程师</p>
            <p class="text-gray-500">2021-05 ~ 2021-07</p>
            <ul>
              <li>
                参与到基于 MERN 的内部外贸管理系统研发，包括验货、PDF
                预览等功能研发。
              </li>
              <li>
                调研现有 Express.js 后端服务迁移到 Serverless Framework 和 AWS
                的可行性并设计方案。
              </li>
            </ul>
          </template>
          <template v-else>
            <p>Fullstack Engineer</p>
            <p class="text-gray-500">05/2021 - 07/2021</p>
            <ul>
              <li>
                Participated in the development of the internal trade management
                system based on MERN, including the development of functions
                such as goods inspection and PDF preview.
              </li>
              <li>
                Investigated the feasibility of migrating existing Express.js
                backend services to Serverless Framework and AWS and designed a
                solution.
              </li>
            </ul>
          </template>
        </div>
      </section>
      <section>
        <ULink
          href="https://www.millcloud.cn/"
          target="_blank"
          class="font-medium"
        >
          {{ $t("millcloud") }}
        </ULink>
        <div>
          <template v-if="locale === 'zh-CN'">
            <p>前端工程师</p>
            <p class="text-gray-500">2019-06 ~ 2021-04</p>
            <ul>
              <li>接手旧项目并加以改进，规范化技术栈、兼容性适配等方面。</li>
              <li>
                深度参与餐饮类项目，从头设计并实现相关的网站、小程序和移动端应用的技术方案，用于后台管理客户、菜单和订单，用户下单、支付、取餐等。每天有
                5000 或以上用户使用小程序和移动端应用，每月流水达到 1000 万。
              </li>
              <li>
                深度参与教育类项目，从头设计并实现类百度网盘的共享文件库的技术方案，为高校、企业等在线教育需求提供使用平台。
              </li>
              <li>协助评估招聘新的开发人员。</li>
            </ul>
          </template>
          <template v-else>
            <p>Front-end Engineer</p>
            <p class="text-gray-500">06/2019 - 04/2021</p>
            <ul>
              <li>
                Taking over old projects and improving them, normalizing the
                tech stack, compatibility adaptations, and other aspects.
              </li>
              <li>
                Deeply involved in restaurant projects, designing and
                implementing technical solutions from scratch for related
                websites, applets and mobile applications for backend management
                of customers, menus and orders, user orders, payments, pickups
                and more. We have 5,000 or more users using the apps and mobile
                applications every day, with a monthly turnover of 10 million
                RMB.
              </li>
              <li>
                Deeply involved in educational projects, designing and realizing
                the technical solution of BaiduPan-like shared file library from
                scratch, providing a platform for online education needs of
                colleges, universities and enterprises.
              </li>
              <li>Assist in evaluating the recruitment of new developers.</li>
            </ul>
          </template>
        </div>
      </section>
    </section>
    <section>
      <h2 class="text-xl font-bold">{{ $t("education") }}</h2>
      <hr class="my-1" />
      <p class="font-medium">{{ $t("educationUniversity") }}</p>
      <p class="text-sm">{{ $t("educationDegree") }}</p>
      <p class="text-gray-500 text-sm">{{ $t("educationDateTime") }}</p>
    </section>
  </main>
</template>
