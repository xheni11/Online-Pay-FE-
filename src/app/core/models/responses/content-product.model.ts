import { PageableModel } from "./pagable.model";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { SortModel } from "./sort.model";

export interface ContentProductModel {
  content: ProductModel[];
  pageable: PageableModel;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortModel;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
