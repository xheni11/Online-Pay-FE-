import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { SignUpModel } from "./../../../../core/models/requests/sign-up.model";

import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-sign-up-parent",
  templateUrl: "./sign-up-parent.component.html",
  styleUrls: ["./sign-up-parent.component.css"],
})
export class SignUpParentComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {}
  onSignUp(signUpModel: SignUpModel) {
    this.userService.signUp(signUpModel).subscribe((data) => {
      if (data) {
        this.route.navigate(["/login"]);
      } else {
        console.log("Error"); //TODO manage errors
      }
    });
  }
}
