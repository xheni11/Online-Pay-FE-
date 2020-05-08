import { Routes, Router } from "@angular/router";
import { AuthenticationService } from "./../../../auth/services/authetication.service";
import { DOCUMENT } from "@angular/common";
import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { LoginResponse } from 'src/app/auth/models/login-response.model';


enum MenuOrientation {
  STATIC,
  OVERLAY,
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent
  implements AfterViewInit, OnDestroy, OnInit, AfterContentChecked {
  currentUser: LoginResponse;

  title: string = null;

  activeTabIndex = -1;

  sidebarActive = false;

  layoutMode: MenuOrientation = MenuOrientation.STATIC;

  topbarMenuActive: boolean;

  overlayMenuActive: boolean;

  staticMenuDesktopInactive: boolean;

  staticMenuMobileActive: boolean;

  rotateMenuButton: boolean;

  sidebarClick: boolean;

  topbarItemClick: boolean;

  menuButtonClick: boolean;

  activeTopbarItem: any;

  uiMode: string;

  documentClickListener: () => void;
  currentRoute: string;
  theme = "blue";

  constructor(
    public renderer: Renderer2,
    private route: Router,
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.changeTheme("light");

    this.setTitle();

    this.toggleTheme();
  }

  toggleTheme() {
    this.uiMode = localStorage.getItem("uiMode");
    this.document.body.classList.add(this.uiMode);
    this.document.body.classList.remove(
      this.uiMode === "dark" ? "light" : "dark"
    );
  }

  ngAfterViewInit() {
    this.documentClickListener = this.renderer.listen(
      "body",
      "click",
      (event) => {
        if (!this.topbarItemClick) {
          this.activeTopbarItem = null;
          this.topbarMenuActive = false;
        }

        if (
          !this.menuButtonClick &&
          !this.sidebarClick &&
          (this.overlay || !this.isDesktop())
        ) {
          this.sidebarActive = false;
        }

        this.topbarItemClick = false;
        this.sidebarClick = false;
        this.menuButtonClick = false;
      }
    );
  }
  ngAfterContentChecked(): void {
    this.currentRoute = this.route.url;
    // const body: HTMLElement = this.elRef.nativeElement.querySelector('body');
  }

  onTabClick(event: Event, index: number) {
    if (this.activeTabIndex === index) {
      this.sidebarActive = !this.sidebarActive;
    } else {
      this.activeTabIndex = index;
      this.sidebarActive = true;
    }

    event.preventDefault();
  }

  closeSidebar(event: Event) {
    this.sidebarActive = false;
    event.preventDefault();
  }

  onSidebarClick(event: Event) {
    this.sidebarClick = true;
  }

  onTopbarMenuButtonClick(event: Event) {
    this.topbarItemClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;

    event.preventDefault();
  }

  onMenuButtonClick(event: Event, index: number) {
    this.menuButtonClick = true;
    this.rotateMenuButton = !this.rotateMenuButton;
    this.topbarMenuActive = false;
    this.sidebarActive = !this.sidebarActive;

    if (this.layoutMode === MenuOrientation.OVERLAY) {
      this.overlayMenuActive = !this.overlayMenuActive;
    } else {
      if (this.isDesktop()) {
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
      } else {
        this.staticMenuMobileActive = !this.staticMenuMobileActive;
      }
    }

    if (this.activeTabIndex < 0) {
      this.activeTabIndex = 0;
    }

    event.preventDefault();
  }

  onTopbarItemClick(event: Event, item) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  onTopbarSearchItemClick(event: Event) {
    this.topbarItemClick = true;

    event.preventDefault();
  }

  onTopbarSubItemClick(event) {
    this.logout();
  }

  get overlay(): boolean {
    return this.layoutMode === MenuOrientation.OVERLAY;
  }

  changeToStaticMenu() {
    this.layoutMode = MenuOrientation.STATIC;
  }

  changeToOverlayMenu() {
    this.layoutMode = MenuOrientation.OVERLAY;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  private setTitle() {
    if (this.isDesktop()) {
      this.title = "Online Pay";
    } else {
      this.title = "MI";
    }
  }

  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }

  changeTheme(mode: string) {
    localStorage.setItem("uiMode", mode);
    this.toggleTheme();
  }

  logout() {
    //this.authenticationService.logout();
    // this.router.navigate(['/login']);
  }
}
