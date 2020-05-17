import { SortValueModel } from "./../models/requests/sort-values";
import { PaginatorConfig } from "../../modules/share/helpers/constants/pagination-config";
import { ContentProductModel } from "./../models/responses/content-product.model";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError, of } from "rxjs";
import { ProductModel } from "../models/responses/product.model";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly URL: string = environment.baseUrl + "/product";
  products: ProductModel[];
  product: ProductModel;
  constructor(private http: HttpClient) {}

  getProducts(
    currentPage: number,
    sortModel?: SortValueModel
  ): Observable<ContentProductModel> {
    if (sortModel) {
      return this.http
        .get<ContentProductModel>(
          `${this.URL}?page=${currentPage}&size=${PaginatorConfig.size}&sort=${sortModel.columnName},${sortModel.optionAscOrDesc}`
        )
        .pipe(
          retry(1),
          catchError((error: any) => throwError(error))
        );
    } else {
      return this.http
        .get<ContentProductModel>(
          `${this.URL}?page=${currentPage}&size=${PaginatorConfig.size}`
        )
        .pipe(
          retry(1),
          catchError((error: any) => throwError(error))
        );
    }
  }
  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.URL}/${id}`).pipe(
      retry(1),
      catchError((error: any) => throwError(error))
    );
  }

  getWishList(
    currentPage: number,
    sortModel?: SortValueModel
  ): Observable<ContentProductModel> {
    if (sortModel) {
      return this.http
        .get<ContentProductModel>(
          `${this.URL}?page=${currentPage}&size=${PaginatorConfig.size}&sort=${sortModel.columnName},${sortModel.optionAscOrDesc}`
        )
        .pipe(
          retry(1),
          catchError((error: any) => throwError(error))
        );
    } else {
      return this.http
        .get<ContentProductModel>(
          `${this.URL}?page=${currentPage}&size=${PaginatorConfig.size}`
        )
        .pipe(
          retry(1),
          catchError((error: any) => throwError(error))
        );
    }
  }
}
