import type { ProjectContent } from "../../types";

export default {
  title: "AIGate",
  theme: "dark",
  tags: ["next", "typescript", "redis", "postgresql"],
  live: "https://aigate.demo.radiumg.top",
  source: "https://github.com/RadiumAg/AIGate",
  description:
    "一个可私有部署的 AI 网关，让团队安全地将模型能力提供给终端用户，同时统一管理密钥、额度、频率和调用成本。",
  components: [
    {
      type: "text",
      props: {
        title: "面向 AI API 的实用控制层",
        text: "AIGate 支持接入自己的 OpenAI、Claude、Gemini 等服务商密钥，而无需将密钥暴露给最终用户。每位用户均可配置独立策略，使模型调用可见、可控、可追踪。",
      },
    },
    {
      type: "list",
      props: {
        title: "核心能力",
        items: [
          "兼容 OpenAI API，并支持多模型服务商统一代理。",
          "按用户设置 Token 配额、请求频率与成本控制。",
          "采用 tRPC 类型安全 API、PostgreSQL 持久化与 Redis 实时校验。",
          "提供 Docker Compose 与交互式脚本，简化私有部署流程。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
