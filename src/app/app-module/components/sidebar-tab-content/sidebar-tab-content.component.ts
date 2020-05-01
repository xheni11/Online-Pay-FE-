import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { ScrollPanel } from "primeng/scrollpanel";

@Component({
  selector: "app-sidebar-tab-content",
  templateUrl: "./sidebar-tab-content.component.html",
  styleUrls: ["./sidebar-tab-content.component.scss"],
})
export class SideBarTabContentComponent implements AfterViewInit {
  @ViewChild("scroller", { static: true })
  layoutMenuScrollerViewChild: ScrollPanel;

  ngAfterViewInit() {
    this.setLayoutMenuScrollerViewCild(100);
  }

  onClick(event: Event) {
    this.setLayoutMenuScrollerViewCild(450);
  }

  private setLayoutMenuScrollerViewCild(ms: number) {
    setTimeout(() => {
      this.layoutMenuScrollerViewChild.moveBar();
    }, ms);
  }
}
