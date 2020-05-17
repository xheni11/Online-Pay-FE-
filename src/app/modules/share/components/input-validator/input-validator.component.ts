import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-input-validator",
  templateUrl: "./input-validator.component.html",
  styleUrls: ["./input-validator.component.scss"],
})
export class InputValidatorComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() fieldName: string;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() patternText?: string;
  @Input() min?: number;
  private readonly errorMessages = {
    required: () => 'Field "' + this.fieldName + '" is required!',
    minlength: () =>
      "Minimum of characters allowed is  " + this.minLength + "! ",
    maxlength: () =>
      "Maximum of characters allowed is " + this.maxLength + "! ",
    pattern: () => 'Fusha "' + this.fieldName + this.patternText + "!",
    min: () => "The minimum required is  " + this.min + "!",
    max: () => "The maximum required is over!",
    email: () => 'Field "Email" is not in the required format!',
    mustMatch: () => "Passwords must match!",
  };

  constructor() {}

  ngOnInit() {}

  showErrorMsg(): boolean {
    return this.control.touched && this.control.errors != null;
  }

  listOfErrors(): string[] {
    return Object.keys(
      this.control.touched && this.control.errors
    ).map((field) =>
      this.getMessage(field, this.control.touched && this.control.errors[field])
    );
  }

  private getMessage(type: string, params: any) {
    return this.errorMessages[type](params);
  }
}
