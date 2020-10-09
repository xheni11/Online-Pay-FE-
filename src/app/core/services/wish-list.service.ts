import { LoginResponse } from "./../../auth/models/login-response.model";
import { AuthenticationService } from "./../../auth/services/authetication.service";
import { Injectable } from "@angular/core";
import { SortValueModel } from "./../models/requests/sort-values";
import { PaginatorConfig } from "../../modules/share/helpers/constants/pagination-config";
import { ContentProductModel } from "./../models/responses/content-product.model";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError, of } from "rxjs";
import { ProductModel } from "../models/responses/product.model";
import { retry, catchError } from "rxjs/operators";
import { User } from "aws-sdk/clients/appstream";
@Injectable({
  providedIn: "root",
})
export class WishListService {
  private readonly URL: string = environment.baseUrl + "/product/wishList";
  products: ProductModel[];
  product: ProductModel;
  currentUser: LoginResponse;
  constructor(private http: HttpClient) {}
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
