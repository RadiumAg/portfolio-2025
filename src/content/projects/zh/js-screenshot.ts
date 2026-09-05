import type { ProjectContent } from "../../types";

export default {
  title: "js-screenshot",
  theme: "dark",
  tags: ["typescript", "javascript", "react"],
  source: "https://github.com/RadiumAg/js-screenshot",
  description: "一个与框架无关的网页截图 SDK：选择区域、完成标注，并通过简洁的 JavaScript API 导出图片。",
  components: [
    {
      type: "text",
      props: {
        title: "一次调用，完成截图与标注",
        text: "js-screenshot 会打开交互层，供用户选择网页区域、添加标注后导出 PNG、JPEG 或 WebP。它能以轻量方式接入任意 Web 应用，不绑定特定框架。",
      },
    },
    {
      type: "list",
      props: {
        title: "核心能力",
        items: [
          "支持 DOM 快照、屏幕录制和 htmlInCanvas 等多种捕获模式。",
          "内置画笔、箭头、形状、文字与马赛克标注工具。",
          "支持深色、浅色和跟随系统主题，并可自定义工具参数。",
          "使用 Preact 构建小体积运行时，使用方无需额外框架依赖。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
