import type { ProjectContent } from "../../types";

export default {
  title: "js-screenshot",
  theme: "dark",
  tags: ["typescript", "javascript", "react"],
  source: "https://github.com/RadiumAg/js-screenshot",
  description:
    "A framework-agnostic web screenshot SDK that captures a page region, provides built-in annotations, and exports a finished image through a compact JavaScript API.",
  components: [
    {
      type: "text",
      props: {
        title: "Capture and annotate in one API call",
        text: "js-screenshot opens an interaction layer where a user can select a page region, annotate it, and export PNG, JPEG, or WebP output. It is designed for drop-in use in any web application without framework lock-in.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "Multiple capture strategies: DOM snapshot, screen recording, and htmlInCanvas.",
          "Built-in pen, arrow, shape, text, and mosaic annotation tools.",
          "Dark, light, and system-aware themes with customizable tool settings.",
          "Small Preact-powered runtime bundled for consumers with no extra framework dependency.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
