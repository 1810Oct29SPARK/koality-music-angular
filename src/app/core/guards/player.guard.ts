import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TrackService } from '../services/track.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerGuard implements CanActivate {

  constructor(public trackService: TrackService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.trackService.selectedTrack) {
      return true;
    } else {
      return false;
    }
  }

}
