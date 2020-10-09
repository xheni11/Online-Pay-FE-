import { Routes, RouterModule } from "@angular/router";
import { ShareModule } from "./../share/share.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WishListParentComponent } from "./containers/wish-list-parent/wish-list-parent.component";
import * as component from "./components";
import * as containers from "./containers";
import * as primeNG from "./PrimeNG";
export const ROUTES: Routes = [
  {
    path: "",
    component: WishListParentComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ...primeNG.modules,
    ShareModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [...component.components, ...containers.containers],
  exports: [...component.components, ...containers.containers],
})
export class WishListModule {}
