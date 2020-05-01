import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ROUTE_ANIMATIONS_ELEMENTS } from "./../../../../app-module/animations/route.animations";
import { Card } from "../../../../core/models/responses/card.model";
import { ProductService } from "src/app/core/services/product.service";
import { Product } from "src/app/core/models/responses/product.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean>;
  searchKey: string;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  totalEntities: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  products$: Observable<Product[]>;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.totalEntities = 20;
    this.totalPages = 4;
    this.currentPage = 1;
    this.perPage = 6;
    this.products$ = this.productService.getProducts();
  }
  onPrevPage() {
    this.currentPage--;
    // this.listUsers(this.currentPage);
  }

  onNextPage() {
    this.currentPage++;
    // this.listUsers(this.currentPage);
  }

  onPage(page: number) {
    this.currentPage = page;
    // this.listUsers(this.currentPage);
  }
  search(event: string) {}
}
