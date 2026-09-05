import type { ProjectContent } from "../../types";

export default {
  title: "AIGate",
  theme: "dark",
  tags: ["next", "typescript", "redis", "postgresql"],
  live: "https://aigate.demo.radiumg.top",
  source: "https://github.com/RadiumAg/AIGate",
  description:
    "A self-hostable AI gateway for safely sharing OpenAI-compatible model access with end users. It centralizes provider credentials while enforcing independent quotas, rate limits, and cost controls.",
  components: [
    {
      type: "text",
      props: {
        title: "A practical control layer for AI APIs",
        text: "AIGate lets teams use their own OpenAI, Claude, Gemini, and other model-provider API keys without exposing them to end users. Policies are applied per user so that model usage stays visible and predictable.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "OpenAI-compatible API gateway with multi-provider routing.",
          "Per-user token quotas, request-rate limits, and cost controls.",
          "Type-safe tRPC APIs, PostgreSQL persistence, and Redis-backed checks.",
          "Docker Compose deployment with an interactive configuration script.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
