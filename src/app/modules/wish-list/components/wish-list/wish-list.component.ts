import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { SafeResourceUrl } from "@angular/platform-browser";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
  styleUrls: ["./wish-list.component.css"],
})
export class WishListComponent implements OnInit {
  @Input() products: ProductModel[];
  @Input() animationStatus = false;
  // @Input() url: SafeResourceUrl;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProduct() {
    //  this.router.navigateByUrl(`/product/${this.card.id}`);
  }
}
