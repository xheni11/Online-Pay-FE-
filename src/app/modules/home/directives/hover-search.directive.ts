import { SearchShortcutComponent } from "./../components/search-input/search-shortcut.component";
import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[hover-search]",
})
export class HoverSearchDirective {
  constructor(
    public element: ElementRef,
    private renderer: Renderer2,
    private host: SearchShortcutComponent
  ) {}

  @HostListener("mouseenter")
  @Output()
  onHover() {
    this.renderer.addClass(this.element.nativeElement, "hover-search ");
    this.host.changeStatus(true);
  }

  @HostListener("mouseleave") onLeave() {
    this.renderer.removeClass(this.element.nativeElement, "hover-search ");
    this.host.changeStatus(false);
  }
}
