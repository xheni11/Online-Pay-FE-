import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./components/login/login.component";

import { Routes, RouterModule } from "@angular/router";

// components
import * as fromComponents from "./components";

// Services
import * as fromServices from "./services";

// routes
export const ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { title: "login" },
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  declarations: [...fromComponents.components],
  providers: [...fromServices.services],
  exports: [...fromComponents.components],
})
export class AuthModule {}
