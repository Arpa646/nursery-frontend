// src/types.ts
export interface TPlant {
  _id?: string;
  title: string;
  description: string;
  price: number;
  rating?: number;
  category: string;
  imageUrl: string;
  quantity: number;
  stock?: number; // Ensure stock is included
}
