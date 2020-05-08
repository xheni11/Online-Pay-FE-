import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-button",
  templateUrl: "./add-button.component.html",
  styleUrls: ["./add-button.component.css"],
})
export class AddButtonComponent implements OnInit {
  quantity: number;
  constructor() {}

  ngOnInit() {
    this.quantity = 1;
  }
  onPlus() {
    this.quantity++;
  }
  onMinus() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
