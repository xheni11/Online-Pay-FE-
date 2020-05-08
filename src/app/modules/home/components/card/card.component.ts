import { SafeResourceUrl } from "@angular/platform-browser";
import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../../../core/models/responses/card.model";
import { ROUTE_ANIMATIONS_ELEMENTS } from "./../../../../../app/app-module/animations/route.animations";
import { Router } from "@angular/router";
import { Product } from "src/app/core/models/responses/product.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() card: Product;
  @Input() animationStatus = false;
  @Input() url: SafeResourceUrl;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  isWishButtonClicked: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isWishButtonClicked = true;
  }

  public changeStatus(status: boolean) {
    this.animationStatus = status;
  }
  onAddToWish() {
    this.isWishButtonClicked
      ? (this.isWishButtonClicked = false)
      : (this.isWishButtonClicked = true);
  }
  goToProduct() {
    this.router.navigateByUrl(`/product/${this.card.id}`);
  }
}
