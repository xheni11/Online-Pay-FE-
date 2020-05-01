import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "../services/authetication.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    const helper = new JwtHelperService();

    const isExpired =currentUser? helper.isTokenExpired(currentUser.token):true;
    if (!isExpired) {
      // check if route is restricted by role
      if (
        route.data.roles &&
        route.data.roles.indexOf(currentUser.roles) === -1
      ) {
        // Redirect to acces denied.
        this.router.navigate(["/login"]);
        return false;
      }

      // authorised so return true
      return true;
    }
    this.authenticationService.logout();
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"] );
    return false;
  }
}
