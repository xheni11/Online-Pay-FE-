import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { LoginResponse } from '../models/login-response.model';


@Injectable({ providedIn: "root" })
export class UserService {
  private readonly URL: string = environment + "/users";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<LoginResponse[]>(this.URL);
  }

  getById(id: number) {
    return this.http.get<LoginResponse>(`${this.URL}/${id}`);
  }
}
