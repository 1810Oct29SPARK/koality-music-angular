import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  CanLoad,
  CanActivateChild
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForbidGuard implements CanActivate, CanActivateChild, CanLoad {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return false;
  }

  canLoad(route: Route): boolean {
    return false;
  }

}
