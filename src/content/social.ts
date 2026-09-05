import { profile } from "./profile";

export const social = [
  { url: profile.social.github, name: "github" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
