import { LoginRequest } from "./../../models/login-request.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authetication.service";
import { getCurrentRoute } from "src/app/modules/share/helpers/functions/current-route";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";
  rememberMe: boolean;
  loginReq: LoginRequest;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/home"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/login";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onCheckChange(event) {
    if (event.target.checked) {
      this.rememberMe = !this.rememberMe;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.loginReq = {
      username: this.f.userName.value,
      password: this.f.password.value,
    };
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.loginReq)
      .pipe(first())
      .subscribe(
        (data) => {
          this.returnUrl = getCurrentRoute() ? getCurrentRoute() : "/home";
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.loginForm.reset();
          this.error = error;
          this.loading = false;
        }
      );
  }
  onSignUp() {
    this.router.navigate(["/signUp"]);
  }
}
