import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Message } from "primeng//api";

import {
  routeAnimations,
  ROUTE_ANIMATIONS_ELEMENTS,
} from "./../../animations/route.animations";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
  animations: [routeAnimations],
})
export class BodyComponent implements OnInit, OnChanges {
  // @Input() user: User;
  msgs: Message[];
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {
    this.msgs = [];
  }
  ngOnChanges(changes: SimpleChanges) {
    // this.user = changes.user.currentValue;
  }

  public getRouteAnimation(outlet: RouterOutlet) {
    return (
      outlet.isActivated &&
      outlet.activatedRoute.routeConfig.data &&
      outlet.activatedRoute.routeConfig.data.title &&
      outlet.isActivated &&
      outlet.activatedRoute.firstChild &&
      outlet.activatedRoute.firstChild.routeConfig.data &&
      outlet.activatedRoute.firstChild.routeConfig.data.title
    );
  }
  animationEnds(event: any) {}

  // TODO: If is needed. Remove otherways in production. Just for message
  setTimeoutAlert() {
    setTimeout(() => {
      this.msgs = [];
    }, 1000);
  }
}
