import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

import { Album } from 'src/app/shared/models/album';
import { Track } from 'src/app/shared/models/track';
import { TrackReview } from 'src/app/shared/models/track-review';
import { AlbumReview } from 'src/app/shared/models/album-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  selectedAlbum: Album = null;
  selectedTrack: Track = null;

  constructor(public http: HttpClient, public authService: AuthService) { }

  postTrackReview(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post(AuthService.baseUrl + 'track-review', JSON.stringify(requestBody));

  }

  postAlbumReview(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post(AuthService.baseUrl + 'album-review', JSON.stringify(requestBody));

  }

  deleteTrackReview(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.request('delete', AuthService.baseUrl + 'track-review', { body: JSON.stringify(requestBody) });

  }

  deleteAlbumReview(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.request('delete', AuthService.baseUrl + 'album-review', { body: JSON.stringify(requestBody) });

  }

  getTrackReviews(trackId: number): Observable<TrackReview[]> {

    const requestBody = { 'publisherId': this.authService.currentPublisherId };

    return this.http.post<TrackReview[]>(AuthService.baseUrl + 'reviews-track/' + trackId, JSON.stringify(requestBody));

  }

  getAlbumReviews(albumId: number): Observable<AlbumReview[]> {

    const requestBody = { 'publisherId': this.authService.currentPublisherId };

    return this.http.post<AlbumReview[]>(AuthService.baseUrl + 'reviews-album/' + albumId, JSON.stringify(requestBody));

  }

  getTrackReview(trackId: number): Observable<TrackReview> {

    const requestBody = { 'customerId': this.authService.currentCustomerId };

    return this.http.post<TrackReview>(AuthService.baseUrl + 'track-review/' + trackId, JSON.stringify(requestBody));

  }

  getAlbumReview(albumId: number): Observable<AlbumReview> {

    const requestBody = { 'customerId': this.authService.currentCustomerId };

    return this.http.post<AlbumReview>(AuthService.baseUrl + 'album-review/' + albumId, JSON.stringify(requestBody));

  }

}
