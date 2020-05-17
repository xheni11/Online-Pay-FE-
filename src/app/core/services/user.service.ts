import { SignUpResponseModel } from "./../models/responses/sign-up-response";
import { catchError } from "rxjs/operators";
import { retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { SignUpModel } from "./../models/requests/sign-up.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly URL: string = environment.baseUrl + "/user/signUp";
  constructor(private http: HttpClient) {}

  signUp(user: SignUpModel): Observable<SignUpResponseModel> {
    return this.http.post<SignUpResponseModel>(`${this.URL}`, user).pipe(
      retry(1),
      catchError((error: any) => throwError(error))
    );
  }
}
