import { ShareModule } from "./../share/share.module";
import { SignUpParentComponent } from "./containers/sign-up-parent/sign-up-parent.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as containers from "./containers";
import * as components from "./components";
import * as fromPrimeNg from "./PrimeNG";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
export const ROUTES: Routes = [
  {
    path: "",
    component: SignUpParentComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ...fromPrimeNg.modules,
    ShareModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
  ],
  declarations: [...containers.containers, ...components.components],
  exports: [...containers.containers, ...components.components],
})
export class SignUpModule {}
