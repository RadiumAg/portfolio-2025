import type { ProjectPreview } from "../../types";

export default [
  {
    title: "AIGate",
    slug: "aigate",
    visualLabel: "01",
    description: "可私有部署的 AI 网关与用量控制平台",
  },
  {
    title: "B站收藏夹整理工具",
    slug: "bilibili-favorites",
    visualLabel: "02",
    description: "用 AI 辅助整理 B 站收藏的 Chrome 扩展",
  },
  {
    title: "js-screenshot",
    slug: "js-screenshot",
    visualLabel: "03",
    description: "框架无关的截图与标注 SDK",
  },
] as const satisfies ProjectPreview[];
