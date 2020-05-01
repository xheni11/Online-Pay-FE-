import { ShareModule } from "./../share/share.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// Components
import * as homeComponents from "./components";
import { HomeComponent } from "./containers/home/home.component";
// PrimeNG Modules
import * as fromPrimeNG from "./PrimeNG";
// Services

// Routes
export const ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "home" },
  },
  
];

@NgModule({
  declarations: [HomeComponent, ...homeComponents.components],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ShareModule,
    ...fromPrimeNG.modules,
  ],
  providers: [],
})
export class HomeModule {}
