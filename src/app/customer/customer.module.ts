import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.module';

import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';
import { CustomerStoreFrontComponent } from './customer-store-front/customer-store-front.component';
import { CustomerStoreTracksComponent } from './customer-store-tracks/customer-store-tracks.component';
import { CustomerStoreAlbumsComponent } from './customer-store-albums/customer-store-albums.component';
import { CustomerTrackListComponent } from './customer-track-list/customer-track-list.component';
import { CustomerAlbumListComponent } from './customer-album-list/customer-album-list.component';
import { CustomerPlaylistListComponent } from './customer-playlist-list/customer-playlist-list.component';
import { CustomerPlaylistDetailComponent } from './customer-playlist-detail/customer-playlist-detail.component';
import { CustomerMusicPlayerComponent } from './customer-music-player/customer-music-player.component';
import { TableModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerDashboardComponent,
    CustomerProfileEditComponent,
    CustomerStoreFrontComponent,
    CustomerStoreTracksComponent,
    CustomerStoreAlbumsComponent,
    CustomerTrackListComponent,
    CustomerAlbumListComponent,
    CustomerPlaylistListComponent,
    CustomerPlaylistDetailComponent,
    CustomerMusicPlayerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    WavesModule,
    CustomerRoutingModule,
    NgbModule
  ]
})
export class CustomerModule { }
