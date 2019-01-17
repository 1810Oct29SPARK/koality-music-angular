import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import {
  MDBBootstrapModule,
  ButtonsModule,
  CollapseModule,
  WavesModule,
  TableModule,
  MdbTablePaginationComponent
} from 'angular-bootstrap-md';

import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';

import { AuthService } from './services/auth.service';
import { StatsService } from './services/stats.service';
import { TrackService } from './services/track.service';
import { AlbumService } from './services/album.service';
import { ReviewService } from './services/review.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    TableModule,
    ButtonsModule,
    CollapseModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule,
    WavesModule,
    TableModule,
    ButtonsModule,
    CollapseModule,
    MdbTablePaginationComponent
  ],
  providers: [
    AuthService,
    StatsService,
    TrackService,
    AlbumService,
    ReviewService
  ]
})
export class CoreModule { }
