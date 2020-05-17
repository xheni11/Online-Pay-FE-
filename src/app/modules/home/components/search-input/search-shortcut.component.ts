import { AscDesc } from "./../../../share/helpers/constants/asc-desc.constants";
import { SortValueModel } from "./../../../../core/models/requests/sort-values";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "src/app/app-module/animations/route.animations";
import { SelectItemGroup } from "primeng";

@Component({
  selector: "app-search-shortcut",
  templateUrl: "./search-shortcut.component.html",
  styleUrls: ["./search-shortcut.component.scss"],
})
export class SearchShortcutComponent implements OnInit {
  @Input() animationStatus = false;
  @Output() searching: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSortBy: EventEmitter<SortValueModel> = new EventEmitter<
    SortValueModel
  >();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  sortedOptions: SelectItemGroup[];
  selectedOption: SortValueModel;
  constructor() {}
  search: string;

  ngOnInit(): void {
    this.sortedOptions = [
      {
        label: "Price",
        items: [
          {
            label: "Lowest to highest",
            value: { columnName: "price", optionAscOrDesc: AscDesc.asc },
          },
          {
            label: "Highest to lowest",
            value: { columnName: "price", optionAscOrDesc: AscDesc.desc },
          },
        ],
      },
      {
        label: "Date",
        items: [
          {
            label: "Newest",
            value: {
              columnName: "audit.date.createdOn",
              optionAscOrDesc: AscDesc.desc,
            },
          },
          {
            label: "Oldest",
            value: {
              columnName: "audit.date.createdOn",
              optionAscOrDesc: AscDesc.asc,
            },
          },
        ],
      },
    ];
  }
  changeStatus(status: boolean) {
    this.animationStatus = status;
  }
  onSearch(): void {
    this.searching.emit(this.search.trim());
  }
  sortBy() {
    console.log(this.selectedOption);
    this.onSortBy.emit(this.selectedOption);
  }
}
