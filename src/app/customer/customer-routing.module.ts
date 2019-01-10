import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';
import { CustomerStoreFrontComponent } from './customer-store-front/customer-store-front.component';
import { CustomerTrackListComponent } from './customer-track-list/customer-track-list.component';
import { CustomerAlbumListComponent } from './customer-album-list/customer-album-list.component';
import { CustomerPlaylistListComponent } from './customer-playlist-list/customer-playlist-list.component';
import { CustomerMusicPlayerComponent } from './customer-music-player/customer-music-player.component';

import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: CustomerHomeComponent, children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard', component: CustomerDashboardComponent },
          { path: 'profile-edit', component: CustomerProfileEditComponent },
          { path: 'store-front', component: CustomerStoreFrontComponent },
          { path: 'track-list', component: CustomerTrackListComponent },
          { path: 'album-list', component: CustomerAlbumListComponent },
          { path: 'playlist-list', component: CustomerPlaylistListComponent },
          { path: 'music-player', component: CustomerMusicPlayerComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
