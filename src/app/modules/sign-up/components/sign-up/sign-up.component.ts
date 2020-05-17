import { SignUpModel } from "./../../../../core/models/requests/sign-up.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { MustMatch } from "src/app/modules/share/helpers/functions/custom-validators";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  @Output() onSignUp: EventEmitter<SignUpModel> = new EventEmitter<
    SignUpModel
  >();
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
        ]),
        lastName: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
        ]),
        userName: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.email,
          Validators.maxLength(20),
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
          Validators.pattern(
            "(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}"
          ),
        ]),
        confirmPassword: new FormControl("", Validators.required),
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }
  get firstNameControl() {
    return this.signUpForm.get("firstName") as FormControl;
  }

  get userNameControl() {
    return this.signUpForm.get("userName") as FormControl;
  }
  get emailControl() {
    return this.signUpForm.get("email") as FormControl;
  }
  get lastNameControl() {
    return this.signUpForm.get("lastName") as FormControl;
  }
  get passwordControl() {
    return this.signUpForm.get("password") as FormControl;
  }
  get confirmPasswordControl() {
    return this.signUpForm.get("confirmPassword") as FormControl;
  }
  signUp() {
    if (this.signUpForm.valid) {
      const form = {
        username: this.signUpForm.value.userName,
        firstname: this.signUpForm.value.firstName,
        lastname: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      };
      console.log(form);
      this.onSignUp.emit(form);
    }
  }
}
