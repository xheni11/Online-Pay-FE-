import { Component, OnInit } from "@angular/core";
import { SortValueModel } from "src/app/core/models/requests/sort-values";
import { ContentProductModel } from "src/app/core/models/responses/content-product.model";
import { Observable } from "rxjs";
import { convertUint8ArrayToBase64 } from "src/app/modules/share/helpers/functions/image-converter";
import { PaginatorConfig } from "src/app/modules/share/helpers/constants/pagination-config";
import { AWSService } from "src/app/core/services/AWS.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";
import { WishListService } from "src/app/core/services/wish-list.service";

@Component({
  selector: "app-wish-list-parent",
  templateUrl: "./wish-list-parent.component.html",
  styleUrls: ["./wish-list-parent.component.css"],
})
export class WishListParentComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  totalEntities: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  productsContent$: Observable<ContentProductModel>;
  products: ProductModel[];
  base64String: string;
  constructor(
    private wishListService: WishListService,
    private awsService: AWSService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.currentPage = 0;
    this.perPage = PaginatorConfig.size;
    this.productsContent$ = this.wishListService.getWishList(this.currentPage);
    this.getWishList(this.productsContent$);
  }

  onPrevPage() {
    this.currentPage--;
    this.productsContent$ = this.wishListService.getWishList(this.currentPage);
    this.getWishList(this.productsContent$);
  }

  onNextPage() {
    this.currentPage++;
    this.productsContent$ = this.wishListService.getWishList(this.currentPage);
    this.getWishList(this.productsContent$);
  }

  onPage(page: number) {
    this.currentPage = page;
    this.productsContent$ = this.wishListService.getWishList(this.currentPage);
    this.getWishList(this.productsContent$);
  }
  search(event: string) {}
  onSortBy(sortValue: SortValueModel) {
    this.productsContent$ = this.wishListService.getWishList(
      this.currentPage,
      sortValue
    );
    this.getWishList(this.productsContent$);
  }
  getWishList(productsContent$: Observable<ContentProductModel>) {
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
