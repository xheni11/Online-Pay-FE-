import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"],
})
export class PaginatorComponent implements OnInit {
  @Input() totalEntities: number;
  @Input() currentPage: number;
  @Input() perPage: number;
  @Input() totalPages: number;
  @Input() hasPagination: boolean;
  @Output() onNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() onPrev: EventEmitter<number> = new EventEmitter<number>();
  @Output() onPage: EventEmitter<number> = new EventEmitter<number>();
  columnMaps: {
    columnName: string;
    header?: string;
  }[];

  constructor() {}

  ngOnInit() {}

  goNext(page: number) {
    this.onNext.emit(page);
  }

  goPrev(page: number) {
    this.onPrev.emit(page);
  }

  goPage(page: number) {
    this.onPage.emit(page);
  }

  getMin(): number {
    return this.perPage * (this.currentPage + 1) - this.perPage + 1;
  }

  getMax(): number {
    let max = this.perPage * (this.currentPage + 1);
    if (max > this.totalEntities) {
      max = this.totalEntities;
    }
    return max;
  }

  lastPage(): boolean {
    return this.perPage * (this.currentPage + 1) > this.totalEntities - 1;
  }

  listPages(): number[] {
    const pages: number[] = [];
    for (let value = 1; value <= this.totalPages; value++) {
      pages.push(value);
    }
    return pages;
  }
}
