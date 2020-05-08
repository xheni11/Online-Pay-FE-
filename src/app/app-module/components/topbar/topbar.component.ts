import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../containers/app/app.component";
import { AuthenticationService } from "src/app/auth/services/authetication.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  constructor(
    public app: AppComponent,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}
  isUserLoggedIn() {
    return this.authService.currentUserValue;
  }
}
