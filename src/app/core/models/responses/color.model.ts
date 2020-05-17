import { ProductSizeModel } from "./product-size.model";
export interface ColorModel {
  id: number;
  name: string;
  hexCode: string;
  sizes: ProductSizeModel[];
}
