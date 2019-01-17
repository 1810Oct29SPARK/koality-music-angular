import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { Album } from 'src/app/shared/models/album';
import { Track } from 'src/app/shared/models/track';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  selectedAlbum: Album;

  constructor(public http: HttpClient, public authService: AuthService) { }

  getAllAvailableAlbums(): Observable<Album[]> {

    return this.http.get<Album[]>(AuthService.baseUrl + 'store-albums-all');

  }

  getRecommendedAlbums(genre: string): Observable<Album[]> {

    return this.http.get<Album[]>(AuthService.baseUrl + 'albums-recommended/' + genre);

  }

  getPublishedAlbums(): Observable<Album[]> {

    const requestBody = { 'publisherId': this.authService.currentPublisherId };

    return this.http.post<Album[]>(AuthService.baseUrl + 'published-albums', JSON.stringify(requestBody));

  }

  getPurchasedAlbums(): Observable<Album[]> {

    const requestBody = { 'customerId': this.authService.currentCustomerId };

    return this.http.post<Album[]>(AuthService.baseUrl + 'purchased-albums', JSON.stringify(requestBody));

  }

  getAlbumTracks(albumId: number): Observable<Track[]> {

    return this.http.get<Track[]>(AuthService.baseUrl + 'album/' + albumId);

  }

  publishAlbum(requestBody: Object): Observable<any> {

    requestBody['publisherId'] = this.authService.currentPublisherId;

    return this.http.post(AuthService.baseUrl + 'publish-album', JSON.stringify(requestBody));

  }

  purchaseAlbum(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.authService.currentCustomerId;

    return this.http.post(AuthService.baseUrl + 'purchase-album', JSON.stringify(requestBody));

  }

}
