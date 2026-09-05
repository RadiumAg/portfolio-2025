import type { ProjectContent } from "../../types";

export default {
  title: "B站收藏夹整理工具",
  theme: "light",
  tags: ["react", "typescript", "javascript"],
  live: "https://radiumag.github.io/bilibili-favorites/",
  source: "https://github.com/RadiumAg/bilibili-favorites",
  description: "一款 Chrome 扩展，用智能规则、批量操作和 AI 分类能力，帮助用户分析、整理并重新发现自己的 B 站收藏。",
  components: [
    {
      type: "text",
      props: {
        title: "让不断增长的收藏井然有序",
        text: "它会分析收藏视频的分类和近期变化，并提供批量移动工具。用户既可以自定义关键词规则，也能使用 AI 从视频标题提取关键词，推荐合适的收藏夹。",
      },
    },
    {
      type: "list",
      props: {
        title: "核心能力",
        items: [
          "展示收藏内容分类与近期收藏趋势。",
          "基于关键词规则或 AI 进行智能归类。",
          "支持侧边栏、多选和拖拽，快速完成批量整理。",
          "本地优先存储，可自定义 API Key 与模型设置。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
