import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromComponents from "../share/components/index";
import * as fromPrimeNG from "./PrimeNG";
@NgModule({
  imports: [CommonModule, ...fromPrimeNG.modules],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
})
export class ShareModule {}
