import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { AuthenticationService } from "../services/authetication.service";
import { MessageService } from "primeng/api";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // Add message for notification
          this.messageService.clear();
          this.messageService.add(err.message);

          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authenticationService.logout();

          // Navigate to login component
          if (this.router.url !== "/home") {
            this.router.navigate(["/home"]);
          }
        }

        const error = err.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
