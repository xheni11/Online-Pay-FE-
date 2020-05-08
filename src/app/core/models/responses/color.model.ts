import { ProductSize } from "./product-size.model";
export interface Color {
  id: number;
  name: string;
  hexCode: string;
  sizes: ProductSize[];
}
