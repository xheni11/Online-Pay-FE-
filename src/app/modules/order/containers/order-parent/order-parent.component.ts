import { getProductOrder } from 'src/app/modules/share/helpers/temp-order';
import { Routes, ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ProductService } from "./../../../../core/services/product.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";
import { Product } from "src/app/core/models/responses/product.model";
import { Route } from "@angular/compiler/src/core";
import { ProductOrder } from 'src/app/core/models/requests/product-order.model';

@Component({
  selector: "app-order-parent",
  templateUrl: "./order-parent.component.html",
  styleUrls: ["./order-parent.component.css"],
})
export class OrderParentComponent implements OnInit,OnDestroy {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  product: ProductOrder;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
     this.product= JSON.parse(localStorage.getItem("ProductOrder"));
    // getProductOrder().subscribe(product=>this.product=product);
  }
  ngOnDestroy(): void {
   localStorage.removeItem("ProductOrder");
    
  }
}
