import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AppComponent } from "../app/app.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  dashboardMenu: MenuItem[];

  constructor(public app: AppComponent) {}

  ngOnInit() {
    this.dashboardMenu = [
      { label: "Dashboard", icon: "pi pi-home", routerLink: ["/home"] },
    ];
  }
}
