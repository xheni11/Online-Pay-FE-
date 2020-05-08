import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  constructor() {}

  static isRouteAnimationsType(status: string) {
    // return AnimationsService.routeAnimationType === type;
    return true;
  }
}

export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
