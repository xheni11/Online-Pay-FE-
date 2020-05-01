import { Component, Input, OnInit } from "@angular/core";
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
    required: () => 'Fusha "' + this.fieldName + '" është e detyrueshme!',
    minlength: () =>
      "Minimumi i karakterve të lejuara është " + this.minLength + "! ",
    maxlength: () =>
      "Maksimumi i karakterve të lejuara është " + this.maxLength + "! ",
    pattern: () => 'Fusha "' + this.fieldName + this.patternText + "!",
    min: () => "Minimumi që mund të vendosni është " + this.min + "!",
    max: () => "Maksimumi që mund të vendosni u tejkalua!",
    email: () => 'Fusha "Email" nuk është në formatin e duhur!',
    usernameTaken: () => "Ekziston një përdorues tjetër me këtë emër!",
    internalIdTaken: () =>
      "Ekziston një " + this.patternText + " tjetër me këtë Internal Id!",
    mustMatch: () => "Duhet te perputhen fjalekalimet!",
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
