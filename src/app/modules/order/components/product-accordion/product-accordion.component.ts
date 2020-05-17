import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ProductOrderModel } from "src/app/core/models/requests/product-order.model";

@Component({
  selector: "app-product-accordion",
  templateUrl: "./product-accordion.component.html",
  styleUrls: ["./product-accordion.component.scss"],
})
export class ProductAccordionComponent implements OnInit, OnChanges {
  totalValue: number;
  constructor() {}

  @Input() product: ProductOrderModel;

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.totalValue = this.product.price * this.product.selectedQuantity;
  }
}
