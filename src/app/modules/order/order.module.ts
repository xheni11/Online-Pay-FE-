import * as components from "./components/index";
import * as containers from "./containers/index";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareModule } from "../share/share.module";
import * as fromPrimeNG from "./PrimeNG";
import { OrderParentComponent } from "./containers/order-parent/order-parent.component";
export const ROUTES: Routes = [
  {
    path: ":id",
    component: OrderParentComponent,
    data: { title: "order/id" },
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
  declarations: [...components.components, ...containers.containers],
  exports: [...components.components, ...containers.containers],
})
export class OrderModule {}
