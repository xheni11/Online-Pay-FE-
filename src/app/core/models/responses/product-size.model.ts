import { SizeFormat } from "./size-format.model";
import { Color } from "./color.model";

export interface ProductSize {
  id: number;
  value: string;
  colors: Color[];
}
