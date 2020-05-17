import { Component, OnInit, OnDestroy } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";
import { ProductOrderModel } from "src/app/core/models/requests/product-order.model";

@Component({
  selector: "app-order-parent",
  templateUrl: "./order-parent.component.html",
  styleUrls: ["./order-parent.component.css"],
})
export class OrderParentComponent implements OnInit, OnDestroy {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  product: ProductOrderModel;
  constructor() {}

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem("ProductOrder"));
    // getProductOrder().subscribe(product=>this.product=product);
  }
  ngOnDestroy(): void {
    localStorage.removeItem("ProductOrder");
  }
}
