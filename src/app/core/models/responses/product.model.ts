import { ProductSize } from "src/app/core/models/responses/product-size.model";
import { Currency } from "./currency.model";
import { ProductMaterial } from "./product-material.model";
import { ProductCategory } from "./product-category.model";

import { ProductBrand } from "./product-brand.model";
import { Color } from "./color.model";
export interface Product {
  id: number;
  name: string;
  price: number;
  modelNumber: string;
  brandDto: ProductBrand;
  categoryDto: ProductCategory;
  materialDto: ProductMaterial;
  colors: Color[];
  sizes: ProductSize[];
}
