import { ShippingInformationComponent } from "./containers/shipping-information/shipping-information.component";
import { Routes, RouterModule } from "@angular/router";
import { ShareModule } from "./../share/share.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as containers from "./containers";
import * as components from "./components";
import * as fromPrimeNg from "./PrimeNG";
export const ROUTES: Routes = [
  {
    path: "",
    component: ShippingInformationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ...fromPrimeNg.modules,
    ShareModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [...containers.containers, ...components.components],
  exports: [...containers.containers, ...components.components],
})
export class ShippingInformationModule {}
