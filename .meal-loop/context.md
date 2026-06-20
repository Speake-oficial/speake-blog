# Context — speake-blog（项目专属）

> 由 /learn-project 初次创建于 2026-06-19，之后由 Reflector 维护。这个项目的实现细节、文件、
> 决定、技术欠账都放在这里——绝不放进 `memory/context.md`（那个文件只是 meal-loop 系统级
> 状态，跨项目共享）。

## 项目
- Nome: speake-blog
- 整体目标: 创建一个关于音频内容（播客/音频制作等）领域的博客，重点优化 SEO（标签/分类结构），界面美观、结构易用
- Stack: Astro 6 + Tailwind v4 + MDX + @astrojs/sitemap（决定于 cycle_20260619_235638）
- Caminho: C:\Users\fuba\Documents\projects\speake-blog

## 状态（cycle_20260619_235638 之后）
- 项目已脚手架完成并通过完整周期：5 个 Planner 步骤全部执行（scaffolding、tag 分类法 + 动态路由、SEO 技术层、视觉设计、内容+安全）。
- `npm run build` 通过（exit 0）。Checker 用 9 项 success_criteria 全部核实通过（build、dist/ 检查、sitemap/robots/JSON-LD/OG 的 grep、文章/标签计数、innerHTML/密钥的 grep）。
- Reviewer：approved，3 个 minor finding（无 blocker，见下方"重要文件状态"）。
- 尚未 ship：项目内容已创建但还没有 `git add`/`commit`/`push`（仓库之前完全空白，这是第一批真实文件）。

## 下一步
- **部署前必须处理**：`astro.config.mjs` 里的 `site` 字段目前是占位符 `https://speake-blog.example.com`（带 TODO 注释）—— 部署前必须替换成真实域名，否则 sitemap/canonical URL/Open Graph 会静默指向错误地址。
- **技术欠账（非阻塞，建议下个周期处理）**：tag-slug → 葡语标签名的翻译映射表，目前在 `TagBadge.astro`、`posts/[slug].astro`、`tags/[tag].astro` 三个文件里逐字复制了 3 遍。应提取成单一来源模块（例如 `src/lib/tagLabels.ts`），三处都从那里 import，避免未来新增标签时漏改某一处导致显示不一致。
- **待 ship**：确认当前分支正确（不是 master/main），`git add` + commit（引用 task_id cycle_20260619_235638）+ push（待有网络/凭证时执行）。
- esbuild（经由 astro/@astrojs/mdx 引入）存在低严重度 CVE —— 只影响 Windows 上的 dev server，不影响生产环境。目前无需采取行动；后续依赖更新时关注一下。

## 重要文件状态
- `astro.config.mjs` —— `site` 字段是带 TODO 注释的占位符，见上方"下一步"。
- `src/content.config.ts` —— 使用 Astro 6 的新格式（`loader: glob(...)`），不是旧版 `src/content/config.ts` —— 以后编辑时不要改回旧约定。
- `src/components/TagBadge.astro`、`src/pages/posts/[slug].astro`、`src/pages/tags/[tag].astro` —— 包含逐字相同的 tag-slug→葡语标签翻译映射表副本；是提取单一来源的候选对象（见上方"下一步"）。
- Build/test/lint 命令：`npm run build`（Astro）；lint/test 等其他命令本周期尚未明确配置 —— 下个周期需要时再确认。
