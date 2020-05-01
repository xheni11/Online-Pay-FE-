
import { AuthenticationService } from "./../../../auth/services/authetication.service";
import { MessageService } from "primeng/api";
import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/core/services/product.service";
import { Product } from "src/app/core/models/responses/product.model";
import { setCurrentRoute } from "../../share/helpers/current-route";
import { ProductOrder } from "src/app/core/models/requests/product-order.model";
import { Observable, of } from 'rxjs';
import { LoginResponse } from 'src/app/auth/models/login-response.model';
import { setProductOrder } from '../../share/helpers/temp-order';


@Component({
  selector: "app-product-parent",
  templateUrl: "./product-parent.component.html",
})
export class ProductParentComponent implements OnInit {
  product$: Observable<Product>;
  productForm: FormGroup;
  images: any[];
  sizes: SelectItem[];
  colors: SelectItem[];
  quantities: SelectItem[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
     this.product$= this.productService
        .getProduct(+this.route.snapshot.url[0].path);     
  }
  onBuy(product: ProductOrder) {
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
