import { Injectable } from '@angular/core';
import {
  Route,
  Router,
  CanActivate,
  CanActivateChild,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (state.url.includes('publisher')) {
      if (this.authService.currentPublisherId > 0) {
        console.log(this.authService.currentPublisherId + ' good to go');
        return true;
      } else {
        console.log('no go');
        this.router.navigate(['/login']);
        return false;
      }
    } else if (state.url.includes('customer')) {
      if (this.authService.currentCustomerId > 0) {
        console.log(this.authService.currentCustomerId + ' good to go');
        return true;
      } else {
        console.log('no go');
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      console.log('unknown route');
      this.router.navigate(['/login']);
      return false;
    }

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state);
  }

  canLoad(route: Route): boolean {

    if (route.path.includes('publisher')) {
      if (this.authService.currentPublisherId > 0) {
        console.log(this.authService.currentPublisherId + ' good to go');
        return true;
      } else {
        console.log('no go');
        this.router.navigate(['/login']);
        return false;
      }
    } else if (route.path.includes('customer')) {
      if (this.authService.currentCustomerId > 0) {
        console.log(this.authService.currentCustomerId + ' good to go');
        return true;
      } else {
        console.log('no go');
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      console.log('unknown route');
      this.router.navigate(['/login']);
      return false;
    }

  }

}
