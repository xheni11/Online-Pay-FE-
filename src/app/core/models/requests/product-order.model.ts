import { ProductSizeModel } from "src/app/core/models/responses/product-size.model";
import { ColorModel } from "../responses/color.model";

export interface ProductOrderModel {
  id: number;
  price: number;
  name: string;
  selectedColor: ColorModel;
  selectedSize: ProductSizeModel;
  selectedQuantity: number;
}
