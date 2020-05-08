import { SafeResourceUrl } from "@angular/platform-browser";
import { DomSanitizer } from "@angular/platform-browser";
import { AWSService } from "src/app/core/services/AWS.service";
import { ContentProduct } from "./../../../../core/models/responses/content-product.model";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ROUTE_ANIMATIONS_ELEMENTS } from "./../../../../app-module/animations/route.animations";
import { Card } from "../../../../core/models/responses/card.model";
import { ProductService } from "src/app/core/services/product.service";
import { Product } from "src/app/core/models/responses/product.model";
import { convertUint8ArrayToBase64 } from "src/app/modules/share/helpers/image-converter";

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
  productsContent$: Observable<ContentProduct>;
  products: Product[];
  base64String: string;
  constructor(
    private productService: ProductService,
    private awsService: AWSService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.totalEntities = 20;
    this.totalPages = 4;
    this.currentPage = 1;
    this.perPage = 6;
    this.productsContent$ = this.productService.getProducts();
    this.productsContent$.subscribe((content) => {
      this.products = content.content;
      this.products.forEach((item) =>
        this.awsService.downloadFile(item.photo.name, item.id).then((data) => {
          this.base64String = convertUint8ArrayToBase64(
            data.Body,
            data.ContentLength
          );
          item.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
            "data:" + data.ContentType + ";base64," + this.base64String
          );
        })
      );
    });
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
