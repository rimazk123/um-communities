export interface Community {
  categories?: string;
  logo?: string;
  name?: string;
  type?: string;
  url?: string;
}

export interface Filters {
  platforms: string[];
  categories: string[];
}
