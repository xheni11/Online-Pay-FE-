import { LoginResponse } from './../models/login-response.model';
import { LoginRequest } from './../models/login-request.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";


@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private readonly URL: string = environment.baseUrl + "/login";
  private readonly CURRENT_USER = "currentUser";

  private currentUserSubject: BehaviorSubject<LoginResponse>;
  public currentUser: Observable<LoginResponse>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(
      JSON.parse(localStorage.getItem(this.CURRENT_USER))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginResponse {
    return this.currentUserSubject.value;
  }

  login(
loginReq:LoginRequest
  ): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.URL,loginReq)
      .pipe(
        map((user) => {
          
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.CURRENT_USER);
    this.currentUserSubject.next(null);
  }
}
