import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { Track } from '../../shared/models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  shoppingCart: number[] = [];
  selectedTrack: Track;

  constructor(public http: HttpClient, public authService: AuthService) { }

  getAllAvailableTracks(): Observable<Track[]> {

    return this.http.get<Track[]>(AuthService.baseUrl + 'store-tracks-all');

  }

  getRecommendedTracks(): Observable<Track[]> {

    const favoriteGenre = this.authService.currentCustomer.customerDetail.favoriteGenre;

    return this.http.get<Track[]>(AuthService.baseUrl + 'tracks-recommended/' + favoriteGenre);

  }

  getATrack(trackId: number): Observable<Track> {

    const requestBody = {};
    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post<Track>(AuthService.baseUrl + 'track/' + trackId.toString(), JSON.stringify(requestBody));

  }

  publishTrack(requestBody: Object): Observable<number> {

    requestBody['publisherId'] = this.authService.currentPublisherId;

    return this.http.post<number>(AuthService.baseUrl + 'publish-track', JSON.stringify(requestBody));

  }

  purchaseTrack(requestBody: Object): Observable<boolean> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post<boolean>(AuthService.baseUrl + 'purchase-track', JSON.stringify(requestBody));

  }

  getOwnedTracks(): Observable<Track[]> {

    const requestBody = {};
    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post<Track[]>(AuthService.baseUrl + 'purchased-tracks', JSON.stringify(requestBody));

  }

  getPublishedTracks(): Observable<Track[]> {

    const requestBody = {};
    requestBody['publisherId'] = this.authService.currentPublisherId;

    return this.http.post<Track[]>(AuthService.baseUrl + 'published-tracks', JSON.stringify(requestBody));

  }

}
