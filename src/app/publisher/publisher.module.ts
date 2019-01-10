import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { MaterialModule } from '../material.module';

import { PublisherHomeComponent } from './publisher-home/publisher-home.component';
import { PublisherDashboardComponent } from './publisher-dashboard/publisher-dashboard.component';
import { PublisherProfileEditComponent } from './publisher-profile-edit/publisher-profile-edit.component';
import { PublisherPublishTrackComponent } from './publisher-publish-track/publisher-publish-track.component';
import { PublisherPublishAlbumComponent } from './publisher-publish-album/publisher-publish-album.component';
import { PublisherTrackListComponent } from './publisher-track-list/publisher-track-list.component';
import { PublisherTrackReviewsComponent } from './publisher-track-reviews/publisher-track-reviews.component';
import { PublisherAlbumListComponent } from './publisher-album-list/publisher-album-list.component';
import { PublisherAlbumReviewsComponent } from './publisher-album-reviews/publisher-album-reviews.component';
import { PublisherSubscribersComponent } from './publisher-subscribers/publisher-subscribers.component';

@NgModule({
  declarations: [
    PublisherHomeComponent,
    PublisherDashboardComponent,
    PublisherProfileEditComponent,
    PublisherPublishTrackComponent,
    PublisherPublishAlbumComponent,
    PublisherTrackListComponent,
    PublisherTrackReviewsComponent,
    PublisherAlbumListComponent,
    PublisherAlbumReviewsComponent,
    PublisherSubscribersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
