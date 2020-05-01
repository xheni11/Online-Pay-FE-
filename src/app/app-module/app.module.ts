import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
// Bootstrap
import { AppComponent } from "./containers/app/app.component";

// Container
import * as fromContainers from "./containers";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Components
import * as fromComponents from "./components";
import * as fromPrimeNg from "./PrimeNG/index";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...fromPrimeNg.modules,
    ReactiveFormsModule,
  ],
  providers: [...fromPrimeNg.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
