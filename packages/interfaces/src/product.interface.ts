export type ProductSize = "Small" | "Medium" | "Large";

export interface IProduct {
  description: string;
  id: number;
  image: string;
  model: string;
  name: string;
  price: string;
  priceInCents: number;
  sizes: string[];
  special: string;
  specialInCents: number;
}
