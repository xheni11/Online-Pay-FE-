import { guards, AuthGuard } from './../auth/guards/index';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
