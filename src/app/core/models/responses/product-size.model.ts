import { ColorModel } from "./color.model";

export interface ProductSizeModel {
  id: number;
  value: string;
  colors: ColorModel[];
}
