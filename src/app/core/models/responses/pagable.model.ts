import { SortModel } from "./sort.model";
export interface PageableModel {
  sort: SortModel;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unPaged: boolean;
  paged: boolean;
}
