# 吴睿 - 前端工程师

简体中文 | [English](./index.en-US.md)

<div class="flex">
  <a href="https://modyqyw.github.io" class="flex items-center mr-2">
    <iconify-icon icon="carbon:home" class="mr-1"></iconify-icon>
    个人站
  </a>
  <a href="https://github.com/ModyQyW" class="flex items-center mx-2">
    <iconify-icon icon="carbon:logo-github" class="mr-1"></iconify-icon>
    ModyQyW
  </a>
  <a href="mailto:wurui-dev@foxmail.com" class="flex items-center mx-2">
    <iconify-icon icon="carbon:email" class="mr-1"></iconify-icon>
    wurui-dev@foxmail.com
  </a>
  <span class="flex items-center mx-2">
    <iconify-icon icon="carbon:phone" class="mr-1"></iconify-icon>
    13266337925
  </span>
  <span class="flex items-center mx-2">
    <iconify-icon icon="icon-park-outline:birthday-cake" class="mr-1"></iconify-icon>
    1997-04
  </span>
</div>

## 介绍

我在 2018 年开始接触并自学前端，2019 年 6 月从中山大学软件工程毕业，获得统招本科学历学士学位。

我熟练掌握原生 JavaScript / TypeScript、Vue、 React 等相关前端技术，能够独立完成前端项目的开发，也能够与团队成员协作开发。

我在个人站上发布技术博客，在 Github 上参与开源项目，不断提高自己的技术水平。我希望我能成为一名基于 TypeScript 的 10x 全栈工程师。

## 技能

- 熟练使用 Git 协作，了解 CI/CD
- 熟悉 CSS3，熟练使用 TailwindCSS、UnoCSS 等原子化 CSS 框架
- 熟悉 JavaScript (ES6+) 和 TypeScript
  - 熟练使用 Vue、VueRouter、Pinia、ElementPlus、UniApp 及周边开发，了解 Nuxt 等
  - 熟练使用 React、ReactRouter、Zustand、Antd、Taro 及周边开发，了解 Next、Redux、Mobx、ReactNative 等
- 熟练使用 Rollup、Vite 及周边开发
- 熟练使用规范化工具，如 ESLint、Stylelint、Prettier、LintStaged、Husky 等
- 目前正在学习 Web3、Solid、Nest、MongoDB、Redis、Docker 等技术

## 工作

### [广东砺云教育科技有限公司](https://www.millcloud.cn/)

<p class="text-gray-500">2021-07 至今，中国广东佛山禅城，远程</p>

- 主导升级旧项目，包括 Web、多端小程序、Electron 等，统一升级为 TypeScript + Vue 3 + Pinia + VueQuery + ElementPlus + UnoCSS + Vite + 约定式路由，项目编译时间平均降低 20%，任务完成时间平均降低 5%
- 使用基于资源的权限控制 Resource Based Access Control 管理 Web 后台管理系统访问权限
- 结合 Azure DevOps Pipelines 完成 CI/CD，节省本地构建、部署等操作约 2 分钟
- 引入 Vitest 做基本方法的单元测试，平均覆盖率达 89%
- 从零整理 [开发模板](https://github.com/MillCloud/presets)、[开发规范](https://millcloud.github.io/standard)、[上机测试](https://millcloud.github.io/developer-examination/)

### [佛山市马威贸易有限公司](https://globus-china.com/)

<p class="text-gray-500">2021-05 - 2021-07，中国广东佛山禅城</p>

- 使用 MongoDB、Express、React (MERN) 等技术做 Web 后台管理系统的前后端开发
- 使用 ReactQuery 做远端状态管理，Recoil 做本地状态管理
- 使用基于属性的权限控制 Attribute Based Access Control 管理 Web 后台管理系统访问权限
- 调研既有 Express 项目如何迁移到 Serverless Framework 和 AWS，设计基本方案

### [广东砺云教育科技有限公司](https://www.millcloud.cn/)

<p class="text-gray-500">2019-06 - 2021-04，中国广东广州番禺</p>

- 接手旧项目，处理异步处理、错误上报、ReactNative 兼容性适配等问题
- 餐饮类小程序项目定制复杂菜单、接入自有和三方支付方式
- 修改 ElementUI 面包屑和树两个组件以满足业务需求，[在线访问](https://gitee.com/MillCloud/element)
- 使用基于角色的权限控制 Role Based Access Control 管理 Web 后台管理系统访问权限

## 项目

此处仅列出部分项目，更多可查看 [我的 GitHub](https://github.com/ModyQyW)。

### [fabric](https://github.com/ModyQyW/fabric)

这是一个开箱即用的共享规范，适用于不同的 JavaScript / TypeScript 项目，包括了大量常用工具的个人配置和使用。

### [vite-plugin-eslint2](https://github.com/ModyQyW/vite-plugin-eslint2)

这是一个用于 vite 的 ESLint 插件，与 eslint-webpack-plugin 作用类似。最初因为 vite-plugin-eslint 维护不够活跃而分叉出来维护并添加新功能。

### [vite-plugin-stylelint](https://github.com/ModyQyW/vite-plugin-stylelint)

这是一个用于 vite 的 Stylelint 插件，与 stylelint-webpack-plugin 作用类似。截至 2023-07-05，周下载量有 14k。基于这个插件的经验，我为 [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) 贡献了 [PR](https://github.com/fi3ework/vite-plugin-checker/pull/158)。

### uni-helper

uni-helper 本来只是一个 [个人项目](https://github.com/ModyQyW/uni-helper)，但现在已经成为一个 [非官方非盈利组织](https://github.com/uni-helper)。

uni-helper 提供了大量增强 uni-app 系列产品的开发体验的包，我在尽力维护其中一部分，包括 [TypeScript 类型定义](https://github.com/orgs/uni-helper/repositories?q=types&type=all&language=&sort=)、[VSCode 插件](https://github.com/orgs/uni-helper/repositories?q=vscode&type=all&language=&sort=) 等。截至 2023-07-05，VSCode 插件累计下载量有 188k。

### [tailwind-extensions](https://github.com/ModyQyW/tailwind-extensions)

tailwind-extensions 是一个拓展 TailwindCSS 的库。它提供了更多的配置值以减少推断值的使用，这一点使 TailwindCSS 更靠近 UnoCSS。

它还提供了和 AntDesign、ElementPlus 的结合使用预设，使 TailwindCSS 更容易和这些 UI 库集成使用。考虑到国内生态，它还提供了小程序和适老化预设，使 TailwindCSS 对国内生态更友好。

<!--
## 期望

- 公司前景良好，有上升空间
- 团队和谐友善，目标统一，流程规范，强调效率，拒绝繁文缛节和加班文化
- 中国时区，可安排固定时间协调开会
- 全职远程工作，15 - 20k，五险一金，每周工作 35 - 40 小时，如果需要自行处理社保税务等 18 - 24k
- 兼职远程工作，1h 120 - 240，如果需要自行处理社保税务等 1h 144 - 288
-->

<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
<script src="https://cdn.jsdelivr.net/npm/iconify-icon/dist/iconify-icon.min.js"></script>
