import { PaginatorConfig } from "../../../share/helpers/constants/pagination-config";
import { DomSanitizer } from "@angular/platform-browser";
import { AWSService } from "src/app/core/services/AWS.service";
import { ContentProductModel } from "./../../../../core/models/responses/content-product.model";
import { Component, OnInit, OnChanges } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ROUTE_ANIMATIONS_ELEMENTS } from "./../../../../app-module/animations/route.animations";
import { ProductService } from "src/app/core/services/product.service";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { convertUint8ArrayToBase64 } from "src/app/modules/share/helpers/functions/image-converter";
import { SortValueModel } from "src/app/core/models/requests/sort-values";

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
  productsContent$: Observable<ContentProductModel>;
  products: ProductModel[];
  base64String: string;
  constructor(
    private productService: ProductService,
    private awsService: AWSService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.currentPage = 0;
    this.perPage = PaginatorConfig.size;
    this.productsContent$ = this.productService.getProducts(this.currentPage);
    this.getProducts(this.productsContent$);
  }

  onPrevPage() {
    this.currentPage--;
    this.productsContent$ = this.productService.getProducts(this.currentPage);
    this.getProducts(this.productsContent$);
  }

  onNextPage() {
    this.currentPage++;
    this.productsContent$ = this.productService.getProducts(this.currentPage);
    this.getProducts(this.productsContent$);
  }

  onPage(page: number) {
    this.currentPage = page;
    this.productsContent$ = this.productService.getProducts(this.currentPage);
    this.getProducts(this.productsContent$);
  }
  search(event: string) {}
  onSortBy(sortValue: SortValueModel) {
    this.productsContent$ = this.productService.getProducts(
      this.currentPage,
      sortValue
    );
    this.getProducts(this.productsContent$);
  }
  getProducts(productsContent$: Observable<ContentProductModel>) {
    productsContent$.subscribe((content) => {
      console.log(content);
      this.totalEntities = content.totalElements;
      this.totalPages = content.totalPages;
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
}
