import type { ProjectContent } from "../../types";

export default {
  title: "Bilibili Favorites",
  theme: "light",
  tags: ["react", "typescript", "javascript"],
  live: "https://radiumag.github.io/bilibili-favorites/",
  source: "https://github.com/RadiumAg/bilibili-favorites",
  description:
    "A Chrome extension that helps people analyze, organize, and rediscover their Bilibili favorites with intelligent rules, bulk actions, and AI-assisted categorization.",
  components: [
    {
      type: "text",
      props: {
        title: "Bring order to a growing collection",
        text: "The extension visualizes favorite-video activity and categories, then makes it easy to move videos in batches. Users can define keyword rules or let an AI model extract keywords and suggest an appropriate collection.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "Favorite-library analysis with category and recent-activity insights.",
          "Rule-based and AI-assisted classification powered by video titles.",
          "Multi-select and drag-and-drop batch organization in a browser side panel.",
          "Local-first storage with configurable API keys and model settings.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
