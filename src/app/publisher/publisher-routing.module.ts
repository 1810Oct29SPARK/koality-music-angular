import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublisherHomeComponent } from './publisher-home/publisher-home.component';
import { PublisherDashboardComponent } from './publisher-dashboard/publisher-dashboard.component';
import { PublisherProfileEditComponent } from './publisher-profile-edit/publisher-profile-edit.component';
import { PublisherPublishTrackComponent } from './publisher-publish-track/publisher-publish-track.component';
import { PublisherPublishAlbumComponent } from './publisher-publish-album/publisher-publish-album.component';
import { PublisherTrackListComponent } from './publisher-track-list/publisher-track-list.component';
import { PublisherAlbumListComponent } from './publisher-album-list/publisher-album-list.component';
import { PublisherSubscribersComponent } from './publisher-subscribers/publisher-subscribers.component';
import { PublisherTrackReviewsComponent } from './publisher-track-reviews/publisher-track-reviews.component';
import { PublisherAlbumReviewsComponent } from './publisher-album-reviews/publisher-album-reviews.component';

import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: PublisherHomeComponent, children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard', component: PublisherDashboardComponent },
          { path: 'profile-edit', component: PublisherProfileEditComponent },
          { path: 'publish-track', component: PublisherPublishTrackComponent },
          { path: 'publish-album', component: PublisherPublishAlbumComponent },
          { path: 'track-list', component: PublisherTrackListComponent },
          { path: 'track-review', component: PublisherTrackReviewsComponent },
          { path: 'album-list', component: PublisherAlbumListComponent },
          { path: 'album-review', component: PublisherAlbumReviewsComponent },
          { path: 'subscribers', component: PublisherSubscribersComponent },
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
export class PublisherRoutingModule { }
