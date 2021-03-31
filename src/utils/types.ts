export interface Community {
  categories: string;
  logo?: string;
  name: string;
  type: "Discord" | "Facebook" | "GroupMe" | "Slack";
  url: string;
}
