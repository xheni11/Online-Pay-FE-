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
  @Output() onNext: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onPrev: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onPage: EventEmitter<number> = new EventEmitter<number>();
  columnMaps: {
    columnName: string;
    header?: string;
  }[];

  constructor() {}

  ngOnInit() {}

  goNext() {
    this.onNext.emit(true);
  }

  goPrev() {
    this.onPrev.emit(true);
  }

  goPage(page: number) {
    this.onPage.emit(page);
  }

  getMin(): number {
    return this.perPage * this.currentPage - this.perPage + 1;
  }

  getMax(): number {
    let max = this.perPage * this.currentPage;
    if (max > this.totalEntities) {
      max = this.totalEntities;
    }
    return max;
  }

  lastPage(): boolean {
    return this.perPage * this.currentPage > this.totalEntities - 1;
  }

  listPages(): number[] {
    const pages: number[] = [];
    for (let value = 1; value <= this.totalPages; value++) {
      pages.push(value);
    }
    return pages;
  }
}
