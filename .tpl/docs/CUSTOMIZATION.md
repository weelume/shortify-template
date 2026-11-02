# 修改指南

- 换品牌：编辑 `config/brand.ts` 的中英文名称、版权年份和标语。消费方可通过公开的 HostProvider 注入品牌，通用源码中不写消费方联系方式或路径。
- 换色与字号：编辑 `tokens.css`；背景、卡片、重点渐变、滚动条、圆角、区块间距和响应式字号集中管理。`theme.css` 只作用于 `.sf-site` 与当前路由标记，不能扩散到其他站点。
- 改内容：编辑 `content/data.ts` 与 `content/articles.json`；两种语言一起维护。视频和人物数据是演示，不应转换为未经核实的背书。
- 改素材：将文件放入 `public/templates/shortify/`，更新 `content/media.json`、`.tpl/asset-sources.json` 和摘要文件；检查实际 MIME、路径与许可。不要用图片替代动态视频。
- 增删页面：同步 `pages/`、`meta.ts`、`content/pages.json` 和 `.tpl/template.json` 的端页面结构，同时更新文章邻接链接与导航。新页面使用公共 Shell。
- 改动效：在对应交互组件中修改触发、持续时间、缓动、循环和暂停逻辑，实际比较初始、中间与结束状态。保留减少动态效果和键盘可操作性。
- 改表单：当前只能本地演示。接入真实服务需要另行设计数据合同、错误语义、后端与隐私政策，不能直接把本地校验提示改成“已发送”。

检查入口与约束映射见 `.tpl/customization.json`。
