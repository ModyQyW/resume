# Resume — 项目指南

在线简历站。React 19 + HeroUI + Tailwind CSS 4 + Vite，中英双语，部署在 https://resume.modyqyw.top。

这份文档写的是**这个项目的硬约束**。通用的代码规范（类型、命名、可访问性、格式化）见
`.agents/skills/ultracite/references/code-standards.md`，不在下面重复。

## 这个项目的四件事

优先级从高到低。它们冲突时按这个顺序取舍，并在改动说明里点出冲突。

### 1. 打印最多 2 页 A4，中英都是

访客最常做的是 Ctrl+P 存成 PDF，投递简历。**两种语言打印后都不能超过 2 张 A4。**

- 约束是硬的。加一条经历、改一段文案、调一处字号，都可能让它悄悄变成 3 页。
- 别靠肉眼估算。用真实打印管线数页数：

  ```bash
  pnpm check:print
  ```

  超限时逐条列出张数并以非零码退出（可直接进 CI）。脚本在 `scripts/print-pages.mjs`，
  自己起停 dev server，不需要事先有服务在跑。检查模式占 5199，`--write` 占 5198（也就是
  `pnpm build:pdf`），两个模式可以同时跑。

- 数页数**必须**读浏览器生成的 PDF（`/Type /Page` 计数）。测量 DOM 高度猜不准：
  分页、孤行（orphans）、寡妇行（widows）都会改变真实张数。
- 当前余量很小：英文版内容实测 1898px，两页能放 2064px（每页可用 1032px = A4 的
  1123px 减去上下各 12mm），只剩约 8%。
  **改完必须跑一次 `pnpm check:print`**，尤其是英文文案。

### 2. 打印版要读着舒服

打印是主要场景，屏幕其次。

- 屏幕上用不上的东西在纸上要收起来，比如图标按钮、tooltip、需要悬停才出现的文字。
  用 `.print-hidden` / `print:block` / `print:flex` 区分两套呈现。
- 纸上正文比屏幕大一档：在元素自己的 class 上写 `print:text-[13px]`（开场自述、工作经历
  条目与组标题、项目描述）。桌面阅读距离近，12px 打印出来偏小。**属于「参照信息」的元素**
  （日期、地点、技术栈、角色与价值观标签）留在 `text-xs` 的 12px，不跟正文抢注意力。
  别指望在 `@media print` 里给 `main` 设一次字号就改完：那只影响没写自己字号的后代，
  而这个项目每个文字元素都写了自己的 `text-xs` / `text-sm`。
- 层级不能倒置：组标题的字号不得小于它下面的正文；两者都是 13px 时，靠字重和
  `--heading` 的颜色区分。
- 一段内容不能跨页断开时，加 `.print-avoid-break`（`break-inside: avoid`）。它只保证
  这一块自己不被切成两半，**不会**让它跟着上一块走——那是 `.print-keep-with-next`
  （`break-after: avoid`）的事，两者别混。**注意副作用**：给整块加这个类，可能把整块
  推到下一页，反而让别的元素孤立在页尾。要保护的是一行 flex 时，把类加在包着它的 block
  上（技术栈图标行就是这么做的）。
- 整条工作经历往往比一页剩余空间还高（第一段实测约 600px）。实测：允许它在页间断开、
  只把公司名一行钉在后续内容上，中英都能回到 2 页；禁止断开反而会把整条推下去，累积成
  第 3 页。做法是给公司名那一行加 `.print-keep-with-next`，
  **不要**给整条加 `.print-avoid-break`。
- 行内元素被页边界拆开也算事故：23 个图标在屏幕上会折成两行，第二行放不下就整块落到
  下一页顶部，跟它所属的经历脱开。技术栈图标在纸上用 `print:size-3` 缩小一档，让长列表
  保持一行。
- 打印时颜色令牌在 `@media print` 里被整体重置为纸面配色。深色模式打印必须仍然有墨色，
  不要依赖 `.dark` 的取值。
- 每动一次打印样式，都要跑 `pnpm check:print` 并**看一遍生成的 PDF**，
  确认没有把某个标题留在页脚、内容被推到下页。
- 成品必须**渲染真实 PDF 逐页看**，别信按高度切图的截图。PNG 截图只是把连续版面按
  1032px 切开，看起来像第 1 页页脚的东西可能其实在同一页上。检查 PDF 分页用：

  ```bash
  python3 -c "import pypdf; r=pypdf.PdfReader('public/resume-en-US.pdf'); print(len(r.pages))"
  ```

- 冒号按语言分开写：中文用全角 `：`，英文用 `: `。全角冒号挨着拉丁字母会挤出一段
  空隙，读起来像排版错误。
- 纸面呈现要和屏幕一致：屏幕上用 tooltip 承载的解释性文字，纸上直接不显示（角色、
  价值观、技术栈），不要另写一段只有打印才出现的文本。联系方式是例外，两个场景展示的
  信息本来就不同。

### 3. 文案要有力度

简历的每一行都在跟读者抢时间。

- 动词开头，结果明确。写「带领 5 人团队，负责网页、桌面、移动端、小程序等跨平台教育项目」
  不写「参与并支持了多个项目的开发工作」。
- 删掉没有信息量的修饰：「有效推动」「显著提升」「进一步完善」「积极参与」。
  数字和事实留着（「提速约 21%」「周下载量 111k」「覆盖 3 个城市」）。
- 一条 bullet 一件事。想让要点自己跳出来，用 `Highlight.label` 加粗引导（「编译启动」、
  「5,000+ daily users」），冒号后接说明。**不要**把多条塞成一句用分号串起来——
  那既难扫读，也容易拼出错误标点。
- **中英文案成对维护。** 两份文件的 `Highlight`、`Job`、`SideProject` 结构由
  `src/content/model.ts` 约束，缺一条翻译会让 typecheck 失败。但结构一致不代表语气一致：
  改完中文要顺手把英文对齐，别让一边是三行排比、另一边是两行。
- 日期存 ISO `YYYY-MM`，`null` 表示至今，不要写成魔法字符串。

### 4. 站上导出的 PDF

访客点右上角的下载按钮拿到的 PDF，是本地用 Playwright 渲染出来、随仓库提交的静态文件。
它不在访客浏览器里生成，也不在部署构建里生成。

- 开发时按钮是打印图标，点一下打当前页面（改完文案立刻能看到）。
- 生产构建下按钮是下载图标，链到 `/resume-<locale>.pdf`，即 `public/` 里提交好的文件。
- 本地生成：

  ```bash
  pnpm build:pdf     # 两种语言各生成一份到 public/
  ```

  要本机有 Chromium，新机器先 `pnpm exec playwright install chromium`。
- 任一种语言超过 2 页就整批不写，不会出现一份新、一份旧的产物。
- **改完文案必须重跑 `pnpm build:pdf` 并提交产物**，否则线上 PDF 会和页面对不上。PDF 每次
  渲染都带创建时间，字节不可能一致，所以没有「产物是不是最新的」这种自动检查，只能靠记得。
- 磁盘上的文件名由脚本写、按钮拼，两边必须一致（`resume-<locale>.pdf`，按钮按 `BASE_URL`
  拼路径）；访客存下来的名字由 `download` 属性给，是「姓名 - 求职岗位.pdf」，取的是
  `person.name` 加 `person.title`，两种语言各用自己那版，改名或改岗位时文件名会自己跟着变。
- 头像 `public/wurui.jpg` 必须保持小体积。它曾经是 5186×5186（7.4 MB），嵌进 PDF 后
  每份 8 MB；降采样到 512×512 后，当时提交的两份是 330 KB（英文）和 690 KB（中文）。

## 结构

```
src/
  main.tsx        挂载根组件
  app.tsx         页面装配：抬头、三个区块、页脚
  content/
    model.ts      双语共享的内容模型，改结构从这里开始
    zh-cn.ts      中文文案
    en-us.ts      英文文案
    index.ts      语言注册表、locale 检测（默认中文）
  components/
    hero.tsx      抬头 + 个人介绍 + 联系方式（屏幕图标 + tooltip，纸上图标 + 值平铺）
    header.tsx    语言 / 主题 / 源码 / PDF 动作
    highlights.tsx 角色 / 价值观
    tech-stack.tsx 技术栈图标（纸上缩小一档，长列表不断行）
    section.tsx   区块骨架：标题 + 横线
    sections/     experience · projects · education
  lib/
    format.ts       日期与区间格式化，两种语言共用
    icons.ts        图标表，按 key 取图标与名字
    use-locale.ts   语言状态、页面 lang / title / meta
    use-theme.ts    主题偏好（system / light / dark）
  assets/icons/   图标集里没有的项目 logo，构建期转成组件
  styles.css      设计令牌 + 全部 @media print 规则
scripts/
  print-pages.mjs  起 dev server、渲染两种语言、数页数；`--write` 写出 public/resume-<locale>.pdf
                   （`pnpm build` 第一步，`pnpm check:print` 只数不写）
public/           头像、站点图标、`_headers`（PDF 缓存头），以及构建时写入的两份 PDF
```

`header.tsx` 按 `import.meta.env.MODE` 决定按钮是打印还是下载，**别改成 `DEV`**：
`DEV` 跟 `NODE_ENV` 走，在 `NODE_ENV=production` 下起的 dev server 会悄悄链到旧 PDF。
`index.html` 里有一段首屏前生效的主题脚本，改主题的存储键时要和 `use-theme.ts` 一起改。

改动落点：**动文案去 `src/content/`，动打印表现去 `src/styles.css` 和对应组件的
`print:` 变体。** 不要为了打印在组件里写一套平行的 DOM，除非两个场景展示的信息本来
就不同（联系方式就是这样）。

## 本地开发

```bash
pnpm dev           # 开发服务器（端口被占用会自动往后找）
pnpm build         # tsc -b && vite build，部署时跑的就是它
pnpm build:pdf     # 本地重新生成 public/ 下的两份 PDF
pnpm preview       # 本地看 dist/ 的构建结果
pnpm typecheck     # tsc -b --noEmit
pnpm check         # ultracite check
pnpm fix           # ultracite fix
pnpm check:print   # 只数打印页数，不写文件
```

`pnpm build` 不需要浏览器；`pnpm build:pdf` 要跑 Chromium，新机器先
`pnpm exec playwright install chromium`。Node 看 `.node-version`（26），包管理器是
`packageManager` 里的 `pnpm@12.11.2`。

提交前跑 `pnpm typecheck && pnpm check && pnpm check:print`。改了样式或依赖再加
`pnpm build`；改了文案另加 `pnpm build:pdf` 并提交产物。

`.gitignore` 里列了 `.pi`、`.claude` 等 agent 目录，biome 按 `.gitignore` 跳过它们，所以
后台任务自己写的时间戳文件不会进 `pnpm check`。`biome.jsonc` 给 `scripts/**` 关掉了
`noUnresolvedImports`：pnpm 把 `@playwright/test` 放在 `.pnpm/` 里，biome 的静态解析
看不到它，代码本身能跑。

## 部署

线上跑在 Cloudflare 的 Git 集成构建上，构建命令 `pnpm run build`，产物目录 `dist/`。

- 构建步骤里没有浏览器，也不生成 PDF：PDF 用仓库里提交好的那两份。
- 镜像自带的 Node 是 24、pnpm 是 10.x，仓库要的是 Node 26（`.node-version` 会被读）和
  pnpm 12.11.2（要么显式设 `PNPM_VERSION`，要么确认镜像会按 `packageManager` 切版本）。
- `public/_headers` 里给 PDF 定了缓存：`Cache-Control: public, max-age=0, must-revalidate`。
  这个文件只有 Cloudflare 会解析，本地 `pnpm preview` 只是把 `dist/_headers` 当普通文件发。
- 域名级的 **Browser Cache TTL**（默认 4 小时）会把比它小的 `max-age` 顶上去，所以那个
  `max-age=0` 要真生效，得在 Caching → Configuration 里设成 Respect Existing Headers，
  或者用 Cache Rule 单独管 PDF。

## 提交

历史里中英文提交信息都有，跟着改动涉及的范围写就行。不提交 secrets，不加 AI 署名。
