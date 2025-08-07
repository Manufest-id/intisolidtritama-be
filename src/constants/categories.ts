export const ALLOWED_CATEGORIES = [
  "cinema",
  "civil",
  "homeliving",
  "hotel",
  "office",
  "restaurant",
  "showroom",
] as const;

export type AllowedCategory = (typeof ALLOWED_CATEGORIES)[number];
