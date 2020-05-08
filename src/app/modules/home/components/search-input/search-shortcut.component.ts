import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";

@Component({
  selector: "app-search-shortcut",
  templateUrl: "./search-shortcut.component.html",
  styleUrls: ["./search-shortcut.component.scss"],
})
export class SearchShortcutComponent implements OnInit {
  @Input() animationStatus = false;
  @Output() searching: EventEmitter<string> = new EventEmitter<string>();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor() {}
  search: string;

  ngOnInit(): void {}
  public changeStatus(status: boolean) {
    this.animationStatus = status;
  }
  public onSearch(): void {
    this.searching.emit(this.search.trim());
  }
}
