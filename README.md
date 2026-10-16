# Resume

<p align="center">
  <a href="https://github.com/ModyQyW/resume/stargazers"><img src="https://img.shields.io/github/stars/ModyQyW/resume?style=for-the-badge" alt="Stars"></a>
</p>

吴睿的在线简历，中英双语，打印成两张 A4，也能直接下载生成好的 PDF。

线上地址：https://resume.modyqyw.top

## 简介

访客最常做的是打开页面、Ctrl+P 存成 PDF 去投递，所以「两种语言都正好两页 A4」是这个项目
最硬的约束：文案、字号、间距都要围着它调。页面上还有语言和深浅色切换，右上角的下载按钮
给的是本地生成、跟着仓库提交的 PDF。

内容全在 `src/content/`：`model.ts` 定义结构，`zh-cn.ts` 和 `en-us.ts` 是两份文案，
改内容不用碰组件。打印规则集中在 `src/styles.css` 的 `@media print` 里。

## 快速开始

需要 Node 26（`.node-version`）和 pnpm 12（`package.json` 的 `packageManager`）。

```bash
pnpm install
pnpm exec playwright install chromium   # 生成 PDF 要用，装一次就够
pnpm dev
```

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 开发服务器（端口被占用会自动往后找） |
| `pnpm build` | 类型检查 + 打包到 `dist/`（部署时跑的就是它，不需要浏览器） |
| `pnpm build:pdf` | 在本地重新生成 `public/` 下的两份 PDF |
| `pnpm preview` | 本地预览 `dist/` 的构建结果 |
| `pnpm typecheck` | 只跑类型检查 |
| `pnpm check` / `pnpm fix` | ultracite 检查 / 自动修复 |
| `pnpm check:print` | 只数两种语言的打印页数，超过 2 页就报错 |

提交前跑 `pnpm typecheck && pnpm check && pnpm check:print`。动了样式或依赖再加
`pnpm build`；动了文案另加 `pnpm build:pdf`，并把产物一起提交。

## 打印

两种语言都必须在 2 张 A4 以内，别靠肉眼估：

```bash
pnpm check:print
```

脚本自己起 dev server，用 Chromium 分别渲染中英两版、数生成的 PDF 页数，超限时列出张数
并以非零码退出。改了文案或打印样式就再跑一次。

站上那两份 PDF 是本地生成、跟着仓库提交的静态文件，不在访客浏览器里渲染，也不在
部署构建里生成。改完文案要重新生成并提交，否则线上 PDF 和页面对不上：

```bash
pnpm build:pdf     # 两种语言各生成一份到 public/
```

写文件前会先把两种语言都渲染完，任一语言超过 2 页就整批不写，不会出现一份新、一份旧。
本地生成要能跑 Chromium，新机器先 `pnpm exec playwright install chromium`。

## 部署

部署在 Cloudflare（线上 https://resume.modyqyw.top），构建命令 `pnpm run build`，产物
目录 `dist/`。构建机上不需要浏览器，PDF 用仓库里提交好的那两份。

PDF 的缓存头写在 `public/_headers` 里（每次都回源校验）。Cloudflare 的 Browser Cache TTL
默认 4 小时，会把比它小的 `max-age` 顶掉，所以要它生效得在 Caching → Configuration 里
改成 Respect Existing Headers。

## 目录结构

```
src/
  content/     中英文案与共享内容模型（改内容从这里开始）
  components/  页面区块：hero、header、highlights、tech-stack、sections/*
  lib/         语言与主题偏好、日期格式化、图标表
  styles.css   设计令牌与全部 @media print 规则
scripts/
  print-pages.mjs  数页数、生成 PDF
public/            头像、站点图标、`_headers`，以及提交进仓库的两份 PDF
```
