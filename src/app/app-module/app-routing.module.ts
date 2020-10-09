import { WishListModule } from "./../modules/wish-list/wish-list.module";
import { ShippingInformationModule } from "./../modules/shipping-information/shipping-information.module";
import { guards, AuthGuard } from "./../auth/guards/index";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  {
    path: "home",
    loadChildren: () =>
      import("../modules/home/home.module").then((m) => m.HomeModule),
    data: {},
  },
  {
    path: "login",
    loadChildren: () => import("../auth/auth.module").then((m) => m.AuthModule),
    data: {},
  },
  {
    path: "product",
    loadChildren: () =>
      import("../modules/product/product.module").then((m) => m.ProductModule),
    data: {},
  },
  {
    path: "order",
    loadChildren: () =>
      import("../modules/order/order.module").then((m) => m.OrderModule),
    data: {},
    canActivate: [AuthGuard],
  },
  {
    path: "shippingInformation",
    loadChildren: () =>
      import(
        "../modules/shipping-information/shipping-information.module"
      ).then((m) => m.ShippingInformationModule),
    data: {},
    canActivate: [AuthGuard],
  },
  {
    path: "signUp",
    loadChildren: () =>
      import("../modules/sign-up/sign-up.module").then((m) => m.SignUpModule),
    data: {},
  },
  {
    path: "wishList",
    loadChildren: () =>
      import("../modules/wish-list/wish-list.module").then(
        (m) => m.WishListModule
      ),
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
