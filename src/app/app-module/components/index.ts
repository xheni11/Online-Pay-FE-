import { NotAccessComponent } from "./no-access/403.component";
import { NotFoundComponent } from "./not-found/404.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { SideBarTabContentComponent } from "./sidebar-tab-content/sidebar-tab-content.component";
import { AppMenuComponent } from "./menu/menu.component";
import { SubMenuComponent } from "./submenu/submenu.component";
export const components: any[] = [
  TopbarComponent,
  BodyComponent,
  FooterComponent,
  SideBarTabContentComponent,
  AppMenuComponent,
  SubMenuComponent,
  NotFoundComponent,
  NotAccessComponent,
];

export * from "./topbar/topbar.component";
export * from "./body/body.component";
export * from "./footer/footer.component";
export * from "./sidebar-tab-content/sidebar-tab-content.component";
export * from "./menu/menu.component";
export * from "./submenu/submenu.component";
export * from "./not-found/404.component";
export * from "./no-access/403.component";
