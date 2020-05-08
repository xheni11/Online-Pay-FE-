import { Pageable } from "./pagable.model";
import { Product } from "src/app/core/models/responses/product.model";
import { Sort } from "./sort.model";

export interface ContentProduct {
  content: Product[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
