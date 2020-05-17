import { SafeResourceUrl } from "@angular/platform-browser";
import { ImageModel } from "./image.model";
import { ProductSizeModel } from "src/app/core/models/responses/product-size.model";
import { ProductMaterialModel } from "./product-material.model";
import { ProductCategoryModel } from "./product-category.model";

import { ProductBrandModel } from "./product-brand.model";
import { ColorModel } from "./color.model";
export interface ProductModel {
  id: number;
  name: string;
  price: number;
  modelNumber: string;
  brandDto: ProductBrandModel;
  categoryDto: ProductCategoryModel;
  materialDto: ProductMaterialModel;
  colors: ColorModel[];
  sizes: ProductSizeModel[];
  photos: ImageModel[];
  photo: ImageModel;
  url: SafeResourceUrl;
}
