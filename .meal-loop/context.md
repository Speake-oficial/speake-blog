# Context — speake-blog（项目专属）

> 由 /learn-project 初次创建于 2026-06-19，之后由 Reflector 维护。这个项目的实现细节、文件、
> 决定、技术欠账都放在这里——绝不放进 `memory/context.md`（那个文件只是 meal-loop 系统级
> 状态，跨项目共享）。

## 项目
- Nome: speake-blog
- 整体目标: 创建一个关于音频内容（播客/音频制作等）领域的博客，重点优化 SEO（标签/分类结构），界面美观、结构易用
- Stack: Astro 6 + Tailwind v4 + MDX + @astrojs/sitemap（决定于 cycle_20260619_235638）
- Caminho: C:\Users\fuba\Documents\projects\speake-blog

## 状态（cycle_20260620_003003 之后）
- 项目已脚手架完成并通过两个完整周期：
  - cycle_20260619_235638：脚手架 + SEO + 视觉设计 v1（5 步）。
  - cycle_20260620_003003：UX 修复（整篇文章卡片可点击，stretched-link 模式）+ 视觉改版（白底+紫色亮色主题为默认）+ 暗色主题 toggle（持久化 localStorage + anti-FOUC inline script + a11y）+ 抽取 `tagLabels` 单一来源（偿还上一周期记录的债务）。
- Maker iteration 1 引入了一个对比度缺陷：暗色主题下 `--color-studio-amber-dim` 用 `#8a6420`，对暗背景 `#14110f` 对比度只有 3.51:1（WCAG AA 正文小字要求 4.5:1）。Checker iteration 1 独立算出该数值并 `rejected`。Maker iteration 2 把该值改为 `#b07f2a`，对比度 5.30:1，Checker iteration 2 独立重算确认，`approved`。
- Checker：iteration 2 approved（功能 + 对比度数值独立验证）。
- Reviewer：approved，2 个 minor finding（无 blocker，见下方"重要文件状态"）。
- 已 commit：本周期产出已 commit 到 `feature/scaffold-blog-seo-audio`（commit `173fecb`，引用 task_id cycle_20260620_003003），尚未 push。

## 下一步
- **部署前必须处理**：`astro.config.mjs` 里的 `site` 字段目前是占位符 `https://speake-blog.example.com`（带 TODO 注释）—— 部署前必须替换成真实域名，否则 sitemap/canonical URL/Open Graph 会静默指向错误地址。
- ~~技术欠账：tag-slug → 葡语标签名的翻译映射表三处重复~~ —— **已在本周期解决**：抽取到 `src/lib/tagLabels.ts`，`TagBadge.astro`、`posts/[slug].astro`、`tags/[tag].astro` 三处均改为 import，不再有重复副本。
- **新技术决定/已知局限（非阻塞，记录供以后参考）**：
  1. `PostCard` 整卡可点击（stretched-link 模式：整个 `<article>` 是可点击区域，不只是标题链接）目前没有给 `<article>` 加 ARIA 提示（例如 `aria-label` 说明整卡可交互）。Reviewer 标注这是该模式本身已知的局限，不是本次引入的新缺陷——下次专门做 a11y 审查时可以处理，非阻塞。
  2. `src/styles/global.css` 暗色主题的实现方式是整组重新声明全部 9 个 design token 去覆盖亮色主题的 token，而不是只覆盖真正不同的值。能正常工作，但以后如果想让某个 token 在两个主题间共享，容易因为这种"全量覆盖"的写法漏改其中一处。Reviewer 标注为 minor，非阻塞。
  3. 暗色主题下 `--color-studio-amber-dim` 最终值是 `#b07f2a`（对暗背景 `#14110f` 对比度 5.30:1，WCAG AA 达标）——以后再调整这个 token 时，必须重新用 WCAG 公式验证，不要凭直觉调亮/调暗。
- **Ship 状态**：分支 `feature/scaffold-blog-seo-audio`（不是 main）现有 2 个 commit：`5d4909a`（上一周期 scaffold）+ `173fecb`（本周期 UX/visual，cycle_20260620_003003）。push + 开 PR draft **第二次**待人类显式确认未获回应（Orquestrador 用 AskUserQuestion 询问未收到答案）——继续停在 commit 这一步，不要自动 push。
- esbuild（经由 astro/@astrojs/mdx 引入）存在低严重度 CVE —— 只影响 Windows 上的 dev server，不影响生产环境。目前无需采取行动；后续依赖更新时关注一下。

## 重要文件状态
- `astro.config.mjs` —— `site` 字段是带 TODO 注释的占位符，见上方"下一步"。
- `src/content.config.ts` —— 使用 Astro 6 的新格式（`loader: glob(...)`），不是旧版 `src/content/config.ts` —— 以后编辑时不要改回旧约定。
- `src/lib/tagLabels.ts` —— tag-slug→葡语标签名映射的单一来源（本周期新建）；`TagBadge.astro`、`posts/[slug].astro`、`tags/[tag].astro` 均从这里 import，不要再在这些文件里手写映射表副本。
- `src/components/PostCard.astro` —— 本周期改为整卡可点击（stretched-link 模式），见上方"已知局限 1"（无 ARIA 提示）。
- `src/styles/global.css` —— 本周期新增亮/暗主题 token 体系（默认浅色+紫色），暗色主题以"全量覆盖 9 个 token"方式实现，见上方"已知局限 2"；`--color-studio-amber-dim` 暗色值为 `#b07f2a`（对比度 5.30:1），调整前必须重算对比度。
- 主题 toggle 的持久化逻辑（localStorage + anti-FOUC inline script，写在 `<head>` 防止刷新闪烁）——具体实现文件待下次涉及主题逻辑时由 Maker/Reflector 补充行号。
- Build/test/lint 命令：`npm run build`（Astro）；lint/test 等其他命令本周期尚未明确配置 —— 下个周期需要时再确认。
