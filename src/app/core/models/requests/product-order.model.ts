import { ProductSize } from "src/app/core/models/responses/product-size.model";
import { Color } from "../responses/color.model";

export interface ProductOrder {
  id: number;
  price: number;
  name: string;
  selectedColor: Color;
  selectedSize: ProductSize;
  selectedQuantity: number;
}
