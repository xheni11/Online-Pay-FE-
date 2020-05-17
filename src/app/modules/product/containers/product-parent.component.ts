import { ImageModel } from "./../../../core/models/responses/image.model";
import { AuthenticationService } from "./../../../auth/services/authetication.service";
import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/core/services/product.service";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { setCurrentRoute } from "../../share/helpers/functions/current-route";
import { ProductOrderModel } from "src/app/core/models/requests/product-order.model";
import { Observable, of } from "rxjs";
import { LoginResponse } from "src/app/auth/models/login-response.model";
import { AWSService } from "src/app/core/services/AWS.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { convertUint8ArrayToBase64 } from "../../share/helpers/functions/image-converter";

@Component({
  selector: "app-product-parent",
  templateUrl: "./product-parent.component.html",
})
export class ProductParentComponent implements OnInit {
  product$: Observable<ProductModel>;
  productForm: FormGroup;
  images: any[];
  sizes: SelectItem[];
  colors: SelectItem[];
  quantities: SelectItem[];
  imageUrl: SafeResourceUrl;
  base64String: string;
  mainImage: any;
  productImages: ImageModel[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthenticationService,
    private router: Router,
    private awsService: AWSService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.productImages = [];
    this.images = [];
    this.product$ = this.productService.getProduct(
      +this.route.snapshot.url[0].path
    );

    this.product$.subscribe((product) => {
      const productImages = product.photos;
      productImages.forEach((item) => {
        this.awsService.downloadFile(item.name, product.id).then((data) => {
          this.base64String = convertUint8ArrayToBase64(
            data.Body,
            data.ContentLength
          );
          this.imageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
            "data:" + data.ContentType + ";base64," + this.base64String
          );
          this.mainImage = { url: this.imageUrl };
          this.images.push({
            url: this.imageUrl,
          });
        });
      });
    });
  }
  onBuy(product: ProductOrderModel) {
    let user: LoginResponse;
    this.authService.currentUser.subscribe((us) => (user = us));
    setCurrentRoute(this.router.url);
    if (!user) {
      this.router.navigateByUrl("/login");
    } else {
      localStorage.setItem("ProductOrder", JSON.stringify(product));
      // setProductOrder(of(product));
      this.router.navigateByUrl(`/order/${product.id}`);
    }
  }
}
