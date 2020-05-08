
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError, of } from "rxjs";
import { Product } from "../models/responses/product.model";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly URL: string = environment.baseUrl + "/product";
  products: Product[];
  product: Product;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    
     return this.http.get<Product[]>(this.URL).pipe(
       retry(1),
       catchError((error: any) => throwError(error))
    );
  }
  getProduct(id: number): Observable<Product> {
    
      return this.http.get<Product>(`${this.URL}/${id}`).pipe(
      retry(1),
      catchError((error: any) => throwError(error))
    );
  } 
  

}
