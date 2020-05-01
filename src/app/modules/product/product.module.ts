import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareModule } from "../share/share.module";
import * as fromPrimeNG from "./PrimeNG";
import { ProductParentComponent } from "./containers/product-parent.component";
export const ROUTES: Routes = [
  {
    path: ":id",
    component: ProductParentComponent
    /*     children: [{ path: ":id", component: ProductComponent, data:{title:'product'} },
  ], */
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    ...fromPrimeNG.modules,
  ],
  declarations: [ProductComponent, ProductParentComponent],
  exports: [ProductParentComponent, ProductComponent],
})
export class ProductModule {}
