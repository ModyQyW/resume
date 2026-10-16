# Resume

<p align="center">
  <a href="https://github.com/ModyQyW/resume/stargazers"><img src="https://img.shields.io/github/stars/ModyQyW/resume?style=for-the-badge" alt="Stars"></a>
</p>

吴睿的在线简历，中英双语，打印成两张 A4，也能直接下载生成好的 PDF。

线上地址：https://resume.modyqyw.top

## 简介

访客最常做的是打开页面、Ctrl+P 存成 PDF 去投递，所以「两种语言都正好两页 A4」是这个项目
最硬的约束：文案、字号、间距都要围着它调。页面上还有语言和深浅色切换，右上角的下载按钮
给的是构建时现场生成的 PDF。

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
| `pnpm build` | 重新生成两份 PDF，然后类型检查 + 打包到 `dist/` |
| `pnpm preview` | 本地预览 `dist/` 的构建结果 |
| `pnpm typecheck` | 只跑类型检查 |
| `pnpm check` / `pnpm fix` | ultracite 检查 / 自动修复 |
| `pnpm check:print` | 只数两种语言的打印页数，超过 2 页就报错 |

提交前跑 `pnpm typecheck && pnpm check && pnpm check:print`。动了样式或依赖再加
`pnpm build`。

## 打印

两种语言都必须在 2 张 A4 以内，别靠肉眼估：

```bash
pnpm check:print
```

脚本自己起 dev server，用 Chromium 分别渲染中英两版、数生成的 PDF 页数，超限时列出张数
并以非零码退出。改了文案或打印样式就再跑一次。

站上那两份 PDF 是构建时现场生成的，不在访客浏览器里渲染。`pnpm build` 第一步就是
跑这个脚本（`--write`）写出 `public/resume-<locale>.pdf`，接着才做类型检查和打包：

```bash
pnpm build
```

写文件前会先渲染完两种语言，任一种超过 2 页就整批不写并让构建失败，不会出现一份新、
一份旧。构建机器需要能跑 Chromium：本地先 `pnpm exec playwright install chromium`，
Cloudflare 的构建镜像里没有，要在构建命令里装上。

## 部署

部署在 Cloudflare（线上 https://resume.modyqyw.top），构建命令 `pnpm build`，产物目录
`dist/`。构建镜像里没有浏览器，所以云端那条命令先把 Chromium 装上：

```bash
pnpm exec playwright install chromium && pnpm build
```

启动时如果报缺共享库，再给 install 加 `--with-deps`（需要 apt / sudo）。

## 目录结构

```
src/
  content/     中英文案与共享内容模型（改内容从这里开始）
  components/  页面区块：hero、header、highlights、tech-stack、sections/*
  lib/         语言与主题偏好、日期格式化、图标表
  styles.css   设计令牌与全部 @media print 规则
scripts/
  print-pages.mjs  数页数、生成 PDF
public/            头像、站点图标，以及构建时写入的两份 PDF
```
