import { CardComponent } from './../components/card/card.component';
import {
  Directive,
  HostListener,
  Output,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[hover-card]'
})
export class HoverCardDirective {
  constructor(
    public element: ElementRef,
    private renderer: Renderer2,
    private host: CardComponent
  ) {}

  @HostListener('mouseenter')
  @Output()
  onHover() {
    this.renderer.addClass(this.element.nativeElement, 'hover-card');
    this.host.changeStatus(true);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'hover-card');
    this.host.changeStatus(false);
  }
}
