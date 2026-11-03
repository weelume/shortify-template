# Shortify 模板使用入口

先读 `template.json`、`project.json` 和 `docs/`。本仓为独立运行的 Next.js 响应式官网，提供首页、作品、关于、博客、六篇文章、联系和隐私政策，共十二个页面；默认中文，同页 `/en` 为英文。

## 环境与运行

Node 版本以根 `.nvmrc` 为准，pnpm 版本以 `package.json` 为准。先执行 `pnpm install --frozen-lockfile`，再运行 `pnpm dev`，默认地址 `http://localhost:43320`。使用 Ctrl+C 停止当前启动的服务。`pnpm build` 后可执行 `pnpm start` 验证生产版本。端口可通过 `PORT` 环境变量设置，示例见根 `.env.example`。

本模板不需要密钥、数据库、账号或后端。图片、字体和五路 MP4 均本地提供；作品区八张卡片复用这些本地视频，部分视频重复。联系表单只进行本地校验，日历只预览选择，不发送、不保存、不创建预约。真实业务需要由使用者明确设计服务端及隐私处理。

## 修改与检查

品牌在 `src/features/site-templates/catalog/shortify/config/brand.ts`，双语内容、文章、页面与素材映射在 `content/`，主题在 `tokens.css`，布局在 `theme.css`，交互在 `components/`，页面组合在 `views/`，路由入口在 `pages/`。根 `src/app/` 提供独立站运行入口。

执行 `pnpm typecheck`、`pnpm lint`、`pnpm test` 和 `pnpm build`。浏览器检查导航、同页语言切换、流程切换、FAQ、视频、轮播、表单以及 1440 / 834 / 390 / 320px 宽度。更改主题或布局后刷新 `.tpl/assets/` 截图和元数据实际尺寸。`pnpm tpl:check` 检查协议，不替代应用运行验收。

## 交付与限制

源码仓库地址以 `template.json.gitUrl` 为准。`.tpl/assets/` 只放真实展示截图；运行素材位于 `public/templates/shortify/`。`asset-sources.json` 与 `asset-integrity.json` 记录素材来源和摘要。不得提交依赖、缓存、真实环境变量、日志或私密数据。

本实现参考 Shortify 原站的布局、内容层次与动效。中文排版和字体按本模板令牌调整；作品视频、演示日历和隐私说明有明确差异。参考素材、人物与品牌的商业再分发权尚未确认，`listed=false`；完整权利说明见 `docs/LICENSE.md`。不得把演示评价、播放量或方案说明当作真实商业背书。尚未完成的验收项目必须如实保留。

英文展示标题使用本地 Bebas Neue 400，首屏桌面100px、章节60px并按设备缩放；英文正文仍用Poppins。中文展示继续使用MiSans及28–44px首屏、24–36px章节的规范。两种语言独立维护标题比例，不能用统一字号覆盖。
